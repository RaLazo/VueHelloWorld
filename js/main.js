var app = new Vue({
    el:"#app",
    created(){
        this.msg="Hallo Welt"
    },
    data:{
        msg:"",
        newMsg:"",
        s: true
    },
    methods:{
        addNewMsg() {
            this.msg = this.newMsg;
        }
    }
});