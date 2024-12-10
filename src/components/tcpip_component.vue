<template>
    <div class="tcpip_container" id="tcpip_container_ID">
        <div class="tcpip_title">TCP/IP <div class="tcpip_title_02">   Introducció</div></div>
        <div class="tcpip_title_intro">
          <div class="tcpip_arpanet_image_container">
            <img src="/src/assets/arpanet.jpg" class="arpanet_image" id="arpanet_image_ID"> <!--@click="zoom_image('arpanet_image_ID')"-->
          </div>
          <div class="tcpip_title_intro_text">
            <p>
            El protocol TCP/IP és el cor de les xarxes modernes i la base d'Internet. 
            Desenvolupat als anys 70 com a part del projecte ARPANET del Departament de Defensa dels Estats Units, tenia l'objectiu d'interconnectar universitats i 
            institucions mitjançant una xarxa fiable basada en commutació de paquets.
            <br><br>
            A partir del 1983, amb la necessitat de millorar la fiabilitat i l'escalabilitat, el TCP/IP es va consolidar com l'estàndard de comunicació, 
            tant per a usos militars com per a la creixent demanda d'interconnexió civil, mantenint-se essencial fins avui dia.
            </p>
          </div>
        </div>
    </div>

    <div class="tcpip_container_02" id="tcpip_container_02_ID">
        <!--<div class="tcpip_animation_tittle">TCP/IP <div class="tcpip_title_02">   Animació</div></div>-->
        <div class="tcpip_animation_container" ref="tcpip_animation_container" id="tcpip_animation_container_ID">
          <div class="buttons_container">
            <button class="tcpip_play" id="play_ID"> <img src="/src/assets/play_button.png" class="play_button_image"> </button>
            <button class="tcpip_pause" id="pause_ID"> <img src="/src/assets/pause_button.png" class="pause_button_image"> </button>
            <button class="tcpip_restart" id="restart_ID"> <img src="/src/assets/restart_button.png" class="restart_button_image"> </button>
            <button class="tcpip_opcions" @click="restart_view()"><img src="/src/assets/arrow_button.png" class="arrow_button_image"></button> <!-- Desplegar tota informació -->
            <button class="tcpip_opcions"> Opcio 2 </button> <!-- Deshabilitar moviment de la camera automatic -->
            <button class="tcpip_opcions"> Opcio 3 </button> <!-- Control de la velocitat -->
            <button class="tcpip_opcions"> Opcio 4 </button> <!-- Mode temps real -->
            <button class="tcpip_opcions"> Opcio 5 </button> <!-- Mode preguntes d'examen -->
            <div class="tcpip_animation_container_tittle">TCP/IP Animació</div>
          </div>
          
          <div class="tcpip_wrapper_out" ref="tcpip_wrapper_out" id="tcpip_wrapper_out_ID">
            <div class="tcpip_wrapper_in" ref="tcpip_wrapper_in" id="tcpip_wrapper_in_ID">
              <div class="tcpip_wrapper_in_left" ref="tcpip_wrapper_in_left" id="tcpip_wrapper_in_left_ID">
                <div class="terminal_image_container" id="terminal_image_container_ID" @click="goto_selected('terminal_image_container_ID')">
                  <!--<div class="terminal_tag_text">User SSH terminal</div>-->
                  <img src="/src/assets/pc_screen_test_v3.svg" class="terminal_image_user">
                  <div class="terminal_input_container" style="display: none;">
                    <input class="terminal_input" type="text">
                    <div class="terminal_fake_cursor"></div>
                  </div>
                  <input class="terminal_input_container_02" id="terminal_input_container_02_ID" type="text" placeholder="Introduce a valid URL">
                </div>

                <div class="datagrama_img"><img class="datagrama_img_img" src="/src/assets/LayersTest.png"></div>
                <div class="datagrama_container">
                  <div class="datagrama_layer_04">
                    <div class="datagrama_layer_03">
                      <div class="datagrama_layer_02">
                        <div class="datagrama_layer_01">
                          <div class="datagrama_layer_00">
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="tcpip_left_layer_04_container" id="tcpip_left_layer_04_container_ID" @click="goto_selected('tcpip_left_layer_04_container_ID')">
                  <div class="tcpip_left_layer_04">Application Layer</div>
                </div>
                <div class="tcpip_left_layer_03_container" id="tcpip_left_layer_03_container_ID" @click="goto_selected('tcpip_left_layer_03_container_ID')">
                  <div class="tcpip_left_layer_03">Transpor Layer</div>
                </div>
                <div class="tcpip_left_layer_02_container" id="tcpip_left_layer_02_container_ID" @click="goto_selected('tcpip_left_layer_02_container_ID')">
                  <div class="tcpip_left_layer_02">Internet Layer</div>
                </div>
                <div class="tcpip_left_layer_01_container" id="tcpip_left_layer_01_container_ID" @click="goto_selected('tcpip_left_layer_01_container_ID')">
                  <div class="tcpip_left_layer_01">Link Layer</div>
                </div>
                <div class="tcpip_left_layer_00_container" id="tcpip_left_layer_00_container_ID" @click="goto_selected('tcpip_left_layer_00_container_ID')">
                  <div class="tcpip_left_layer_00">* Ethernet card * Cable</div>
                </div>
              </div>

              <div class="tcpip_wrapper_in_middle" ref="tcpip_wrapper_in_middle" id="tcpip_wrapper_in_middle_ID">
                <div class="terminal_image_container_router" style="justify-content: flex-end;">
                  <!--<div class="terminal_tag_text">User SSH terminal</div>-->
                  <img src="/src/assets/router.svg" class="terminal_image_router">
                </div>

                <div class="tcpip_middle_layer_04_container" id="tcpip_middle_layer_04_container_ID" @click="goto_selected('tcpip_middle_layer_04_container_ID')">
                </div>
                <div class="tcpip_middle_layer_03_container" id="tcpip_middle_layer_03_container_ID" @click="goto_selected('tcpip_middle_layer_03_container_ID')">
                </div>
                <div class="tcpip_middle_layer_02_container" id="tcpip_middle_layer_02_container_ID" @click="goto_selected('tcpip_middle_layer_02_container_ID')">
                </div>
                <div class="tcpip_middle_layer_01_container" id="tcpip_middle_layer_01_container_ID" @click="goto_selected('tcpip_middle_layer_01_container_ID')">
                </div>
              </div>

              <div class="tcpip_wrapper_in_right" ref="tcpip_wrapper_in_right" id="tcpip_wrapper_in_right_ID">
                <div class="terminal_image_container" style="justify-content: flex-end;">
                  <!--<div class="terminal_tag_text">User SSH terminal</div>-->
                  <img src="/src/assets/server_ssh_v2.svg" class="terminal_image_server">
                </div>
                <div class="tcpip_right_layer_04_container" id="tcpip_right_layer_04_container_ID" @click="goto_selected('tcpip_right_layer_04_container_ID')">
                  <div class="tcpip_right_layer_04">Application Layer</div>
                </div>
                <div class="tcpip_right_layer_03_container" id="tcpip_right_layer_03_container_ID" @click="goto_selected('tcpip_right_layer_03_container_ID')">
                  <div class="tcpip_right_layer_03">Transpor Layer</div>
                </div>
                <div class="tcpip_right_layer_02_container" id="tcpip_right_layer_02_container_ID" @click="goto_selected('tcpip_right_layer_02_container_ID')">
                  <div class="tcpip_right_layer_02">Internet Layer</div>
                </div>
                <div class="tcpip_right_layer_01_container" id="tcpip_right_layer_01_container_ID" @click="goto_selected('tcpip_right_layer_01_container_ID')">
                  <div class="tcpip_right_layer_01">Link Layer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>

    <div class="tcpip_container_03" id="tcpip_container_03_ID">
        <div class="tcpip_text_container">
          <!-- TEXT DE PROBA AIXO S'HA DE REDACTAR CORRECTAMENT -->
          <div class="tcpip_theory_tittle">TCP/IP <div class="tcpip_title_02">   Descripció teórica</div></div>
          <div class="tcpip_theory">
            The Internet protocol suite, commonly known as TCP/IP, is a framework for organizing the set of communication protocols used in the Internet and similar computer networks according to functional criteria. The foundational protocols in the suite are the Transmission Control Protocol (TCP), the User Datagram Protocol (UDP), and the Internet Protocol (IP). Early versions of this networking model were known as the Department of Defense (DoD) model because the research and development were funded by the United States Department of Defense through DARPA.
            The Internet protocol suite provides end-to-end data communication specifying how data should be packetized, addressed, transmitted, routed, and received. This functionality is organized into four abstraction layers, which classify all related protocols according to each protocol's scope of networking.[1][2] An implementation of the layers for a particular application forms a protocol stack. From lowest to highest, the layers are the link layer, containing communication methods for data that remains within a single network segment (link); the internet layer, providing internetworking between independent networks; the transport layer, handling host-to-host communication; and the application layer, providing process-to-process data exchange for applications.</div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import anime from 'animejs';

const tcpip_wrapper_in = ref(null);
const tcpip_animation_container = ref(null);
const demoWrapper = ref(null);

var isDragging = false;
var wasDragging = false;
var startX, startY;
var scale = 1;
var totalSumDragX = 0;
var totalSumDragY = 0;
var lastDragX = 0;
var lastDragY = 0;

var dragX = 0;
var dragY = 0;
var sumDragX = 0;
var sumDragY = 0;

/*
const tcpipwrapp = tcpip_wrapper_out.value;
const tcpcontainer = tcpip_animation_container.value;

let isDragging = ref(false);
let startX = ref(0);
let startY = ref(0);
let scale = ref(1);
let totalSumDragX = ref(0);
let totalSumDragY = ref(0);
let lastDragX = ref(0);
let lastDragY = ref(0);

let dragX = ref(0);
let dragY = ref(0);
let sumDragX = ref(0);
let sumDragY = ref(0);

const onMouseDown = (event) => {
    isDragging = true;
    startX = event.clientX;
    startY = event.clientY;
    lastDragX = 0;
    lastDragY = 0;

    event.preventDefault();
};

const onMouseUp = (event) => {
  isDragging = false;

  event.preventDefault();
};

const onMouseMove = (event) => {
  if (isDragging) {
    dragX = startX - event.clientX;
    dragY = startY - event.clientY;
    sumDragX = dragX - lastDragX;
    sumDragY = dragY - lastDragY;
    totalSumDragX -= sumDragX / 2;
    totalSumDragY -= sumDragY / 2;
    tcpipwrapp.style.transform = `translate(${totalSumDragX}px, ${totalSumDragY}px) scale(${scale})`;

    lastDragX = dragX;
    lastDragY = dragY;
  }

  event.preventDefault();
};

const wheel = (event) => {
  event.preventDefault();
  scale += event.deltaY * -0.001;
  scale = Math.min(Math.max(scale, 0.2), 5); //0.2 --- 2
  tcpipwrapp.style.transform = `translate(${totalSumDragX}px, ${totalSumDragY}px) scale(${scale})`;
  
  event.preventDefault();
};
*/

onMounted(() => {
  //document.getElementById('tcpip_animation_container_ID').setAttribute("style",  "height: " + (window.innerHeight - 230) + "px");
  document.getElementById('tcpip_container_ID').setAttribute("style",  "height: " + (window.innerHeight - 150) + "px");
  document.getElementById('tcpip_container_02_ID').setAttribute("style",  "height: " + (window.innerHeight - 150) + "px");
  document.getElementById('tcpip_container_03_ID').setAttribute("style",  "height: " + (window.innerHeight - 150) + "px");

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
  const tcpipwrapp = tcpip_wrapper_in.value;
  const tcpcontainer = tcpip_animation_container.value;



  tcpcontainer.addEventListener('mousedown', (event) => {
    console.log("Dragging: true");
    isDragging = true;
    startX = event.clientX;
    startY = event.clientY;
    lastDragX = 0;
    lastDragY = 0;
  });

  tcpcontainer.addEventListener('mouseup', () => {
    isDragging = false;
    console.log("Dragging: false");
  });

  tcpcontainer.addEventListener('mousemove', (event) => {
    if (isDragging) {
      wasDragging = true;
      console.log("WasDragging mousemove: ", wasDragging);
      dragX = startX - event.clientX;
      dragY = startY - event.clientY;
      sumDragX = dragX - lastDragX;
      sumDragY = dragY - lastDragY;
      totalSumDragX -= sumDragX / 2;
      totalSumDragY -= sumDragY / 2;
      tcpipwrapp.style.transform = `translate(${totalSumDragX}px, ${totalSumDragY}px) scale(${scale})`;
      lastDragX = dragX;
      lastDragY = dragY;
    }
    else{
      wasDragging = false;
    }
  });
  
  tcpcontainer.addEventListener('wheel', (event) => {
    event.preventDefault();
    scale += event.deltaY * -0.003; //-0.001
    scale = Math.min(Math.max(scale, 0.7), 6); //0.2 --- 2
    const rect = document.getElementById("tcpip_animation_container_ID").getBoundingClientRect();
    console.log("Mouse X: ", event.clientX, "Mouse Y: ", event.clientY);
    console.log("Rect X: ", rect.x, "Rect Y: ", rect.y);

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const centerX = mouseX - rect.width / 2;
    const centerY = -(mouseY - rect.height / 2);
    console.log(`Coordenadas: (${centerX}, ${centerY})`);
    if (event.deltaY > 0){
      totalSumDragX = totalSumDragX + (centerX*0.3);
      totalSumDragY = totalSumDragY - (centerY*0.3);
    }
    else{
      totalSumDragX = totalSumDragX - (centerX*0.3);
      totalSumDragY = totalSumDragY + (centerY*0.3);
    }
    tcpipwrapp.style.transform = `translate(${totalSumDragX}px, ${totalSumDragY}px) scale(${scale})`;
  });
  // ------------------------------------------------

  const animation2 = anime.timeline({
    loop: false,
    autoplay: false
  }).add({
    targets: '.datagrama_img',
    translateY: 85,
    duration: 1000,
    easing: 'easeInOutSine'
  }).add({
    targets: '.datagrama_img',
    begin: function(anim){
      document.getElementById('play_ID').style.backgroundColor = 'white';
      document.getElementById('pause_ID').style.backgroundColor = 'lightgray';
      animation2.pause();
    }
  }).add({
    targets: '.datagrama_img',
    translateY: 160,
    duration: 1000,
    easing: 'easeInOutSine'
  });

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
    //animation.play();
    animation2.play();
    document.getElementById('play_ID').style.backgroundColor = 'lightgray';
    document.getElementById('pause_ID').style.backgroundColor = 'white';
  };
  const inputContainer = document.querySelector('.terminal_input_container_02');
  inputContainer.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      var inputText = document.getElementById('terminal_input_container_02_ID').value;
      console.log(inputText);
      
      if (!inputText.includes('https://')) {
        inputText = 'https://' + inputText;
      }

      fetch(inputText, {
        method: 'GET',
      })
      .then(response => {
        // Accede a los headers de la respuesta
        const headers = response.headers;
        const contentType = headers.get('content-type');
        const customHeader = headers.get('x-custom-header'); // Ejemplo de header personalizado

        console.log('Content-Type:', contentType);
        console.log('Custom Header:', customHeader);

        // Guarda los valores en variables locales
        const headersData = {
          contentType: contentType,
          customHeader: customHeader,
        };

        console.log('Headers guardados:', headersData);
      })
      .catch(error => console.error('Error en la petición:', error));

      animation2.play();
      document.getElementById('play_ID').style.backgroundColor = 'lightgray';
      document.getElementById('pause_ID').style.backgroundColor = 'white';
    }
  });
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
    tcpipwrapp.style = `transform: translate(0px, 0px) scale(1);`;
  };
});

function restart_view(){
  scale = 1;
  totalSumDragX = 0;
  totalSumDragY = 0;
  lastDragX = 0;
  lastDragY = 0;
  document.getElementById('tcpip_wrapper_in_ID').style = `transform: translate(0px, 0px) scale(1);`;
}

function goto_selected(idName){
  if(wasDragging == false){
    // He de fer una variable global per una vegada es fa zoom es desactiva unaltre vegada la possibilitat de fer zoom.
    // Sol si es torna al inici es pot tornar a fer zoom.
    // Encara falla si abans de clicar movem la el fons.
    /*var idName = '';
    if(type == 4){
      idName = 'tcpip_left_layer_04_container_ID';
    } else if (type == 3){
      idName = 'tcpip_left_layer_03_container_ID';
    } else if (type == 2){
      idName = 'tcpip_left_layer_02_container_ID';
    } else if (type == 1){
      idName = 'tcpip_left_layer_01_container_ID';
    } else if (type == 0){
      idName = 'terminal_image_container_ID';
    }*/
    document.getElementById('tcpip_wrapper_in_ID').style.transition = "all 0.7s ease";
    var scale_value = 4; // Default 2
    var scale_multiplier = ((scale_value/2)/scale)
    var v1 = document.getElementById(idName).getBoundingClientRect()
    //console.log("Vector v1: ", v1.top, v1.left, v1.bottom, v1.right);
    var v1x = [(scale_multiplier*v1.top), (scale_multiplier*v1.left)];
    var v1y = [(scale_multiplier*v1.bottom), (scale_multiplier*v1.right)];
    //console.log("v1x: ", v1x, "v1y: ", v1y);

    var v2 = document.getElementById('tcpip_wrapper_in_ID').getBoundingClientRect()
    //console.log("Wrapper v2: ", v2.top, v2.left, v2.bottom, v2.right);
    var v2x = [(scale_multiplier*v2.top), (scale_multiplier*v2.left)];
    var v2y = [(scale_multiplier*v2.bottom), (scale_multiplier*v2.right)];
    //console.log("Wrapper v2x: ", v2x, "v2y: ", v2y);

    var vaux_x = [v2x[0] - v1x[0], v2x[1] - v1x[1]];
    var vaux_y = [v2y[0] - v1y[0], v2y[1] - v1y[1]];
    //console.log("vaux_x: ", vaux_x, "vaux_y: ", vaux_y);
    var x_sum = vaux_x[0] + vaux_y[0];  
    var y_sum = vaux_x[1] + vaux_y[1];  
    //console.log("x_sum: ", x_sum, "y_sum: ", y_sum);

    const tcpipwrapp = tcpip_wrapper_in.value;
    tcpipwrapp.style.transform = `translate(${y_sum}px, ${x_sum}px) scale(${scale_value})`;

    totalSumDragX = y_sum;
    totalSumDragY = x_sum;
    scale = scale_value;
    lastDragX = 0;
    dragX = 0;
    lastDragY = 0;
    dragY = 0;
    setTimeout(() => {
      document.getElementById('tcpip_wrapper_in_ID').style.transition = "";
    }, 700);
  }
}

function zoom_image(id){
  if (document.getElementById(id).style.width == "500px"){
    document.getElementById(id).setAttribute("style",  "width: 350px");
  } else {
    document.getElementById(id).setAttribute("style",  "width: 500px");
  }
}
</script>

<style scoped>
.tcpip_container, .tcpip_container_02, .tcpip_container_03{
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(8px);
  text-justify: inter-word;
  user-select: none;
}
  .tcpip_animation_container{
    user-select: none;
  }
.datagrama_img{
  user-select: none;
  position: absolute;
  height: 358px;
  top: 120px;
  left: 845px;
  z-index: 1;
}
.datagrama_img_img{
  height: 100%;
  user-select: none;
  width: 100%;
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
  width: 4px;
  height: 1.1em;
  background-color: #ffffff;
  animation: blink 1s steps(2, start) infinite;
  z-index: 1;
}
.tcpip_wrapper_out{
  /* background-color: rgba(255, 255, 0, 0.249); */
  cursor: grab;
  z-index: 0;
  pointer-events: auto;
}
/*---------- Per fer un objecte que no s'arrastri -------------*/
.terminal_image_user, .terminal_image_router, .terminal_image_server{
  -webkit-user-drag: none;
  user-select: none;
  -webkit-user-select: none;
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
  left: calc(-20px + 100%);
}
</style>