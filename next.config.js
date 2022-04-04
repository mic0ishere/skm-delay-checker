const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    mode: 'production',
    disable: process.env.NODE_ENV === 'development',
  },
});
