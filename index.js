const http = require('http');

const server = http.createServer(ServerCallback);
let a=[];
//new change
//some new changes
function ServerCallback(req,res){
    if(req.method == 'GET'){
    }else if( req.method == 'POST') {
        a.push(1);
    }else if(req.method == 'PUT'){
        a[1]=2;
    }else if(req.method == 'DELETE'){
        a.pop();
    }

    res.write(JSON.stringify(a));
    res.end();
}
server.listen(3000);