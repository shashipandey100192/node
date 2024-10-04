import http from 'http';
// console.log(http);

const myapp = http.createServer((req,res)=>{
        // res.write("welcome to nodejs")
        // res.end();

        if(req.url==="/")
        {
            res.write("<h1>this is node page</h1>");
            res.end();
        }
        else if(req.url==="/about")
        {
            res.write("this is about page");
            res.end();
        }
        else if(req.url==="/contact")
        {
            res.write("this is contact page");
            res.end();
        }
        else
        {
            res.write("this page is not valid");
            res.end();
        }

});

myapp.listen(8000,()=>{
    console.log("server is running");
})
