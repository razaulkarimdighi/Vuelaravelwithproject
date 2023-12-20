let app = new Vue({
    el : ('#app'),
    data: {
      name : true,
      age : true
    },
    methods:{
      showName(){
        this.name = !this.name
      },
      showAge(){
        this.age = !this.age
      }
       
    }
    
})