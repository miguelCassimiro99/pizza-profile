<template lang="pug">
header(class="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center")
  div(class="flex items-center social-icons space-x-3")
    NuxtLink(to="https://t.me/maiguelman" target="_blank" rel="noopener noreferrer")
      Icon(name="ph:telegram-logo" class="w-6 h-6 text-gray-600 hover:text-gray-400")
    
    NuxtLink(to="https://www.linkedin.com/in/miguel-cassimiro" target="_blank" rel="noopener noreferrer")
      Icon(name="ph:linkedin-logo" class="w-6 h-6 text-gray-600 hover:text-gray-400")
    
    NuxtLink(to="https://pin.it/2eoXHcf" target="_blank" rel="noopener noreferrer")
      Icon(name="ph:pinterest-logo-fill" class="w-6 h-6 text-gray-600 hover:text-gray-400")
    //- Social Icons

  div(class="flex text-gray-600 cursor-pointer mail-contact")
    NuxtLink(
      to="mailto:miguel.cassimiro99@gmail.com"
      target="_blank"
      class="flex items-center justify-center space-x-1 hover:text-gray-400"
    )
      Icon(name="ph:envelope" class="w-6 h-6")
      p(class="uppercase hidden md:inline-flex text-sm text-gray-200") Get in touch

</template>

<script setup lang="ts">
import { animate } from "motion"

onMounted(() => {
  const animationSocialIcons = animate(".social-icons", 
    { x: [-500, 0]}, {duration: 1.5}
  )
  const animationEmail = animate(".mail-contact", 
    { x: [500, 0]}, {duration: 1.5}
  )
})
</script>