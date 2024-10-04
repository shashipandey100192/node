import http from 'http';
import fs from 'fs';
// console.log(http);

const myapp = http.createServer((req,res)=>{
        if(req.url==="/")
        {
            fs.readFile("public/index.html",(err,html)=>{
                res.write(html);
                res.end();
            })
        }
        else if(req.url==="/about")
            {
                fs.readFile("public/about.html",(err,html)=>{
                    res.write(html);
                    res.end();
                })
            }
        else
        {
            res.write("this is error age");
            res.end();
        }

});

myapp.listen(8000,()=>{
    console.log("server is running");
})
