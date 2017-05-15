var enteredValue = 0;
var stack = [];
var obj = {};

function recordButton(value)
{   
    var entry = document.getElementById("entry-panel");
    entry.value += `${value}`;
    enteredValue = entry.value;
};

function operandPush(value)
{
    stack.push(parseInt(enteredValue));
    stack.push(value);
    var display = document.getElementById("display-panel");
    display.value = `${enteredValue} ${value}`;
    var entry = document.getElementById("entry-panel");
    entry.value = null;
}

function result(){
    var entry = document.getElementById("entry-panel");
    stack.push(parseInt(entry.value));
    obj["first"] = stack[0];
    obj["oper"] = stack[1];
    obj["sec"] = stack[2];
    console.log(obj);
    axios.post('/api/add', obj).then(function (response) 
    {
        console.log(response);
    }).catch(function (error)
    {
        console.log(error);
    });
}