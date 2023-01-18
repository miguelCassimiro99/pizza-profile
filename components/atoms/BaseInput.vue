<template>
<input
  class="outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7Ab0A]/40 hover:border-[#F7AB0A]/40"
  :placeholder="placeholder"
  type="text"
  :value="modelValue"
  @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  v-bind="$attrs"
/>
</template>
<script lang="ts" setup>

defineProps({
  placeholder: {
    type: String,
    default: ""
  },
  modelValue: {
    type: String,
    default: ""
  }
})
</script>