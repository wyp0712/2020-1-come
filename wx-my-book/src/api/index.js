import { get, post } from '@/utils/request.js';
// http://v.juhe.cn/toutiao/index?type=&key=80e725abf3c9996878110e657965b003

const API_PREFIX = 'http://v.juhe.cn'
const KEY = '80e725abf3c9996878110e657965b003'

export const getNewsList = () => {
  return get(`${API_PREFIX}/toutiao/index?key=${KEY}`)
}