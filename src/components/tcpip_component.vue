<template>
    <div class="tcpip_container" id="tcpip_container_ID">
        <div class="tcpip_title">TCP/IP Protocol</div>
        <div class="tcpip_animation_container" ref="tcpip_animation_container" id="tcpip_animation_container_ID">

          <button class="tcpip_play" id="play_ID"> <img src="/src/assets/play_button.png" class="play_button_image"> </button>
          <button class="tcpip_pause" id="pause_ID"> <img src="/src/assets/pause_button.png" class="pause_button_image"> </button>
          <button class="tcpip_restart" id="restart_ID"> <img src="/src/assets/restart_button.png" class="restart_button_image"> </button>
          <button class="tcpip_opcions"> Opcio 1 </button> <!-- Desplegar tota informació -->
          <button class="tcpip_opcions"> Opcio 2 </button> <!-- Deshabilitar moviment de la camera automatic -->
          <button class="tcpip_opcions"> Opcio 3 </button> <!-- Control de la velocitat -->
          <button class="tcpip_opcions"> Opcio 4 </button> <!-- Mode temps real -->
          <button class="tcpip_opcions"> Opcio 5 </button> <!-- Mode preguntes d'examen -->

          <div class="tcpip_wrapper_out" ref="tcpip_wrapper_out" id="tcpip_wrapper_out_ID">
            <div class="tcpip_wrapper_in" ref="tcpip_wrapper_in" id="tcpip_wrapper_in_ID">

              <div class="tcpip_wrapper_in_left" ref="tcpip_wrapper_in_left" id="tcpip_wrapper_in_left_ID">
                <div class="terminal_image_container"><img src="/src/assets/terminal_ssh.png" class="terminal_image"></div>
                <div class="terminal_input_container">
                  <input class="terminal_input" type="text">
                  <div class="terminal_fake_cursor"></div>
                </div>
              </div>

              <div class="tcpip_wrapper_in_right" ref="tcpip_wrapper_in_right" id="tcpip_wrapper_in_right_ID">
                <div class="terminal_image_container"><img src="/src/assets/terminal_ssh.png" class="terminal_image"></div>
                <div class="terminal_input_container"><input class="terminal_input"></div>
              </div>

            </div>
          </div>

        </div>

        <div class="tcpip_text_container">
          <!-- TEXT DE PROBA AIXO S'HA DE REDACTAR CORRECTAMENT -->
          <div class="tcpip_title">TCP/IP Protocol</div>
          <div class="tcpip_text">
            The Internet protocol suite, commonly known as TCP/IP, is a framework for organizing the set of communication protocols used in the Internet and similar computer networks according to functional criteria. The foundational protocols in the suite are the Transmission Control Protocol (TCP), the User Datagram Protocol (UDP), and the Internet Protocol (IP). Early versions of this networking model were known as the Department of Defense (DoD) model because the research and development were funded by the United States Department of Defense through DARPA.
            The Internet protocol suite provides end-to-end data communication specifying how data should be packetized, addressed, transmitted, routed, and received. This functionality is organized into four abstraction layers, which classify all related protocols according to each protocol's scope of networking.[1][2] An implementation of the layers for a particular application forms a protocol stack. From lowest to highest, the layers are the link layer, containing communication methods for data that remains within a single network segment (link); the internet layer, providing internetworking between independent networks; the transport layer, handling host-to-host communication; and the application layer, providing process-to-process data exchange for applications.</div>
        </div>
    </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import anime from 'animejs';

const tcpip_wrapper_out = ref(null);
const tcpip_animation_container = ref(null);
const demoWrapper = ref(null);

onMounted(() => {

  // Script per controlar la dimensió vertical del container de l'animació
  document.getElementById('tcpip_animation_container_ID').setAttribute("style",  "height: " + (window.innerHeight - 230) + "px");
  window.onresize = function (){
    document.getElementById('tcpip_animation_container_ID').setAttribute("style",  "height: " + (window.innerHeight - 250) + "px");
  };
  // ------------------------------------------------

  // Script per el fake cursor simulant una consola
  const input = document.querySelector('.terminal_input');
  const fakeCursor = document.querySelector('.terminal_fake_cursor');
  const wrapper = document.querySelector('.terminal_input_container');

  input.addEventListener('input', () => {
  const textWidth = input.value.length * 7.5; 
      fakeCursor.style.left = `${textWidth}px`; 
  });

  input.addEventListener('blur', () => {
      wrapper.classList.remove('active');
  });
  // ------------------------------------------------

  // Control del moviment de l'animació amb el ratolí
  const tcpipwrapp = tcpip_wrapper_out.value;
  const tcpcontainer = tcpip_animation_container.value;

  let isDragging = false;
  let startX, startY;
  let scale = 1;
  let totalSumDragX = 0;
  let totalSumDragY = 0;
  let lastDragX = 0;
  let lastDragY = 0;

  tcpcontainer.addEventListener('mousedown', (event) => {
    isDragging = true;
    startX = event.clientX;
    startY = event.clientY;
    lastDragX = 0;
    lastDragY = 0;
  });

  tcpcontainer.addEventListener('mouseup', () => {
    isDragging = false;
  });

  tcpcontainer.addEventListener('mousemove', (event) => {
    if (isDragging) {
      let dragX = startX - event.clientX;
      let dragY = startY - event.clientY;
      let sumDragX = dragX - lastDragX;
      let sumDragY = dragY - lastDragY;
      totalSumDragX -= sumDragX / 2;
      totalSumDragY -= sumDragY / 2;
      tcpipwrapp.style.transform = `translate(${totalSumDragX}px, ${totalSumDragY}px) scale(${scale})`;

      lastDragX = dragX;
      lastDragY = dragY;
    }
  });
  
  tcpcontainer.addEventListener('wheel', (event) => {
    event.preventDefault();
    scale += event.deltaY * -0.001;
    scale = Math.min(Math.max(scale, 0.7), 3); //0.2 --- 2
    tcpipwrapp.style.transform = `translate(${totalSumDragX}px, ${totalSumDragY}px) scale(${scale})`;
  });
  // ------------------------------------------------


  const animation = anime.timeline({
    loop: false,
    autoplay: false
  }).add({
    targets: '.tcpip_wrapper_in',
    scale: 2.7,
    translateY: 150,
    translateX: 220,
    duration: 1000,
    easing: 'easeInOutSine',
  }).add({
    targets: '.tcpip_wrapper_in',
    begin: function(anim){
      document.getElementById('play_ID').style.backgroundColor = 'white';
      document.getElementById('pause_ID').style.backgroundColor = 'lightgray';
      animation.pause();
    }
  }).add({
    targets: '.tcpip_wrapper_in',
    scale: 1,
    translateY: -150,
    translateX: -350,
    duration: 1000,
    easing: 'easeInOutSine'
  });

  document.querySelector('.tcpip_play').onclick = function(){
    animation.play();
    document.getElementById('play_ID').style.backgroundColor = 'lightgray';
    document.getElementById('pause_ID').style.backgroundColor = 'white';
  };
  document.querySelector('.tcpip_pause').onclick = function(){
    animation.pause();
    document.getElementById('play_ID').style.backgroundColor = 'white';
    document.getElementById('pause_ID').style.backgroundColor = 'lightgray';
  };
  document.querySelector('.tcpip_restart').onclick = function() {
    // Aquest boto s'encarrega de reiniciar tots els valors a 0
    document.getElementById('play_ID').style.backgroundColor = 'white';
    document.getElementById('pause_ID').style.backgroundColor = 'white';
    document.getElementById('restart_ID').style.backgroundColor = 'white';

    animation.restart();
    animation.pause();
    
    scale = 1;
    totalSumDragX = 0;
    totalSumDragY = 0;
    lastDragX = 0;
    lastDragY = 0;
    tcpipwrapp.style.transform = ``;
  };
});
</script>

<style scoped>
.tcpip_container{
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(8px);
  text-justify: inter-word;
  user-select: none;
}
  .tcpip_animation_container{
    user-select: none;
  }


.terminal_input{
  background: none;
  border: none;
  outline: none;
  caret-color: transparent;
}
.terminal_fake_cursor{
  position: absolute;
  top: 3px;
  left: 0px;
  width: 5px;
  height: 1.1em;
  background-color: #4af626;
  animation: blink 1s steps(2, start) infinite;
  z-index: 1;
}
.tcpip_wrapper_out{
  background-color: rgba(255, 255, 0, 0.249);
  position: absolute;
  cursor: grab;
  z-index: 0;
  pointer-events: auto;
}
.input_square{
  color: black;
  pointer-events: auto;
  position: relative;
  z-index: 11;
}
.terminal_image{
  pointer-events: none;
  -webkit-user-select: none;
  -ms-user-select: none; 
  user-select: none;
  pointer-events: none;
}

@keyframes blink {
  to {
    visibility: hidden;
  }
}

.terminal_input_container.active .terminal_fake_cursor{
  left: calc(10px + 100%);
}
</style>