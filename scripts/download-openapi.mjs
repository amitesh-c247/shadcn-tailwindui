import fs from "node:fs/promises";

const DEFAULT_OPENAPI_URL = "http://localhost:3001/documentation/json";
const OPENAPI_URL = process.env.OPENAPI_URL || DEFAULT_OPENAPI_URL;

async function main() {
  const res = await fetch(OPENAPI_URL);
  if (!res.ok) {
    throw new Error(`Failed to download OpenAPI JSON (${res.status}) from ${OPENAPI_URL}`);
  }
  const json = await res.json();
  await fs.writeFile(new URL("../openapi.json", import.meta.url), JSON.stringify(json, null, 2));
  process.stdout.write(`OpenAPI JSON saved to openapi.json (source: ${OPENAPI_URL})\n`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

