import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import { crx } from "@crxjs/vite-plugin";
import type { ManifestV3 } from "@crxjs/vite-plugin";

import rawManifest from "./src/manifest.json";

const manifest: ManifestV3 = rawManifest as ManifestV3;

export default defineConfig({
    plugins: [
        solidPlugin(),
        crx({ manifest }),
    ],
    build: {
        outDir: "dist",
    },
});
