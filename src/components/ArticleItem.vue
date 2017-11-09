<template>
  <el-card>
    <router-link
      :to="{
        name: 'status',
        params: { key: item['.key'] }
      }"
    >
      <analog-clock
        :size="48"
        :lineWidth="2"
        :time="item.updatedAt"
      ></analog-clock>
      {{item.updatedAt | formatDate}}
    </router-link>

    <el-popover
      ref="popover"
      placement="bottom"
      v-model="isEditMenuVisible">
      <el-menu
        style="border-right:none"
      >
        <el-menu-item
          index="1"
          @click="editItem(item)"
        >
          <i class="el-icon-edit"></i>
          <span>Edit</span>
        </el-menu-item>
        <el-menu-item
          index="2"
          @click="removeItem(item)"
        >
          <i class="el-icon-delete"></i>
          <span>Remove</span>
        </el-menu-item>
      </el-menu>
    </el-popover>

    <el-button
      type="text"
      icon="el-icon-arrow-down"
      style="float: right; padding: 3px 0"
      v-popover:popover>
    </el-button>

    <div
      v-html="htmlText"
    ></div>

    <el-dialog title="Edit" :visible.sync="onEdit">
      <text-editor
        :text="item.text"
        @submit="updateItem"
      ></text-editor>
    </el-dialog>
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
      onEdit: false,
      isEditMenuVisible: false
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
      this.$confirm('本当に削除しますか？', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        this.REMOVE_ARTICLE(item)
        this.$message({
          type: 'success',
          message: 'Delete completed'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Delete canceled'
        })
      })
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
