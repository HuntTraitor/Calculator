const add = (a,b) => parseFloat(a)+parseFloat(b);
const sub = (a,b) => parseFloat(a)-parseFloat(b);
const mult = (a,b) => parseFloat(a)*parseFloat(b);
const div = (a,b) => {
    if(b == 0){
        return "pig";
    }
    return parseFloat(a)/parseFloat(b);
}

let num1, num2, operator;
let displayNum = 0;

const operate = (num1, operator, num2) => {
    switch(operator){
        case '+': return add(num1, num2);
        case '-': return sub(num1, num2);
        case '*': return mult(num1, num2);
        case '/': return div(num1, num2);
        default: console.log("Unknown operator");
    }
}

const clear = () => {
    num1 = null;
    num2 = null;
    operator = null;
    displayNum = 0;
}

document.addEventListener('click', (e) => {
    if(e.target.id === "clear"){
        clear();
    }

    else if(e.target.parentNode.id === "number"){
        if(num1 == null){
            num1 = e.target.id;
            displayNum = num1;
        }
        else if(operator == null){
            num1 += e.target.id;
            displayNum = num1;
        }
        else if(num2 == null){
            num2 = e.target.id;
            displayNum = num2;
        }
        else{
            num2 += e.target.id;
            displayNum = num2;
        }
    }

    else if(e.target.parentNode.id === "operator"){
        if(num1 == null){
            num1 = 0;
            operator = e.target.id;
        }
        else if(num2 != null){
            displayNum = operate(num1, operator, num2);
            num1 = displayNum;
            num2 = null;
            if(e.target.id === "="){
                operator = null;
            }
            else{
                operator = e.target.id;
            }
        }
        else if(num2 == null && e.target.id === "="){
            operator = null;
        }
        else{
            operator = e.target.id;
        }
    }

    console.log(`${num1} ${operator} ${num2}`);
    document.getElementById("display").innerHTML = displayNum;
});