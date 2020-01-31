// import { handleError } from './index'

function createFly() {
  if (mpvuePlatform === 'wx') {
    const Fly = require('flyio/dist/npm/wx')
    return new Fly()
  } else if (mpvuePlatform === 'my') {
    const Fly = require('flyio/dist/npm/ap')
    return new Fly()
  } else {
    return null
  }
}

export function get(url, params = {}) {
  const fly = createFly()
  if (fly) {
    return new Promise((resolve, reject) => {
      fly.get(url, params).then(response => {
        // console.log(response)
        resolve(response)
      }).catch(err => {
        console.log(err)
        // handleError(err)
        reject(err)
      })
    })
  }
}

export function post(url, params = {}) {
  const fly = createFly()
  if (fly) {
    return new Promise((resolve, reject) => {
      fly.post(url, params).then(response => {
        console.log(response)
        resolve(response)
      }).catch(err => {
        console.log(err)
        // handleError(err)
        reject(err)
      })
    })
  }
}
