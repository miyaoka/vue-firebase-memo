<template>
  <div>
    <h1>
      <router-link :to="{ name: 'Home' }">Home</router-link>
      / Status
    </h1>
    <div v-if="!isReadyArticle">
      Loading...
    </div>
    <div v-else-if="article">
      <article-item
        :item="article"
      >
      </article-item>
    </div>
    <div v-else>
      No Article
    </div>
  </div>
</template>


<script>
import { mapState } from 'vuex'
import ArticleItem from '@/components/ArticleItem'

export default {
  name: 'Status',
  data () {
    return {
    }
  },
  components: {
    ArticleItem
  },
  computed: {
    ...mapState([
      'isReadyArticle'
    ]),
    article () {
      return this.$store.getters.articleStatus(this.$route.params.key)
    }
  }
}
</script>

<style scoped>
</style>
