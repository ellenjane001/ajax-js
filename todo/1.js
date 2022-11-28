window.onload = function () {
    let todos = []

    const bindInput = () => {
        document.getElementById('todo-input').addEventListener('keypress', function (event) {
            console.log(this)
            let task = event.target.value
            if (event.key === 'Enter') {
                createToDo(task)
                this.value = ''
                displayTodos()
                syncLocalStorage()
            }
        })

    }
    const createItemTemplate = (todo) => {
        let isDone = todo.done ? 'checked' : ''
        let isEnabled = todo.done ? 'disabled' : ''
        let item = `<li> 
        <label class="control--checkbox">
        <input data-id="${todo.id}" type="checkbox" ${isDone} ${isEnabled} />
         ${todo.task}
        </label> 
        </li>`
        return item
    }
    const displayTodos = () => {
        let pEl = document.getElementById('res')
        pEl.innerHTML = ''
        let list = ''
        for (let i = 0; i < todos.length; i++) {
            list += createItemTemplate(todos[i])
        }

        pEl.innerHTML = list

        document.querySelectorAll('#res li input[type="checkbox"]').forEach(item => {
            item.addEventListener('change', (event) => {
                let dataId = item.getAttribute('data-id')
                if (item.getAttribute('checked')) {
                    item.setAttribute('checked', false)
                    updateItem(dataId, false)
                } else {
                    item.setAttribute('checked', true)
                    updateItem(dataId, true)
                }
                syncLocalStorage()
            })
        })

    }
    const initialization = () => {
        todos = JSON.parse(localStorage.getItem('todos')) || []
        bindInput()
        displayTodos()
    }

    initialization()

    const updateItem = (id, isDone) => {
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id == id) {
                todos[i].done = isDone
                break
            }
        }
    }


    const createToDo = (task) => {
        todos.push({
            'task': task,
            'id': todos.length,
            'done': false
        })
        console.log(todos)
    }
    const syncLocalStorage = () => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }
}