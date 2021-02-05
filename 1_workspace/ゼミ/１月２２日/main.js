const inputElement = document.getElementById('input-todo')
const addButton = document.getElementById('add-button')
const container = document.getElementById('cards-container')
let list =[]
console.log(localStorage["memo"])
list = JSON.parse(localStorage["memo"])
for(let i=0 ; i<=list.length; i++){
  const card =document.createElement('div')
  card.textContent =list[i]
  container.append(card)
}

addButton.onclick =function(){
  const card =document.createElement('div')
  card.textContent =inputElement.value
  container.append(card)
  list.push(inputElement.value)
  localStorage['memo']=JSON.stringify(list)
}



