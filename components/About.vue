<template lang="pug">
div(class="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center")
  AtomsSectionTitleComponent(label="About")
  img(
    ref="about-photo"
    class="-mb-40 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
    src="/perfil.jpg"
  )

  div(class="space-y-10 px-0 md:px-10 leading-tight")
    h4(class=" text-xl mt-8 font-semibold") Here is a #[span(class="underline decoration-[#F7AB0A]/50") little] brackground
    
    p I'm Miguel Cassimiro and I've been working as Frontend Developer by the past 2 years. When I started my carreer I had the chance to knew about Vue.js and today I'm a enthusiastic of this fantastic ecossystem, mainly using Nuxt.js 💚.
    | It's been an amazing journey and at this point I have some strong XP points on front-end development and backend which I love to share with everybody and construct amazing things.
    | Apart web development, I really enjoy cook, trying different recipes 🍗, listen music and play a good game (videogame or board games as well). I'm orange belt in Goju-ryu Karate and train helps me to be a better person 🥋.

</template>
<script setup lang="ts">
</script>
