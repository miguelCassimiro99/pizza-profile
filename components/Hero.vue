<template lang="pug">
div(class="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden")
  BackgroundCircle
  img(
    class="relative rounded-full h-32 w-32 max-auto object-cover"
    src="https://github.com/miguelCassimiro99.png"
  )
  div(class="z-20")
    h2(class="text-sm uppercase text-gray-500 pb-2 tracking-[15px]") Software Engineer
    h1(class="text-5xl lg:text-6xl font-semibold px-10")
      VueWriter(:array="message")
    div(class="pt-5")
      a(href="#about")
        button(class="heroButton") About
      a(href="#experience")
        button(class="heroButton") Experience
      a(href="#skills")
        button(class="heroButton") Skills
      a(href="#projects")
        button(class="heroButton") Projects
      a(href="#contact")
        button(class="heroButton") Contact
  
</template>
<script setup>
import VueWriter from "vue-writer"

const message = ref(["Hi there, I'm Miguel Cassimiro", "Vue.js Passionate", "Pizza"])

</script>
