<template>
    <div class="tcpip_container" id="tcpip_container_ID">
        <div class="tcpip_title">TCP/IP Protocol</div>
        <div class="tcpip_animation_container">

            <div class="animationContainer" ref="animationContainer" id="animationContainer_ID">
                <button class="play" id="play_ID"> Play </button>
                <button class="pause" id="pause_ID"> Pause </button>
                <div class="demo-wrapper" ref="demoWrapper" id="demo-wrapper_ID">
                    <div class="square">
                        <input placeholder="Insertar text">
                        <div class="info" style="visibility: hidden;" id="info_ID">Text de prova</div>
                    </div>
                    <div class="circle"></div>
                </div>        
            </div>

        </div>
    </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import anime from 'animejs';

const animationContainer = ref(null);
const demoWrapper = ref(null);

onMounted(() => {
  const container = animationContainer.value;
  const wrapper = demoWrapper.value;

  // Aquí va todo el código de tu animación
  let isDragging = false;
  let startX, startY;
  let scale = 1;
  let totalSumDragX = 0;
  let totalSumDragY = 0;
  let lastDragX = 0;
  let lastDragY = 0;

  container.addEventListener('mousedown', (event) => {
    isDragging = true;
    startX = event.clientX;
    startY = event.clientY;
    lastDragX = 0;
    lastDragY = 0;
  });

  container.addEventListener('mouseup', () => {
    isDragging = false;
  });

  container.addEventListener('mousemove', (event) => {
    if (isDragging) {
      let dragX = startX - event.clientX;
      let dragY = startY - event.clientY;
      let sumDragX = dragX - lastDragX;
      let sumDragY = dragY - lastDragY;
      totalSumDragX -= sumDragX / 2;
      totalSumDragY -= sumDragY / 2;
      wrapper.style.transform = `translate(${totalSumDragX}px, ${totalSumDragY}px) scale(${scale})`;

      lastDragX = dragX;
      lastDragY = dragY;
    }
  });

  container.addEventListener('wheel', (event) => {
    event.preventDefault();
    scale += event.deltaY * -0.001;
    scale = Math.min(Math.max(scale, 0.2), 2);
    wrapper.style.transform = `translate(${totalSumDragX}px, ${totalSumDragY}px) scale(${scale})`;
  });

  const animation2 = anime({
    loop: false,
    autoplay: false,
    targets: '.circle',
    translateX: 500,
    easing: 'easeInOutSine',
    duration: 1000
  });

  const animation = anime.timeline({
    loop: false,
    autoplay: false
  }).add({
    targets: '.square',
    translateX: 500,
    delay: (el, i) => i * 100,
    direction: 'alternate',
    easing: 'easeInOutSine',
    duration: 1000,
  }).add({
    targets: '.square',
    begin: () => {
      console.log('Animation paused');
      animation.pause();
      document.getElementById('play_ID').style.backgroundColor = 'red';
    }
  }).add({
    targets: '.square',
    translateY: 500,
    delay: (el, i) => i * 100,
    direction: 'alternate',
    easing: 'easeInOutSine',
    duration: 1000,
    begin: () => {
      document.getElementById('play_ID').style.backgroundColor = 'lightgray';
      document.getElementById('info_ID').style.visibility = 'visible';
      animation2.play();
    }
  });

  document.querySelector('.play').onclick = animation.play;
  document.querySelector('.pause').onclick = animation.pause;
});
</script>

<style scoped>
  .tcpip_container{
    background: rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.37);
    backdrop-filter: blur(8px);
    text-align: justify;
    text-justify: inter-word;
  }

.animationContainer{
    background-color: violet;
    width: 700px;
    height: 400px;
    overflow: hidden;
    cursor: grab;
}
.play, .pause{
    border: black 1px solid;
    width: 100px;
    height: 30px;
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
}
.demo-wrapper{
    background-color: yellow;
}
.square{
    height: 100px;
    width: 100px;
    background-color: red;
}
.circle{
    height: 100px;
    width: 100px;
    background-color: blue;
    border-radius: 50%;
}
</style>