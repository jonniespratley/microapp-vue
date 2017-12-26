<template>
  <div id="appView">
    <h1>{{framework}} Micro-app</h1>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        framework: 'Vue.js',
				items: [
					'Learn Vue.js',
					'Create micro-app',
					'Deploy'
				]
      }
    }
  }
</script>

<style lang='scss' scoped>
  h1 {
    font-size: 2rem;
    color: green;
  }
</style>
