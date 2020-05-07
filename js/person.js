const app = new Vue({
    el: '#app',
    data: {
        person: null,
        people: null
    },
    computed: {
        username: function(){
            if(this.person != null){
                return this.person.name;
            } else {
                return null;
            }
        }
    },
    mounted: function(){
        axios.get('http://jsonplaceholder.typicode.com/users/')
            .then(res => {
                //this.person = res.data
                this.people = res.data
                
            })
            .catch(error => {
                this.person = "Person not available";
                console.log(error)
            })
    }
});