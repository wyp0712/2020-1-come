import { setError } from './error'

export function handleError(response) {
  if (response && response.data && response.data.error_code === 0) {
    return true
  } else {
    const msg = response && response.data && response.data.msg
    if (msg) {
      showToast(msg)
    } else {
      setError('数据加载失败，请重试')
    }
    return false
  }
}

export function showToast(title, success = false) {
  success ? mpvue.showToast({ title })
    : mpvue.showToast({ title, icon: 'none' })
}
