export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/api") {
      const data = {
        test_from: "云南电信 (iStoreOS)",
        test_date: "2026-10-09",
        results: [
          {ip: "172.64.32.1", ping_ms: 71.2},
          {ip: "104.18.45.22", ping_ms: 73.8},
          {ip: "104.16.132.229", ping_ms: 187.3},
          {ip: "104.17.232.29", ping_ms: 186.2},
          {ip: "104.19.214.107", ping_ms: 197.6},
          {ip: "172.67.144.1", ping_ms: 239.9},
          {ip: "104.21.58.45", ping_ms: 243.8},
          {ip: "104.21.73.18", ping_ms: 252.6},
          {ip: "104.22.44.18", ping_ms: 298.5}
        ],
        vless: {
          address: "vless.laoguo.eu.org",
          port: 443,
          uuid: "902ac205-ed30-47d4-95ce-b34954316ec8"
        }
      };
      return new Response(JSON.stringify(data, null, 2), {
        headers: { "Content-Type": "application/json; charset=utf-8" }
      });
    }
    const rows = [
      ["172.64.32.1", "71ms ⭐ 最快"],
      ["104.18.45.22", "74ms ⭐"],
      ["104.16.132.229", "187ms"],
      ["104.17.232.29", "186ms"],
      ["104.19.214.107", "198ms"],
      ["172.67.144.1", "240ms"],
      ["104.21.58.45", "244ms"],
      ["104.21.73.18", "253ms"],
      ["104.22.44.18", "299ms"]
    ];
    const list = rows.map(([ip, ping]) => `<div class="card"><span class="ip">${ip}</span> <span class="desc">${ping} :443</span></div>`).join("");
    const html = "<!DOCTYPE html><html lang=\"zh-CN\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><title>CF优选IP - 云南电信实测</title><style>body{font-family:system-ui;max-width:600px;margin:40px auto;padding:0 20px;background:#f5f5f5}.card{background:#fff;padding:15px 20px;border-radius:8px;margin:10px 0}.ip{font-family:monospace;font-size:18px;color:#06c}.desc{color:#666;font-size:14px}code{background:#eee;padding:2px 6px;border-radius:4px}.note{color:#888;font-size:13px}</style></head><body><h1>CF 优选 IP（云南电信实测）</h1><p class=\"note\">2026-10-09 从云南电信家庭网络实测 ping 延迟排序</p><div class=\"card\"><h3>使用方法</h3><p>地址填下方优选IP，端口443，SNI填 <code>vless.laoguo.eu.org</code>，UUID填 <code>902ac205-ed30-47d4-95ce-b34954316ec8</code>，传输 ws+tls。或直接用动态域名 <code>cfip.laoguo.eu.org</code>（自动指向最快IP）。</p></div>" + list + "<div class=\"card\"><p><a href=\"/api\">JSON API</a></p></div></body></html>";
    return new Response(html, {
      headers: { "Content-Type": "text/html; charset=utf-8" }
    });
  }
};
