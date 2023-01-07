<script lang="ts" setup>
import SectionTitleComponent from './atoms/SectionTitleComponent.vue';

const projects = [
  {
    name: 'UmDois Esportes',
    description: 'A regional sports website. Follow the mainly news about soccer, championships, teams and opinions',
    img: 'https://media.gazetadopovo.com.br/sites/3/2020/11/22094831/meta-image-um-dois-esportes.jpg'
  },
  {
    name: 'Piolett',
    description: 'An enterprise management software. Track your sells, CRM, invoice emmits',
    img: 'https://piolett.com/static/img/piolett_mockup_br-min.webp'
  },
  {
    name: 'Utils Dog',
    description: 'Make it easy :)',
    img: '/utils-dog.png'
  },
  {
    name: 'HearTalks',
    description: 'A secret message to make someone smile',
    img: '/heart-talks.png'
  },
  {
    name: 'Figma Blog Design',
    description: 'A mobile prototype for a Design Blog',
    img: '/figma-design-blog.png'
  },

]

</script>
<template lang="pug">
div(class="relative h-screen flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center")
  SectionTitleComponent(label="Projects")

  div(class="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80")

    div(
      v-for="(project, index) in projects"
      :key="index"
      class="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
    )
      img(
        :src="project.img"
        :alt="project.name"
      )
      div(class="space-y-10 px-0 md:px-10 max-w-6xl")
        h4(class="text-3xl font-semibold text-center") {{ project.name }}

        p(class="text-lg text-center md:text-left") {{ project.description }}



  div(class="w-full absolute top-[30%] left-0 bg-[#F7AB0A]/10 h-[500px] -skew-y-12")
</template>