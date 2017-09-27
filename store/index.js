import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      loading: false
    },
    mutations: {
      setLoading (state, loading) {
        state.loading = loading
      },
      setList (state, list) {
        state.list = list
      }
    }
  })
}

export default createStore
