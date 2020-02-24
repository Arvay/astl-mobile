
export default {
  namespaced: false,
  mutations: {
  },
  actions: {
    // async login (state, data) {
    //   try {
    //     let res = await login({
    //       phoneNumber: data.phoneNumber,
    //       password: data.password
    //     })
    //     state.commit(LOGIN, res)
    //     Toast({
    //       message: '登录成功',
    //       position: 'middle',
    //       duration: 1500
    //     })
    //     setTimeout(() => {
    //       const redirect = data.$route.query.redirect || '/'
    //       data.$router.replace({
    //         path: redirect
    //       })
    //     }, 1500)
    //   } catch (error) {
    //   }
    // }
    // get user info
    // getInfo ({ commit, state }) {
    //   return new Promise((resolve, reject) => {
    //     getInfo(state.token).then(response => {
    //       const { data } = response
    //
    //       if (!data) {
    //         // eslint-disable-next-line
    //         reject('Verification failed, please Login again.')
    //       }
    //       commit(SetUserData, data)
    //       resolve(data)
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // }
  },
  getters: {
  }
}
