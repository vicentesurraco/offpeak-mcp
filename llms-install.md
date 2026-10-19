# Installing Offpeak

Offpeak is a hosted remote MCP server. There is nothing to clone, build or install, and no API key.

1. Add this entry to the MCP settings file (in Cline: `cline_mcp_settings.json`), merging it with any servers already there:

   ```json
   {
     "mcpServers": {
       "offpeak": {
         "type": "streamableHttp",
         "url": "https://offpeak.fyi/mcp"
       }
     }
   }
   ```

2. Reload the MCP servers. The server exposes 14 tools. `get_filter_options`, `resolve_location`, `search_jobs`, `get_job`, `get_jobs` and `get_commute_time` work without an account.
3. Verify it with a guest search: call `resolve_location` with `San Francisco, CA`, then `search_jobs` with that origin and a 30-minute drive.
4. Account tools (`get_filters`, `set_filters`, `get_saved_jobs`, `save_job`, `get_saved_searches`, `save_search`, `set_search_email`, `delete_saved_search`) return HTTP 401 with an OAuth challenge until the user signs in. The client opens the Offpeak sign-in and consent page in a browser; never ask the user for a password or token.

Only driving commutes in the US are supported. Offpeak does not submit job applications.
