<template>
  

  <div class="tcpip_container" id="tcpip_container_ID">

    <div class="tcpip_tabs_container" id="tcpip_tabs_container_ID">
      <div class="tab_animacio" id="tab_animacio_ID" @click="change_tab(1)">Animation<hr class="tab_animacio_hr" id="tab_animacio_hr_ID"></div>
      <div class="tab_teoria" id="tab_teoria_ID" @click="change_tab(2)">Theory<hr class="tab_teoria_hr" id="tab_teoria_hr_ID"></div>
      <div class="tab_info" id="tab_info_ID" @click="change_tab(3)">More info<hr class="tab_info_hr" id="tab_info_hr_ID"></div>
    </div>

    <div class="tcpip_content_container" id="tcpip_content_container_ID">
      <div class="tcpip_title">TCP/IP <div class="tcpip_title_02">   Introducció</div></div>
      <div class="tcpip_title_intro">
        <div class="tcpip_title_intro_text">
          <div class="tcpip_arpanet_image_container">
            <img src="/src/assets/arpanet.jpg" class="arpanet_image" id="arpanet_image_ID"> <!--@click="zoom_image('arpanet_image_ID')"-->
          </div>
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
          <button class="tcpip_play" id="play_ID"> <img src="/src/assets/play_icon.svg" class="play_button_image"> </button>
          <button class="tcpip_pause" id="pause_ID"> <img src="/src/assets/stop_icon.svg" class="pause_button_image"> </button>
          <button class="tcpip_restart" id="restart_ID"> <img src="/src/assets/reset_icon.svg" class="restart_button_image"> </button>
          <button class="tcpip_opcions_arrows" @click="restart_view()"><img src="/src/assets/arrow_button.png" class="arrow_button_image"></button> <!-- Reajustar la vista -->
          <button class="tcpip_opcions" @click="scroll_camera_button()" id="tcpip_scroll_camera_button_ID"> Scroll camera </button> <!-- Deshabilitar moviment de la camera amb l'animació -->
          <button class="tcpip_opcions"> Velocitat </button> <!-- Control de la velocitat -->
          <button class="tcpip_opcions"> Temps real </button> <!-- Mode temps real -->
          <button class="tcpip_opcions"> Info </button> <!-- Informació extra en cada pausa -->
          <button class="tcpip_opcions"> Mode examen </button> <!-- Mode preguntes d'examen -->
          <div class="tcpip_animation_container_tittle">TCP/IP Animació</div>
        </div>
        
        <div class="tcpip_wrapper_out" ref="tcpip_wrapper_out" id="tcpip_wrapper_out_ID">
          <div class="tcpip_wrapper_in" ref="tcpip_wrapper_in" id="tcpip_wrapper_in_ID">
            <div class="tcpip_wrapper_in_left" ref="tcpip_wrapper_in_left" id="tcpip_wrapper_in_left_ID">

              <div class="tcpip_terminal_container">
                <div class="terminal_container" id="terminal_container_ID">
                  <div class="terminal_tag_text_container">
                    <div class="terminal_tag_text">
                      Client
                    </div>
                  </div>
                  <div class="terminal_image_container" @click="goto_selected('terminal_container_ID')">
                    <img src="/src/assets/pc_screen_test_v4.svg" class="terminal_image">
                  </div>
                  <input class="terminal_input_container" @click="goto_selected('terminal_container_ID')" id="terminal_input_container_ID" autocomplete="off" type="text" placeholder="Introduce a valid URL">
                </div>
              </div> 
                
              <div class="datagrama_img" style="display: none"><img class="datagrama_img_img" src="/src/assets/LayersTest.png"></div>

              <div class="datagrama_container">
                <div class="datagrama_layer_04">
                  <div class="datagrama_layer_03">
                    <div class="datagrama_layer_02">
                      <div class="datagrama_layer_01">
                        <div class="datagrama_l01_text_container">
                          <div class="datagrama_l01_text"><input type="text" value="GET / HTTP/1.1" class="datagrama_input" data-key="request-line" /></div>
                          <div class="datagrama_l01_text">Host: <input type="text" value="www.google.com" class="datagrama_input" data-key="host" /></div>
                          <div class="datagrama_l01_text">Connection: <input type="text" value="keep-alive" class="datagrama_input" data-key="connection" /></div>
                          <div class="datagrama_l01_text">Upgrade-Insecure-Requests: <input type="text" value="1" class="datagrama_input" data-key="upgrade" /></div>
                          <div class="datagrama_l01_text">User-Agent: <input type="text" value="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36" class="datagrama_input"/></div>
                          <div class="datagrama_l01_text">Accept: <input type="text" value="text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7" class="datagrama_input"/></div>
                          <div class="datagrama_l01_text">Accept-Encoding: <input type="text" value="1" class="datagrama_input"/></div>
                          <div class="datagrama_l01_text">Accept-Language: <input type="text" value="1" class="datagrama_input"/></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="tcpip_left_layer_04_container" id="tcpip_left_layer_04_container_ID" @click="goto_selected('tcpip_left_layer_04_container_ID')">
                <div class="tcpip_left_layer_04">App Layer (HTTP)</div>
                <div class="tcpip_left_layer_04_cache"><img src="../assets/local_database_L4.svg" class="tcpip_left_layer_04_cache_img"></div>
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

              <div class="tcpip_router_container">
                <div class="router_container" id="router_container_ID">
                  <div class="router_tag_text_container">
                    <div class="router_tag_text">
                      Router - DNS
                    </div>
                  </div>
                  <div class="router_image_container">
                    <img src="/src/assets/router.svg" class="router_image">
                  </div>
                </div>
              </div> 

              <div class="tcpip_middle_layer_04_container" id="tcpip_middle_layer_04_container_ID">
              </div>
              <div class="tcpip_middle_layer_03_container" id="tcpip_middle_layer_03_container_ID">
              </div>
              <div class="tcpip_middle_layer_02_container" id="tcpip_middle_layer_02_container_ID" @click="goto_selected('tcpip_middle_layer_02_container_ID')">
              </div>
              <div class="tcpip_middle_layer_01_container" id="tcpip_middle_layer_01_container_ID" @click="goto_selected('tcpip_middle_layer_01_container_ID')">
              </div>
              <!-- CAMBIAR EL NOM AIXO D'ABAIX -->
              <div class="tcpip_left_layer_00_container" id="tcpip_left_layer_00_container_ID" @click="goto_selected('tcpip_left_layer_00_container_ID')">
                <div class="tcpip_left_layer_00">* Ethernet card * Cable</div>
              </div>


            </div>

            <div class="tcpip_wrapper_in_right" ref="tcpip_wrapper_in_right" id="tcpip_wrapper_in_right_ID">

              <div class="tcpip_server_container">
                <div class="server_container" id="server_container_ID">
                  <div class="server_tag_text_container">
                    <div class="server_tag_text">
                      Server
                    </div>
                  </div>
                  <div class="server_image_container">
                    <img src="/src/assets/server_ssh_v2.svg" class="server_image">
                  </div>
                </div>
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
              <!-- CAMBIAR EL NOM AIXO D'ABAIX -->
              <div class="tcpip_left_layer_00_container" id="tcpip_left_layer_00_container_ID" @click="goto_selected('tcpip_left_layer_00_container_ID')">
                <div class="tcpip_left_layer_00">* Ethernet card * Cable</div>
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
    
  </div>

  <!-- tcpip_container_02 -> auxiliar_functions.txt -->
  <!-- tcpip_container_03 -> auxiliar_functions.txt -->
</template>

<script setup>
import { ref, onMounted } from 'vue';
import anime from 'animejs';

const tcpip_wrapper_in = ref(null);
const tcpip_animation_container = ref(null);
const demoWrapper = ref(null);

var isDragging = false;
var isTransitioning = false; // Si estem en una transició per evitar que es pugui moure la resta
var wasDragging = false;
//var followTarget = true;
var scrollCamera = true;
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

onMounted(() => {
  //document.getElementById('tcpip_animation_container_ID').setAttribute("style",  "height: " + (window.innerHeight - 230) + "px");
  document.getElementById('tcpip_container_ID').setAttribute("style",  "height: " + (window.innerHeight - 100) + "px"); // 150
  document.getElementById('tcpip_container_02_ID').setAttribute("style",  "height: " + (window.innerHeight - 100) + "px");
  document.getElementById('tcpip_container_03_ID').setAttribute("style",  "height: " + (window.innerHeight - 100) + "px");
  document.getElementById('tcpip_wrapper_in_ID').setAttribute("style",  "transform: translate(0px, 0px) scale(1)");

  /* Script per el fake cursor simulant una consola
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
  ------------------------------------------------ */

  // Control del moviment de l'animació amb el ratolí
  const tcpipwrapp = tcpip_wrapper_in.value;
  const tcpcontainer = tcpip_animation_container.value;
  tcpcontainer.addEventListener('mousedown', (event) => {
    console.log("Dragging: true");
    isDragging = true;
    document.body.style.userSelect = 'grabbing';
    if (!isTransitioning){
      startX = event.clientX;
      startY = event.clientY;
      lastDragX = 0;
      lastDragY = 0;
    }
  });

  tcpcontainer.addEventListener('mouseup', () => {
    isDragging = false;
    document.body.style.userSelect = 'pointer';
    console.log("Dragging: false");
  });

  tcpcontainer.addEventListener('mousemove', (event) => {
    if(!isTransitioning){
      console.log("IsDragging mousemove: ", isDragging);
      if(isDragging){
        wasDragging = true;
        console.log("WasDragging mousemove: ", wasDragging);
        dragX = startX - event.clientX;
        dragY = startY - event.clientY;
        sumDragX = dragX - lastDragX;
        sumDragY = dragY - lastDragY;
        totalSumDragX -= sumDragX / 2;
        totalSumDragY -= sumDragY / 2;
        //tcpipwrapp.style.transform = `translate(${totalSumDragX}px, ${totalSumDragY}px) scale(${scale})`;
        tcpipwrapp.style.transform = `translateX(${totalSumDragX}px) translateY(${totalSumDragY}px) scale(${scale})`;
        lastDragX = dragX;
        lastDragY = dragY;
      }
      else{
        wasDragging = false;
      }
    }
  });
  
  tcpcontainer.addEventListener('wheel', (event) => {
    event.preventDefault();
    if (!isTransitioning){
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
      //tcpipwrapp.style.transform = `translate(${totalSumDragX}px, ${totalSumDragY}px) scale(${scale})`;
      tcpipwrapp.style.transform = `translateX(${totalSumDragX}px) translateY(${totalSumDragY}px) scale(${scale})`;
    }
    
  });

  function input_cache_animation(){
    // ------------------------------------------------
    // INPUT USUARI i COMPROBAR CACHE
    // Tenim guardada la IP/MAC del router per estalviarnos un pas d'ARP
    var vm01 = 100;
    var vm02 = 400;
    var vm03 = 40;

    var input_cache = anime.timeline({
      loop: false,
      autoplay: false
    })
    input_cache.add({
      // 0- Zoom al PC web
      // 1- El input s'ha d'omplir amb la URL total si no ho està (http)
      // 2- Es fa l'scroll del text i es fa un folow si la opcio esta activada
      // 3- Es comprova si la URL esta a la cache
      // 3.1- Si esta a la cache pasem a la seguent animació que es l'enviament del GET HTTP
      // 3.2- Si no esta a la cache pasem a l'animació de consulta DNS al router
      targets: '.terminal_input_container',
      translateY: function() {
        const { tX, tY, scale } = get_transform('terminal_input_container_ID');
        //console.log("tX_input_cache: ", tX, "tY_input_cache: ", tY, "scale_input_cache: ", scale);
        //totalSumDragY = (tY + vm01);
        return (tY + vm01);
      },
      translateX: function() {
        const { tX, tY, scale } = get_transform('terminal_input_container_ID');
        //console.log("tX_input_cache: ", tX, "tY_input_cache: ", tY, "scale_input_cache: ", scale);
        //totalSumDragX = tX;
        return tX;
      },
      duration: 1000,
      easing: 'easeInOutSine',
    })

    var input_cache_wrapper = anime.timeline({
      loop: false,
      autoplay: false
    })
    if(scrollCamera){
      input_cache_wrapper.add({
        targets: '.tcpip_wrapper_in',
        translateY: function() {
          const { tX, tY, scale } = get_transform('tcpip_wrapper_in_ID');
          totalSumDragY = (tY - (scale*(vm01)));
          return totalSumDragY
        },
        translateX: function() {
          const { tX, tY, scale } = get_transform('tcpip_wrapper_in_ID');
          totalSumDragX = tX;
          return totalSumDragX;
        },
        duration: 1000,
        easing: 'easeInOutSine',
      })
    }

    return {input_cache, input_cache_wrapper};
  }

  function input_promise(reset){
    const {input_cache, input_cache_wrapper} = input_cache_animation();
    /*const animations = [input_cache.play()]; // Animació base
    console.log("Scroll camera PROMISE: ", scrollCamera);
    if(scrollCamera){
      animations.push(input_cache_wrapper.play()); // Scroll del fons (es pot desahabilitar)
    }
    Promise.all(animations).then(() => {
      console.log("Promise all finished");
    });*/
    
    if(reset){
      input_cache.restart();
      input_cache.pause();
      input_cache.seek(0);
      input_cache_wrapper.restart();
      input_cache_wrapper.pause();
      input_cache_wrapper.seek(0);
      restart_view();
      // Falten valors a reiniciar (input)
    }
    else{
      document.getElementById('play_ID').style.filter = 'grayscale(100%)';
      Promise.all([
        input_cache.play(),
        input_cache_wrapper.play(),
      ]).then(() => {
        //document.getElementById('play_ID').style.filter = 'grayscale(0%)'; <-------------------
        console.log("Promise all finished");
      }).catch((error) => {
        console.error("Error:", error);
      });
    }
    
  }

  // ---------- ANIMATION 2 ----------
  /*
  const animation2 = anime.timeline({
    loop: false,
    autoplay: false
  }).add({ 
    targets: '.terminal_input_container',
    begin: function(anim){
      const input_test_unselect = document.getElementById('terminal_input_container_ID');
      input_test_unselect.blur(); // Desseleccionar l'input
      goto_selected('terminal_container_ID'); // Centrar la vista en el element seleccionat
      folow_target(0, 85, 1); // x_mov, y_mov, sec
    },
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

  // ---------- ANIMATION ----------
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
      //animation.pause();
    }
  }).add({
    targets: '.tcpip_wrapper_in',
    scale: 1,
    translateY: -150,
    translateX: -350,
    duration: 1000,
    easing: 'easeInOutSine'
  });

  if (wasDragging == false){
    animation.add({
      targets: '.tcpip_left_layer_04_container',
      translateY: 200,
      duration: 1000,
      easing: 'easeInOutSine'
    })
  }
  if (wasDragging == false){
    animation.add({
      targets: '.tcpip_left_layer_04_container',
      translateX: 100,
      duration: 1000,
      easing: 'easeInOutSine'
    })
  }*/

  document.querySelector('.tcpip_play').onclick = function(){
    //animation.play();
    //animation2.play();

    const input = document.getElementById('terminal_input_container_ID');
    const value = input.value.trim();

    if (value === '') {
      // Si el input està buit
      console.log('El campo está vacío.');
    } else if (check_url(value)) {
      // Si el input és una URL vàlida
      input_promise(false);
      console.log('Es una URL válida.');
    } else {
      // Si el input no és una URL vàlida
      console.log('No es una URL válida.');
    }
  };

  // Event Listener al clickar ENTER al input del terminal
  const inputContainer = document.querySelector('.terminal_input_container');
  inputContainer.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      var inputText = document.getElementById('terminal_input_container_ID').value;
      console.log(inputText);
      
      if (!inputText.includes('https://')) {
        inputText = 'https://' + inputText;
      }

      let User_Agent = navigator.userAgent;
      let Host = inputText;
      let Date_Now = new Date().toUTCString();
      let Content_Type = 'application/x-www-form-urlencoded';
      let Content_Length = 0; // En octets 8-bit bytes
      let Connection = ['keep-alive', 'close'];
      let Accept_Language = navigator.languages;
      console.log("Accept_Language: ", Accept_Language);
      let Accept = 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8';
      let IP = 0;

      fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        IP = data.ip;
        console.log("IP:", data.ip);
      })
      .catch(error => console.error('Error al obtener la IP:', error));

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

    //animation.restart();
    //animation.pause();
    input_promise(true);
    
    scale = 1;
    totalSumDragX = 0;
    totalSumDragY = 0;
    lastDragX = 0;
    lastDragY = 0;
    //tcpipwrapp.style = `transform: translate(0px, 0px) scale(1);`;
    tcpipwrapp.style = `transform: translateX(0px) translateY(0px) scale(1);`;
  };
});

function restart_view(){
  scale = 1;
  totalSumDragX = 0;
  totalSumDragY = 0;
  lastDragX = 0;
  lastDragY = 0;
  //document.getElementById('tcpip_wrapper_in_ID').style = `transform: translate(0px, 0px) scale(1);`;
  document.getElementById('tcpip_wrapper_in_ID').style = `transform: translateX(0px) translateY(0px) scale(1);`;
}

function folow_target(x_mov, y_mov, sec){
  document.getElementById('tcpip_wrapper_in_ID').style.transition = "all " + sec + "s ease-in-out";
  const computedStyle = window.getComputedStyle(document.getElementById('tcpip_wrapper_in_ID'));
  const matrix = computedStyle.transform;

  if (matrix !== 'none') {
    const values = matrix.match(/matrix\(([^)]+)\)/)[1].split(', ');
    const translateX = parseFloat(values[4]);
    const translateY = parseFloat(values[5]);
    console.log("TranslateX actual:", translateX);
    console.log("TranslateY actual:", translateY);
    console.log("X_mov:", x_mov);
    console.log("Y_mov:", y_mov);

    const x_sum_aux = translateX - (x_mov*scale);
    const y_sum_aux = translateY - (y_mov*scale);
    console.log("X_sum:", x_sum_aux);
    console.log("Y_sum:", y_sum_aux);
    const tcpipwrapp = tcpip_wrapper_in.value;
    //tcpipwrapp.style.transform = `translate(${x_sum_aux}px, ${y_sum_aux}px) scale(${scale})`;
    tcpipwrapp.style.transform = `translateX(${x_sum_aux}px) translateY(${y_sum_aux}px) scale(${scale})`;
    totalSumDragX = x_sum_aux;
    totalSumDragY = y_sum_aux;

  } else {
    console.log("El elemento no tiene transformación aplicada.");
  }

  lastDragX = 0;
  dragX = 0;
  lastDragY = 0;
  dragY = 0
  setTimeout(() => {
      document.getElementById('tcpip_wrapper_in_ID').style.transition = "";
    }, 700);
}

function goto_selected(idName){
  if(wasDragging == false && !isTransitioning){
    isTransitioning = true;
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
    //tcpipwrapp.style.transform = `translate(${y_sum}px, ${x_sum}px) scale(${scale_value})`;
    tcpipwrapp.style.transform = `translateX(${y_sum}px) translateY(${x_sum}px) scale(${scale_value})`;

    totalSumDragX = y_sum;
    totalSumDragY = x_sum;
    scale = scale_value;
    lastDragX = 0;
    dragX = 0;
    lastDragY = 0;
    dragY = 0;
    setTimeout(() => {
      document.getElementById('tcpip_wrapper_in_ID').style.transition = "";
      isTransitioning = false;
    }, 700);
  }
}

function get_transform(idName) {
  const element = document.getElementById(idName)

  if (!element) {
    console.error(`Elemento con ID '${idName}' no encontrado.`);
    return { tX: 0, tY: 0, scale: 1 };
  }

  const computedStyle = window.getComputedStyle(element);
  const matrix = computedStyle.transform;
  var tX, tY; 

  if (matrix === 'none') {
    return { tX: 0, tY: 0, scale: 1 };
  }

  if (matrix !== 'none') {
    const values = matrix.match(/matrix\(([^)]+)\)/)[1].split(', ');
    const tX_old = parseFloat(values[4]);
    const tY_old = parseFloat(values[5]);
    console.log("tX_old:", tX_old);
    console.log("tY_old:", tY_old);
    tX = tX_old;
    tY = tY_old;
  } else {
    console.log("El elemento no tiene transformación aplicada.");
  }

  console.log("tX_function: ", tX, "tY_function: ", tY, "scale_function: ", scale);
  return { tX, tY, scale };
}

function zoom_image(id){
  if (document.getElementById(id).style.width == "500px"){
    document.getElementById(id).setAttribute("style",  "width: 350px");
  } else {
    document.getElementById(id).setAttribute("style",  "width: 500px");
  }
}

// Funcio per cambiar l'estetica del tab seleccionat
function change_tab(tab){
  if (tab == 1){
    document.getElementById('tcpip_content_container_ID').style.display = "none";
    document.getElementById('tcpip_container_03_ID').style.display = "none";
    document.getElementById('tcpip_container_02_ID').style.display = "inline-flex";
    document.getElementById('tab_animacio_ID').style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    document.getElementById('tab_teoria_ID').style.backgroundColor = "rgba(0, 0, 0, 0.35)";
    document.getElementById('tab_info_ID').style.backgroundColor = "rgba(0, 0, 0, 0.35)";
    document.getElementById('tab_animacio_hr_ID').style.borderColor = "white";
    document.getElementById('tab_teoria_hr_ID').style.borderColor = "#ffffff75";
    document.getElementById('tab_info_hr_ID').style.borderColor = "#ffffff75";
  } else if (tab == 2){
    document.getElementById('tcpip_content_container_ID').style.display = "none";
    document.getElementById('tcpip_container_03_ID').style.display = "inline-flex";
    document.getElementById('tcpip_container_02_ID').style.display = "none";
    document.getElementById('tab_animacio_ID').style.backgroundColor = "rgba(0, 0, 0, 0.35)";
    document.getElementById('tab_teoria_ID').style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    document.getElementById('tab_info_ID').style.backgroundColor = "rgba(0, 0, 0, 0.35)";
    document.getElementById('tab_animacio_hr_ID').style.borderColor = "#ffffff75";
    document.getElementById('tab_teoria_hr_ID').style.borderColor = "white";
    document.getElementById('tab_info_hr_ID').style.borderColor = "#ffffff75";
  } else if (tab == 3){
    document.getElementById('tcpip_content_container_ID').style.display = "inline-flex";
    document.getElementById('tcpip_container_03_ID').style.display = "none";
    document.getElementById('tcpip_container_02_ID').style.display = "none";
    document.getElementById('tab_animacio_ID').style.backgroundColor = "rgba(0, 0, 0, 0.35)";
    document.getElementById('tab_teoria_ID').style.backgroundColor = "rgba(0, 0, 0, 0.35)";
    document.getElementById('tab_info_ID').style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    document.getElementById('tab_animacio_hr_ID').style.borderColor = "#ffffff75";
    document.getElementById('tab_teoria_hr_ID').style.borderColor = "#ffffff75";
    document.getElementById('tab_info_hr_ID').style.borderColor = "white";
  }
}

function check_url(value) {
    const regex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/.*)?$/;
    return regex.test(value);
}

function scroll_camera_button(){
  if(scrollCamera){
    scrollCamera = false;
    document.getElementById('tcpip_scroll_camera_button_ID').style.backgroundColor = "rgba(255, 0, 255, 0.5)";
    console.log("Scroll camera: ", scrollCamera);
  }
  else{
    scrollCamera = true;
    document.getElementById('tcpip_scroll_camera_button_ID').style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    console.log("Scroll camera: ", scrollCamera);
  }
}
</script>

<style scoped>
/*.tcpip_container, .tcpip_container_02, .tcpip_container_03{
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(8px);
  text-justify: inter-word;
  user-select: none;
}*/
.tcpip_content_container, .tcpip_container_02, .tcpip_container_03{
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  text-justify: inter-word;
  user-select: none;
}
.tab_animacio{
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  text-justify: inter-word;
  user-select: none;
}
.tab_teoria, .tab_info{
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(8px);
  text-justify: inter-word;
  user-select: none;
}

.tcpip_animation_container{
  user-select: none;
}
.terminal_image, .router_image, .server_image{
  user-select: none;
  pointer-events: none;
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