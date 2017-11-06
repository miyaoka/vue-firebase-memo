<template>
  <div>
    <span>
      {{item.text}}
    </span>
    <span>
      {{item.time}}
    </span>
    <span>
      <button @click="removeItem(item.id)">
        ×
      </button>
    </span>

  </div>
</template>

<script>
export default {
  name: 'ArticleItem',
  data () {
    return {
    }
  },
  props: {
    item: {
      type: Object,
      required: true,
      default: function () {
        return {}
      }
    }
  },
  methods: {
    removeItem (id) {
      console.log(id)
    }
  }
}
</script>

<style scoped>
</style>
