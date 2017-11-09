<template>
  <el-card>
    <div v-if="onEdit">
      <text-editor
        :text="item.text"
        @submit="updateItem"
      >
        <el-button
          type="danger"
          icon="el-icon-delete"
          @click="removeItem(item)"
        ></el-button>
      </text-editor>
    </div>
    <div v-else>
      <router-link
        :to="{
          name: 'status',
          params: { key: item['.key'] }
        }"
      >
    <analog-clock
      :size="32"
      :lineWidth="2"
      :time="item.updatedAt"
    ></analog-clock>

        {{item.updatedAt | formatDate}}
      </router-link>
      <el-button
        type="text"
        icon="el-icon-edit"
        @click="editItem(item)"
      ></el-button>
      <div
        v-html="htmlText"
      ></div>
    </div>
  </el-card>
</template>

<script>
import moment from 'moment'
import { mapActions } from 'vuex'
import * as types from '@/store/mutation-types'
import TextEditor from '@/components/TextEditor'
import AnalogClock from '@/components/AnalogClock'

export default {
  name: 'ArticleItem',
  components: {
    TextEditor,
    AnalogClock
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
  computed: {
    htmlText () {
      return this.item.text.replace(/[&'`"<>\n]/g, match => ({
        '&': '&amp;',
        "'": '&#x27;',
        '`': '&#x60;',
        '"': '&quot;',
        '<': '&lt;',
        '>': '&gt;',
        '\n': '<br>'
      }[match]))
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
        item: this.item,
        text: value
      })
    },
    removeItem (item) {
      this.onEdit = false
      this.REMOVE_ARTICLE(item)
    }
  },
  filters: {
    formatDate (value) {
      if (!value) return ''
      return moment(value).format('YYYY/MM/DD HH:mm:ss')
    }
  }
}
</script>

<style scoped>
</style>
