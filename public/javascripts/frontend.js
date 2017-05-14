var enteredValue = 0;
var stack = [];

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
    console.log(stack);
}