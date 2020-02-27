const user = {
  state: {
    userName: '',
    userId: '',
    userImg: '',
    userEmail: '',
    tabIndex: true
  },

  mutations: {
    SET_USERNAME: (state, userName) => {
      state.userName = userName
    },
    SET_USERID: (state, userId) => {
      state.userId = userId
    },
    SET_USERIMG: (state, userImg) => {
      state.userImg = userImg
    },
    SET_USEREMAIL: (state, userEmail) => {
      state.userEmail = userEmail
    },
    SET_TABINDEX: (state, tabIndex) => {
      state.tabIndex = tabIndex
    }
  },

  actions: {
    setUserName ({ commit }, item) {
      commit('SET_USERNAME', item)
    },
    setUserImg ({ commit }, item) {
      commit('SET_USERIMG', item)
    },
    setUserId ({ commit }, item) {
      commit('SET_USERID', item)
    },
    setUserEmail ({ commit }, item) {
      commit('SET_USEREMAIL', item)
    },
    setTabIndex ({ commit }, item) {
      commit('SET_TABINDEX', item)
    }
  }
}

export default user
