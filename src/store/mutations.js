export default {
    setMockedTodos(state, todos) {
        state.todos = todos
    },
    addTodo(state, todo) {
        state.todos.unshift(todo)
    },
    removeTodo(state, todo) {
        state.todos.splice(state.todos.indexOf(todo), 1)
    },
    updateTodo(state, {todo, title = todo.title, completed = todo.completed}) {
        const index = state.todos.indexOf(todo)
        state.todos.splice(index, 1, {
            ...todo,
            title,
            completed
        })
    },
}