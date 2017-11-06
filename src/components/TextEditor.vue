<template>
  <form @submit.prevent="submitText">
    <textarea
      type="text"
      v-model.trim="textInput"
      @keydown.enter="handleCmdEnter($event)"
    >
    </textarea>
    <button
      type="submit"
      :disabled="isSubmitDisabled"
    >
      Submit
    </button>
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
