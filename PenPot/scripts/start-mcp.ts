#!/usr/bin/env -S deno run --allow-all
import { MCPServerManager } from "./mcp-server-setup.ts";

const manager = new MCPServerManager();
const process = await manager.startServer();

// Keep process running
await process.status;
