const quiz=[
  {
    question: '名前は?',
    answers: ['健人', '賢人', '健人人', '剣'],
    correct: '健人'
  },
  {
    question:'年齢は',
    answers:['18', '22', '20', '21'],
    correct: '20'
  },
  {
    question:'好きなものは',
    answers:['甘いもの', '辛いもの', 'おかき', 'レモン'],
    correct: 'おかき'
  },
  {
    question:'出身地は',
    answers:['兵庫', '大阪', '京都', '和歌山'],
    correct: '兵庫'
  }
]


const quizCor = document.getElementById('Quiz-cor')
const button = document.getElementsByTagName('button')
const buttonLength =button.length
const quizLength =quiz.length
let quizIndex = 0

//問題文、回答をセットする
const setQuiz =()=>{
  document.getElementById('Quiz-text').textContent= quiz[quizIndex].question
  let buttonIndex = 0
  while(buttonIndex < buttonLength){
    button[buttonIndex].textContent =quiz[quizIndex].answers[buttonIndex]
    buttonIndex ++
  }
}
setQuiz();

//回答をクリックした時の処理
const clickHandler =(e)=>{
  if(quiz[quizIndex].correct === e.target.textContent ){
    window.alert('正解')
  } else{
    window.alert('不正解')
  }
  
  quizIndex ++
  if(quizIndex < quizLength){
    setQuiz()
  } else{
    window.alert('終了')
  }
  
}

//clickHandler()を各ボタンに割り振る

let handleIndex= 0
while(handleIndex < buttonLength){
  button[handleIndex].addEventListener('click' ,(e)=>{
    clickHandler(e)
  })
  handleIndex ++
}

