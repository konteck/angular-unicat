var bs = require('browser-sync');

bs.init({
    port: 8888,
    files: ["./*.*"],
    server: {
        baseDir: "./",
        directory: true
    },
    server: true,
    open: false,
    notify: false
});