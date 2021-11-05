import proxy from 'http-proxy-middleware';

module.exports = function(app) {
  const headers = {
    "Content-Type": "application/json",
  }
  app.use(proxy("localhost:1234/api/", { target: "localhost:8000", changeOrigin: true, secure: false, headers: headers}));
}
