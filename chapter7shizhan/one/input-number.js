Vue.component('input-number', {
    template: `
        <div class="input-number">
            <input type="text" :value="currentValue" @change="handleChange">
            <button @click="handleDown" :disabled="currentValue<=min">-</button>
            <button @click="handleUp" :disabled="currentValue>=max">+</button>
        </div>
    `,
    props: {
        max: {
            type: Number,
            default: Infinity
        },
        min: {
            type: Number,
            default: -Infinity
        },
        value: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            currentValue: this.value
        }
    },
    watch: {
        currentValue(val) {
            this.$emit('input', val);
            this.$emit('on-change', val)
        },
        value(val) {
            this.updateValue(this.value)
        }
    },
    methods: {
        updateValue(val) {
            if (val > this.max) val = this.max;
            if (val < this.min) val = this.min;
            this.currentValue = val;
        },
        handleDown() {
            if (this.currentValue <= this.min) return;
            this.currentValue -= 1;
        },
        handleUp() {
            if (this.currentValue >= this.max) return;
            this.currentValue += 1;
        },
        handleChange(event){
            let val = event.target.value.trim();
            let max = this.max;
            let min = this.min;
            if(isValueNumber(val)){
                this.updateValue(val)
            }else{
                event.target.value = this.currentValue;
            }
        }
    },
    mounted() {
        this.updateValue(this.value)
    }
})

function isValueNumber(value){
    return (/(^-?[0-9]+\.{1}\d+$)|(^-?[1-9][0-9]*$)|(^-?0{1}$)/).test(value+"");
}