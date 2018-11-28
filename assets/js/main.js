

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
                     if(response.data){
                        swal({
                            title: response.data.length +' BREACH DETECTED!',
                            width: 600,
                            padding: '3em',
                            background: '#fff url(/images/trees.png)',
                            backdrop: `
                              rgba(0,0,0,1)
                              url("https://media.giphy.com/media/Zsx8ZwmX3ajny/giphy.gif")
                              center left
                              no-repeat
                            `
                          })
                        this.foundData=true;
                        this.data=response.data;
                        this.email='';
                     }else{

                     }

                 })
                 .catch(error=>{
                    swal({
                        position: 'center',
                        type: 'success',
                        title: 'You are safe !',
                        showConfirmButton: false,
                        timer: 1500
                      })
                 })
        }
    }
})