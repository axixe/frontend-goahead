<template>
  <label class="input">
    <input
      v-model="model"
      :name="name"
      :type="type"
      :required="required"
      :placeholder="label"
      :minlength="minlength"
      :maxlength="maxlength"
      class="input__element caption-regular"
    />

    <span v-if="label" class="input__label body-p">{{ label }}</span>
  </label>
</template>

<script setup lang="ts">
interface Props {
  name: string
  type?: string
  label?: string
  required?: boolean
  minlength?: string | number
  maxlength?: string | number
}

withDefaults(defineProps<Props>(), {
  type: 'text',
  label: '',
  required: false,
  minlength: '',
  maxlength: '',
})

const model = defineModel<string>('modelValue')
</script>

<style scoped lang="scss">
.input {
  display: flex;
  flex-direction: column;
  gap: $indent-xs;
  width: 100%;

  &__label {
    order: -1;
    margin-left: $indent-l;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &__element {
    width: 100%;
    padding: 12px $indent-l;
    border-radius: $border-radius;
    background: $color-base-light;
    color: $color-white;

    &:not(:placeholder-shown) + .input__label {
      opacity: 1;
    }
  }
}
</style>