import axios from "axios"
import {config} from '../api/config'

export default {
    async fetchTodos({commit}) {
        try {
            const response = await axios.get(config.url, {
                params: {
                    _limit: config.limit,
                }
            })
            commit('setMockedTodos', response.data)
        } catch (error) {
            console.log(error)
        }
    },

    addTodo({commit}, todo) {
        const newTodo = {
            id: Date.now(),
            completed: false,
            title: todo
        }
        commit('addTodo', newTodo)
    },

    toggleTodo({commit}, todo) {
        commit('updateTodo', { todo, completed: !todo.completed })
    },

    removeTodo({commit}, todo) {
        commit('removeTodo', todo)
    },
    
    editTodo({commit}, {todo, newTitle}) {
        commit('editTodo', { todo, title: newTitle })
    },
}