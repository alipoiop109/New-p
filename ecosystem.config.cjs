module.exports = {
  apps: [
    {
      name: "dekorat-almamlakah",
      script: "npx",
      args: "serve -s artifacts/dekorat-almamlakah/dist/public -l 3000",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
