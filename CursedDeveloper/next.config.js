/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");

// Configure the PWA plugin (first call) and pass Next config separately.
// Support both CommonJS and ESM default export shapes.
const nextPwa = require("next-pwa");
const withPWAFactory = nextPwa && nextPwa.default ? nextPwa.default : nextPwa;
const withPWA = withPWAFactory({
  dest: "public",
  runtimeCaching,
  disable: process.env.NODE_ENV === "development", // avoid SW in dev
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
};

// Some environments may not provide a callable `withPWA` (CJS/ESM mismatch).
if (typeof withPWA === 'function') {
  module.exports = withPWA(nextConfig);
} else {
  // Fallback: export Next config without PWA integration to allow builds to proceed.
  // This keeps SW disabled but avoids build-time crashes. Consider fixing `next-pwa` install.
  module.exports = nextConfig;
}
