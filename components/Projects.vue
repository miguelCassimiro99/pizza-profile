<script lang="ts" setup>
import SectionTitleComponent from './atoms/SectionTitleComponent.vue';

const projects = [{
  name: 'UmDois Esportes',
  description: 'A new project',
  img: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210712212601/Top-10-Front-End-Web-Development-Projects-for-Beginners.png'
}]

</script>
<template lang="pug">
div(class="relative h-screen flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center")
  SectionTitleComponent(label="Projects")

  div(class="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 ")

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