window.jQuery = function (selectorOrArray) {
  let elements
  if (typeof selectorOrArray === 'string') {
    elements = document.querySelectorAll(selectorOrArray)
  } else if (selectorOrArray instanceof Array) {
    elements = selectorOrArray
  }
  //api 可以操作elements
  //闭包：函数访问外部的变量s
  return {
    oldApi: selectorOrArray.oldApi,
    //添加类名
    addClass(className) {
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add(className)
      }
      return this
    },
    //查找
    find(selector) {
      let array = []
      for (let i = 0; i < elements.length; i++) {
        const elements2 = Array.from(elements[i].querySelectorAll(selector))
        array = array.concat(elements2)
      }
      //添加老的api对象
      array.oldApi = this
      //返回一个新的api对象:newApi
      const newApi = jQuery(array)
      return newApi
    },
    //返回到api/返回上一个api
    end() {
      //此时的this是新的api
      return this.oldApi
    },
    //遍历
    each(fn) {
      for (let i = 0; i < elements.length; i++) {
        fn.call(null, elements[i], i)
      }
      return this
    },
    //获取父亲元素
    parent() {
      const array = []
      this.each((node) => {
        if (array.indexOf(node.parentNode) === -1) {
          array.push(node.parentNode)
        }
      })
      return jQuery(array)
    },
    print() {
      console.log(elements)
    },
    //儿子节点
    children() {
      const array = []
      this.each((node) => {
        array.push(...node.children)
      })
      return jQuery(array)
    },





  }

}


//使用$
window.$ = window.jQuery