const app = new Vue({
    el: '#app',
    data: {
        message: "",
        inputValue: 0.0,
        convertMode: "inch"
    },
    methods: {
        
        delta: function(){
            this.message = "Kia ora";
        },
        convertUnit: function(){
            this.outputValue = this.inputValue * 2.54;
        }
    },
    computed: {
        outputUnit: function(){
            return this.convertMode
        },
        inputUnit: function(){
            
            if(this.convertMode == "inch"){
                return "cm"
            } else {
                return "inch"
            }
        },
        outputValue: function(){
            if (isNaN(this.inputValue)){
                this.message = "Please input a vlid number."
                return 0.0
            }
            var result
            if(this.convertMode == "inch"){
                result = this.inputValue / 2.54
                
                
            } else {
                result = this.inputValue * 2.54
            }
            result = result.toFixed(3)
            return result
        }
    }
})