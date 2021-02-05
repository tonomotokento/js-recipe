const saihu =document.getElementById('saihu')
const jihanki=document.getElementById('jihanki')
const oturi=document.getElementById('oturi')
const buttonCola=document.getElementById('button-cola')
const buttonTea=document.getElementById('button-tea')
const buttonSoda=document.getElementById('button-soda')
const button10=document.getElementById('button-10')
const button50=document.getElementById('button-50')
const button100=document.getElementById('button-100')
const message = document.getElementById('message')
const bag = document.getElementById('bag')


let saihuTotal = 1000
saihu.textContent='財布の中身は' + saihuTotal + '円です'

let jihankiTotal = 0

button10.onclick =function(){
  if(saihuTotal >= 10){
    jihankiTotal += 10
    saihuTotal -= 10
    saihu.textContent='財布の中身は' + saihuTotal + '円です'
    jihanki.textContent ='自販機の中身は' + jihankiTotal + '円です'
    oturi.textContent =''
  } else{
    message.textContent ='財布にお金が足りません'
  }
}
button50.onclick =function(){
  if(saihuTotal >= 50){
    jihankiTotal += 50
    saihuTotal -= 50
    saihu.textContent='財布の中身は' + saihuTotal + '円です'
    jihanki.textContent ='自販機の中身は' + jihankiTotal + '円です'
    oturi.textContent =''
  } else{
    message.textContent ='財布にお金が足りません'
  }
}
button100.onclick =function(){
  if(saihuTotal >= 100){
    jihankiTotal += 100
    saihuTotal -= 100
    saihu.textContent='財布の中身は' + saihuTotal + '円です'
    jihanki.textContent ='自販機の中身は' + jihankiTotal + '円です'
    oturi.textContent =''
  } else{
    message.textContent ='財布にお金が足りません'
  }
}


let c = 0
let t = 0
let s = 0

buttonCola.onclick =function(){
  if(jihankiTotal>=120){
  jihankiTotal -=120
    c ++
    bag.textContent ='コーラ' + c +'本' +'お茶' +t +'本' +'ソーダ' +s + '本'
    if(jihankiTotal >=70){
      jihanki.textContent ='自販機の中身は' + jihankiTotal + '円です'
    }else{
      oturi.textContent ='お釣り' +jihankiTotal +'円が出ました'
      saihuTotal += jihankiTotal
      jihankiTotal = 0
      jihanki.textContent =''
      saihu.textContent = '財布の中身は' + saihuTotal + '円です'
    }
  } else{
    message.textContent='お金が足りません'
  }
}

buttonTea.onclick =function(){
  if(jihankiTotal>=200){
  jihankiTotal -=200
    t ++
    bag.textContent ='コーラ' + c +'本' +'お茶' +t +'本' +'ソーダ' +s + '本'
    if(jihankiTotal >=70){
      jihanki.textContent ='自販機の中身は' + jihankiTotal + '円です'
    }else{
      oturi.textContent ='お釣り' +jihankiTotal +'円が出ました'
      saihuTotal += jihankiTotal
      jihankiTotal = 0
      jihanki.textContent =''
      saihu.textContent = '財布の中身は' + saihuTotal + '円です'
    }
  } else{
    message.textContent='お金が足りません'
  }
}
buttonSoda.onclick =function(){
  if(jihankiTotal>=70){
  jihankiTotal -=70
    s ++
    bag.textContent ='コーラ' + c +'本' +'お茶' +t +'本' +'ソーダ' +s + '本'
    if(jihankiTotal >=70){
      jihanki.textContent ='自販機の中身は' + jihankiTotal + '円です'
    }else{
      oturi.textContent ='お釣り' +jihankiTotal +'円が出ました'
      saihuTotal += jihankiTotal
      jihankiTotal = 0
      jihanki.textContent =''
      saihu.textContent = '財布の中身は' + saihuTotal + '円です'
    }
  } else{
    message.textContent='お金が足りません'
  }
}




