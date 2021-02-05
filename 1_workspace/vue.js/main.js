new Vue({
  el:"#app",
  data(){
    return{
      drinks:["水", "お茶", "コーヒー"],
      inputMoney: 0,
      drinkPrice: 120,
      totalMoney: 0,
      drinkNumber: 0,
      isPurchased: false,
    }
  },
  methods:{
    addTotalMoney: function(){
      this.totalMoney +=  Number(this.inputMoney)
    },
    purchase: function(){
      if(this.totalMoney >= this.drinkPrice){
        this.totalMoney -= this.drinkPrice
        this.drinkNumber ++
        this.isPurchased =true
      }
    }
  }

})