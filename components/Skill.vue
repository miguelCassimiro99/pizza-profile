<script lang="ts" setup>
interface ISkill {
  name: string
  logoUrl: string
  level: string
}

defineProps<ISkill>()
</script>
<template lang="pug">
div(class="group relative flex cursor-pointer")
  img(
    class="w-10 h-10 rounded-full border object-cover xl:h-12 xl:w-12 filter group-hover:grayscale transition duration-300 ease-in-out"
    :src="logoUrl"
    :alt="name"
  )
  div(
    class="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-10 w-10 xl:h-12 xl:w-12 rounded-full z-0"
  )
    div(class="flex items-center justify-center h-full")
      p(class="text-base font-bol text-black opacity-100 p-2") {{ level || "100%" }}
</template>