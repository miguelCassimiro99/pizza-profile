<template>
  <div class="overlay">
      <div class="grid w-full h-[350px] md:h-[450px] overflow-hidden">
          <div class="grid-fade"></div>
          <div class="grid-lines"></div>
      </div>
  </div>
</template>
<style scoped>
/* ----- Overlay ----- */
.overlay {
  background-color: #0e1416;
  z-index: 1000000;
}

.grid {
  z-index: 10px;
  perspective: 450px;
}

.grid-fade {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 11;
  background: radial-gradient(ellipse at 50% 50%, rgba(14, 20, 22, 0) 0%, #0e1416 80%);
}

.grid-lines {
  width: 100%;
  height: 200%;
  background-image: linear-gradient(to right, rgb(183, 0, 255) 1px, transparent 0), linear-gradient(to bottom, rgb(183, 0, 255) 1px, transparent 0);
  background-size: 45px 30px;
  background-repeat: repeat;
  transform-origin: 100% 0 0;
  animation: play 15s linear infinite;
}

@keyframes play {
  0% {
    transform: rotateX(45deg) translateY(-50%);
  }
  100% {
    transform: rotateX(45deg) translateY(0);
  }
}

</style>
