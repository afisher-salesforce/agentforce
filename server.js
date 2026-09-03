import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3000;
const STATIC_DIR = path.join(__dirname, "artifacts", "agentforce-workshop", "dist", "public");

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js":   "application/javascript; charset=utf-8",
  ".mjs":  "application/javascript; charset=utf-8",
  ".css":  "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png":  "image/png",
  ".jpg":  "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif":  "image/gif",
  ".svg":  "image/svg+xml",
  ".webp": "image/webp",
  ".ico":  "image/x-icon",
  ".woff": "font/woff",
  ".woff2":"font/woff2",
  ".ttf":  "font/ttf",
  ".otf":  "font/otf",
  ".map":  "application/json",
  ".txt":  "text/plain; charset=utf-8",
  ".xml":  "application/xml; charset=utf-8",
  ".webmanifest": "application/manifest+json",
};

function getMime(filePath) {
  return MIME_TYPES[path.extname(filePath).toLowerCase()] || "application/octet-stream";
}

const server = http.createServer((req, res) => {
  // Redirect HTTP to HTTPS on Heroku
  if (req.headers["x-forwarded-proto"] && req.headers["x-forwarded-proto"] !== "https") {
    res.writeHead(301, { Location: `https://${req.headers.host}${req.url}` });
    res.end();
    return;
  }

  // Strip query string for file resolution
  const urlPath = decodeURIComponent(req.url.split("?")[0]);
  const filePath = path.join(STATIC_DIR, urlPath);

  // Security: prevent directory traversal
  if (!filePath.startsWith(STATIC_DIR)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  // Try to serve the static file
  fs.stat(filePath, (err, stats) => {
    if (!err && stats.isFile()) {
      res.writeHead(200, { "Content-Type": getMime(filePath) });
      fs.createReadStream(filePath).pipe(res);
    } else {
      // SPA fallback — serve index.html for all non-file routes
      const indexPath = path.join(STATIC_DIR, "index.html");
      fs.stat(indexPath, (err2) => {
        if (err2) {
          res.writeHead(404);
          res.end("Not Found");
        } else {
          res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
          fs.createReadStream(indexPath).pipe(res);
        }
      });
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log(`__dirname: ${__dirname}`);
  console.log(`STATIC_DIR: ${STATIC_DIR}`);
  console.log(`STATIC_DIR exists: ${fs.existsSync(STATIC_DIR)}`);
  if (fs.existsSync(STATIC_DIR)) {
    console.log(`Files in STATIC_DIR: ${fs.readdirSync(STATIC_DIR).join(", ")}`);
  } else {
    // Walk up to find where dist might be
    const artDir = path.join(__dirname, "artifacts", "agentforce-workshop");
    console.log(`artifacts/agentforce-workshop exists: ${fs.existsSync(artDir)}`);
    if (fs.existsSync(artDir)) {
      console.log(`Contents: ${fs.readdirSync(artDir).join(", ")}`);
      const distDir = path.join(artDir, "dist");
      if (fs.existsSync(distDir)) {
        console.log(`dist contents: ${fs.readdirSync(distDir).join(", ")}`);
      }
    }
  }
});
