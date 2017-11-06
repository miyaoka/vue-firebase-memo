<template>
  <div>
    <h1>Home</h1>
    <div>
      <article-list
      />
    </div>
  </div>
</template>

<script>
import ArticleList from '@/components/ArticleList'

export default {
  name: 'Home',
  components: {
    ArticleList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
