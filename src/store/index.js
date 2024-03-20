import { createStore } from "vuex";
import { items } from "./itemsModule";

const store = createStore({
    modules: {
        items
    }
})

export default store;