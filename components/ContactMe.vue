<script lang="ts" setup>
import BaseInput from './atoms/BaseInput.vue';
import SectionTitleComponent from './atoms/SectionTitleComponent.vue';


const formData = reactive({
  name: "",
  email: "",
  subject: "",
  message: ""
});

const submitForm = async () => {
  const emailBody = `mailto:miguel.cassimiro99@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
  window.location.href = emailBody;
}

</script>
<template lang="pug">
div(class="relative h-screen flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center")
  SectionTitleComponent(label="contact")

  div(class="flex flex-col justify-center items-center text-center mt-4 md:mt-0 space-y-2 md:space-y-5")
    h4(class="text-xl md:text-3xl font-semibold flex space-x-2") 
      span Yes we can.
      span(class="border-b-2 border-[#F7AB0A]") Lets Talk.

    div(class="flex justify-center items-center space-x-4 text-xs md:text-lg")
      Icon(name="ph:phone-fill" class="w-6 h-6 text-[#F7AB0A] animate-pulse")
      span +5512997751916

    div(class="flex justify-center items-center space-x-4 text-xs md:text-lg")
      Icon(name="ph:envelope-bold" class="w-6 h-6 text-[#F7AB0A] animate-pulse")
      span miguel.cassimiro99@gmail.com
    
    div(class="flex justify-center items-center space-x-4 text-xs md:text-lg")
      Icon(name="ph:map-pin" class="w-6 h-6 text-[#F7AB0A] animate-pulse")
      span Taubate, SP - Brazil

    form(
      @submit.prevent="submitForm"
      class="flex flex-col space-y-2 w-fit mx-auto px-3 md:px-0"
    )
      div(class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2")
        BaseInput(placeholder="Name" v-model="formData.name")
        BaseInput(placeholder="Email" v-model="formData.email")
      BaseInput(placeholder="Subject" v-model="formData.subject")
      textarea(class="contactInput" placeholder="Message" v-model="formData.message")
      button(
        class="bg-[#F7AB0A] py-2 px-10 rounded-md text-black font-bold text-lg"
        type="submit"
      ) Submit

  
</template>