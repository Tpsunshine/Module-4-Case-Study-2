//notes to self for research
//why it doesn't work when we declare a and b as global vars outside the functions
//also in reference code index2.html they're using .value() to display result

function add(){
    a=Number(document.getElementById("numA").value);
    b=Number(document.getElementById("numB").value);
    var c = a + b;
    document.getElementById("operator").innerHTML = "+";
    document.getElementById("result").innerHTML = c;
    document.getElementById("msg").innerHTML = '';
}

function subtract(){
    a=Number(document.getElementById("numA").value);
    b=Number(document.getElementById("numB").value);
    var c = a - b;
    document.getElementById("operator").innerHTML = "-";
    document.getElementById("result").innerHTML = c;
    document.getElementById("msg").innerHTML = '';
}

function multiply(){
    a=Number(document.getElementById("numA").value);
    b=Number(document.getElementById("numB").value);
    var c = a * b;
    document.getElementById("operator").innerHTML = "*";
    document.getElementById("result").innerHTML = c;
    document.getElementById("msg").innerHTML = '';
}

function divide(){
    a=Number(document.getElementById("numA").value);
    b=Number(document.getElementById("numB").value);
    if(b!=0){
        var c = a / b;
        document.getElementById("operator").innerHTML = "/";
        document.getElementById("result").innerHTML = c;
    }
    else{
        document.getElementById("operator").innerHTML = "/";
        document.getElementById("result").innerHTML = 'N/A';
        document.getElementById("msg").innerHTML = '** Division by 0 is not allowed';
    }
}

