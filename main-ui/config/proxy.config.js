const PROXY_CONFIG = [
    {
        context: [
            "/rest-api"
        ],
        target: "http://localhost:8080",
        secure: false,
        "logLevel": "debug",
        "changeOrigin": true
    }
  ]
module.exports = PROXY_CONFIG;
