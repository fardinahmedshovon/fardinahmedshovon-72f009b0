import { createServer } from "vite";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import React from "react";
import { HelmetProvider } from "react-helmet-async";

function renderRoute(App, location) {
  const helmetContext = {};

  const appHtml = renderToString(
    React.createElement(
      HelmetProvider,
      { context: helmetContext },
      React.createElement(
        StaticRouter,
        { location },
        React.createElement(App),
      ),
    ),
  );

  return appHtml.replace(/^(?:<link[^>]*>)+/, "");
}

function injectAppHtml(template, appHtml) {
  const root = '<div id="root"></div>';

  if (!template.includes(root)) {
    throw new Error("Could not find empty #root element in dist/index.html");
  }

  return template.replace(root, `<div id="root">${appHtml}</div>`);
}

function applyNotFoundMeta(html) {
  return html
    .replace(
      /<title>.*?<\/title>/,
      "<title>Page Not Found — Fardin Ahmed Shovon</title>",
    )
    .replace(
      /<meta name="description" content="[^"]*" \/>/,
      '<meta name="description" content="The requested page could not be found on Fardin Ahmed Shovon’s portfolio." />',
    )
    .replace(
      /<meta name="robots" content="[^"]*" \/>/,
      '<meta name="robots" content="noindex, follow" />',
    )
    .replace(
      /<link rel="canonical" href="[^"]*" \/>/,
      '<link rel="canonical" href="https://shovon.iam.bd/404" />',
    );
}

async function main() {
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
    optimizeDeps: { noDiscovery: true },
  });

  const { default: App } = await vite.ssrLoadModule("/src/App.tsx");
  const indexHtml = renderRoute(App, "/");
  const notFoundHtml = renderRoute(App, "/404");

  await vite.close();

  const distIndexPath = path.resolve("dist/index.html");
  const distNotFoundPath = path.resolve("dist/404.html");
  const template = readFileSync(distIndexPath, "utf-8");

  writeFileSync(distIndexPath, injectAppHtml(template, indexHtml));
  writeFileSync(distNotFoundPath, applyNotFoundMeta(injectAppHtml(template, notFoundHtml)));

  console.log("Prerendered dist/index.html —", indexHtml.length, "chars injected into #root");
  console.log("Prerendered dist/404.html —", notFoundHtml.length, "chars injected into #root");
}

main().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});
