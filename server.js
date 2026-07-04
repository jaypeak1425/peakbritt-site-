const http = require("http");
const fs = require("fs");
const path = require("path");

const port = process.env.PORT || 3000;
const types = { ".html":"text/html", ".css":"text/css", ".js":"text/javascript", ".svg":"image/svg+xml", ".ico":"image/x-icon", ".png":"image/png", ".jpg":"image/jpeg", ".woff2":"font/woff2" };

http.createServer((req, res) => {
  let rel = decodeURIComponent(req.url.split("?")[0]);
  if (rel === "/" || rel === "") rel = "/index.html";
  const fp = path.join(__dirname, path.normalize(rel).replace(/^(\.\.[\/\\])+/, ""));
  fs.readFile(fp, (err, data) => {
    if (err) {
      // SPA-style fallback: serve the homepage for unknown paths
      return fs.readFile(path.join(__dirname, "index.html"), (e, home) => {
        res.writeHead(e ? 404 : 200, { "Content-Type": "text/html" });
        res.end(e ? "Not found" : home);
      });
    }
    res.writeHead(200, { "Content-Type": types[path.extname(fp)] || "application/octet-stream" });
    res.end(data);
  });
}).listen(port, () => console.log("PeakBritt site running on port " + port));
