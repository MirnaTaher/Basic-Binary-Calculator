let btnEql = document.getElementById("btnEql");
let res = document.getElementById("res");
let btn0 = document.getElementById("btn0");
let btn1 = document.getElementById("btn1");
let btnClr = document.getElementById("btnClr")
let btnSum = document.getElementById("btnSum")
let btnSub = document.getElementById("btnSub")
let btnMul = document.getElementById("btnMul")
let btnDiv = document.getElementById("btnDiv")
btn1.addEventListener("click", appendToRes)
btn0.addEventListener("click", appendToRes)

btnMul.addEventListener("click", appendToRes)
btnSum.addEventListener("click", appendToRes)
btnSub.addEventListener("click", appendToRes)
btnDiv.addEventListener("click", appendToRes)

btnClr.addEventListener("click", clearRes)

btnEql.addEventListener("click", calculate);
let numArr=[]
let operatorArr= [];
let index=0;
let mathOperator=/[+*\/-]/g;

function appendToRes(){
    let lastChar =res.innerHTML.charAt(res.innerHTML.length-1)
    console.log(this.innerHTML)
    if((lastChar.match(mathOperator) && this.innerHTML.match(mathOperator)) || lastChar ==""){
        //don't add it
    }
    else{
        res.innerHTML +=this.innerHTML;
    }
    //in case we cleared the board
    if(!lastChar){
        res.innerHTML +=this.innerHTML;
    }
}
function clearRes(){
    res.innerHTML =""
}

function calculate(){
    numArr=res.innerHTML.trim().split(mathOperator)
    operatorArr=res.innerHTML.trim().split(/[0-1]{1,}/g)
    operatorArr=operatorArr.filter((elem)=> elem !== "")
    let result=0;

    console.log(operatorArr)
    while(numArr.length>=1 && operatorArr.length>=1){
        let firstNum=null;
        let secondNum=parseInt(numArr.shift(),2)
        let operator=operatorArr.shift()
        if(!result){
            firstNum=parseInt(numArr.shift(),2)
        }
        else{
            firstNum=result
        }
        
        if(operator == "/"){
            result=firstNum/secondNum;
        }
        else if(operator == "+"){
            result=firstNum+secondNum;
            console.log("hello")
        }
        else if(operator == "-"){
            result=firstNum-secondNum;
        }
        else if(operator == "*"){
            result=firstNum*secondNum;
        }
    }
    res.innerHTML= result.toString(2)
}