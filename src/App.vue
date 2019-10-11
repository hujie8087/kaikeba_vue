<template>
  <div id="app">
    <!-- <HelloWorld msg="hello world!" ref="hw"/>

    <HelloWorld2 msg="hello world2!" /> -->
    <!-- <Fortest></Fortest> -->
    <FormTest></FormTest>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import HelloWorld2 from './components/HelloWorld2'
import FormTest from './components/From'

export default {
  name: 'App',
  data() {
    return {
      title: '标题'
    }
  },
  components: {
    HelloWorld,
    HelloWorld2,
    FormTest
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
