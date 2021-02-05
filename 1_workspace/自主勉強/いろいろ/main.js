function reset (some){
  document.querySelector('input').value = some
}

function set (some){
  document.querySelector('input').value += some
}
function calc (){
  const v =document.querySelector('input').value
  const f =eval(v)
  document.querySelector('input').value = f
}

function hoge (){
 const hoho = document.getElementById('fuge').value.split('').reverse().join('')
 document.getElementById('fuge').value = hoho
}