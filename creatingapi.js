let http=require("http");


let server1=http.createServer((req,res)=>{
    if(req.url==="/api"){
        res.write("hello user");
        res.end();
    }
    if(req.url==="/api/courses"){
        res.write(JSON.stringify("angular js,react js"));
        res.end();
    }
});

server1.listen(4600);
console.log("port working on 4600");


//////////////////////////////////////////////////////////////////////////////////////
let server2=http.createServer((req,res)=>{
    if(req.url==="/firstapi"){
        res.write("welcome");
        res.end();
    }
});

server2.listen(4500);
console.log(`Port working on 4500`);
