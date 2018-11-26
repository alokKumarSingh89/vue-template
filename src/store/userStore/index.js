import firebase from 'firebase'
export default {
  state: {
    user: null,
    admin: null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setAdmin (state, payload) {
      state.admin = 'superadmin'
    }
  },
  actions: {
    async signIn ({commit}, payload) {
      let user = await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      return user
    },
    async signUp ({commit}, payload) {
      let user = await firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      var userId = firebase.auth().currentUser.uid
      firebase.database().ref('/user_details/' + userId).set({firstName: payload.firstName, lastName: payload.lastName, mail: payload.email, 'role': 0}).then(snapshot => {
        return user
      })
    },
    setUser ({commit}, payload) {
      return new Promise((resolve, reject) => {
        if (payload) {
          let user = {
            email: payload.email
          }
          var userId = firebase.auth().currentUser.uid
          firebase.database().ref('/user_details/' + userId).once('value').then(snapshot => {
            let data = snapshot.val()
            user.role = payload.email === 'admin@gmail.com' ? 1 : data.role
            user.firstName = data.firstName
            user.lastName = data.lastName
            resolve('done')
            commit('setUser', user)
          })
        }
      })
    },
    getAllUse ({commit}, payload) {
      return new Promise((resolve, reject) => {
        firebase.database().ref('/user_details').once('value').then(snapshot => {
          let userList = []
          let value = snapshot.val()
          var user = firebase.auth().currentUser
          for (let key in value) {
            if (user.email !== value[key].email) {
              userList.push({id: key, ...value[key]})
            }
          }
          resolve(userList)
        })
      })
    },
    makeAdmin ({commit}, payload) {
      return new Promise((resolve, reject) => {
        let role = payload.role === 1 ? 0 : 1
        firebase.database().ref('/user_details/' + payload.id).set({...payload, role: role}).then(error => {
          if (error) {
            reject(error)
          } else {
            resolve(payload)
          }
        })
      })
    },
    removeUser({commit},payload) {
      return new Promise((resolve,reject)=>{
        // console.log(payload)
        // firebase.auth().removeUser()
        resolve(payload)
        // var user = firebase.auth().
        // user.delete()
      })
      
    },
    signOut ({commit}) {
      firebase.auth().signOut()
      commit('setUser', null)
    }
  }
}
