<template>
  <div>
    <div>
      <text-editor
        @submit="ADD_ARTICLE"
      />
    </div>
    <hr>
    <div v-if="!isReadyArticle">
      Loading...
    </div>
    <div v-else-if="articleList.length > 0">
      <h3>
        Public timeline (total: {{articleList.length}}件)
      </h3>
      <p>誰でも書き込めます</p>
      <article-item
        v-for="(item, i) in articleListReverse"
        :key="item['.key']"
        :item="item"
      >
      </article-item>
    </div>
    <div v-else>
      No Articles
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import * as types from '@/store/mutation-types'
import ArticleItem from '@/components/ArticleItem'
import TextEditor from '@/components/TextEditor'

export default {
  name: 'ArticleList',
  data () {
    return {
    }
  },
  components: {
    ArticleItem,
    TextEditor
  },
  computed: {
    ...mapState([
      'articleList',
      'isReadyArticle'
    ]),
    articleListReverse () {
      return [...this.articleList].reverse()
    }

  },
  methods: {
    ...mapActions([
      types.ADD_ARTICLE
    ])
  }
}
</script>

<style scoped>
</style>
