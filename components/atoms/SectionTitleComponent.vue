<template lang="pug">
h3(class="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl") {{ label }}
</template>
<script lang="ts" setup>
defineProps({
  label: {
    type: String,
    default: "Section"
  }
})
</script>