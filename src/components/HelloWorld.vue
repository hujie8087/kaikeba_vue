<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{too}} -- {{dong.title}}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  //inject:['dong'],
  data () {
    return {
      too:'haha'
    }
  },
  props: {
    //msg: String
  },
  created () {
    // this.$parent.$on('mua',()=>{
    //   this.too = 'mua'
    // })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
