#!/usr/bin/env -S deno run --allow-read --allow-write --allow-net --allow-env
/**
 * Hybrid Session + Token Authentication
 * 
 * Strategy:
 * 1. Use access token to validate and get any session cookies
 * 2. Extract session data from response headers
 * 3. Use session cookies for subsequent API calls
 * 4. Fallback to token if session expires
 */

interface SessionData {
  cookies: Record<string, string>;
  authToken?: string;
  sessionId?: string;
  csrfToken?: string;
}

class HybridPenPotClient {
  private apiUrl: string;
  private accessToken: string;
  private teamId: string;
  private session: SessionData;
  
  constructor(apiUrl: string, accessToken: string, teamId: string) {
    this.apiUrl = apiUrl;
    this.accessToken = accessToken;
    this.teamId = teamId;
    this.session = { cookies: {} };
  }

  private createHeaders(includeAuth = true): Record<string, string> {
    const headers: Record<string, string> = {
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept': 'application/json, application/transit+json, */*',
      'Accept-Language': 'en-US,en;q=0.9',
      'Accept-Encoding': 'gzip, deflate, br',
      'Content-Type': 'application/json',
      'Origin': 'https://design.penpot.app',
      'Referer': 'https://design.penpot.app/',
      'Sec-Ch-Ua': '"Not_A Brand";v="8", "Chromium";v="120"',
      'Sec-Ch-Ua-Mobile': '?0',
      'Sec-Ch-Ua-Platform': '"Linux"',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'DNT': '1',
      'Connection': 'keep-alive',
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache'
    };

    if (includeAuth && this.accessToken) {
      headers['Authorization'] = `Token ${this.accessToken}`;
    }

    // Add session cookies if available
    const cookieString = this.formatCookies();
    if (cookieString) {
      headers['Cookie'] = cookieString;
    }

    return headers;
  }

  private formatCookies(): string {
    return Object.entries(this.session.cookies)
      .map(([key, value]) => `${key}=${value}`)
      .join('; ');
  }

  private extractSessionData(response: Response): void {
    // Extract cookies from Set-Cookie headers
    const setCookieHeaders = response.headers.getSetCookie?.() || [];
    
    console.log(`🍪 Received ${setCookieHeaders.length} cookie headers`);
    
    for (const header of setCookieHeaders) {
      const [cookieStr] = header.split(';');
      const [key, value] = cookieStr.split('=');
      if (key && value) {
        this.session.cookies[key.trim()] = value.trim();
        console.log(`   Set cookie: ${key.trim()}`);
        
        // Special handling for auth-related cookies
        if (key.trim() === 'auth-token') {
          this.session.authToken = value.trim();
          console.log(`   🔑 Found auth-token!`);
        }
        if (key.trim().includes('session')) {
          this.session.sessionId = value.trim();
          console.log(`   📝 Found session ID!`);
        }
      }
    }

    // Also check for CSRF tokens or other auth data in response headers
    const csrfToken = response.headers.get('X-CSRF-Token') || response.headers.get('X-Xsrf-Token');
    if (csrfToken) {
      this.session.csrfToken = csrfToken;
      console.log(`   🛡️ Found CSRF token!`);
    }
  }

  async tokenValidationRequest(): Promise<{ success: boolean; profile?: any }> {
    console.log('\n🔍 Step 1: Using access token to validate and extract session data...');
    
    try {
      const url = `${this.apiUrl}/rpc/command/get-profile`;
      console.log(`🔗 GET ${url}`);
      console.log(`🔑 Using token: ${this.accessToken.substring(0, 20)}...`);

      const response = await fetch(url, {
        method: 'GET',
        headers: this.createHeaders(true) // Include token
      });

      console.log(`📊 Response: ${response.status} ${response.statusText}`);

      // IMPORTANT: Extract session data regardless of success/failure
      this.extractSessionData(response);

      if (response.status === 403 || response.status === 401) {
        const body = await response.text();
        if (body.includes('cloudflare')) {
          console.log('❌ Cloudflare challenge detected');
          return { success: false };
        }
      }

      if (response.ok) {
        const profile = await response.json();
        console.log(`✅ Token validation successful!`);
        console.log(`👤 User: ${profile.fullname || profile.email}`);
        return { success: true, profile };
      } else {
        console.log(`⚠️ Token validation failed: ${response.status}`);
        return { success: false };
      }

    } catch (error) {
      console.log(`❌ Token validation error: ${error.message}`);
      return { success: false };
    }
  }

  async sessionBasedRequest(endpoint: string, method = 'GET', data?: any): Promise<any> {
    console.log(`\n🍪 Step 2: Using session cookies for: ${method} ${endpoint}`);
    
    const url = `${this.apiUrl}${endpoint}`;
    
    // Use session cookies but NO token (to test pure session auth)
    const headers = this.createHeaders(false); // false = no token
    
    console.log(`🔗 ${method} ${url}`);
    console.log(`🍪 Using cookies: ${Object.keys(this.session.cookies).join(', ')}`);
    
    try {
      const response = await fetch(url, {
        method,
        headers,
        body: data ? JSON.stringify(data) : undefined,
      });

      console.log(`📊 Response: ${response.status} ${response.statusText}`);

      if (response.ok) {
        const result = await response.json();
        console.log(`✅ Session request successful!`);
        return result;
      } else {
        const errorText = await response.text();
        console.log(`❌ Session request failed: ${errorText.substring(0, 200)}`);
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }

    } catch (error) {
      console.log(`❌ Session request error: ${error.message}`);
      throw error;
    }
  }

  async hybridRequest(endpoint: string, method = 'GET', data?: any): Promise<any> {
    console.log(`\n🔄 Step 3: Hybrid request (session + token fallback): ${method} ${endpoint}`);
    
    // First try session-only
    try {
      return await this.sessionBasedRequest(endpoint, method, data);
    } catch (sessionError) {
      console.log(`⚠️ Session request failed, trying token fallback...`);
      
      // Fallback to token-based request
      const url = `${this.apiUrl}${endpoint}`;
      const headers = this.createHeaders(true); // true = include token
      
      const response = await fetch(url, {
        method,
        headers,
        body: data ? JSON.stringify(data) : undefined,
      });

      if (response.ok) {
        const result = await response.json();
        console.log(`✅ Token fallback successful!`);
        // Update session data from this response too
        this.extractSessionData(response);
        return result;
      } else {
        const errorText = await response.text();
        throw new Error(`Both session and token failed: ${errorText}`);
      }
    }
  }

  async testHybridApproach(): Promise<boolean> {
    console.log('🔬 Testing Hybrid Session + Token Approach\n');

    try {
      // Step 1: Token validation to get initial session
      const tokenResult = await this.tokenValidationRequest();
      
      if (!tokenResult.success) {
        console.log('❌ Cannot proceed - token validation failed');
        return false;
      }

      // Step 2: Test session-only requests
      console.log(`\n🧪 Testing session-based requests (${Object.keys(this.session.cookies).length} cookies available):`);
      
      if (Object.keys(this.session.cookies).length === 0) {
        console.log('⚠️ No session cookies extracted, skipping session tests');
      } else {
        try {
          await this.sessionBasedRequest('/rpc/command/get-teams');
          console.log('✅ Session-only requests work!');
        } catch (error) {
          console.log('❌ Session-only requests failed');
        }
      }

      // Step 3: Test hybrid requests
      const teams = await this.hybridRequest('/rpc/command/get-teams');
      console.log(`✅ Hybrid approach works! Found ${teams.length} teams`);

      const projects = await this.hybridRequest(`/rpc/command/get-projects?team-id=${this.teamId}`);
      console.log(`✅ Project listing works! Found ${projects.length} projects`);

      // Step 4: Test project creation
      const testProject = await this.hybridRequest('/rpc/command/create-project', 'POST', {
        name: `Hybrid-Test-${Date.now()}`,
        'team-id': this.teamId,
        description: 'Created via hybrid session+token approach'
      });
      console.log(`✅ Project creation works! Created: ${testProject.id}`);

      console.log('\n🎉 Hybrid Session + Token Approach: SUCCESS!');
      return true;

    } catch (error) {
      console.log(`\n❌ Hybrid approach failed: ${error.message}`);
      return false;
    }
  }
}

// Test the hybrid approach
async function testHybridAuthentication() {
  const accessToken = Deno.env.get('PENPOT_TOKEN');
  const teamId = Deno.env.get('PENPOT_TEAM_ID');

  if (!accessToken || !teamId) {
    console.error('❌ Missing PENPOT_TOKEN or PENPOT_TEAM_ID environment variables');
    Deno.exit(1);
  }

  const client = new HybridPenPotClient(
    'https://design.penpot.app/api',
    accessToken,
    teamId
  );

  const success = await client.testHybridApproach();
  return success;
}

if (import.meta.main) {
  const success = await testHybridAuthentication();
  Deno.exit(success ? 0 : 1);
}