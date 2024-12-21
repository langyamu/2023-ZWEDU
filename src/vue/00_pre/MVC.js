const app = {
    // model 模型
    Model: class Model {
        // 业务数据    
        val = 0

        // 视图实例
        views = []


        // -------------业务操作-------------

        add(v) {
            if (this.val < 100)
                this.val += v
        }

        sub(v) {
            if (this.val > 0)
                this.val -= v
        }

        getVal() {
            return this.val
        }
        // ------------- 业务操作-------------

        // -------------订阅 更新 视图-------------
        // 注册视图
        register(view) {
            this.views.push(view)
        }

        // 更新所有视图
        notify() {
            this.views.forEach(view => {
                view.render(this)
            })
        }
        // -------------订阅 更新 视图-------------
    },

    View: class View {
        $num = document.querySelector('#num')
        $incBtn = document.querySelector('#incBtn')
        $decBtn = document.querySelector('#decBtn')

        constructor(controller) {
            // 绑定事件
            this.$incBtn.addEventListener('click', (ev) => controller.increase(ev))
            this.$decBtn.addEventListener('click', (ev) => controller.decrease(ev))
        }

        // 将 model 上的数据 绑定/渲染到 dom 上
        render(model) {
            this.$num.textContent = model.getVal() + 'rmb'
        }

    },
    Controller: class Controller {
        model = null
        view = null

        init() {
            //  初始化 model 和 view
            this.model = new app.Model()
            this.view = new app.View(this)

            //  将 view 注册到 model 中（这样当 model 更新就会去通知 view 了）
            this.model.register(this.view)
            this.model.notify()
        }

        // 操作 model 更新 数据 和 view
        increase() {
            this.model.add(1)
            this.model.notify()
        }

        decrease() {
            this.model.sub(1)
            this.model.notify()
        }


    }
}

window.onload = function () {
    const controller = new app.Controller()
    controller.init()
}



