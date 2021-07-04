const AJAX_CONFIG = {
  url: 'http://localhost:3004',
  contentType: 'application/json; charset=utf-8',
}

class Api {
  constructor () {
    this.config = AJAX_CONFIG
  }
  _ajax({ method, url }, callback) {
    return jQuery.ajax({
      method,
      ...this.config,
      url: this.config.url + url,
      success(data, status, { responseJSON }) {
        callback(responseJSON)
      }
    })
  }

  get(url, callback) {
    return this._ajax({
      method: 'GET',
      url,
    }, callback)
  }
  post() {

  }
}

export default new Api();

