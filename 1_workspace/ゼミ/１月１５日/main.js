const question = document.getElementById('question')
const answer = document.getElementById('answer')
const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')
const button3 = document.getElementById('button3')

button1.onclick = function(){
  answer.textContent = '正解'
}
button2.onclick = function(){
  answer.textContent = '不正解'
}
button3.onclick = function(){
  answer.textContent = '不正解'
}

const Kento = {
  age : 20 ,
  FamilyName : 'Tonomoto',
  birthDay : 2000/8/14,
  hobbies : ["サイクリング" , "ゲーム", "Marvel"],
  sayHello :function (){
    console.log('こんにちは')
  }
}
Kento.sayHello()