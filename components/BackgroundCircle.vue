<template lang="pug">
div(class="relative flex justify-center items-center circles")
  div(class="border absolute border-[#33333] rounded-full h-[200px] w-[200px] mt-52 animate-ping")
  div(class="border absolute border-[#33333] rounded-full h-[300px] w-[300px] mt-52")
  div(class="border absolute border-[#33333] rounded-full h-[500px] w-[500px] mt-52 animate-ping")
  div(class="rounded-full border border-[#F7AB0A] opacity-20 h-[650px] w-[650px] absolute mt-52 animate-pulse")
  div(class="rounded-full border border-[#33333] h-[800px] w-[800px] absolute mt-52")
 
</template>
<script setup lang="ts">
import { animate } from "motion"

onMounted(() => {

  const animateCircle = animate(".circles", 
    {opacity: [0, 0.1, 0.2, 0.4, 0.8, 0.1, 1.0, 0.1] },
    {duration: 3}
  )

  const animateCircle2 = animate(".circles",
    {borderRadius: ["20%", "20%", "50%", "80%", "20%"]},
    {duration: 3}
  )

  const animateCircle3 = animate(".circles",
    {scale: [1, 2, 2, 3, 1]},
    {duration: 2.5}
  )
})

</script>