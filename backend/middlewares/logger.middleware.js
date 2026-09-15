
function logger(req,res,next){
    const URL=req.url;
    const method=req.method;
    console.log(URL,method);
    next()

}

module.exports=logger;