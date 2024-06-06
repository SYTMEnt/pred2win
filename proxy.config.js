module.exports = [
    {
        context: ["/login", "/user", "/logout", "/checkDisplayName", "/gui"],
        target: "https://dev.pred2win.com:6060",
        secure: false,
        changeOrigin: true
    }
]