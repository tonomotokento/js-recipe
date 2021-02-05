const output =document.getElementById('output')
const type =document.getElementById('type')

let myTotal = 0;
let myInput ='';
let myFlg = 1
let myCalc ="+"

output.textContent =myTotal

function myValue(Number){
  myFlg = 0
  myInput += Number
  output.textContent =myInput
}

function myCalculate(Number){
  if(myFlg ==0){
    myFlg =1
    myWork = myTotal + myCalc + myInput
    myTotal = eval(myWork)
    myInput = ""
    output.textContent =myTotal
  }
  if(Number =='='){
    myTotal = 0
    myCalc ="+"
  } else{
    myCalc =Number
  }
}
function myReset(){
  myTotal = 0
  myInput =''
  myCalc ="+"
  myFlg =1
  output.textContent =myTotal
}





