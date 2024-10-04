// import http from 'http';
// import fs from 'fs';
// import path from 'path';

const http = require('http');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const port = process.env.PORT || 4500



const myapp = http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile("public/index.html", (err, html) => {
            res.write(html);
            res.end();
        });
    }
    else if (req.url === "/about") {
        fs.readFile("public/about.html", (err, html) => {
            res.write(html);
            res.end();
        });
    }
    else if (req.url.match("\.css$")) {
        var csspath = path.join(__dirname, 'public', req.url);
        console.log(csspath);
        var readpath = fs.createReadStream(csspath, "UTF-8");
        res.writeHead(258, { "Content-Type": "text/css" });
        readpath.pipe(res);
    }
    else if (req.url.match("\.js$")) {
        var jspath = path.join(__dirname, 'public', req.url);
        var readpath = fs.createReadStream(jspath, "UTF-8");
        res.writeHead(258, { "Content-Type": "text/js" });
        readpath.pipe(res);
    }

    else if (req.url.match("\.jpg$" || "\.png$")) {
        var imgpath = path.join(__dirname, 'public', req.url);
        var readpath = fs.createReadStream(imgpath);
        res.writeHead(258, { "Content-Type": "text/image" });
        readpath.pipe(res);
    }
    else {
        res.write("this is error file");
        res.end();
    }


});

myapp.listen(port, () => {
    console.log(`server is running ${port}`);
})
