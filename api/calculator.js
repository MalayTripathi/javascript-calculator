module.exports = {
    add : function (req, res, next){
        var first = req.body.first;
        var sec = req.body.sec;
        var result = first + sec;
        res.json({ 
            status: "Success", 
            first: first, 
            sec: sec, 
            result: result 
        });
    },
    sub : function (req, res, next){
        var first = req.body.first;
        var sec = req.body.sec;
        var result = 0;
        if(first<0 && sec<0)
        {
            result =  -(first+sec);
        }
        else
        {
            result = (first-sec);
        }
        console.log(result);
        res.json({ 
            status: "Success", 
            first: first, 
            sec: sec, 
            result: result 
        });
    },
    mul: function (req, res, next){
        var first = req.body.first;
        var sec = req.body.sec;
        var result = first*sec;
        res.json({ 
            status: "Success", 
            first: first, 
            sec: sec, 
            result: result 
        });
    },
    div: function(req, res, next){
        var first = req.body.first;
        var sec = req.body.sec;
        var result = 0;
        if(sec === 0)
        {
            result = undefined;
        }
        else
        {
            result = first/sec;
        }
        res.json({ 
            status: "Success", 
            first: first, 
            sec: sec, 
            result: result 
        });
    }
}