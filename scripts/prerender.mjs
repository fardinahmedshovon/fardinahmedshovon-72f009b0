import { createServer } from "vite";
import { renderToString } from "react-dom/server";
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import React from "react";
import { HelmetProvider } from "react-helmet-async";

async function main() {
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
    optimizeDeps: { noDiscovery: true },
  });

  const { default: Index } = await vite.ssrLoadModule("/src/pages/Index.tsx");

  const helmetContext = {};
  const appHtml = renderToString(
    React.createElement(
      HelmetProvider,
      { context: helmetContext },
      React.createElement(Index),
    ),
  );

  await vite.close();

  const cleanedHtml = appHtml.replace(/^(?:<link[^>]*>)+/, "");

  const distIndexPath = path.resolve("dist/index.html");
  let html = readFileSync(distIndexPath, "utf-8");
  html = html.replace('<div id="root"></div>', `<div id="root">${cleanedHtml}</div>`);
  writeFileSync(distIndexPath, html);
  console.log("Prerendered dist/index.html —", cleanedHtml.length, "chars injected into #root");
}

main().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});
