document.body.insertAdjacentHTML('afterbegin',
    `
<div id="app">
    <div>
        <span>{{ val }}rmb</span>
    </div>
    <div>
        <button @click="sub()">-</button>
        <button @click="add()">+</button>
    </div>
</div>
`
)

new Vue(
    {
        el: '#app',
        data() {
            return {
                val: 0
            }
        },
        methods: {
            sub() {
                if(this.val > 0)
                    this.val--
            },
            add() {
                this.val++
            }

        }
    }
)