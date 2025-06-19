#!/usr/bin/env -S deno run --allow-read --allow-net --allow-env
/**
 * PenPot HTTP Client for NovyUI Migration
 * 
 * Simple HTTP client for PenPot API interactions without external dependencies.
 * Provides basic functionality for project creation and file management.
 * 
 * Usage: deno run --allow-read --allow-net --allow-env penpot-client.ts
 */

interface PenPotConfig {
  url: string;
  token: string;
  teamId: string;
}

interface PenPotProject {
  id: string;
  name: string;
  description?: string;
  teamId: string;
}

class PenPotClient {
  private config: PenPotConfig;

  constructor(config: PenPotConfig) {
    this.config = config;
  }

  private async request(
    method: string, 
    endpoint: string, 
    body?: any
  ): Promise<Response> {
    const url = `${this.config.url}/api/${endpoint}`;
    
    const headers: Record<string, string> = {
      'Authorization': `Bearer ${this.config.token}`,
      'Content-Type': 'application/json'
    };

    const options: RequestInit = {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined
    };

    try {
      const response = await fetch(url, options);
      return response;
    } catch (error) {
      throw new Error(`PenPot API request failed: ${error.message}`);
    }
  }

  async createProject(name: string, description?: string): Promise<PenPotProject> {
    const body = {
      name,
      description: description || `NovyUI Design System - ${name}`,
      teamId: this.config.teamId
    };

    const response = await this.request('POST', 'projects', body);
    
    if (!response.ok) {
      throw new Error(`Failed to create project: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  }

  async listProjects(): Promise<PenPotProject[]> {
    const response = await this.request('GET', 'projects');
    
    if (!response.ok) {
      throw new Error(`Failed to list projects: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  }

  async uploadDesignTokens(projectId: string, tokens: Record<string, any>): Promise<boolean> {
    // This would depend on PenPot's actual token import API
    // For now, this is a placeholder showing the structure
    console.log(`📤 Would upload design tokens to project ${projectId}`);
    console.log(`   Token categories: ${Object.keys(tokens).join(', ')}`);
    return true;
  }

  static fromEnv(): PenPotClient {
    const url = Deno.env.get('PENPOT_URL') || 'https://design.penpot.app';
    const token = Deno.env.get('PENPOT_TOKEN');
    const teamId = Deno.env.get('PENPOT_TEAM_ID');

    if (!token || !teamId) {
      throw new Error('PENPOT_TOKEN and PENPOT_TEAM_ID environment variables are required');
    }

    return new PenPotClient({ url, token, teamId });
  }

  async testConnection(): Promise<boolean> {
    try {
      const response = await this.request('GET', 'profile');
      return response.ok;
    } catch {
      return false;
    }
  }
}

// Configuration management
class PenPotConfigManager {
  private baseDir: string;
  private envFile: string;

  constructor() {
    this.baseDir = new URL("../", import.meta.url).pathname;
    this.envFile = `${this.baseDir}.env`;
  }

  async createEnvTemplate(): Promise<void> {
    const template = `# PenPot Configuration for NovyUI Migration
# Copy this file to .env and fill in your actual values

# PenPot Instance Settings
PENPOT_URL=https://design.penpot.app
PENPOT_TOKEN=your_penpot_access_token_here
PENPOT_TEAM_ID=your_penpot_team_id_here

# Project Settings
PROJECT_NAME=NovyUI Design System
PROJECT_DESCRIPTION=NovyUI design system migrated from MoonZoon implementation

# MoonZoon Source Settings
MOONZOON_STORYBOOK_URL=https://moonzoon-novyui-storybook.kavik.cz/
MOONZOON_SOURCE_PATH=../moonzoon-novyui
`;

    await Deno.writeTextFile(`${this.baseDir}.env.template`, template);
    console.log(`✅ Created .env.template at ${this.baseDir}.env.template`);
  }

  async validateConfig(): Promise<string[]> {
    const errors: string[] = [];
    
    if (!Deno.env.get('PENPOT_TOKEN')) {
      errors.push('PENPOT_TOKEN environment variable is required');
    }
    
    if (!Deno.env.get('PENPOT_TEAM_ID')) {
      errors.push('PENPOT_TEAM_ID environment variable is required');
    }

    return errors;
  }

  async loadEnvFile(): Promise<void> {
    try {
      const envContent = await Deno.readTextFile(this.envFile);
      const lines = envContent.split('\n');
      
      for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith('#')) {
          const [key, value] = trimmed.split('=', 2);
          if (key && value) {
            Deno.env.set(key.trim(), value.trim());
          }
        }
      }
      
      console.log(`✅ Loaded environment from ${this.envFile}`);
    } catch (error) {
      if (error instanceof Deno.errors.NotFound) {
        console.log(`⚠️  No .env file found at ${this.envFile}`);
        console.log('   Use environment variables or create .env file from template');
      } else {
        throw error;
      }
    }
  }
}

// Main execution functions
async function setupPenPotIntegration() {
  console.log("=== PenPot Integration Setup (Deno) ===");
  
  const configManager = new PenPotConfigManager();
  
  // Create environment template
  await configManager.createEnvTemplate();
  
  // Try to load existing .env file
  await configManager.loadEnvFile();
  
  // Validate configuration
  const errors = await configManager.validateConfig();
  if (errors.length > 0) {
    console.log("\n⚠️  Configuration issues found:");
    for (const error of errors) {
      console.log(`   - ${error}`);
    }
    console.log("\nPlease resolve these issues before proceeding.");
    return;
  }

  // Test connection
  try {
    const client = PenPotClient.fromEnv();
    const isConnected = await client.testConnection();
    
    if (isConnected) {
      console.log("\n✅ PenPot connection successful!");
      
      // List existing projects
      try {
        const projects = await client.listProjects();
        console.log(`\n📋 Found ${projects.length} existing projects`);
        
        if (projects.length > 0) {
          console.log("   Recent projects:");
          for (const project of projects.slice(0, 3)) {
            console.log(`   - ${project.name}`);
          }
        }
      } catch (error) {
        console.log(`\n⚠️  Could not list projects: ${error.message}`);
      }
      
    } else {
      console.log("\n❌ PenPot connection failed");
      console.log("   Please check your credentials and network connection");
    }
  } catch (error) {
    console.log(`\n❌ PenPot setup failed: ${error.message}`);
  }
  
  console.log("\n📋 Next Steps:");
  console.log("1. Configure .env file with your PenPot credentials");
  console.log("2. Run design token converter: deno run --allow-read --allow-write token-converter.ts");
  console.log("3. Run component analyzer: deno run --allow-read --allow-write component-analyzer.ts");
  console.log("4. Create PenPot project and import design tokens");
}

async function createNovyUIProject() {
  console.log("=== Creating NovyUI Design System Project ===");
  
  try {
    const client = PenPotClient.fromEnv();
    const projectName = Deno.env.get('PROJECT_NAME') || 'NovyUI Design System';
    const projectDescription = Deno.env.get('PROJECT_DESCRIPTION') || 
      'NovyUI design system migrated from MoonZoon implementation';
    
    console.log(`\n📁 Creating project: ${projectName}`);
    const project = await client.createProject(projectName, projectDescription);
    
    console.log(`✅ Project created successfully!`);
    console.log(`   Project ID: ${project.id}`);
    console.log(`   Name: ${project.name}`);
    console.log(`   Team ID: ${project.teamId}`);
    
    // Save project info for future use
    const projectInfo = {
      id: project.id,
      name: project.name,
      description: projectDescription,
      created: new Date().toISOString(),
      url: `${Deno.env.get('PENPOT_URL')}/dashboard/project/${project.id}`
    };
    
    const baseDir = new URL("../", import.meta.url).pathname;
    await Deno.writeTextFile(
      `${baseDir}penpot-project.json`, 
      JSON.stringify(projectInfo, null, 2)
    );
    
    console.log(`\n🔗 Project URL: ${projectInfo.url}`);
    console.log(`📋 Project info saved to: penpot-project.json`);
    
  } catch (error) {
    console.log(`\n❌ Failed to create project: ${error.message}`);
    console.log("   Make sure your PenPot credentials are correct");
  }
}

// CLI interface
async function main() {
  const command = Deno.args[0] || 'setup';
  
  switch (command) {
    case 'setup':
      await setupPenPotIntegration();
      break;
    case 'create-project':
      await createNovyUIProject();
      break;
    case 'test':
      try {
        const configManager = new PenPotConfigManager();
        await configManager.loadEnvFile();
        const client = PenPotClient.fromEnv();
        const isConnected = await client.testConnection();
        console.log(isConnected ? "✅ Connection successful" : "❌ Connection failed");
      } catch (error) {
        console.log(`❌ Test failed: ${error.message}`);
      }
      break;
    default:
      console.log("Usage:");
      console.log("  deno run --allow-read --allow-net --allow-env penpot-client.ts [command]");
      console.log("");
      console.log("Commands:");
      console.log("  setup          - Setup PenPot integration and test connection");
      console.log("  create-project - Create new NovyUI project in PenPot");
      console.log("  test          - Test PenPot API connection");
  }
}

if (import.meta.main) {
  await main();
}