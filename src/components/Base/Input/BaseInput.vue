<template>
  <label
      class="input"
      :class="{
        'input--with_icon': icon,
      }"
  >
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

    <svg v-if="!!icon" class="icon-16">
      <use :href="`/src/assets/images/svg/icon-${icon}.svg#icon`"></use>
    </svg>
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
  icon: string
}

withDefaults(defineProps<Props>(), {
  type: 'text',
  label: '',
  required: false,
  minlength: '',
  maxlength: '',
  icon: '',
})

const model = defineModel<string>('modelValue')
</script>

<style scoped lang="scss">
.input {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: $indent-xs;
  width: 100%;

  &--with_icon {
    .input__element {
      padding: 12px $indent-xl 12px $indent-l;
    }
  }

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

  svg {
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    fill: $color-white;
  }
}
</style>