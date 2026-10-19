# Offpeak for Pi

Offpeak, published by Vicente Surraco. This package registers the remote Offpeak MCP service in Pi through its built-in MCP support.

This is an unpublished local draft. npm namespace ownership, license, current Pi compatibility, and real OAuth/tool testing remain pending. `private: true` prevents npm publication while submissions are paused. Remove it only when publication is authorized and these checks are complete.

## Try the local draft

Use a Pi version with `registerMcpServer` support. Install the unpacked folder with:

```sh
pi install /absolute/path/to/pi-offpeak
```

Restart Pi, then use `/mcp` to inspect the Offpeak connection. For account features, select Offpeak and sign in from that panel. Package-provided servers are registered in a session; the shell-level `pi mcp list` command sees file-configured servers, not this extension's registration.

You can also add `https://offpeak.fyi/mcp` directly to Pi's `mcp.json` without installing this package. A file-configured `offpeak` entry takes precedence over the package registration. Use `pi mcp login offpeak` for a file-configured server's OAuth sign-in.

Try asking for senior software engineer jobs within a 30-minute drive of San Francisco. Public search and supplied-origin commute tools need no account. Saved filters, bookmarks, and saved searches require an Offpeak account and scoped OAuth; saved-search email is sent once the account email is verified.

Offpeak searches US listings and provides employer application links; it does not submit applications or support transit routing.

See [privacy](https://offpeak.fyi/privacy) and contact [Vicente Surraco](mailto:vicentesurraco@gmail.com) for support.
