#!/usr/bin/env -S deno run --allow-read --allow-write --allow-net --allow-env
/**
 * Enhanced PenPot Client with Proper Session Handling
 * 
 * Uses access tokens with browser-like headers and session management
 * to bypass Cloudflare protection, based on montevive/penpot-mcp approach.
 */

interface PenPotConfig {
  apiUrl: string;
  accessToken: string;
  teamId: string;
}

interface PenPotSession {
  cookies: Record<string, string>;
  headers: Record<string, string>;
  authenticated: boolean;
}

class EnhancedPenPotClient {
  private config: PenPotConfig;
  private session: PenPotSession;
  
  constructor(config: PenPotConfig) {
    this.config = config;
    this.session = {
      cookies: {},
      headers: this.createBrowserHeaders(),
      authenticated: false
    };
  }

  private createBrowserHeaders(): Record<string, string> {
    return {
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept': 'application/json, application/transit+json',
      'Accept-Language': 'en-US,en;q=0.9',
      'Accept-Encoding': 'gzip, deflate, br',
      'Origin': 'https://design.penpot.app',
      'Referer': 'https://design.penpot.app/',
      'Sec-Ch-Ua': '\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\"',
      'Sec-Ch-Ua-Mobile': '?0',
      'Sec-Ch-Ua-Platform': '\"Linux\"',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-origin',
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache'
    };
  }

  private formatCookies(): string {
    return Object.entries(this.session.cookies)
      .map(([key, value]) => `${key}=${value}`)
      .join('; ');
  }

  private parseCookies(setCookieHeaders: string[]): void {
    for (const header of setCookieHeaders) {
      const [cookieStr] = header.split(';');
      const [key, value] = cookieStr.split('=');
      if (key && value) {
        this.session.cookies[key.trim()] = value.trim();
      }
    }
  }

  private async makeRequest(method: string, endpoint: string, data?: any): Promise<any> {
    const url = `${this.config.apiUrl}${endpoint}`;
    
    // Prepare headers
    const headers: Record<string, string> = {
      ...this.session.headers,
      'Content-Type': 'application/json'
    };

    // Add authorization
    if (this.config.accessToken) {
      headers['Authorization'] = `Token ${this.config.accessToken}`;
    }

    // Add cookies
    const cookieString = this.formatCookies();
    if (cookieString) {
      headers['Cookie'] = cookieString;
    }

    console.log(`🔗 ${method} ${url}`);
    console.log(`🔑 Using token: ${this.config.accessToken.substring(0, 20)}...`);

    try {
      const response = await fetch(url, {
        method,
        headers,
        body: data ? JSON.stringify(data) : undefined,
      });

      // Handle cookies from response
      const setCookieHeaders = response.headers.getSetCookie?.() || [];
      if (setCookieHeaders.length > 0) {
        this.parseCookies(setCookieHeaders);
        console.log(`🍪 Received cookies: ${Object.keys(this.session.cookies).join(', ')}`);
      }

      console.log(`📊 Response: ${response.status} ${response.statusText}`);

      if (!response.ok) {
        const errorText = await response.text();
        console.log(`❌ Error response: ${errorText.substring(0, 500)}`);
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }

      const result = await response.json();
      return result;

    } catch (error) {
      console.error(`❌ Request failed:`, error);
      throw error;
    }
  }

  async testConnection(): Promise<boolean> {
    console.log('\n🔍 Testing PenPot API connection...');
    
    try {
      const profile = await this.makeRequest('GET', '/rpc/command/get-profile');
      console.log(`✅ Connected successfully!`);
      console.log(`👤 User: ${profile.fullname || profile.email}`);
      console.log(`🆔 ID: ${profile.id}`);
      this.session.authenticated = true;
      return true;
    } catch (error) {
      console.log(`❌ Connection failed: ${error.message}`);
      return false;
    }
  }

  async listProjects(): Promise<any[]> {
    console.log('\n📁 Fetching projects...');
    
    try {
      const projects = await this.makeRequest('GET', `/rpc/command/get-projects?team-id=${this.config.teamId}`);
      console.log(`✅ Found ${projects.length} projects`);
      return projects;
    } catch (error) {
      console.log(`❌ Failed to list projects: ${error.message}`);
      throw error;
    }
  }

  async createProject(name: string, description: string = ''): Promise<any> {
    console.log(`\n🏗️ Creating project: ${name}`);
    
    const projectData = {
      name,
      'team-id': this.config.teamId,
      ...(description && { description })
    };

    try {
      const project = await this.makeRequest('POST', '/rpc/command/create-project', projectData);
      console.log(`✅ Project created: ${project.id}`);
      return project;
    } catch (error) {
      console.log(`❌ Failed to create project: ${error.message}`);
      throw error;
    }
  }

  async validateTokenAndGetUserInfo(): Promise<any> {
    console.log('\n🔐 Validating access token...');
    
    try {
      // Test multiple endpoints to ensure token works
      const profile = await this.makeRequest('GET', '/rpc/command/get-profile');
      const teams = await this.makeRequest('GET', '/rpc/command/get-teams');
      
      console.log(`✅ Token validation successful!`);
      console.log(`👤 User: ${profile.fullname || profile.email}`);
      console.log(`🏢 Teams: ${teams.length}`);
      
      // Verify team access
      const userTeam = teams.find((team: any) => team.id === this.config.teamId);
      if (userTeam) {
        console.log(`✅ Team access confirmed: ${userTeam.name}`);
      } else {
        console.log(`⚠️ Warning: Team ${this.config.teamId} not found in user's teams`);
      }

      return { profile, teams, userTeam };
    } catch (error) {
      console.log(`❌ Token validation failed: ${error.message}`);
      throw error;
    }
  }
}

// Test the enhanced client
async function testEnhancedClient() {
  console.log('🚀 Testing Enhanced PenPot Client with Access Token\n');
  
  const config: PenPotConfig = {
    apiUrl: 'https://design.penpot.app/api',
    accessToken: Deno.env.get('PENPOT_TOKEN') || '',
    teamId: Deno.env.get('PENPOT_TEAM_ID') || ''
  };

  if (!config.accessToken || !config.teamId) {
    console.error('❌ Missing PENPOT_TOKEN or PENPOT_TEAM_ID environment variables');
    Deno.exit(1);
  }

  const client = new EnhancedPenPotClient(config);

  try {
    // Step 1: Test basic connection
    const connected = await client.testConnection();
    if (!connected) {
      throw new Error('Failed to establish connection');
    }

    // Step 2: Validate token and get user info
    await client.validateTokenAndGetUserInfo();

    // Step 3: List existing projects
    const projects = await client.listProjects();
    console.log(`\n📋 Existing projects:`);
    projects.forEach((project: any, index: number) => {
      console.log(`  ${index + 1}. ${project.name} (${project.id})`);
    });

    // Step 4: Test project creation
    const testProjectName = `NovyUI-Test-${Date.now()}`;
    const newProject = await client.createProject(
      testProjectName, 
      'Test project created by NovyUI automation'
    );

    console.log(`\n🎉 Enhanced Access Token Method: SUCCESS!`);
    console.log(`   ✅ Connection established`);
    console.log(`   ✅ Token validation passed`);
    console.log(`   ✅ Project operations working`);
    console.log(`   🆔 Test project ID: ${newProject.id}`);

    return true;

  } catch (error) {
    console.log(`\n❌ Enhanced Access Token Method: FAILED`);
    console.log(`   Error: ${error.message}`);
    return false;
  }
}

// CLI interface
if (import.meta.main) {
  const success = await testEnhancedClient();
  Deno.exit(success ? 0 : 1);
}