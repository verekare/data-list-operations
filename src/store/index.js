import { createStore } from "vuex";
import { items } from "./itemsModule";
import mutations from "./mutations";
import actions from "./actions"

const store = createStore({
    state: {
        todos: [],
    },
    mutations,
    actions,
    modules: {
        items
    }
})

export default store;