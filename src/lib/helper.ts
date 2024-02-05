function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
      timer = undefined
    }, timeout)
  }
}

export { debounce }