import api from './api.js'

$(function(){
  const app = {
    data: {
      posts: null
    },
    initiate() {
      this.asyncCall()
      this.asyncCallback()
    },
    async asyncCall() {
      const res = await api.get('/posts/1')
      console.log(res)
    },
    asyncCallback() {
      api.get('/posts/1', res => {
        console.log(res)
      })
    },
  }

  app.initiate.call(app)
})