const figure = document.getElementById('figure')
// const circleButton = document.getElementById('circle-button')
// const squareButton = document.getElementById('square-button')

// circleButton.onclick =function(){
//   figure.classList.add('rounded')
// }
// squareButton.onclick =function(){
//   figure.classList.remove('rounded')
// }



// figure.onmouseover = function(){
//   figure.classList.toggle('rounded')
// }

figure.onclick = function(){
  if(figure.classList.contains('square')){
    figure.classList.remove('square')
    figure.classList.add('rounded')
  } else if(figure.classList.contains('rounded')){
    figure.classList.remove('rounded')
    figure.classList.add('triangle')
  } else if(figure.classList.contains('triangle')){
    figure.classList.remove('triangle')
    figure.classList.add('square')
  }
}

