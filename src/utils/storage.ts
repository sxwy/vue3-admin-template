/** 获取 localStorage */
export const getLocalStorage = (key: string) => {
  try {
    const value = localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  } catch (error) {
    console.log(
      '%c 获取 localStorage 失败==========>',
      'color: #4FC08D; font-weight: bold',
      error
    )
  }
}

/** 设置 localStorage */
export const setLocalStorage = (key: string, value: any) => {
  try {
    return localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.log(
      '%c 设置 localStorage 失败==========>',
      'color: #4FC08D; font-weight: bold',
      error
    )
  }
}

/** 删除 localStorage */
export const removeLocalStorage = (key: string) => {
  try {
    return localStorage.removeItem(key)
  } catch (error) {
    console.log(
      '%c 删除 localStorage 失败==========>',
      'color: #4FC08D; font-weight: bold',
      error
    )
  }
}

/** 清除 localStorage */
export const clearLocalStorage = () => {
  try {
    return localStorage.clear()
  } catch (error) {
    console.log(
      '%c 清除 localStorage 失败==========>',
      'color: #4FC08D; font-weight: bold',
      error
    )
  }
}

/** 获取 sessionStorage */
export const getSessionStorage = (key: string) => {
  try {
    const value = sessionStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  } catch (error) {
    console.log(
      '%c 获取 sessionStorage 失败==========>',
      'color: #4FC08D; font-weight: bold',
      error
    )
  }
}

/** 设置 sessionStorage */
export const setSessionStorage = (key: string, value: any) => {
  try {
    return sessionStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.log(
      '%c 设置 sessionStorage 失败==========>',
      'color: #4FC08D; font-weight: bold',
      error
    )
  }
}

/** 删除 sessionStorage */
export const removeSessionStorage = (key: string) => {
  try {
    return sessionStorage.removeItem(key)
  } catch (error) {
    console.log(
      '%c 删除 sessionStorage 失败==========>',
      'color: #4FC08D; font-weight: bold',
      error
    )
  }
}

/** 清除 sessionStorage */
export const clearSessionStorage = (key: string) => {
  try {
    return sessionStorage.clear()
  } catch (error) {
    console.log(
      '%c 清除 sessionStorage 失败==========>',
      'color: #4FC08D; font-weight: bold',
      error
    )
  }
}
