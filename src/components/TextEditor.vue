<template>
  <form @submit.prevent="submitText">
    <el-input
      type="textarea"
      :autosize="{ minRows: 2 }"
      v-model.trim="textInput"
      @keydown.enter.native="handleCmdEnter($event)"
    >
    </el-input>
    <el-button
      type="success"
      icon="el-icon-success"
      :disabled="isSubmitDisabled"
      @click="submitText"
    >Submit</el-button>
    <slot />
  </form>
</template>

<script>
export default {
  name: 'TextEditor',
  data () {
    return {
      textInput: this.text
    }
  },
  props: {
    text: {
      type: String,
      default: function () {
        return ''
      }
    }
  },
  computed: {
    isSubmitDisabled () {
      return this.textInput === ''
    }
  },
  methods: {
    submitText () {
      this.$emit('submit', this.textInput)
      this.textInput = ''
    },
    handleCmdEnter (e) {
      if (!this.isSubmitDisabled && (e.metaKey || e.ctrlKey)) {
        this.submitText()
      }
    }
  }
}
</script>

<style scoped>
</style>
