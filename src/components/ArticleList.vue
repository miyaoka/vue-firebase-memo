<template>
  <div>
    <div v-if="items.length > 0">
      <article-item
        v-for="(item, i) in items"
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
import ArticleItem from '@/components/ArticleItem'

export default {
  name: 'ArticleList',
  data () {
    return {

    }
  },
  components: {
    ArticleItem
  },
  props: {
    items: {
      type: Array,
      required: true,
      default: function () {
        return []
      }
    }
  }
}
</script>

<style scoped>
</style>
