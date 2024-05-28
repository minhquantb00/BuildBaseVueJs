// 401拦截
const resp401 = {
  /**
   * 响应数据之前做点什么
   * @param response 响应对象
   * @param options 应用配置 包含: {router, i18n, store, message}
   * @returns {*}
   */
  onFulfilled (response, options) {
    const { message } = options
    if (response.code === 401) {
      message.error('Không có quyền truy cập.')
      window.location.href = '/login'
    }
    return response
  },
  /**
   * 响应出错时执行
   * @param error 错误对象
   * @param options 应用配置 包含: {router, i18n, store, message}
   * @returns {Promise<never>}
   */
  onRejected (error, options) {
    const { message } = options
    const { response } = error
    if (response.status === 401) {
      message.error('Không có quyền truy cập.')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
}

const resp403 = {
  onFulfilled (response, options) {
    const { message } = options
    if (response.code === 403) {
      message.error('Yêu cầu thất bại.')
    }
    return response
  },
  onRejected (error, options) {
    const { message } = options
    const { response } = error
    if (response.status === 403) {
      message.error('Yêu cầu thất bại.')
    }
    return Promise.reject(error)
  }
}

const resp400 = {
  onFulfilled (response, options) {
    const { message } = options
    if (response.code === 400) {
      message.error('Yêu cầu thất bại.\n' + response.data.join('.\n'))
    }
    return response
  },
  onRejected (error, options) {
    const { message } = options
    const { response } = error
    if (response.status === 400) {
      message.error('Yêu cầu thất bại.\n' + response.data.join('.\n'))
    }
    return Promise.reject(error)
  }
}
const resp200 = {
  onFulfilled (response, options) {
    const { message } = options
    if (response.status === 200 && response.data.succeeded === false) {
      message.error('Yêu cầu thất bại.\n' + response.data.errors.join('.\n'))
    }
    const webclientVer = response.headers['x-webclient-ver'] || 'default'
    if (response.status === 200 && webclientVer !== process.env.VUE_APP_VERSION) {
     // window.location.reload()
    }
    return response
  },
  onRejected (error, options) {
    const { message } = options
    const { response } = error
    if (response.status === 200) {
      message.error('Yêu cầu thất bại.')
    }
    return Promise.reject(error)
  }
}
const reqCommon = {
  /**
   * 发送请求之前做些什么
   * @param config axios config
   * @param options 应用配置 包含: {router, i18n, store, message}
   * @returns {*}
   */
  onFulfilled (config, options) {
    // const { message } = options
    // const { url, xsrfCookieName } = config
    // if (url.indexOf('login') === -1 && !loginIgnore.includes(url) && xsrfCookieName && !Cookie.get(xsrfCookieName)) {
    //   message.warning('The authentication token has expired, please log in again')
    //   window.location.href = '/login'
    // }
    return config
  },
  /**
   * 请求出错时做点什么
   * @param error 错误对象
   * @param options 应用配置 包含: {router, i18n, store, message}
   * @returns {Promise<never>}
   */
  onRejected (error, options) {
    const { message } = options
    message.error(error.message)
    return Promise.reject(error)
  }
}

export default {
  request: [reqCommon], // 请求拦截
  response: [resp200, resp401, resp403, resp400] // 响应拦截
}
