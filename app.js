import api from './api.js'

$(function(){
  const app = {
    data: {
      posts: null
    },
    initiate() {
      this.syncCall()
      this.asyncCall()
      this.plainSyncCall()
    },
    syncCall() {
      const res = api.get('/posts/1')
      console.log('syncCall : ')
      console.log(res)
    },
    asyncCall() {
      api.get('/posts/1', res => {
        console.log('asyncCall(callback) : ')
        console.log(res)
      })
    },
    plainSyncCall() {
      const res =  $.ajax({
        method: 'GET',
        url: 'http://localhost:3004/posts/1',
        async: false
      })
      console.log('plainSyncCall : ')
      console.log(res.responseJSON)
    }
  }

  app.initiate.call(app)
})