module.exports = {
    add : function (req, res, next){
        console.log(req);
        var first = parseInt(req.body.first);
        var sec = parseInt(req.body.sec);
        var res = first + sec;
        res.json({status: "Success", first: first, sec: sec, result: res});
    },
    sub : function (req, res, next){
        var a = req.body.a
        var b = req.body.b
        if(a<0 && b<0)
        {
            return -(b+a);
        }
        else
        {
            return (a-b);
        }
    }
}