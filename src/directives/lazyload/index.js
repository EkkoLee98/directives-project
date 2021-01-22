let init = (el, val, def) => {
    el.setAttribute('data-src', val)
    el.setAttribute('src', def)
}
// 利用IntersectionObserver监听el
let observe = (el) => {
    var io = new IntersectionObserver((entries) => {
        const realSrc = el.dataset.src
        if (entries[0].isIntersecting) {
            if (realSrc) {
                el.src = realSrc
                el.removeAttribute('data-src')
            }
        }
    })
    io.observe(el)
}
// 监听scroll事件
let listenerScroll = (el) => {
    console.log(el)
    const handler = throttle(load, 300)
    load(el)
    window.addEventListener('scroll', () => {
        handler(el)
    })
}
// 加载真实图片
let load = (el) => {
    console.log(el)
    const windowHeight = document.documentElement.clientHeight
    const elTop = el.getBoundingClientRect().top
    const elBtm = el.getBoundingClientRect().bottom
    const realSrc = el.dataset.src
    if (elTop - windowHeight < 0 && elBtm > 0) {
        if (realSrc) {
            el.src = realSrc
            el.removeAttribute('data-src')
        }
    }
},
// 节流
  throttle = (fn, delay) => {
    let timer
    let prevTime
    return function (...args) {
        const currTime = Date.now()
        const context = this
        if (!prevTime) prevTime = currTime
        clearTimeout(timer)

        if (currTime - prevTime > delay) {
            prevTime = currTime
            fn.apply(context, args)
            clearTimeout(timer)
            return
        }

        timer = setTimeout(function () {
            prevTime = Date.now()
            timer = null
            fn.apply(context, args)
        }, delay)
    }
}
const LazyLoad = {
    // install方法
    // install(Vue, options) {
    //     const defaultSrc = options?.default
    //     console.log(defaultSrc)
    //     Vue.directive('lazy', {
    //
    //     })
    // },
    bind(el, binding) {
        console.log(binding)
        console.log(el)
        init(el, binding.value, '')
    },
    inserted(el) {
        if (IntersectionObserver) {
            observe(el)
        } else {
            listenerScroll(el)
        }
    },
}

export default LazyLoad
