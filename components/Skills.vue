<template lang="pug">
div(class="relative h-screen flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center")
  AtomsSectionTitleComponent(label="Skills")

  h3(class="absolute top-36 uppercase tracking-[3px]") Hover over a skill currency proficiency

  div(class="grid grid-cols-4 gap-4 mt-16")
    Skill(
      v-for="(skill, index) in skills"
      :key="index"
      :name="skill.name"
      :logo-url="skill.logoUrl"
      :level="skill.level"
    )

</template>
<script lang="ts" setup>
import { skills } from '@/helpers/defaults'
</script>