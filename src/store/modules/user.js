import { login, getUserInfo } from '@/api/sys'
import md5 from 'md5'
import { setItem, getItem } from '../../../utils/storage'
import { TOKEN } from '@/constant'
export default {
  namespaced: true,
  state: () => ({
    userInfo: {},
    token: getItem(TOKEN) || ''
  }),
  mutations: {
    // 增加

    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    }
  },
  actions: {
    // 增加
    async getUserInfo(context) {
      const res = await getUserInfo()
      console.log(res)
      this.commit('user/setUserInfo', res)
      return res
    },
    login(context, userInfo) {
      const { username, password } = userInfo
      console.log(md5(password))
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password)
        })
          .then((data) => {
            // resolve(data)
            // console.log('-------------')
            // console.log(data)
            // console.log('-------------')
            // this.commit('user/setToken', data.data.data.token)
            this.commit('user/setToken', data.token)
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  }
}
