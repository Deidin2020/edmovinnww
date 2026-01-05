<template>
  <div class="space-y-2">
    <label class="text-sm font-medium leading-none">{{ label }}</label>

    <input v-model="internalValue" :type="type"
      class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      :placeholder="placeholder || `${$t('inputs.enter')} ${label}`" @change="clearError"
      @input="$emit('input', $event.target.value);" :disabled="disabled" :required="required" />

    <label class="end-icon" v-if="end_icon" @click="$emit('click.endIcon')">
      <slot name="end_icon" @click="$emit('click.endIcon')">
        <img :src="end_icon" alt="edmov" title="edmov" />
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
