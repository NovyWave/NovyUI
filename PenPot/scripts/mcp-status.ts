#!/usr/bin/env -S deno run --allow-net
import { MCPServerManager } from "./mcp-server-setup.ts";

const manager = new MCPServerManager();
const status = await manager.getServerStatus();
console.log("MCP Server Status:", status);
