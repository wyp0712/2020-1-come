import ajax from './request';
/**
 * @param { get: params }
 * @param { post: data }
 */

//  
export const selectInsurance = (data) => {
  return ajax({
    url: '/api/ins/insurance',
    method: 'get',
    data
  })
}

// post接口测试
export const testPostList = (data) => {
  return ajax({
    url: '/api/post_test',
    method: 'post',
    data
  })
}

export const pageSizeFn = (params) => {
  return ajax({
    url: '/api/page_test',
    method: 'get',
    params
  })
}

// get接口测试
export const getLogin = (params) => {
  return ajax({
    url: '/api/login',
    method: 'get',
    params
  })
}

export const getUserList = (params) => {
  return ajax({
    url: '/api/task/list',
    method: 'get',
    params
  })
}



