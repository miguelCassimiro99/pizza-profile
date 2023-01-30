<template lang="pug">
main(class="h-screen overflow-hidden")
  div(class="bg-black flex-col justify-center items-center")
    img(
      src="../assets/images/retrowave-bg.svg"
      alt="bg"
      class="transition-[top 1s] duration-1000 absolute md:relative top-[30%] md:top-[17%] lg:top-[8%] xl:top-[-10%]"
    )
    div(class="relative md:absolute left-0 right-0 top-1/3 bottom-0")
      RetroWaveHeader
    div(class="text-white z-10 future-cop w-full bottom-0 absolute")
      div(class="opacity-40")
        RetrowaveGrid

</template>
<script lang="ts" setup>


</script>