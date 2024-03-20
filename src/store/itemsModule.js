import axios from 'axios'
import { config } from '@/api/config'

const state = {
    ids: [],
    items: [],
    page: 1,
    maxPage: 0,
    isLoading: false,
    limit: 20,
    sortOptions: [
      {value:'title', name:'По названию'},
      {value:'completed', name:'По завершённости'}
    ],
    selectedSort: ''
}

const mutations = {
    setItems(state, items) {
      state.items = items
    },
    setIds(state, ids) {
      state.ids = ids
    },
    setPage(state, page) {
      state.page = page
    },
    setIsLoading(state, bool) {
      state.isLoading = bool
    },
    setMaxPage(state, page) {
      state.maxPage = page
    },
    setSelectedSort(state, sort) {
      state.selectedSort = sort
    }
}

const actions = {
    fetchItems: async ({commit}) => {
        try {
            commit('setIsLoading', true)
            const response = await axios.get(config.url, {
              params: {
                _page: state.page,
                _limit: state.limit,
              }
            })
              .then( response => {
                console.log(response);
                commit('setMaxPage', Math.ceil(response.headers['x-total-count'] / state.limit))
                commit('setItems', response.data)
              }).catch( error => {
                console.error(error);
              });
          } catch (e) {
            // alert('errrrrrrr...rr')
            console.log(e)
          } finally {
            commit('setIsLoading', false)
          }
    },
}

const getters = {
  sortedItems(state) {
    return [...state.items].sort((post1, post2) => post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]))
  }
}

export const items = {
    state,
    mutations,
    actions,
    namespaced: true
}