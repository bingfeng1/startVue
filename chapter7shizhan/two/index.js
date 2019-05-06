Vue.component('input-number', {
    template: `
    <div>
        <input :value="value" @input="updateValue">
        <slot></slot>
    </div>
    `,
    props: ['value'],
    methods: {
        updateValue(val) {
            this.$emit("input", val)
        }
    }
})

Vue.component('input-button', {
    props: ["signal"],
    template: `
        <button @click="changeNum">{{signal}}</button>
    `,
    methods: {
        changeNum() {
            switch (this.signal) {
                case "+":
                    bus.$emit("add")
                    break;
                case "-":
                    bus.$emit('down');
                    break;
            }
        }
    }
})

let bus = new Vue();
let app = new Vue({
    el: "#app",
    data: {
        value: 2
    },
    mounted() {
        bus.$on("add",()=>{
            this.value++;
        }),
        bus.$on("down",()=>{
            this.value--;
        })
    }
})
