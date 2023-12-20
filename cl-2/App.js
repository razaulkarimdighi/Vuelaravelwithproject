let app = new Vue({
    el : ('#app'),
    data: {
        name: "Razaul Karim",
        age : 32
    },
    methods:{
        myName(){
            return "Razaul Karim"
        },
        myAge(age){
            return `${this. age} and my age is ${age} ` 
        }
    }
})