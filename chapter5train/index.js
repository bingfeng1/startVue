window.onload = function(){
    const app = new Vue({
        el: '#app',
        data: {
            shoppings: [
                {
                    name: '商品1',
                    price: '1',
                    count: 1
                },
                {
                    name: '商品2',
                    price: '2',
                    count: 1
                },
                {
                    name: '商品3',
                    price: '3',
                    count: 1
                },
            ]
        },
        methods: {

        },
        computed: {
            totalPrice() {
                let prices = 0;
                for (let v of this.shoppings) {
                    prices += v.price * v.count
                }
                return prices
            }
        }
    })
}