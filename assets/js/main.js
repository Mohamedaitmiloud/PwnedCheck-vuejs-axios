

new Vue({
    el:'#app',
    data:{
        email:'',
        foundData:false,
        data:[]
    },
    methods:{
        checkEmail:function(){
            axios.get('https://haveibeenpwned.com/api/v2/breachedaccount/'+this.email)
                 .then(response=>{
                     this.foundData=true;
                     this.data=response.data;
                     this.email='';
                 })
                 .catch(error=>{
                     console.log('error',error);
                 })
        }
    }
})