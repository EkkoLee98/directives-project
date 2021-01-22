<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div v-copy="copyText">{{copyText}}</div><br>
    <button v-longpress="longpress">长按</button><br>
    <input v-debounce="debounceClick" v-model="debounce"/><br>
    <input type="text" v-model="note" v-emoji /><br>
    <p v-permission="'1'">下去1</p>
    <p v-permission="'5'">下去2</p>
    <div style="background-color: blueviolet;width: 100px;height: 100px" v-draggable></div>
    <p>下去</p>
    <p>下去</p>
    <p>下去</p>
    <p>下去</p>
    <div style="background-color: #42b983;height: 200px" v-watermarker="{text:'lze版权所有',textColor:'blue', font:'20px'}">
      111
    </div>
    <p>下去</p>
    <p>下去</p>
    <p>下去</p>
    <p>下去</p>
    <p>下去</p>
    <p>下去</p>
    <p>下去</p>
    <img v-lazyload="imgSrc">
<!--    <img src="./gmzr.png">-->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      copyText: '复制',
      debounce: '防抖',
      note: '',
      imgSrc: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1745322221,1117778639&fm=26&gp=0.jpg'
    }
  },
  methods: {
    longpress () {
      alert('长按指令生效')
    },
    debounceClick () {
      console.log('只触发一次')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
