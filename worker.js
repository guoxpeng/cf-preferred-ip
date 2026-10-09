export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/api") {
      const data = {
        telecom: ["104.21.58.45", "104.21.73.18", "172.67.144.1", "104.18.45.22", "104.19.214.107", "172.64.32.1"],
        domains: ["yg1.ygkkk.dpdns.org", "yg2.ygkkk.dpdns.org", "yg3.ygkkk.dpdns.org"],
        vless: {
          address: "vless-proxy.guo527029137.workers.dev",
          port: 443,
          uuid: "902ac205-ed30-47d4-95ce-b34954316ec8"
        }
      };
      return new Response(JSON.stringify(data, null, 2), {
        headers: { "Content-Type": "application/json; charset=utf-8" }
      });
    }
    const ips = [
      ["104.21.58.45", "CF官方 电信优选"],
      ["104.21.73.18", "CF官方 电信优选"],
      ["172.67.144.1", "CF官方 电信优选"],
      ["104.18.45.22", "CF官方 电信优选"],
      ["104.19.214.107", "CF官方 电信优选"],
      ["172.64.32.1", "CF官方 电信优选"]
    ];
    const list = ips.map(([ip, desc]) => `<div class="card"><span class="ip">${ip}</span> <span class="desc">${desc} :443</span></div>`).join("");
    const html = "<!DOCTYPE html><html lang=\"zh-CN\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><title>CF优选IP - 云南电信</title><style>body{font-family:system-ui;max-width:600px;margin:40px auto;padding:0 20px;background:#f5f5f5}.card{background:#fff;padding:20px;border-radius:8px;margin:10px 0}.ip{font-family:monospace;font-size:18px;color:#06c}.desc{color:#666;font-size:14px}code{background:#eee;padding:2px 6px;border-radius:4px}</style></head><body><h1>CF 优选 IP（云南电信）</h1><div class=\"card\"><h3>使用方法</h3><p>地址填下方任一优选IP，端口443，SNI填 <code>vless-proxy.guo527029137.workers.dev</code>，UUID填 <code>902ac205-ed30-47d4-95ce-b34954316ec8</code>，传输 ws+tls。只改服务器地址，SNI保持原域名！</p></div>" + list + "<div class=\"card\"><h3>优选域名</h3><p><code>yg1.ygkkk.dpdns.org</code></p><p><code>yg2.ygkkk.dpdns.org</code></p></div><div class=\"card\"><p><a href=\"/api\">JSON API</a></p></div></body></html>";
    return new Response(html, {
      headers: { "Content-Type": "text/html; charset=utf-8" }
    });
  }
};
