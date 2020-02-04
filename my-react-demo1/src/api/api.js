import ajax from './request';
/**
 * @param { get: params }
 * @param { post: data }
 */

// get接口测试
export const getLogin = (params) => {
  return ajax({
    url: '/api/login',
    method: 'get',
    params
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
