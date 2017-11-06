<template>
  <div>
    <div v-if="onEdit">
      <text-editor
        :text="item.text"
        @submit="updateItem"
      />
      <button @click="REMOVE_ARTICLE(item.id)">
        Delete
      </button>
    </div>
    <div v-else>
      <span>
        {{item.text}}
      </span>
      <span>
        {{item.updatedAt | formatDate}}
      </span>
      <button @click="editItem(item)">
        Edit
      </button>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { mapActions } from 'vuex'
import * as types from '@/store/mutation-types'
import TextEditor from '@/components/TextEditor'

export default {
  name: 'ArticleItem',
  components: {
    TextEditor
  },
  data () {
    return {
      onEdit: false
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
    ...mapActions([
      types.UPDATE_ARTICLE,
      types.REMOVE_ARTICLE
    ]),
    editItem () {
      this.onEdit = true
    },
    updateItem (value) {
      this.onEdit = false
      this.UPDATE_ARTICLE({
        id: this.item.id,
        text: value
      })
    }
  },
  filters: {
    formatDate: function (value) {
      if (!value) return ''
      return moment(value).format('YYYY/MM/DD hh:mm:ss')
    }
  }
}
</script>

<style scoped>
</style>
