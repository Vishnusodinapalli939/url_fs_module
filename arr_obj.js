var http=require("http");
var fs=require("fs");
var url=require("url");
var port=3005;
http.createServer((req,res)=>{
    var parsed=url.parse(req.url,true);
    var pathname=parsed.pathname.split("/");
    var name=pathname[1];
    console.log(name);
    var id=parsed.query.id;
    var cat=parsed.query.cat
    console.log(id,cat)
    fs.readFile("./obj.js","utf-8",(err,data)=>{
        if(err){
            res.write("error");
            res.end();
        }else{
            let arr=JSON.parse(data);
            let obj={name:name,id:id,category:cat}
            console.log(obj)
            arr.push(obj);
            console.log(arr)
            fs.writeFile("./obj.js",JSON.stringify(arr),(err,data)=>{

            });
            res.write("inserted successfully")
            res.end()
        }
    })
    // res.write("hii");
    // res.end();

}).listen(port,()=>{console.log("server started up on",port)})