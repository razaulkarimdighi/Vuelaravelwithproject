let app = new Vue({
    el : ('#app'),
    data: {
       dollar : 20
    },
    methods:{
        amount(one){
this.dollar += one;
        }
    }
    
})