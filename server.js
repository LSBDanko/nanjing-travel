/* 金陵游 · 本地静态服务器
   用法：node server.js  （或双击「启动金陵游.bat」）
   作用：以 http://localhost:8765 提供网页，确保高德地图域名校验通过；
         同时监听局域网，方便手机通过电脑 IP 访问。 */
const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { exec } = require('child_process');

const ROOT = __dirname;
const PORT = 8765;
const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

// 获取本机局域网 IPv4 地址（供手机访问）
function getLanIPs() {
  const ips = [];
  const ifs = os.networkInterfaces();
  for (const name of Object.keys(ifs)) {
    for (const net of ifs[name]) {
      if (net.family === 'IPv4' && !net.internal) ips.push(net.address);
    }
  }
  return ips;
}

http.createServer((req, res) => {
  let urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
  if (urlPath === '/') urlPath = '/index.html';

  const filePath = path.normalize(path.join(ROOT, urlPath));
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('403 Forbidden');
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found');
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': TYPES[ext] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(PORT, '0.0.0.0', () => {
  console.log('金陵游运行中：');
  console.log('  电脑访问：http://localhost:' + PORT);
  const ips = getLanIPs();
  if (ips.length) {
    ips.forEach(ip => console.log('  手机访问：http://' + ip + ':' + PORT));
  } else {
    console.log('  （未检测到局域网 IP，请确认已连接 WiFi）');
  }
  console.log('关闭此窗口即停止服务。');
  exec('start http://localhost:' + PORT);
});
