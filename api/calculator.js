module.exports = {
    add : function (req, res, next){
        var a = parseInt(req.body.a);
        var b = parseInt(req.body.b);
        var c = a + b;
        res.json({status: "Success", a: a, b: b, result: c});
    },
    sub : function (req, res, next){
        var a = req.body.a
        var b = req.body.b
        if(a>0 && b>0)
        {
            return 
        }
    }
}