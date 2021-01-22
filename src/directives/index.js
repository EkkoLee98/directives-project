import Vue from 'vue'
import copy from '@/directives/copy'
import longpress from '@/directives/longpress'
import debounce from "@/directives/debounce";
import emoji from "@/directives/emoji";
import lazyload from "@/directives/lazyload"
import permission from "@/directives/permission";
import watermarker from "@/directives/watermarker";
import draggable from "@/directives/draggable";
// 自定义指令
const directives = {
    copy,
    longpress,
    debounce,
    emoji,
    lazyload,
    permission,
    watermarker,
    draggable
}

const install = (Vue) => {
    Object.keys(directives).forEach((key) => {
        Vue.directive(key, directives[key])
    })
}

if (window.Vue) {
    Object.keys(directives).forEach((key) => {
        Vue.directive(key, directives[key])
        window[key] = directives[key]
    })
    Vue.use(install)
}

export default {
    install
}
