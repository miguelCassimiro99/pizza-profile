<script lang="ts" setup>
import { workExperience } from '~~/helpers/defaults';
import maintenance from "@/assets/images/jobs/maintenance.jpg"
import dnx from "@/assets/images/jobs/dnx.jpeg"
import grpcom from "@/assets/images/jobs/grpcom.jpeg"
import piolett from "@/assets/images/jobs/piolett.webp"
import plasticOmnium from "@/assets/images/jobs/plastic-omnium.jpeg"
import sistemaacs from "@/assets/images/jobs/sistemaacs.jpeg"
import tecnored from "@/assets/images/jobs/tecnored.jpeg"

const imagesArr = [maintenance, dnx, grpcom, piolett, plasticOmnium, sistemaacs, tecnored];

const choseImage = (companyLogo: string):any => {
  if(companyLogo === 'dnx') return dnx;
  if(companyLogo === 'grpcom') return grpcom;
  if(companyLogo === 'piolett') return sistemaacs;
  if(companyLogo === 'plastic-omnium') return plasticOmnium;
  if(companyLogo === 'sistemaacs') return sistemaacs;
  if(companyLogo === 'tecnored') return tecnored;
}

//-TODO: rewrite type using task-tracker as example

</script>
<template lang="pug">
div(class="flex flex-col relative h-screen overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center")
  AtomsSectionTitleComponent(label="Experience")

  div(class="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-center mt-28 md:mt-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80")
    ExperienceCard(v-for="(work, index) in workExperience" :key="index"
      :company-logo="choseImage(work.companyLogo)"
      :company="work.company"
      :role="work.role"
      :period="work.period"
      :technologies="work.technologies"
      :summary-points="work.summaryPoints"
    )

</template>