#!/usr/bin/env python3
"""
PenPot MCP Server for NovyUI Automation
"""

import os
import sys
import asyncio
from penpot_mcp import MCPServer

async def main():
    # Set environment variables
    os.environ.setdefault("PENPOT_URL", "https://design.penpot.app")
    os.environ.setdefault("PENPOT_TOKEN", "eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2R0NNIn0.OjmKBiSTdTWB4vmWjuKGX6bY16YhMwdWhWRxu8R9qWwLJ5H6wnS2Ww.FQ3I1wtJWtWkKc0H.oU9MOCuVKTyQp-CiGWzY3ljrPZvfRvyMyrHDZw4sml1r6YYyA_Nyz4z1Ok11bC6mW5y4dFeE0GtFOUdJiH-EtCw7FruJIGsCkYk2wmFV1ZinWoO04ayGk1veiiGLEIsJFwgCKIPjoHY.Dds4RWqd3K1Swaf2gXz2vg")
    os.environ.setdefault("PENPOT_TEAM_ID", "fd8d4288-9979-819c-8006-5dcc7e539448")
    os.environ.setdefault("MCP_PORT", "8000")
    
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
