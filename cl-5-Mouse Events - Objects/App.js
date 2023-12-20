let app = new Vue({
    el : ('#app'),
    data: {
       log:{
        x:0,
        y:0
       }
    },
    methods:{
        getEvent(e){
           console.log(e);
           } ,
        Event(e){
        this.log.x = e.offsetX;
        this.log.y = e.offsetY;
       } 
    }
    
})