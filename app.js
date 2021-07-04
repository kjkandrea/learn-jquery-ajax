import api from './api.js'

$(function(){
  const app = {
    initiate() {
      this.getData()
    },
    getData() {
      api.get('/posts/1', res => {
        console.log(res)
      })
    }
  }

  app.initiate.call(app)
})