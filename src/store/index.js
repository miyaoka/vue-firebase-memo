import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'

Vue.use(Vuex)

const initialState = {
  articleList: []
}
const state = Object.assign({}, initialState)

const getters = {
  articleList: state => state.articleList
}

const actions = {
  [types.ADD_ARTICLE] ({ commit }, text) {
    commit(types.ADD_ARTICLE, { text })
  },
  [types.UPDATE_ARTICLE] ({ commit }, { id, text }) {
    commit(types.UPDATE_ARTICLE, { id, text })
  },
  [types.REMOVE_ARTICLE] ({ commit }, id) {
    commit(types.REMOVE_ARTICLE, { id })
  }
}

const mutations = {
  [types.ADD_ARTICLE] ({ state }, payload) {
    const now = new Date()
    this.state.articleList.push({
      text: payload.text,
      createdAt: now,
      updatedAt: now,
      id: now.toString()
    })
  },
  [types.UPDATE_ARTICLE] ({ state }, payload) {
    const idx = this.state.articleList.findIndex(article => article.id === payload.id)
    if (idx < 0) return
    Vue.set(this.state.articleList, idx,
      Object.assign(this.state.articleList[idx], {
        text: payload.text,
        updatedAt: new Date()
      })
    )
  },
  [types.REMOVE_ARTICLE] ({ state }, payload) {
    this.state.articleList = this.state.articleList.filter(article => article.id !== payload.id)
  }
}

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  getters,
  mutations,
  actions
})

export default store
