function debounce(func: Function, timeout = 300) {
  let timer: any;
  return (...args: any) => {
    
    clearTimeout(timer)
    timer = setTimeout(() => {
      // @ts-ignore
      func.apply(this, args)
      timer = undefined
    }, timeout)
  }
}

export { debounce }