// const myFunc =()=>{
//   let text ="Kento"
//   console.log(text)
// }

// window.onload =()=>{
//   console.log("js")
// }

// window.addEventListener('load' , function(){
//   console.log("main")
// })

// function sample (name , age){
//   console.log(name + "さんの年齢は" + age + "です。")
// }
// sample("健人" ,20)

// const  multiply =(num1 , num2) =>{
//   return num1 *num2
// }
// if(multiply(2,5) >12){
//   console.log("12より大きい")
// } else{
//   console.log("12小さい")
// }

// function sample1(){
//   console.log(this);
//   function sample2(){
//     console.log(this);
//   }
//   sample2();
// }
// sample1();

// let obj={
//   text: 'hello',
//   obj: this,

//   myObj: function(){
//     return this;
//   }
// }
// console.log(obj.obj);
// console.log(obj.myObj());

let name ='太郎'
let obj ={
  name: '田中',
  myFunc: function(){
    console.log(this.name)
  },
  myFunc2: ()=> console.log(this.name)
}
obj.myFunc();
obj.myFunc2();

