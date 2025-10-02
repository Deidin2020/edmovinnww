<template>
  <div class="app-input form-group">
    <label class="form-label">{{ label }}</label>

    <label
      class="icon-on-label"
      v-if="icon"
      @click="$emit('click.icon')"
    >
      <img :src="icon"  alt="edmov" title="edmov"  />
    </label>

    <input
        v-model="internalValue"
        :type="type"
        class="form-control"
        :placeholder="placeholder || `${$t('inputs.enter')} ${label}`"
        @change="clearError"
        @input="$emit('input', $event.target.value);"
        :disabled="disabled"
        :required="required"
    />

    <label
        class="end-icon"
        v-if="end_icon"
        @click="$emit('click.endIcon')"
    >
      <slot name="end_icon" @click="$emit('click.endIcon')">
        <img :src="end_icon"  alt="edmov" title="edmov"  />
      </slot>
    </label>

    <small v-if="error" class="text-sm text-danger">{{ error }}</small>
  </div>
</template>

<script>
export default {
  props: {
    value: null,
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: null
    },
    label: {
      type: String,
      required: true
    },
    error: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    end_icon: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
      required: {
        type: Boolean,
        default: false,
      }
  },
  data() {
    return {
      internalValue: this.value
    };
  },
  watch: {
    value(newValue) {
      this.internalValue = newValue;
    }
  },
  methods: {
    clearError() {
      this.$emit('update:error', null);
    }
  },
  computed: {
    model: {
      get() {
        return this.internalValue;
      },
      set(value) {
        this.internalValue = value;
        this.$emit('input', value);
      }
    }
  }
};
</script>
