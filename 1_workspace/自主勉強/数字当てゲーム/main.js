const number =document.getElementById('number')
const Answer =document.getElementById('Answer')
const result =document.getElementById('result')
number.textContent =Math.floor(Math.random() * 9)

const hinto =()=>{
  number.classList.remove('put')
  setTimeout(function(){
    number.classList.add('put')
  }, 2000)
}
let myFlg = 0
const next = ()=>{
  if(Answer.value === number.textContent){
    result.textContent ='正解'
    Answer.value =''
    number.textContent +=Math.floor(Math.random() * 9)
    if(myFlg === 0){
      setTimeout(function(){
      number.classList.add('put')
      result.classList.add('put')
    }, 3000)
     myFlg =1
    } else{
      number.classList.remove('put')
      result.classList.remove('put')
      setTimeout(function(){
        number.classList.add('put')
        result.classList.add('put')
      }, 3000)
    }
  } else{
    window.alert('違います')
  }
  
}