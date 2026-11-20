#!/usr/bin/env node
// Genera .env.production.local con la config web de Firebase del ambiente pedido.
// La config no se versiona: se lee del proyecto al construir.
//   node scripts/firebase-env.mjs desa|prd
// Requiere estar logueado (firebase login) o GOOGLE_APPLICATION_CREDENTIALS en CI.
// Si el proyecto tiene más de una app web, definí FIREBASE_WEB_APP_ID.
import { execFileSync } from "node:child_process";
import { writeFileSync } from "node:fs";

const alias = process.argv[2];
if (!["desa", "prd"].includes(alias)) {
  console.error("Uso: node scripts/firebase-env.mjs desa|prd");
  process.exit(1);
}

const args = ["firebase-tools", "apps:sdkconfig", "WEB"];
if (process.env.FIREBASE_WEB_APP_ID) args.push(process.env.FIREBASE_WEB_APP_ID);
args.push("--project", alias, "--json");

const out = execFileSync("npx", ["--yes", ...args], { encoding: "utf8" });
const cfg = JSON.parse(out).result?.sdkConfig;
if (!cfg?.apiKey) {
  console.error("No se pudo leer la config web de Firebase. ¿Hay una app web en el proyecto?");
  process.exit(1);
}

const lines = {
  NEXT_PUBLIC_FIREBASE_API_KEY: cfg.apiKey,
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: cfg.authDomain,
  NEXT_PUBLIC_FIREBASE_PROJECT_ID: cfg.projectId,
  NEXT_PUBLIC_FIREBASE_APP_ID: cfg.appId,
  NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: cfg.measurementId ?? "",
};
writeFileSync(
  ".env.production.local",
  Object.entries(lines)
    .map(([k, v]) => `${k}=${v}`)
    .join("\n") + "\n",
);
// En GitHub Actions, enmascarar los valores en los logs.
if (process.env.GITHUB_ACTIONS) for (const v of Object.values(lines)) if (v) console.log(`::add-mask::${v}`);
console.log(`Config web de ${cfg.projectId} escrita en .env.production.local`);
