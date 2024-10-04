import http from 'http';
// console.log(http);

const myapp = http.createServer((req,res)=>{
        res.write("welcome to nodejs")
        res.end();

});

myapp.listen(8000,()=>{
    console.log("server is running");
})
