<script lang="ts" setup>
export interface IExperience {
  role: string
  company: string
  companyLogo: string
  technologies: ITechnologies[]
  period: string
  summaryPoints: string[]
}

export interface ITechnologies {
  name: string
  logoUrl: string
}

defineProps<IExperience>()
</script>

<template lang="pug">
article(class="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 max-w-xs md:max-w-full md:w-[600px] xl:w-[900px] snap-center bg-[#292929] px-4 py-4 cursor-pointer transition-opacity duration-200 overflow-hidden")
  img(
    :src="companyLogo"
    :alt="`${company}-logo`"
    class="w-16 h-16 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center"
  )
  header(class="px-0")
    h4(class="text-md md:text-3xl font-light") {{ role }}
    p(class="text-sm md:text-xl font-bold mt-1") {{ company }}
    
  main(class="px-0 max-w-xs min-w-fit")
    div(class="flex flex-wrap space-x-1")
      img(
        v-for="(tech, index) in technologies"
        :key="index"
        class="h-6 w-6 md:w-8 md:h-8"
        :src="tech.logoUrl" :alt="`${tech.name}-logo`"
      )
          

      //-tech used
    p(class="uppercase text-base md:text-lg py-5 text-gray-300") {{ period }}
    ul(class="list-disc space-y-2 md:space-y-4 ml-5 text-xs md:text-base")
      li(v-for="(summaryItem, index) in summaryPoints" :key="index") {{ summaryItem }}

</template>