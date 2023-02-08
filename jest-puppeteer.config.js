const PORT = 14568;

module.exports = {
  launch: {
    headless: true,
    // executablePath: "/usr/bin/google-chrome-stable",
    args: [
      "--ignore-certificate-errors",
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-accelerated-2d-canvas",
      "--disable-gpu",
    ],
  },
  browserContext: "incognito",
  server: {
    command: `npm run dev -- --port ${PORT}`,
    port: PORT,
    launchTimeout: 10000,
  },
  devtools: true,
};
