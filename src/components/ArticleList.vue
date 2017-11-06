<template>
  <div>
    <div>
      <text-editor
        @submit="ADD_ARTICLE"
      />
    </div>
    <hr>
    <div v-if="articleList.length > 0">
      <article-item
        v-for="(item, i) in articleList"
        v-bind:key="item.id"
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
    ...mapState(['articleList'])
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
