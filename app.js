import api from './api.js'

$(function(){
  const app = {
    data: {
      posts: null
    },
    initiate() {
      this.syncCall()
      this.asyncCall()
    },
    syncCall() {
      const res = api.get('/posts/1')
      console.log('syncCall : ')
      console.log(res)
    },
    asyncCall() {
      api.get('/posts/1', res => {
        console.log('asyncCall : ')
        console.log(res)
      })
    },
  }

  app.initiate.call(app)
})