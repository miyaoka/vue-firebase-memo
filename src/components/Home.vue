<template>
  <div>
    <h1>Home</h1>
    <div>
      <article-list
        :items="items"
      />
    </div>
  </div>
</template>

<script>
import ArticleList from '@/components/ArticleList'

export default {
  name: 'HelloWorld',
  data () {
    return {
      items: [
        {
          id: 0,
          text: 'hoge',
          time: new Date()
        },
        {
          id: 1,
          text: 'fuga',
          time: new Date()
        }
      ]
    }
  },
  components: {
    ArticleList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
