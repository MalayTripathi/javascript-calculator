module.exports = {
    get : function (req, res, next){
        var a = 10;
        var b = 20;
        var c = a + b;
        res.json({status: "Success", a: a, b: b, result: c});
    }
}