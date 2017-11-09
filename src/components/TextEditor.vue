<template>
  <el-form>
    <el-form-item>
      <el-input
        type="textarea"
        :autosize="{ minRows: 3 }"
        v-model.trim="textInput"
        @keydown.enter.native="handleCmdEnter($event)"
      >
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button
        type="success"
        :disabled="isSubmitDisabled"
        @click="submitText"
        size="medium"
        icon="el-icon-circle-check"
      >Submit</el-button>
    </el-form-item>
  </el-form>
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
