<template>
  <div>
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'DefaultPage',
  data () {
    return {
      msg: '欢迎'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
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
