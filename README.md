# Offpeak

Find jobs closer to home. Published by Vicente Surraco.

Offpeak searches US job listings by driving commute, seniority, and pay. It returns listing details and employer application links, and can calculate a selected job site's driving time. Connect an Offpeak account, then ask “Find jobs using my Offpeak search.” The assistant retrieves your account filters before asking for missing details. Deliberate signed-in website search changes save automatically; named saved searches remain separate and assistant search overrides are temporary. You can also bookmark jobs and save searches with optional email.

## Connect

Use this URL in an assistant that supports remote Streamable HTTP MCP:

```text
https://offpeak.fyi/mcp
```

Public search, listing details, and supplied-origin commute tools need no account. Account tools open an OAuth connection flow where you sign in and approve specific permissions. They do not require an API key. You can revoke a connection in your [Offpeak profile](https://offpeak.fyi/profile); signing out of the website does not revoke an existing assistant connection. Email for a saved search is sent once the account email is verified.

For Cursor, use `https://offpeak.fyi/mcp?auth=required`. This starts OAuth when the connection opens, avoiding clients that reconnect anonymously after an account tool asks for sign-in. The root `mcp.json` uses this mode for Cursor marketplace installations (including Grok Bot). The ordinary `/mcp` URL remains available for guest access and clients that support signing in later. Both URLs use the same OAuth resource and permissions. No API token needs to be copied into configuration.

The integration files support portable Agent Plugins, Claude Code, and Gemini CLI, with drafts prepared for Grok Bot and Grok Build. They reference the hosted service and contain no application source or credentials. Grok Bot supports a custom Remote HTTPS MCP connection; use the Offpeak URL above. Grok Build accepts the Claude plugin adapter. Marketplace approval is separate from direct client connections and tests. The repository package also includes sample VS Code, Windsurf, OpenCode, and Pi remote configurations under `examples/`; merge the relevant example into your own MCP settings rather than replacing existing connections. In OpenCode, `opencode mcp auth offpeak` starts account OAuth when needed. In Pi, copy the Pi example into its MCP settings and use `pi mcp login offpeak` for account features; `pi/` contains an optional unpublished package that registers the same service.

For Grok Build, open `/mcps`, select the Offpeak plugin server, and press `i` to sign in through the browser before using account tools. For Gemini CLI, run `gemini extensions install https://github.com/vicentesurraco/offpeak-mcp` and use `/mcp auth offpeak` if an account tool asks you to connect. For Claude Code, run `/plugin marketplace add vicentesurraco/offpeak-mcp`, then `/plugin install offpeak@offpeak`; the same server URL can also be added as a custom connector in Claude's settings. Marketplace listings are separate from these direct connection methods.

## Try it

- Find senior software engineer jobs paying at least $150,000 within a 30-minute drive of San Francisco.
- Open a returned job and show its description and application link.
- Calculate the drive to that job's matching location.
- Connect my Offpeak account, save this search, and bookmark a selected job.
- Save this search and email me new matching jobs.

Listings may change or expire. Check the current employer listing before applying. Offpeak provides application links; it does not submit applications or support transit routing.

## Privacy and support

Setup instructions: [assistant guide](https://offpeak.fyi/mcp-guide). For help, use [support](https://offpeak.fyi/support); the [terms of use](https://offpeak.fyi/terms) cover the hosted service.

See [Offpeak's privacy policy](https://offpeak.fyi/privacy) for account data, saved locations, OAuth permissions, retention, and deletion requests. Contact [Vicente Surraco](mailto:vicentesurraco@gmail.com) for support. Share error messages and steps to reproduce; keep passwords, access tokens, and precise home addresses out of support reports.

## License

The integration files in this repository (manifests, sample configurations and the Pi adapter) are released under the [MIT License](LICENSE). The Offpeak service, website, brand and job data are not covered by it; the [terms of use](https://offpeak.fyi/terms) govern their use.
