// const number = 24;
// if(number % 3 === 0){
//   console.log(number + '!!!!!!');
// } else{
//   console.log(number);
// }


// const number = 24
// for(let n=1 ; n<=number ; n++){
//   if(n % 3 === 0){
//     console.log(n + '!!!!')
//   } else{
//     console.log(n)
//   }
// }


// const genkifunction = function(number){
//   for(let n =1;n<=number;n++){
//     if(n%3===0){
//       console.log('${n}!!!!!!!')
//     }else{
//       console.log(n)
//     }
//   }
// }
// genkifunction(100)


// const FizzBuzz = function(number){
//   for(let n =1; n<=number ; n++){
//     if(n % 15 === 0){
//       console.log('FizzBUzz')
//     } else if(n % 3 === 0){
//       console.log('Fizz')
//     }else if(n % 5 === 0){
//       console.log('Buzz')
//     } else{
//       console.log(n)
//     }
//   }
// }
// FizzBuzz(100);


// const Nabeatu = function(number){
//   for(let n =1 ; n<=number ; n++){
//     let nn = String(n);
//     if(n % 3 === 0 || nn.indexOf('3')>=0){
//       console.log('あほ')
//     }else{
//       console.log(n)
//     }
//   }
// }
// Nabeatu(100)

const Nabeatu2 = function(number){
  for(let n = 1 ; n <= number ; n++){
    let nn = String(n)
    if(nn.includes('3') || n % 3 === 0){
      console.log('あほ')
    }else{
      console.log(n)
    }
  }
}
Nabeatu2(100)
// 数字を文字列に変えるあたりが謎