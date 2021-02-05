const input =document.getElementById('input')
const button =document.getElementById('button')
const container =document.getElementById('card-container')
const deleteButton =document.getElementById('delete-button')


let list =[]
list =JSON.parse(localStorage['memo'])
for(let i=0; i<list.length; i++){
  const card=document.createElement('div')
  card.textContent=list[i]
  container.append(card)
}

button.onclick= function(){
  const card=document.createElement('div')
  card.textContent=input.value
  container.append(card)
  list.push(input.value)
  localStorage['memo']=JSON.stringify(list)
}



