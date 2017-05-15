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
    var display = document.getElementById("display-panel");
    display.value = `${stack[0]} ${stack[1]} ${stack[2]}`;
    obj["first"] = stack[0];
    obj["oper"] = stack[1];
    obj["sec"] = stack[2];
    switch(obj["oper"])
    {
        case '+':
        axios.post('/api/add', obj)
        .then(function (response) 
        {
            if(response.data.status == 'Success')
            {
                entry.value = response.data.result;
            }
        })
        .catch(function (error)
        {
            console.log(error);
        });
        break;
        case '-':
        axios.post('/api/sub', obj)
        .then(function (response)
        {
            if(response.data.status == 'Success')
            {
                entry.value = response.data.result;
            }
        })
        .catch(function(error){
            console.log(error);
        });
        break;
        case '*':
        axios.post('/api/mul', obj)
        .then(function (response)
        {
            if(response.data.status == 'Success')
            {
                entry.value = response.data.result;
            }
        })
        .catch(function(error){
            console.log(error);
        });
        break;
        case '/':
        axios.post('/api/div', obj)
        .then(function (response)
        {
            if(response.data.status == 'Success')
            {
                entry.value = response.data.result;
            }
        })
        .catch(function(error){
            console.log(error);
        });
        break;
    }
}

function negate()
{
    var entry = document.getElementById("entry-panel");
    entry.value = -entry.value;
}