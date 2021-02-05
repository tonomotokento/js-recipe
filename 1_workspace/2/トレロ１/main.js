const inputElement = document.getElementById('input-todo')
const container = document.getElementById('cards-container')
const addButton = document.getElementById('add-button')

addButton.onclick =function(){
  if(inputElement.value === ''){
    ;
  } else{
    const card =createCard(inputElement.value)
    container.append(card)
    inputElement.value =''
  }
}

const createCard =function(text){
  const card = document.createElement('div')
  card.className ='card'
  const todo =document.createElement('todo')
  todo.className= 'todo'
  todo.textContent = text
  card.append(todo)
  const deleteButton = document.createElement('div')
  deleteButton.className ='delete'
  deleteButton.onclick =function(){
    card.remove()
  }
  card.append(deleteButton)
  return card
}

// inputElement.addEventListener('keypress' ,'enterEvent')
// const enterEvent =function(e){
//   if(e.keycode === 13){
//     const card = createCard(inputElement.value)
//     container.append(card)
//     inputElement.value =''
//     const createCard =function(text){
//       const card =document.createElement('div')
//       card.className ='card'
//       const todo =document.createElement('todo')
//       todo.className ='todo'
//       todo.textContent = text
//       card.append(todo)
//       const deleteButton =document.createElement('div')
//       deleteButton.className ='delete'
//       deleteButton.onclick =function(){
//         card.remove()
//       }
//       card.append(deleteButton)
//       return card

//     }
//     console.log(enter)
//   } else {
//     console.log(iii)
//   }
// }
// enterキーが謎