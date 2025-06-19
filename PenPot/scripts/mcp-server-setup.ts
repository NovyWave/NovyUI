#!/usr/bin/env -S deno run --allow-read --allow-write --allow-run --allow-env
/**
 * PenPot MCP Server Setup and Management
 * 
 * Sets up and manages the PenPot MCP server for automated design system creation.
 * Handles installation, configuration, and lifecycle management.
 */

interface MCPServerConfig {
  python_path: string;
  mcp_package: string;
  server_port: number;
  penpot_url: string;
  penpot_token: string;
  penpot_team_id: string;
}

class MCPServerManager {
  private config: MCPServerConfig;
  private baseDir: string;
  private venvPath: string;

  constructor() {
    this.baseDir = new URL("../", import.meta.url).pathname;
    this.venvPath = `${this.baseDir}mcp-env`;
    
    this.config = {
      python_path: "python3",
      mcp_package: "penpot-mcp==0.1.1",
      server_port: 8000,
      penpot_url: Deno.env.get("PENPOT_URL") || "https://design.penpot.app",
      penpot_token: Deno.env.get("PENPOT_TOKEN") || "",
      penpot_team_id: Deno.env.get("PENPOT_TEAM_ID") || ""
    };
  }

  async checkPython(): Promise<boolean> {
    try {
      const result = await new Deno.Command(this.config.python_path, {
        args: ["--version"],
        stdout: "piped",
        stderr: "piped"
      }).output();
      
      if (result.success) {
        const version = new TextDecoder().decode(result.stdout);
        console.log(`✅ Found Python: ${version.trim()}`);
        return true;
      }
    } catch {
      // Python not found
    }

    console.log("❌ Python 3 not found. Please install Python 3.8+");
    return false;
  }

  async setupVirtualEnvironment(): Promise<void> {
    console.log("🐍 Setting up Python virtual environment for MCP server...");

    // Create virtual environment
    const venvResult = await new Deno.Command(this.config.python_path, {
      args: ["-m", "venv", this.venvPath],
      stdout: "piped",
      stderr: "piped"
    }).output();

    if (!venvResult.success) {
      const error = new TextDecoder().decode(venvResult.stderr);
      throw new Error(`Failed to create virtual environment: ${error}`);
    }

    console.log("✅ Virtual environment created");

    // Install penpot-mcp
    const pipPath = Deno.build.os === "windows" 
      ? `${this.venvPath}\\Scripts\\pip.exe`
      : `${this.venvPath}/bin/pip`;

    console.log("📦 Installing penpot-mcp package...");
    
    const installResult = await new Deno.Command(pipPath, {
      args: ["install", this.config.mcp_package],
      stdout: "piped", 
      stderr: "piped"
    }).output();

    if (!installResult.success) {
      const error = new TextDecoder().decode(installResult.stderr);
      throw new Error(`Failed to install penpot-mcp: ${error}`);
    }

    console.log("✅ penpot-mcp installed successfully");
  }

  async createServerScript(): Promise<string> {
    const pythonPath = Deno.build.os === "windows"
      ? `${this.venvPath}\\Scripts\\python.exe`
      : `${this.venvPath}/bin/python`;

    const serverScript = `#!/usr/bin/env python3
"""
PenPot MCP Server for NovyUI Automation
"""

import os
import sys
import asyncio
from penpot_mcp import MCPServer

async def main():
    # Set environment variables
    os.environ.setdefault("PENPOT_URL", "${this.config.penpot_url}")
    os.environ.setdefault("PENPOT_TOKEN", "${this.config.penpot_token}")
    os.environ.setdefault("PENPOT_TEAM_ID", "${this.config.penpot_team_id}")
    os.environ.setdefault("MCP_PORT", "${this.config.server_port}")
    
    # Validate required environment variables
    required_vars = ["PENPOT_TOKEN", "PENPOT_TEAM_ID"]
    missing_vars = [var for var in required_vars if not os.environ.get(var)]
    
    if missing_vars:
        print(f"❌ Missing required environment variables: {', '.join(missing_vars)}")
        print("Please set these in your .env file or environment")
        sys.exit(1)
    
    print("🚀 Starting PenPot MCP Server...")
    print(f"   URL: {os.environ['PENPOT_URL']}")
    print(f"   Port: {os.environ['MCP_PORT']}")
    print(f"   Team ID: {os.environ['PENPOT_TEAM_ID']}")
    
    # Start MCP server
    server = MCPServer()
    await server.start()

if __name__ == "__main__":
    asyncio.run(main())
`;

    const scriptPath = `${this.baseDir}mcp-server.py`;
    await Deno.writeTextFile(scriptPath, serverScript);
    
    // Make executable on Unix systems
    if (Deno.build.os !== "windows") {
      await Deno.chmod(scriptPath, 0o755);
    }

    console.log(`✅ Server script created: ${scriptPath}`);
    return scriptPath;
  }

  async startServer(): Promise<Deno.ChildProcess> {
    console.log("🚀 Starting PenPot MCP server...");

    const pythonPath = Deno.build.os === "windows"
      ? `${this.venvPath}\\Scripts\\python.exe`
      : `${this.venvPath}/bin/python`;

    const serverScript = `${this.baseDir}mcp-server.py`;

    const process = new Deno.Command(pythonPath, {
      args: [serverScript],
      env: {
        ...Deno.env.toObject(),
        PENPOT_URL: this.config.penpot_url,
        PENPOT_TOKEN: this.config.penpot_token,
        PENPOT_TEAM_ID: this.config.penpot_team_id,
        MCP_PORT: this.config.server_port.toString()
      },
      stdout: "piped",
      stderr: "piped"
    }).spawn();

    // Wait a moment for server to start
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Test server health
    try {
      const response = await fetch(`http://localhost:${this.config.server_port}/health`);
      if (response.ok) {
        console.log("✅ MCP server started successfully");
      } else {
        console.log("⚠️  MCP server started but health check failed");
      }
    } catch {
      console.log("⚠️  MCP server may still be starting...");
    }

    return process;
  }

  async testConnection(): Promise<boolean> {
    try {
      const response = await fetch(`http://localhost:${this.config.server_port}/health`);
      return response.ok;
    } catch {
      return false;
    }
  }

  async stopServer(): Promise<void> {
    console.log("🛑 Stopping MCP server...");
    
    try {
      await fetch(`http://localhost:${this.config.server_port}/shutdown`, {
        method: "POST"
      });
      console.log("✅ MCP server stopped");
    } catch {
      console.log("⚠️  Could not gracefully stop server");
    }
  }

  async getServerStatus(): Promise<object> {
    try {
      const response = await fetch(`http://localhost:${this.config.server_port}/status`);
      if (response.ok) {
        return await response.json();
      }
    } catch {
      // Server not running
    }
    
    return { status: "not_running" };
  }

  async validateConfiguration(): Promise<string[]> {
    const errors: string[] = [];

    if (!this.config.penpot_token) {
      errors.push("PENPOT_TOKEN is required");
    }

    if (!this.config.penpot_team_id) {
      errors.push("PENPOT_TEAM_ID is required");
    }

    if (!await this.checkPython()) {
      errors.push("Python 3.8+ is required");
    }

    return errors;
  }

  async fullSetup(): Promise<void> {
    console.log("🔧 Setting up PenPot MCP server environment...");

    // Validate configuration
    const errors = await this.validateConfiguration();
    if (errors.length > 0) {
      console.log("❌ Configuration errors:");
      for (const error of errors) {
        console.log(`   - ${error}`);
      }
      throw new Error("Configuration validation failed");
    }

    // Setup virtual environment and install packages
    await this.setupVirtualEnvironment();

    // Create server script
    await this.createServerScript();

    // Create management scripts
    await this.createManagementScripts();

    console.log("✅ MCP server setup completed!");
    console.log("\n📋 Next steps:");
    console.log("   1. Start server: deno run --allow-all mcp-server-setup.ts start");
    console.log("   2. Test automation: deno run --allow-all penpot-automation.ts full");
  }

  async createManagementScripts(): Promise<void> {
    // Create start script
    const startScript = `#!/usr/bin/env -S deno run --allow-all
import { MCPServerManager } from "./mcp-server-setup.ts";

const manager = new MCPServerManager();
const process = await manager.startServer();

// Keep process running
await process.status;
`;

    await Deno.writeTextFile(`${this.baseDir}scripts/start-mcp.ts`, startScript);

    // Create status script  
    const statusScript = `#!/usr/bin/env -S deno run --allow-net
import { MCPServerManager } from "./mcp-server-setup.ts";

const manager = new MCPServerManager();
const status = await manager.getServerStatus();
console.log("MCP Server Status:", status);
`;

    await Deno.writeTextFile(`${this.baseDir}scripts/mcp-status.ts`, statusScript);

    console.log("✅ Management scripts created");
  }
}

// CLI interface
async function main() {
  const command = Deno.args[0] || "setup";
  const manager = new MCPServerManager();

  try {
    switch (command) {
      case "setup":
        await manager.fullSetup();
        break;

      case "start":
        const process = await manager.startServer();
        console.log("🔄 Server running... Press Ctrl+C to stop");
        
        // Handle graceful shutdown
        Deno.addSignalListener("SIGINT", async () => {
          console.log("\n🛑 Shutting down...");
          await manager.stopServer();
          process.kill();
          Deno.exit(0);
        });
        
        await process.status;
        break;

      case "stop":
        await manager.stopServer();
        break;

      case "status":
        const status = await manager.getServerStatus();
        console.log("MCP Server Status:", JSON.stringify(status, null, 2));
        break;

      case "test":
        const isRunning = await manager.testConnection();
        console.log(isRunning ? "✅ MCP server is running" : "❌ MCP server is not running");
        break;

      default:
        console.log("Usage: deno run --allow-all mcp-server-setup.ts [command]");
        console.log("");
        console.log("Commands:");
        console.log("  setup  - Full MCP server setup");
        console.log("  start  - Start MCP server");
        console.log("  stop   - Stop MCP server");
        console.log("  status - Check server status");
        console.log("  test   - Test server connection");
    }
  } catch (error) {
    console.error("❌ Operation failed:", error);
    Deno.exit(1);
  }
}

export { MCPServerManager };

if (import.meta.main) {
  await main();
}