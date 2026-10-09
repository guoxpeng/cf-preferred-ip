// CF 优选 IP 服务 - 针对云南电信优化
// 绑定域名: ip.laoguo.eu.org

const PREFERRED_IPS = {
  // 云南电信优选 - 落地新加坡/日本/香港的 CF 官方 IP
  telecom: [
    { ip: "104.16.0.0", desc: "CF官方 - 电信优选", port: "443" },
    { ip: "104.17.0.0", desc: "CF官方 - 电信优选", port: "443" },
    { ip: "104.18.0.0", desc: "CF官方 - 电信优选", port: "443" },
    { ip: "104.19.0.0", desc: "CF官方 - 电信优选", port: "443" },
    { ip: "104.20.0.0", desc: "CF官方 - 电信优选", port: "443" },
    { ip: "104.21.0.0", desc: "CF官方 - 电信优选", port: "443" },
  ],
  // 优选域名 (ygkkk)
  domains: [
    "yg1.ygkkk.dpdns.org",
    "yg2.ygkkk.dpdns.org",
    "yg3.ygkkk.dpdns.org",
  ],
  // VLESS 节点信息
  vless: {
    address: "vless-proxy.guo527029137.workers.dev",
    port: 443,
    uuid: "902ac205-ed30-47d4-95ce-b34954316ec8",
    note: "客户端地址填优选IP，SNI/Host 填上方 address"
  }
};

export default {
  async fetch(request) {
    const url = new URL(request.url);
    
    if (url.pathname === "/api") {
      return new Response(JSON.stringify(PREFERRED_IPS, null, 2), {
        headers: { "Content-Type": "application/json; charset=utf-8" }
      });
    }
    
    // 主页 - 简单 HTML
    const html = `<!DOCTYPE html>
<html lang="zh-CN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>CF优选IP - 云南电信</title>
<style>body{font-family:system-ui;max-width:600px;margin:40px auto;padding:0 20px;background:#f5f5f5}
.card{background:#fff;padding:20px;border-radius:8px;margin:10px 0;box-shadow:0 2px 4px rgba(0,0,0,.1)}
.ip{font-family:monospace;font-size:18px;color:#0066cc}.desc{color:#666;font-size:14px}
h1{color:#333}code{background:#eee;padding:2px 6px;border-radius:4px}</style></head>
<body>
<h1>CF 优选 IP（云南电信）</h1>
<div class="card">
<h3>使用方法</h3>
<p>VLESS 客户端配置：</p>
<p>地址：<code>填下方任一优选IP</code><br>
端口：<code>443</code><br>
SNI：<code>${PREFERRED_IPS.vless.address}</code><br>
UUID：<code>${PREFERRED_IPS.vless.uuid}</code><br>
传输：<code>ws</code> + <code>tls</code></p>
<p>只改「服务器地址」为优选IP，SNI 保持原域名！</p>
</div>
${PREFERRED_IPS.telecom.map(x => `<div class="card"><span class="ip">${x.ip}</span> <span class="desc">${x.desc} :${x.port}</span></div>`).join('')}
<div class="card"><h3>优选域名</h3>${PREFERRED_IPS.domains.map(d => `<p><code>${d}</code></p>`).join('')}</div>
<div class="card"><p><a href="/api">JSON API</a></p></div>
</body></html>`;
    
    return new Response(html, {
      headers: { "Content-Type": "text/html; charset=utf-8" }
    });
  }
};
