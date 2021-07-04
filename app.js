import model from './model/index.js'

$(function(){
  const app = {
    initiate() {
      this.getData()
    },
    async getData() {
      const data = await model.get()
      console.log(data)
    }
  }

  app.initiate.call(app)
})