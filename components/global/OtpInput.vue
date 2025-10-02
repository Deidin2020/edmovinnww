<template>
  <div class="vue-otp-input">
    <div :id="id" class="otp-wrapper" :class="isInputFocused ? activeWrapperClassHandler : wrapperClassHandler"
      :style="wrapperStyle">
      <input v-for="(digitInput, index) in digits" ref="digitInput" :key="id + index" v-model="inputValue[index]"
        autocomplete="one-time-code" class="otp-input"
        :class="[inputClassHandler, activeInput === index ? activeInputClassHandler : '']" :disabled="isDisabled"
        :style="inputStyle" @focus="onFocus(index)" @blur="onBlur" @paste="OnPaste" @input="onInput(index, $event)"
        @change="onChanged(index)" @keydown="keydownHandler(index, $event)">
    </div>
    <div v-if="!isValid" class="mt-2" />
    <span v-if="!isValid" :class="errorClassHandler">
      <slot name="errorMessage" />
    </span>
  </div>
</template>

<script>

export default {
  name: 'OtpInput',
  props: {
    id: {
      type: String,
      default: 'otp'
    },
    digits: {
      type: Number,
      default: 6
    },
    mode: {
      type: String,
      default: 'separate'
    },
    type: {
      type: String,
      default: 'number'
    },
    radius: {
      type: Number,
      default: 6
    },
    gap: {
      type: Number,
      default: 9
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    isValid: {
      type: Boolean,
      default: true
    },
    rtl: {
      type: Boolean,
      default: false
    },
    autoFocus: {
      type: Boolean,
      default: true
    },
    errorClass: {
      type: String,
      default: ''
    },
    separateInputClass: {
      type: String,
      default: ''
    },
    separateWrapperClass: {
      type: String,
      default: ''
    },
    groupInputClass: {
      type: String,
      default: ''
    },
    groupWrapperClass: {
      type: String,
      default: ''
    },
    activeInputClass: {
      type: String,
      default: ''
    },
    activeWrapperClass: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      inputValue: [],
      joinedValue: '',
      isInputFocused: false,
      activeInput: -1
    }
  },
  computed: {
    wrapperStyle() {
      const dir = this.rtl ? 'rtl' : 'ltr'
      const styles = {
        direction: dir,
        gap: `${this.gap}px`,
        'border-radius': `${this.radius}px`
      }
      return styles
    },
    inputStyle() {
      return {
        '--border-radius': `${this.radius}px`
      }
    },
    inputClassHandler() {
      if (this.mode === 'separate') {
        if (this.isValid) {
          return this.separateInputClass ? this.separateInputClass : 'defualt-input-separate'
        } else {
          return this.separateInputClass ? this.separateInputClass : 'defualt-error-input-separate'
        }
      }
      if (this.mode === 'group') {
        return this.groupInputClass ? this.groupInputClass : 'defualt-input-group'
      }
      return ''
    },
    activeInputClassHandler() {
      if (this.mode === 'separate') {
        return this.activeInputClass ? this.activeInputClass : 'defualt-active-input'
      }
      return ''
    },
    activeWrapperClassHandler() {
      if (this.mode === 'group') {
        if (this.isValid) {
          return this.activeWrapperClass ? this.activeWrapperClass : 'defualt-active-wrapper'
        } else {
          return this.activeWrapperClass ? this.activeWrapperClass : 'defualt-error-wrapper-group'
        }
      }
      return ''
    },
    wrapperClassHandler() {
      if (this.mode === 'separate') {
        return this.separateWrapperClass ? this.separateWrapperClass : 'defualt-wrapper-separate'
      }
      if (this.mode === 'group') {
        if (this.isValid) {
          return this.groupWrapperClass ? this.groupWrapperClass : 'defualt-wrapper-group'
        } else {
          return this.groupWrapperClass ? this.groupWrapperClass : 'defualt-error-wrapper-group'
        }
      }
      return ''
    },
    errorClassHandler() {
      return this.errorClass ? this.errorClass : 'default-error-class'
    }
  },
  mounted() {
    if (this.autoFocus && !this.isDisabled) {
      this.onFocus(0)
      this.$refs.digitInput[0].focus()
      // setting input type based on the existing types for now
      const types = ['text', 'password', 'number']
      if (types.includes(this.type)) {
        for (const box of this.$refs.digitInput) {
          box.type = this.type
        }
      }
    }
  },
  methods: {
    keydownHandler(index, e) {
      if (e.keyCode === 8 && e.target.value === '') {
        this.$refs.digitInput[Math.max(0, index - 1)].focus()
      }
    },
    onInput(index) {
      const [first, ...rest] =
        this.type === 'number'
          ? this.inputValue[index].replace(/[^0-9]/g, '')
          : this.inputValue[index]
      this.inputValue[index] = first === null || first === undefined ? '' : first
      const lastInputBox = index === this.digits - 1
      const insertedContent = first !== undefined
      if (insertedContent && !lastInputBox) {
        this.$refs.digitInput[index + 1].focus()
        this.$refs.digitInput[index + 1].value = rest.join('')
        this.$refs.digitInput[index + 1].dispatchEvent(new Event('input'))
      }
      this.joinedValue = this.inputValue.map(value => value).join('')
      this.$emit('value', this.joinedValue)
      if (this.joinedValue.length === this.digits) {
        this.onComplete(this.joinedValue)
      }
    },
    onFocus(index) {
      this.activeInput = index
      this.isInputFocused = true
    },
    onBlur() {
      this.activeInput = -1
      this.isInputFocused = false
    },
    onComplete(joinedValue) {
      this.onBlur()
      this.$refs.digitInput[this.digits - 1].blur()
      if (this.type === 'password') {
        this.$emit('on-complete', joinedValue)
      } else { this.$emit('on-complete', joinedValue) }
    },
    onChanged(index) {
      this.$emit('on-changed', this.inputValue[index])
    },
    OnPaste(event) {
      this.$emit('on-paste', event)
    },
    retunValue() {
      this.$emit('return-value', this.joinedValue)
    }
  }
}
</script>
