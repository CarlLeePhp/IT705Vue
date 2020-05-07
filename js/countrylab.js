const app = new Vue({
    el: '#app',
    data: {
        countries: null,
        selected: "none"
    },
    computed: {
        flagImage: function(){
            if(this.selected != "none"){
                return './flags/' + this.selected + '.gif'
            } else {
                return './flag/blank.gif'
            }
        },
        index: function(){
            if(this.selected != "none"){
                return this.countries.findIndex(country => country.Code == this.selected)
            } else {
                return -1
            }
            
        }
    },
    methods: {
        altimage: function(e){
            // alert("err")
            e.target.src = "flags/blank.gif"
        }
    },
    mounted: function(){
        axios.get('http://developer.kensnz.com/getcountrydata')
            .then(res => {
                this.countries = res.data
                
            })
            .catch(error => {
                console.log(error)
            })
    }
})