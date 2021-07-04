const AJAX_CONFIG = {
  url: 'http://localhost:3004',
  contentType: 'application/json; charset=utf-8',
}

class Api {
  constructor () {
    this.config = AJAX_CONFIG
  }
  _ajax({ method, url }, callback) {
    /**
     * callback 이 들어오면 ? async : false
     * callback 이 들어오지 않으면? async : true
     *
     * 1. 왜 이렇게 나누는가?
     * 2. 어떻게 async : true 가 가능한가? 내부적으로 구현이 어떻게 되어있지?
     */
    const async = !!callback;
    const ajax = jQuery.ajax({
      method,
      async,
      ...this.config,
      url: this.config.url + url,
      success(data, status, { responseJSON }) {
        if (callback !== null) callback(responseJSON)
      }
    })

    return async ? ajax : ajax.responseJSON;
  }

  get(url, callback = null) {
    return this._ajax({
      method: 'GET',
      url,
    }, callback)
  }
  post() {

  }
}

export default new Api();

