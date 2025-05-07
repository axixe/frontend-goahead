<template>
  <div class="select">
    <BaseInput
      v-model="model"
      :name="name"
      :readonly="true"
      :icon="'angle'"
      :label="label"
      class="select__element"
      @click="!disabled && toggleSelectActivity()"
    />

    <BaseSelectList v-if="isSelectActive">
      <BaseSelectOption
          v-for="(option, index) in options"
          :key="index"
          :query="option.query"
          @select:element="(selectedQuery: string) => selectOption(selectedQuery)"
      >
        {{ option.label }}
      </BaseSelectOption>
    </BaseSelectList>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BaseInput from '@/components/Base/Input/BaseInput.vue'
import BaseSelectList from '@/components/Base/Select/BaseSelectList.vue'
import BaseSelectOption from "@/components/Base/Select/BaseSelectOption.vue";
import type OptionType from "@/global/types/OptionType.ts";

interface Props {
  name: string
  label?: string
  options?: OptionType[] | []
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  label: '',
  options: () => ([]),
  disabled: false,
})

const model = defineModel<string>('modelValue')
const emits = defineEmits<{
  (e: 'select:element'): void
}>()

const isSelectActive = ref<boolean>(false)

const toggleSelectActivity = () => {
  isSelectActive.value = !isSelectActive.value
}

const selectOption = (option: string) => {
  model.value = option
  toggleSelectActivity()
  emits('select:element')
}
</script>

<style scoped lang="scss">
.select {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  gap: $indent-s;

  &__element {
    &::v-deep(.input__element) {
      cursor: pointer;

      &::placeholder {
        color: $color-white;
      }
    }

    &::v-deep(.input__label) {
      display: none;
    }
  }
}
</style>
