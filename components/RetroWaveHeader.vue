<template>
  <div class="overflow-hidden">
      <svg height="320" width="400" class="logo-triangle">
          <defs>
              <linearGradient id="grad1" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" style="stop-color:rgb(50,50,50);stop-opacity:1" />
                  <stop offset="100%" style="stop-color:black;stop-opacity:1" />
              </linearGradient>
          </defs>
          <filter id="dropshadow" height="130%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
              <feOffset dx="2" dy="2" result="offsetblur" />
              <feMerge>
                  <feMergeNode/>
                  <feMergeNode in="SourceGraphic" />
              </feMerge>
          </filter>
          <polygon points="0,0 400,0 200,300" stroke="#36e2f8" stroke-width="3" />
      </svg>
      <div class="flex flex-col justify-center items-center mt-40 md:mt-20">
        <h1 class="text-7xl md:text-9xl">Miguel</h1>
        <h2 class="z-20 absolute -bottom-10 md:top-20 px-2 py-10 font-yellowtail text-6xl md:text-[150px]">Cassimiro</h2>
      </div>

  </div>
</template>
<style scoped>
h1 {
  color: #C6CBF5;
  font-family: 'Orbitron', sans-serif;
  font-weight: 1000;
  line-height: 1.2;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
  top: 80px;
  width: 852px;
  z-index: 11;
  background: -webkit-linear-gradient(top, #151C60, #C6CBF5 40%, black 40%, #E1A0CE 65%, white);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: white;
}

h2 {
  color: #d100b1;
  text-shadow: 0 0 1px #d100b1, 0 -3px 3px rgba(255, 255, 255, 0.8), 0 3px 3px rgba(0, 0, 0, 0.5), 0 0 15px #d100b1, 0 0 45px rgba(209, 0, 177, 0.8);
  text-align: center;
  text-decoration: underline;
  text-transform: none;
  -webkit-transform: skew(-10deg) rotate(-10deg);
  -ms-transform: skew(-10deg) rotate(-10deg);
  transform: skew(-10deg) rotate(-10deg);
  width: 100%;
}

.logo-triangle {
  -webkit-animation: dash 6s linear forwards;
  animation: dash 6s linear forwards;
  fill: url(#grad1);
  -webkit-filter: url(#dropshadow);
  filter: url(#dropshadow);
  left: 50%;
  margin-left: -200px;
  position: absolute;
  stroke-dasharray: 1200;
  stroke-dashoffset: 1200;
  top: 6em;
  z-index: 8;
}

@-webkit-keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}
</style>