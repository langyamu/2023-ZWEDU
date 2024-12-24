// View
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

// Model
const data = function (){
    return {
        val:0
    }
}

// View Model
new Vue(
    {
        el: '#app',
        data,
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