const AJAX_CONFIG = {
  url: 'http://localhost:3004',
  contentType: 'application/json; charset=utf-8',
}

class Api {
  useLegacy = false;
  /**
   * @param legacy : boolean
   */
  constructor (legacy= false) {
    console.log('legacy : %s', legacy)
    this.useLegacy = legacy
    this.config = AJAX_CONFIG
  }

  legacy({ method, url }, callback) {
    /**
     * callback 이 들어오면 ? async : false
     * callback 이 들어오지 않으면? async : true
     *
     * 1. 왜 이렇게 나누는가?
     * 2. 어떻게 async : true 가 가능한가? 내부적으로 구현이 어떻게 되어있지?
     */
    const async = !!callback;
    console.log('async : %s', async)
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

  tobe({ method, url }, callback) {
    return jQuery.ajax({
      method,
      async: true,
      ...this.config,
      url: this.config.url + url,
      success(data, status, { responseJSON }) {
        if (callback !== null) callback(responseJSON)
      }
    })
  }

  get(url, callback = null) {
    const request = {
      method: 'GET',
      url,
    }

    return this.useLegacy ? this.legacy(request, callback) : this.tobe(request, callback)
  }
}

export default new Api(false);

