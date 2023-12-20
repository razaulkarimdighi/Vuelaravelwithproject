let app = new Vue({
    el : ('#app'),
    data: {
       name: "Razaul karim"
    },
    methods:{
       nameChange(e){
         this.name = e.target.value;
       }
       
    }
    
})