class Model {
  data = {
    title: 'hello ajax'
  }

  get() {
    return new Promise(resolve => {
      setTimeout(() => {
        return resolve(this.data)
      }, 250)
    })
  }
}

export default new Model()