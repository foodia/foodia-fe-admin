/** @type {import('next').NextConfig} */

module.exports = {
  devIndicators: {
    buildActivity: false,
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/ui-components/auth",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/ui-components/auth",
        statusCode: 301,
      },
    ];
  },
};
