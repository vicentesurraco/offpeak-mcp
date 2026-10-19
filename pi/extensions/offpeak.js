export default function offpeak(pi) {
  pi.registerMcpServer("offpeak", {
    url: "https://offpeak.fyi/mcp",
    description: "Search US jobs by driving commute, seniority, and pay. Connect an Offpeak account for saved filters, bookmarks, and saved searches with optional email.",
    timeout: 120,
  });
}
