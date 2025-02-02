<template>
  

  <div class="tcpip_container" id="tcpip_container_ID">

    <div class="tcpip_tabs_container" id="tcpip_tabs_container_ID">
      <div class="tab_animacio" id="tab_animacio_ID" @click="change_tab(1)">Simulació<hr class="tab_animacio_hr" id="tab_animacio_hr_ID"></div>
      <div class="tab_teoria" id="tab_teoria_ID" @click="change_tab(2)">Teoria<hr class="tab_teoria_hr" id="tab_teoria_hr_ID"></div>
      <div class="tab_info" id="tab_info_ID" @click="change_tab(3)">Història<hr class="tab_info_hr" id="tab_info_hr_ID"></div>
    </div>

    <div class="tcpip_container_01" id="tcpip_container_01_ID">
      <!--<div class="tcpip_animation_tittle">TCP/IP <div class="tcpip_title_02">   Animació</div></div>-->

      <div class="tcpip_tutorial_container" id="tcpip_tutorial_container_ID">
        <div class="tcpip_tutorial_text_container" id="tcpip_tutorial_text_container_ID">
          <div class="tcpip_tutorial_exit_button"><div class="tcpip_tutorial_exit_button_01"><div class="tcpip_tutorial_exit_button_02">TUTORIAL</div><div class="tcpip_tutorial_exit_button_03" @click="close_show_tutorial()">x</div></div></div>
          <div class="tcpip_tutorial_text" id="tcpip_tutorial_text_01_ID" style="display: inline-flex;">
            Benvinguts al tutorial de la simulació del protocol HTTP. 
            A continuació es mostrarà, pas a pas, com funcionen tant els controls com la simulació en si. Comencem!
          </div>
          <div class="tcpip_tutorial_text_02" id="tcpip_tutorial_text_02_ID" style="display: none;">
            <div class="tcpip_tutorial_text_021">En la part superior trobem la barra de navegació i control amb els seguents botons: </div> 
            <div class="tcpip_tutorial_text_022"><img src="/src/assets/play_icon.svg" class="tcpip_tutorial_play_img">: Play    <img src="/src/assets/stop_icon.svg" class="tcpip_tutorial_pause_img">: Pausa    <img src="/src/assets/reset_icon.svg" class="tcpip_tutorial_restart_img">: Reinici</div>
            <div class="tcpip_tutorial_text_022"><img src="/src/assets/arrow_button.png" class="tcpip_tutorial_restart_img">: Ajustar la vista a la finestra</div>
            <div class="tcpip_tutorial_text_022"><img src="/src/assets/camera_movement_icon.svg" class="tcpip_tutorial_restart_img">: Bloquejar el moviment del fons</div>
            <div class="tcpip_tutorial_text_022"><img src="/src/assets/info_icon_02.svg" class="tcpip_tutorial_restart_img">: Mostrar o amagar els punts d'informació</div>
            <!--<div class="tcpip_tutorial_text_022"><img src="/src/assets/arrow_button.png" class="tcpip_tutorial_restart_img">: Mode examen on hauras d'anar introduint els valors que faltin</div>-->
            <div class="tcpip_tutorial_text_022"><img src="/src/assets/tutorial_icon.svg" class="tcpip_tutorial_restart_img">: Tornar a desplegar el tutorial</div>
          </div>
          <div class="tcpip_tutorial_text_03" id="tcpip_tutorial_text_03_ID" style="display: none;">
            <div class="tcpip_tutorial_text_031">
              En la part inferior tenim la finestra on es mostra la simulació. 
              Podem diferenciar tres blocs, un primer per representar un ordinador d'un usuari, 
              el següent per representar un router i DNS que actua com intermediari entre les dues xarxes, 
              i l'últim per representar un servidor. Tots ells amb les seves IP i MAC que en començar la simulació es generaran automàticament.</div>
            <div class="tcpip_tutorial_text_032">
              <img src="/src/assets/pc_screen_test_v4.svg" class="tcpip_tutorial_pc_img">
              <img src="/src/assets/router.svg" class="tcpip_tutorial_router_img">
              <img src="/src/assets/server_ssh_v2.svg" class="tcpip_tutorial_server_img">
            </div>
          </div>
          <div class="tcpip_tutorial_text_04" id="tcpip_tutorial_text_04_ID" style="display: none;">
            <div class="tcpip_tutorial_text_041">
              Seguidament, veiem les capes de TCP/IP, cadascuna diferenciada amb un color.
              En cada capa podrem anar seguint com la informació es va transformant i encapsulant per a ser 
              lliurada a una capa inferior o superior.
            </div>
            <div class="tcpip_tutorial_text_042">
              <div class="tcpip_tutorial_layer_04" id="tcpip_tutorial_layer_04_ID">App Layer</div>
              <div class="tcpip_tutorial_layer_03" id="tcpip_tutorial_layer_03_ID">Transport Layer</div>
              <div class="tcpip_tutorial_layer_02" id="tcpip_tutorial_layer_02_ID">Internet Layer</div>
              <div class="tcpip_tutorial_layer_01" id="tcpip_tutorial_layer_01_ID">Link Layer</div>
              <div class="tcpip_tutorial_layer_00" id="tcpip_tutorial_layer_00_ID">Phisical Layer</div>
            </div>
          </div>
          <div class="tcpip_tutorial_text_05" id="tcpip_tutorial_text_05_ID" style="display: none;">
            <div class="tcpip_tutorial_text_051">
              En cada capa del protocol trobem la representació de l'emmagatzematge de les dades en forma de cache, 
              en les quals es van enregistrant les dades necessàries per realitzar les diverses funcions. 
              Aquests valors es poden editar i veure com els canvis afecten al transcurs del datagrama.
            </div>
            <div class="tcpip_tutorial_text_052">
              <img src="/src/assets/local_database_L3_tuto.svg" class="tcpip_tutorial_cache_img">
            </div>
          </div>
          <div class="tcpip_tutorial_text_06" id="tcpip_tutorial_text_06_ID" style="display: none;">
            <div class="tcpip_tutorial_text_061">
              Per acabar ja sol queda detallar el flux de la simulació. 
              El primer que s'ha de fer és introduir una URL que vulguis al navegador del client. 
              A partir d'aquí donar-li play i anar veient com es transforma aquesta petició, a més que pots editar qualsevol valor en tot moment. 
              <br><br> 
              Som'hi!
            </div>
          </div>
          <div class="tcpip_tutorial_next_previous_container">
            <div class="tcpip_tutorial_previous" id="tcpip_tutorial_previous_ID" @click="next_prev_tutorial('prev')" style="color: #b9b9b9;">< Previ</div>
            <div class="tcpip_tutorial_slidersnum_container">
              <div class="tcpip_tutorial_slidersnum" id="tcpip_tutorial_slidersnum_01_ID" style="color: #4a84ff;">·</div>
              <div class="tcpip_tutorial_slidersnum" id="tcpip_tutorial_slidersnum_02_ID">·</div>
              <div class="tcpip_tutorial_slidersnum" id="tcpip_tutorial_slidersnum_03_ID">·</div>
              <div class="tcpip_tutorial_slidersnum" id="tcpip_tutorial_slidersnum_04_ID">·</div>
              <div class="tcpip_tutorial_slidersnum" id="tcpip_tutorial_slidersnum_05_ID">·</div>
              <div class="tcpip_tutorial_slidersnum" id="tcpip_tutorial_slidersnum_06_ID">·</div>
            </div>
            <div class="tcpip_tutorial_next" id="tcpip_tutorial_next_ID" @click="next_prev_tutorial('next')">Seguent ></div>
          </div>
        </div>
        <div class="tcpip_tutorial_text_container_outborder" @click="close_show_tutorial()"></div>
      </div>

      <div class="tcpip_animation_container" ref="tcpip_animation_container" id="tcpip_animation_container_ID">
        <div class="buttons_container" id="buttons_container_ID">
          <button class="tcpip_play" id="play_ID"> <img src="/src/assets/play_icon.svg" class="play_button_image" id="play_img_ID"> </button>
          <button class="tcpip_pause" id="pause_ID"> <img src="/src/assets/stop_icon.svg" class="pause_button_image" id="pause_button_image_ID"> </button>
          <button class="tcpip_restart" id="restart_ID"> <img src="/src/assets/reset_icon.svg" class="restart_button_image"> </button>
          <!--<button class="tcpip_stepback" id="tcpip_stepback_ID"> <img src="/src/assets/stepback_icon.svg" class="stepback_button_image"> </button> --> <!-- Pas enrere -->
          <button class="tcpip_opcions_arrows" @click="restart_view()"><img src="/src/assets/full_screen_arrows.svg" class="arrow_button_image" id="arrow_button_image_ID"></button> <!-- Reajustar la vista -->
          <button class="tcpip_opcions_camera" @click="scroll_camera_button()" id="tcpip_scroll_camera_button_ID"><img src="/src/assets/camera_movement_icon.svg" class="camera_button_image" id="camera_button_image_ID"></button> <!-- Deshabilitar moviment de la camera amb l'animació -->
          <!--<button class="tcpip_opcions"> Velocitat </button> --> <!-- Control de la velocitat -->
          <!--<button class="tcpip_opcions"> Temps real </button> --> <!-- Mode temps real -->
          <button class="tcpip_opcions_info" @click="change_info_popups()" id="tcpip_info_button_ID"><img src="/src/assets/info_icon_02.svg" class="info_button_image" id="info_button_image_ID"></button> <!-- Informació extra en cada pausa -->
          <!--<button class="tcpip_opcions"> Mode examen </button>--> <!-- Mode preguntes d'examen -->
          <button class="tcpip_opcions_tutorial" @click="close_show_tutorial()"><img src="/src/assets/tutorial_icon.svg" class="tutorial_button_image" id="tutorial_button_image_ID"></button>
          <div class="tcpip_animation_container_tittle" id="tcpip_animation_container_tittle_ID">HTTP Simulació</div>
        </div>

        <div class="tcpip_wrapper_out" ref="tcpip_wrapper_out" id="tcpip_wrapper_out_ID">
          <div class="tcpip_wrapper_in" ref="tcpip_wrapper_in" id="tcpip_wrapper_in_ID">
            
            <div class="tcpip_wrapper_in_left" ref="tcpip_wrapper_in_left" id="tcpip_wrapper_in_left_ID">

              <div class="tcpip_terminal_container">
                <div class="terminal_container" id="terminal_container_ID">
                  <div class="terminal_image_container" @click="goto_selected('terminal_container_ID', 700, 0)">
                    <div class="terminal_tag_text_container">
                      <div class="terminal_tag_text">
                        Client
                      </div>
                    </div>
                    <img src="/src/assets/pc_screen_test_v4.svg" class="terminal_image">
                  </div>
                  <div class="client_info_container">
                    <div class="client_info_title">Local Address</div>
                    <div class="client_info_ip">IP: <input class="client_info_ip_input" id="client_info_ip_input_ID" value="-" type="text"></div>
                    <div class="client_info_mac">MAC: <input class="client_info_mac_input" id="client_info_mac_input_ID" value="-" type="text"></div>
                    <!-- <div class="client_info_mask">MASK: <input class="client_info_mask_input" value="255.255.255.0" type="text"></div> -->
                  </div>
                  <div class="terminal_input_container" id="terminal_input_container_ID">
                    <input class="terminal_input" ref="terminal_input" id="terminal_input_ID" value="google.com" autocomplete="off" type="text" placeholder=" Escriu una URL" @click="goto_selected('terminal_input_container_ID', 700, 0)">
                    <input class="terminal_input_copy" ref="terminal_input" id="terminal_input_copy_ID" value="192.168.1.1" autocomplete="off" type="text" placeholder="">
                  </div>
                  <!-- <input class="terminal_input_container" @click="goto_selected('terminal_input_container_ID')" ref="terminal_input_container" id="terminal_input_container_ID" value="google.com" autocomplete="off" type="text" placeholder="Introduce a valid URL">-->
                </div>
              </div> 
                
              <div class="datagrama_img" style="display: none"><img class="datagrama_img_img" src="/src/assets/LayersTest.png"></div>

              <div class="datagrama_container" id="datagrama_container_ID">
                <div class="datagrama_layer_01" id="datagrama_layer_01_ID">

                  <div class="datagrama_l01_text_container" id="datagrama_l01_text_container">
                    <div class="datagrama_l01_text_container_01">
                      <div class="datagrama_l01_vbutton" id="datagrama_l01_vbutton_ID" @click="click_datagram('datagrama_layer_01_ID')"><</div>
                    </div>
                    <div class="datagrama_l01_text_container_02" id="datagrama_l01_text_container_02_ID">
                      <div class="datagrama_l01_text"><div class="datagrama_l01_text_tag">Source port:</div> <input type="text" value="" class="datagrama_input" id="datagrama_TCP_01_ID" data-key="host" /></div>
                      <div class="datagrama_l01_text"><div class="datagrama_l01_text_tag">Destination port:</div> <input type="text" value="" class="datagrama_input" id="datagrama_TCP_02_ID" data-key="connection" /></div>
                      <div class="datagrama_l01_text"><div class="datagrama_l01_text_tag">Sequence Number:</div> <input type="text" value="" class="datagrama_input" id="datagrama_TCP_03_ID" data-key="upgrade" /></div>
                      <div class="datagrama_l01_text"><div class="datagrama_l01_text_tag">Acknowledgment Number:</div> <textarea type="text" value="" class="datagrama_input_textarea" id="datagrama_TCP_04_ID" spellcheck="false"></textarea></div>
                      <div class="datagrama_l01_text"><div class="datagrama_l01_text_tag">Window:</div> <textarea type="text" value="" class="datagrama_input_textarea" id="datagrama_TCP_05_ID" spellcheck="false"></textarea></div>
                      <div class="datagrama_l01_text"><div class="datagrama_l01_text_tag">Checksum:</div> <input type="text" value="" class="datagrama_input" id="datagrama_TCP_06_ID"/></div>
                    </div>
                    <div class="datagrama_l01_text_container_03" id="datagrama_l01_text_container_03_ID">
                        <div class="datagrama_l01_hex" id="datagrama_l01_hex_ID">
                          <textarea type="text" class="datagrama_input_hex" id="datagrama_TCP_07_ID" value="" spellcheck="false">1c61b47094b8002b67f867b60800450001ed455f400080060000c0a801aec0a80101e6d7005073dbfc5d76a56a2d5018040285df0000474554202f20485454502f312e310d0a486f73743a203139322e3136382e312e310d0a436f6e6e656374696f6e3a206b6565702d616c6976650d0a557067726164652d496e7365637572652d52657175657374733a20310d0a557365722d4167656e743a204d6f7a696c6c612f352e30202857696e646f7773204e542031302e303b2057696e36343b2078363429204170706c655765624b69742f3533372e333620284b48544d4c2c206c696b65204765636b6f29204368726f6d652f3133312e302e302e30205361666172692f3533372e33360d0a4163636570743a20746578742f68746d6c2c6170706c69636174696f6e2f7868746d6c2b786d6c2c6170706c69636174696f6e2f786d6c3b713d302e392c696d6167652f617669662c696d6167652f776562702c696d6167652f61706e672c2a2f2a3b713d302e382c6170706c69636174696f6e2f7369676e65642d65786368616e67653b763d62333b713d302e370d0a4163636570742d456e636f64696e673a20677a69702c206465666c6174650d0a4163636570742d4c616e67756167653a2065732d45532c65733b713d302e392c63613b713d302e382c656e3b713d302e372c69743b713d302e360d0a0d0a</textarea>
                          <div class="datagrama_input_hex_size" id="datagrama_TCP_08_ID"></div>
                        </div>
                      </div>
                  </div>

                  <div class="datagrama_layer_02" id="datagrama_layer_02_ID">

                    <div class="datagrama_l02_text_container" id="datagrama_l02_text_container">
                      <div class="datagrama_l01_text_container_01">
                        <div class="datagrama_l01_vbutton" id="datagrama_l02_vbutton_ID" @click="click_datagram('datagrama_layer_02_ID')"><</div>
                      </div>
                      <div class="datagrama_l01_text_container_02" id="datagrama_l02_text_container_02_ID">
                        <div class="datagrama_l02_text"><div class="datagrama_l02_text_tag">Version:</div> <input type="text" value="" class="datagrama_input" id="datagrama_IP_01_ID" data-key="host" /></div>
                        <div class="datagrama_l02_text"><div class="datagrama_l02_text_tag">Destination port:</div> <input type="text" value="" class="datagrama_input" id="datagrama_IP_02_ID" data-key="connection" /></div>
                        <div class="datagrama_l02_text"><div class="datagrama_l02_text_tag">Sequence Number:</div> <input type="text" value="" class="datagrama_input" id="datagrama_TCP_03_ID" data-key="upgrade" /></div>
                        <div class="datagrama_l02_text"><div class="datagrama_l02_text_tag">Acknowledgment Number:</div> <textarea type="text" value="" class="datagrama_input_textarea" id="datagrama_TCP_04_ID" spellcheck="false"></textarea></div>
                        <div class="datagrama_l02_text"><div class="datagrama_l02_text_tag">Window:</div> <textarea type="text" value="" class="datagrama_input_textarea" id="datagrama_TCP_05_ID" spellcheck="false"></textarea></div>
                        <div class="datagrama_l02_text"><div class="datagrama_l02_text_tag">Checksum:</div> <input type="text" value="" class="datagrama_input" id="datagrama_TCP_06_ID"/></div>
                      </div>
                      <div class="datagrama_l01_text_container_03" id="datagrama_l02_text_container_03_ID">
                        <div class="datagrama_l02_hex" id="datagrama_l02_hex_ID">
                          <textarea type="text" class="datagrama_input_hex" id="datagrama_TCP_07_ID" value="" spellcheck="false">1c61b47094b8002b67f867b60800450001ed455f400080060000c0a801aec0a80101e6d7005073dbfc5d76a56a2d5018040285df0000474554202f20485454502f312e310d0a486f73743a203139322e3136382e312e310d0a436f6e6e656374696f6e3a206b6565702d616c6976650d0a557067726164652d496e7365637572652d52657175657374733a20310d0a557365722d4167656e743a204d6f7a696c6c612f352e30202857696e646f7773204e542031302e303b2057696e36343b2078363429204170706c655765624b69742f3533372e333620284b48544d4c2c206c696b65204765636b6f29204368726f6d652f3133312e302e302e30205361666172692f3533372e33360d0a4163636570743a20746578742f68746d6c2c6170706c69636174696f6e2f7868746d6c2b786d6c2c6170706c69636174696f6e2f786d6c3b713d302e392c696d6167652f617669662c696d6167652f776562702c696d6167652f61706e672c2a2f2a3b713d302e382c6170706c69636174696f6e2f7369676e65642d65786368616e67653b763d62333b713d302e370d0a4163636570742d456e636f64696e673a20677a69702c206465666c6174650d0a4163636570742d4c616e67756167653a2065732d45532c65733b713d302e392c63613b713d302e382c656e3b713d302e372c69743b713d302e360d0a0d0a</textarea>
                          <div class="datagrama_input_hex_size" id="datagrama_TCP_08_ID"></div>
                        </div>
                      </div>
                    </div>

                    <div class="datagrama_layer_03" id="datagrama_layer_03_ID" @click="goto_selected('datagrama_container_ID', 1200, 0.5)">

                      <div class="datagrama_l03_text_container" id="datagrama_l03_text_container">
                        <div class="datagrama_l01_text_container_01">
                          <div class="datagrama_l01_vbutton" id="datagrama_l03_vbutton_ID" @click="click_datagram('datagrama_layer_03_ID')"><</div>
                        </div>
                        <div class="datagrama_l01_text_container_02" id="datagrama_l03_text_container_02_ID">
                          <div class="datagrama_l03_text"><div class="datagrama_l03_text_tag">Source port:</div> <input type="text" value="" class="datagrama_input" id="datagrama_TCP_01_ID" data-key="host" /></div>
                          <div class="datagrama_l03_text"><div class="datagrama_l03_text_tag">Destination port:</div> <input type="text" value="" class="datagrama_input" id="datagrama_TCP_02_ID" data-key="connection" /></div>
                          <div class="datagrama_l03_text"><div class="datagrama_l03_text_tag">Sequence Number:</div> <input type="text" value="" class="datagrama_input" id="datagrama_TCP_03_ID" data-key="upgrade" /></div>
                          <div class="datagrama_l03_text"><div class="datagrama_l03_text_tag">Acknowledgment Number:</div> <textarea type="text" value="" class="datagrama_input_textarea" id="datagrama_TCP_04_ID" spellcheck="false"></textarea></div>
                          <div class="datagrama_l03_text"><div class="datagrama_l03_text_tag">Window:</div> <textarea type="text" value="" class="datagrama_input_textarea" id="datagrama_TCP_05_ID" spellcheck="false"></textarea></div>
                          <div class="datagrama_l03_text"><div class="datagrama_l03_text_tag">Checksum:</div> <input type="text" value="" class="datagrama_input" id="datagrama_TCP_06_ID"/></div>
                        </div>
                        <div class="datagrama_l01_text_container_03" id="datagrama_l03_text_container_03_ID">
                          <div class="datagrama_l03_hex" id="datagrama_l03_hex_ID">
                            <textarea type="text" class="datagrama_input_hex" id="datagrama_TCP_07_ID" value="" spellcheck="false">1c61b47094b8002b67f867b60800450001ed455f400080060000c0a801aec0a80101e6d7005073dbfc5d76a56a2d5018040285df0000474554202f20485454502f312e310d0a486f73743a203139322e3136382e312e310d0a436f6e6e656374696f6e3a206b6565702d616c6976650d0a557067726164652d496e7365637572652d52657175657374733a20310d0a557365722d4167656e743a204d6f7a696c6c612f352e30202857696e646f7773204e542031302e303b2057696e36343b2078363429204170706c655765624b69742f3533372e333620284b48544d4c2c206c696b65204765636b6f29204368726f6d652f3133312e302e302e30205361666172692f3533372e33360d0a4163636570743a20746578742f68746d6c2c6170706c69636174696f6e2f7868746d6c2b786d6c2c6170706c69636174696f6e2f786d6c3b713d302e392c696d6167652f617669662c696d6167652f776562702c696d6167652f61706e672c2a2f2a3b713d302e382c6170706c69636174696f6e2f7369676e65642d65786368616e67653b763d62333b713d302e370d0a4163636570742d456e636f64696e673a20677a69702c206465666c6174650d0a4163636570742d4c616e67756167653a2065732d45532c65733b713d302e392c63613b713d302e382c656e3b713d302e372c69743b713d302e360d0a0d0a</textarea>
                            <div class="datagrama_input_hex_size" id="datagrama_TCP_08_ID"></div>
                          </div>
                        </div>
                      </div>

                      <div class="datagrama_layer_04" id="datagrama_layer_04_ID" @click="goto_selected('datagrama_container_ID', 1200, 0.5)">
                        <!--
                        <div class="datagrama_l01_text_container" id="datagrama_l01_text_container">
                          <div class="datagrama_l01_text">
                            <textarea type="text" value="" spellcheck="false" class="datagrama_input" id="datagrama_DNS_01_ID" data-key="request-line">Domain Name System (query)</textarea>
                          </div>
                          <div class="datagrama_l01_text">Transaction ID: <input type="text" value="" class="datagrama_input" id="datagrama_DNS_02_ID" data-key="host" spellcheck="false"/></div>
                          <div class="datagrama_l01_text">Flags: <input type="text" value="" class="datagrama_input" id="datagrama_DNS_03_ID" data-key="connection" spellcheck="false"/></div>
                          <div class="datagrama_l01_text">Questions: <input type="text" value="1" class="datagrama_input" id="datagrama_DNS_04_ID" data-key="upgrade" spellcheck="false"/></div>
                          <div class="datagrama_l01_text">Answer RRs: <input type="text" value="0" class="datagrama_input" id="datagrama_DNS_05_ID" spellcheck="false"/></div>
                          <div class="datagrama_l01_text">Query Name: <input type="text" value="facebook.com" class="datagrama_input" id="datagrama_DNS_06_ID"/></div>
                          <div class="datagrama_l01_text">Query Type: <input type="text" value="A" class="datagrama_input" id="datagrama_DNS_07_ID"/></div>
                          <div class="datagrama_l01_text">Query Class: <input type="text" value="IN" class="datagrama_input" id="datagrama_DNS_08_ID"/></div>
                        </div>
                        -->
                        <div class="datagrama_l04_text_container" id="datagrama_l04_text_container">
                          <div class="datagrama_l01_text_container_01">
                            <div class="datagrama_l01_vbutton" id="datagrama_l04_vbutton_ID" @click="click_datagram('datagrama_layer_04_ID')"><</div>
                          </div>
                          <div class="datagrama_l01_text_container_02" id="datagrama_l04_text_container_02_ID">
                            <div class="datagrama_l04_text"><input type="text" value="" class="datagrama_input" id="datagrama_HTTP_01_ID" data-key="request-line" /></div>
                            <div class="datagrama_l04_text"><div class="datagrama_l04_text_tag">Host:</div> <input type="text" value="" class="datagrama_input" id="datagrama_HTTP_02_ID" data-key="host" /></div>
                            <div class="datagrama_l04_text"><div class="datagrama_l04_text_tag">Connection:</div> <input type="text" value="" class="datagrama_input" id="datagrama_HTTP_03_ID" data-key="connection" /></div>
                            <div class="datagrama_l04_text"><div class="datagrama_l04_text_tag">Upgrade-Insecure-Requests:</div> <input type="text" value="" class="datagrama_input" id="datagrama_HTTP_04_ID" data-key="upgrade" /></div>
                            <div class="datagrama_l04_text"><div class="datagrama_l04_text_tag">User-Agent:</div> <textarea type="text" value="" class="datagrama_input_textarea" id="datagrama_HTTP_05_ID" spellcheck="false"></textarea></div>
                            <div class="datagrama_l04_text"><div class="datagrama_l04_text_tag">Accept:</div> <textarea type="text" value="" class="datagrama_input_textarea" id="datagrama_HTTP_06_ID" spellcheck="false"></textarea></div>
                            <div class="datagrama_l04_text"><div class="datagrama_l04_text_tag">Accept-Encoding:</div> <input type="text" value="" class="datagrama_input" id="datagrama_HTTP_07_ID"/></div>
                            <div class="datagrama_l04_text"><div class="datagrama_l04_text_tag">Accept-Language:</div> <textarea type="text" value="" class="datagrama_input_textarea" id="datagrama_HTTP_08_ID" spellcheck="false"></textarea></div>
                          </div>
                          <div class="datagrama_l01_text_container_03" id="datagrama_l04_text_container_03_ID">
                            <div class="datagrama_l04_hex" id="datagrama_l04_hex_ID">
                              <textarea type="text" class="datagrama_input_hex" id="datagrama_HTTP_09_ID" value="" spellcheck="false">1c61b47094b8002b67f867b60800450001ed455f400080060000c0a801aec0a80101e6d7005073dbfc5d76a56a2d5018040285df0000474554202f20485454502f312e310d0a486f73743a203139322e3136382e312e310d0a436f6e6e656374696f6e3a206b6565702d616c6976650d0a557067726164652d496e7365637572652d52657175657374733a20310d0a557365722d4167656e743a204d6f7a696c6c612f352e30202857696e646f7773204e542031302e303b2057696e36343b2078363429204170706c655765624b69742f3533372e333620284b48544d4c2c206c696b65204765636b6f29204368726f6d652f3133312e302e302e30205361666172692f3533372e33360d0a4163636570743a20746578742f68746d6c2c6170706c69636174696f6e2f7868746d6c2b786d6c2c6170706c69636174696f6e2f786d6c3b713d302e392c696d6167652f617669662c696d6167652f776562702c696d6167652f61706e672c2a2f2a3b713d302e382c6170706c69636174696f6e2f7369676e65642d65786368616e67653b763d62333b713d302e370d0a4163636570742d456e636f64696e673a20677a69702c206465666c6174650d0a4163636570742d4c616e67756167653a2065732d45532c65733b713d302e392c63613b713d302e382c656e3b713d302e372c69743b713d302e360d0a0d0a</textarea>
                              <div class="datagrama_input_hex_size" id="datagrama_HTTP_10_ID"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="tcpip_left_layer_04_container" id="tcpip_left_layer_04_container_ID" @click="goto_selected('tcpip_left_layer_04_container_ID', 700, 0)">
                <!-- ------------------- APP LAYER L4 ------------------- -->
                <div class="tcpip_left_layer_04" id="tcpip_left_layer_04_ID">App Layer (HTTP)</div>

                <div class="tcpip_left_layer_04_cache" id="tcpip_left_layer_04_cache_ID" @click="goto_selected('tcpip_left_layer_04_cache_ID', 700, 0.4)">
                  <div class="information_popup_container" id="popup_left_L4_cache">
                    <div class="information_popup_img_container"><img src="/src/assets/info_icon.svg" class="information_popup_img" @click="show_popup('popup_left_L4_cache', 1300)"></div>
                    <div class="information_popup_text" id="popup_left_L4_cache_text">
                      Aqui s'emmagatzema un registre DNS de quina IP correspon a cada URL, aixo ho sabem ja que previament s'ha realitzat el protocol DNS per descobrir la IP de destí. 
                      <br><br>
                      Si vols saber mes sobre el protocol DNS el tens en aquesta altra pindola: <RouterLink to="/home" class="tcpip_dns_link">DNS Protocol</RouterLink>
                    </div>
                  </div>

                  <img src="../assets/local_database_L4.svg" class="tcpip_left_layer_04_cache_img">
                  <div class="tcpip_left_layer_04_cache_input_container">
                    <div class="tcpip_left_layer_04_cache_input_container_sub">
                      <input class="tcpip_left_layer_04_cache_input" id="tcpip_left_layer_04_cache_input_01_ID" type="text" style="margin-right: 3px;">
                      <input class="tcpip_left_layer_04_cache_input" id="tcpip_left_layer_04_cache_input_02_ID" type="text">
                    </div>
                    <div class="tcpip_left_layer_04_cache_input_container_sub">
                      <input class="tcpip_left_layer_04_cache_input" id="tcpip_left_layer_04_cache_input_03_ID" type="text" style="margin-right: 3px;">
                      <input class="tcpip_left_layer_04_cache_input" id="tcpip_left_layer_04_cache_input_04_ID" type="text">
                    </div>
                    <div class="tcpip_left_layer_04_cache_input_container_sub">
                      <input class="tcpip_left_layer_04_cache_input" id="tcpip_left_layer_04_cache_input_05_ID" type="text" style="margin-right: 3px;">
                      <input class="tcpip_left_layer_04_cache_input" id="tcpip_left_layer_04_cache_input_06_ID" type="text">
                    </div>
                    <div class="information_popup_container" id="popup_left_L4_cache_anim">
                      <div class="information_popup_text_02" id="popup_left_L4_cache_anim_text">Comprovem si l'URL introduida esta en el registre. <br><br> Si no estigues es faria el protocol DNS, pero en aquesta pindola no esta contemplat fer una peticio DNS. Si vols saber com funciona el protocol DNS, el explicat amb mes detall aqui: <RouterLink to="/home" class="tcpip_dns_link">DNS Protocol</RouterLink>.  </div>
                    </div>
                    <div class="information_popup_container" id="popup_left_L4_cache_anim_02">
                      <div class="information_popup_text_02" id="popup_left_L4_cache_anim_02_text">Si existeix el registre, per tant a continuació es desplega el datagrama que portara les dades del protocol HTTP.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tcpip_left_layer_03_container" id="tcpip_left_layer_03_container_ID" @click="goto_selected('tcpip_left_layer_03_container_ID', 700, 0)">
                <!-- ------------------- TRANSPORT LAYER L3 ------------------- -->
                <div class="tcpip_left_layer_03">Transpor Layer (TCP)</div>

                <div class="tcpip_left_layer_03_cache" id="tcpip_left_layer_03_cache_ID" @click="goto_selected('tcpip_left_layer_03_cache_ID', 700, 0.4)">
                  <div class="information_popup_container" id="popup_L3_cache">
                    <div class="information_popup_img_container"><img src="/src/assets/info_icon.svg" class="information_popup_img" @click="show_popup('popup_L3_cache', 1300)"></div>
                    <div class="information_popup_text" id="popup_L3_cache_text">Els valors ACK i SEQ s'encarregen de portar el recompte dels bits de dades enviats, el ACK es un validador que el receptor envia al emissor per indicar quin byte vol que sigui el seguent. El SEQ ens porta el recompte del inici </div>
                  </div>
                  <img src="../assets/local_database_L3.svg" class="tcpip_left_layer_03_cache_img">
                  <div class="tcpip_left_layer_03_cache_input_container">
                    <div class="tcpip_left_layer_03_cache_input_container_sub_ackseq">
                      <input class="tcpip_left_layer_03_cache_input_ackseq" id="tcpip_left_layer_03_cache_input_01_ID" value="0" type="text" style="margin-right: 3px;">
                      <input class="tcpip_left_layer_03_cache_input_ackseq" id="tcpip_left_layer_03_cache_input_02_ID" value="0" type="text">
                    </div>
                    <div class="tcpip_left_layer_03_cache_input_container_sub">
                      <input class="tcpip_left_layer_03_cache_input" id="tcpip_left_layer_03_cache_input_03_ID" value="2048" type="text" style="margin-right: 3px;">
                      <input class="tcpip_left_layer_03_cache_input" id="tcpip_left_layer_03_cache_input_04_ID" value="2048" type="text">
                    </div>
                    <div class="tcpip_left_layer_03_cache_input_container_sub">
                      <input class="tcpip_left_layer_03_cache_input" id="tcpip_left_layer_03_cache_input_05_ID" value="52535" type="text" style="margin-right: 3px;">
                      <input class="tcpip_left_layer_03_cache_input" id="tcpip_left_layer_03_cache_input_06_ID" value="80" type="text">
                    </div>
                  </div>
                </div>

              </div>

              <div class="tcpip_left_layer_02_container" id="tcpip_left_layer_02_container_ID" @click="goto_selected('tcpip_left_layer_02_container_ID', 700, 0)">
                <!-- ------------------- INTERNET LAYER L2 ------------------- -->
                <div class="tcpip_left_layer_02">Internet Layer (IP)</div>

                <div class="tcpip_left_layer_02_cache" id="tcpip_left_layer_02_cache_ID" @click="goto_selected('tcpip_left_layer_02_cache_ID', 700, 0.4)">
                  <div class="information_popup_container" id="popup_L2_cache">
                    <div class="information_popup_img_container"><img src="/src/assets/info_icon.svg" class="information_popup_img" @click="show_popup('popup_L2_cache', 1300)"></div>
                    <div class="information_popup_text" id="popup_L2_cache_text">Els valors ACK i SEQ s'encarregen de portar el recompte dels bits de dades enviats, el ACK es un validador que el receptor envia al emissor per indicar quin byte vol que sigui el seguent. El SEQ ens porta el recompte del inici </div>
                  </div>
                  <img src="../assets/local_database_L2.svg" class="tcpip_left_layer_02_cache_img">
                  <div class="tcpip_left_layer_02_cache_input_container">
                    <div class="tcpip_left_layer_02_cache_input_container_sub" style=" margin-bottom: 2px;">
                      <input class="tcpip_left_layer_02_cache_input" id="tcpip_left_layer_02_cache_input_01_ID" value="0.0.0.0/0" type="text">
                      <input class="tcpip_left_layer_02_cache_input" id="tcpip_left_layer_02_cache_input_02_ID" value="192.168.1.1" type="text">
                      <input class="tcpip_left_layer_02_cache_input" id="tcpip_left_layer_02_cache_input_03_ID" value="-" type="text">
                      <input class="tcpip_left_layer_02_cache_input" id="tcpip_left_layer_02_cache_input_04_ID" value="-" type="text" style="width: 130%;">
                    </div>
                    <div class="tcpip_left_layer_02_cache_input_container_sub" style=" margin-bottom: 2px;">
                      <input class="tcpip_left_layer_02_cache_input" id="tcpip_left_layer_02_cache_input_05_ID" value="127.0.0.0/8" type="text">
                      <input class="tcpip_left_layer_02_cache_input" id="tcpip_left_layer_02_cache_input_06_ID" value="127.0.0.1" type="text">
                      <input class="tcpip_left_layer_02_cache_input" id="tcpip_left_layer_02_cache_input_07_ID" value="127.0.0.1" type="text">
                      <input class="tcpip_left_layer_02_cache_input" id="tcpip_left_layer_02_cache_input_08_ID" value="-" type="text" style="width: 130%;">
                    </div>
                    <div class="tcpip_left_layer_02_cache_input_container_sub" style=" margin-bottom: 8px;">
                      <input class="tcpip_left_layer_02_cache_input" id="tcpip_left_layer_02_cache_input_09_ID" value="192.168.1.0/24" type="text">
                      <input class="tcpip_left_layer_02_cache_input" id="tcpip_left_layer_02_cache_input_10_ID" value="-" type="text">
                      <input class="tcpip_left_layer_02_cache_input" id="tcpip_left_layer_02_cache_input_11_ID" value="-" type="text">
                      <input class="tcpip_left_layer_02_cache_input" id="tcpip_left_layer_02_cache_input_12_ID" value="-" type="text" style="width: 130%;">
                    </div>
                    <div class="tcpip_left_layer_02_cache_input_container_sub">
                      <input class="tcpip_left_layer_02_cache_input" id="tcpip_left_layer_02_cache_input_13_ID" value="192.168.1.1" type="text">
                      <input class="tcpip_left_layer_02_cache_input" id="tcpip_left_layer_02_cache_input_14_ID" value="-" type="text" style="width: 130%;">
                    </div>
                  </div>
                </div>

              </div>
              <div class="tcpip_left_layer_01_container" id="tcpip_left_layer_01_container_ID" @click="goto_selected('tcpip_left_layer_01_container_ID', 700, 0)">
                <!-- ------------------- LINK LAYER L1 ------------------- -->
                <div class="tcpip_left_layer_01">Link Layer</div>
              </div>
              <div class="tcpip_left_layer_00_container" id="tcpip_left_layer_00_container_ID" @click="goto_selected('tcpip_left_layer_00_container_ID', 700, -0.2)">
                <!-- ------------------- PHISICAL LAYER L0 ------------------- -->
                <div class="tcpip_left_layer_00">
                  <div class="tcpip_left_layer_00_ethcard_container"><img src="/src/assets/eth_card_icon.svg" class="tcpip_left_layer_00_ethcard_img"></div>
                </div>
                <div class="tcpip_left_layer_00_mac_container">
                  <input class="tcpip_left_layer_00_mac_text" id="tcpip_left_layer_00_mac_text_ID" readonly value="MAC: -" type="text">
                </div>
              </div>

            </div>

            <div class="tcpip_wrapper_in_middle" ref="tcpip_wrapper_in_middle" id="tcpip_wrapper_in_middle_ID">

              <div class="tcpip_router_dns_container">
                <div class="router_dns_container" id="router_dns_container_ID">
                  <div class="router_dns_image_container">
                    <div class="router_dns_tag_text_container">
                      <div class="router_dns_tag_text">
                        Router - DNS
                      </div>
                    </div>
                    <img src="/src/assets/router.svg" class="router_dns_image">
                  </div>
                </div>
              </div>
              <div class="router_info_container" id="router_info_container_ID">
                <div class="client_info_container">
                  <div class="client_info_title">Local Address</div>
                  <div class="client_info_ip">IP: <input class="client_info_ip_input" id="router_local_info_ip_input_ID" value="" type="text"></div>
                  <div class="client_info_mac">MAC: <input class="client_info_mac_input" id="router_local_info_mac_input_ID" value="-" type="text"></div>
                  <!-- <div class="client_info_mask">MASK: <input class="client_info_mask_input" value="255.255.255.0" type="text"></div> -->
                </div>
                <div class="client_info_container">
                  <div class="client_info_title">Public Address</div>
                  <div class="client_info_ip">IP: <input class="client_info_ip_input" id="router_public_info_ip_input_ID" value="-" type="text"></div>
                  <div class="client_info_mac">MAC: <input class="client_info_mac_input" id="router_public_info_mac_input_ID" value="-" type="text"></div>
                  <!-- <div class="client_info_mask">MASK: <input class="client_info_mask_input" value="255.255.255.0" type="text"></div> -->
                </div>
              </div>

              <div class="tcpip_middle_layer_04_container" id="tcpip_middle_layer_04_container_ID" style="background-color: transparent;">
              </div>
              <div class="tcpip_middle_layer_03_container" id="tcpip_middle_layer_03_container_ID" style="background-color: transparent;">
              </div>
              <div class="tcpip_middle_layer_02_container" id="tcpip_middle_layer_02_container_ID" @click="goto_selected('tcpip_middle_layer_02_container_ID', 700, 0)">
              </div>
              <div class="tcpip_middle_layer_01_container" id="tcpip_middle_layer_01_container_ID" @click="goto_selected('tcpip_middle_layer_01_container_ID', 700, 0)">
              </div>
              <!-- CAMBIAR EL NOM AIXO D'ABAIX -->
              <div class="tcpip_left_layer_00_container" id="tcpip_left_layer_00_container_ID" @click="goto_selected('tcpip_left_layer_00_container_ID', 700, 0)">
                <div class="tcpip_left_layer_00">* Ethernet card * Cable</div>
              </div>


            </div>

            <div class="tcpip_wrapper_in_right" ref="tcpip_wrapper_in_right" id="tcpip_wrapper_in_right_ID">

              <div class="tcpip_server_container">
                <div class="server_container" id="server_container_ID">
                  <div class="client_info_container">
                    <div class="client_info_title">Public Address</div>
                    <div class="client_info_ip">IP: <input class="client_info_ip_input" id="server_public_info_ip_input_ID" value="-" type="text"></div>
                    <div class="client_info_mac">MAC: <input class="client_info_mac_input" id="server_public_info_mac_input_ID" value="-" type="text"></div>
                    <!-- <div class="client_info_mask">MASK: <input class="client_info_mask_input" value="255.255.255.0" type="text"></div> -->
                  </div>
                  <div class="server_image_container">
                    <div class="server_tag_text_container">
                      <div class="server_tag_text">
                        Server
                      </div>
                    </div>
                    <img src="/src/assets/server_ssh_v2.svg" class="server_image">
                  </div>
                </div>
              </div> 

              <div class="tcpip_right_layer_04_container" id="tcpip_right_layer_04_container_ID" @click="goto_selected('tcpip_right_layer_04_container_ID', 700, 0)" style="flex-direction: row-reverse;">
                <!-- ------------------- APP LAYER L4 ------------------- -->
                <div class="tcpip_right_layer_04">Application Layer</div>

                <div class="tcpip_right_layer_04_cache" id="tcpip_right_layer_04_cache_ID" @click="goto_selected('tcpip_right_layer_04_cache_ID', 700, 0.4)">
                  <div class="information_popup_container" id="popup_right_L4_cache">
                    <div class="information_popup_img_container"><img src="/src/assets/info_icon.svg" class="information_popup_img" @click="show_popup('popup_right_L4_cache', 1300)"></div>
                    <div class="information_popup_text" id="popup_right_L4_cache_text">Aquí guardem un registre de quina IP correspon a cada direcció URL, d'aquesta manera ens evitem realitzar el protocol DNS cada vegada que es fa una nova petició.<br><br> En aquesta capa també s'emmagatzemen altres valors com poden ser: informació sobre l'estat de les connexions en l'aplicació, Cookies, les capçaleres de les peticions (User-Agent, Accept, Host...) entre d'altres.</div>
                  </div>
                  <img src="../assets/local_database_L4.svg" class="tcpip_right_layer_04_cache_img">
                  <div class="tcpip_right_layer_04_cache_input_container">
                    <div class="tcpip_right_layer_04_cache_input_container_sub">
                      <input class="tcpip_right_layer_04_cache_input" id="tcpip_right_layer_04_cache_input_01_ID" type="text" style="margin-right: 3px;">
                      <input class="tcpip_right_layer_04_cache_input" id="tcpip_right_layer_04_cache_input_02_ID" type="text">
                    </div>
                    <div class="tcpip_right_layer_04_cache_input_container_sub">
                      <input class="tcpip_right_layer_04_cache_input" id="tcpip_right_layer_04_cache_input_03_ID" type="text" style="margin-right: 3px;">
                      <input class="tcpip_right_layer_04_cache_input" id="tcpip_right_layer_04_cache_input_04_ID" type="text">
                    </div>
                    <div class="tcpip_right_layer_04_cache_input_container_sub">
                      <input class="tcpip_right_layer_04_cache_input" id="tcpip_right_layer_04_cache_input_05_ID" type="text" style="margin-right: 3px;">
                      <input class="tcpip_right_layer_04_cache_input" id="tcpip_right_layer_04_cache_input_06_ID" type="text">
                    </div>
                  </div>
                </div>
              </div>
              <div class="tcpip_right_layer_03_container" id="tcpip_right_layer_03_container_ID" @click="goto_selected('tcpip_right_layer_03_container_ID', 700, 0)" style="flex-direction: row-reverse;">
                <!-- ------------------- TRANSPORT LAYER L3 ------------------- -->
                <div class="tcpip_right_layer_03">Transpor Layer</div>

                <div class="tcpip_right_layer_03_cache" id="tcpip_right_layer_03_cache_ID" @click="goto_selected('tcpip_right_layer_03_cache_ID', 700, 0.4)">
                  <div class="information_popup_container" id="popup_L3_cache">
                    <div class="information_popup_img_container"><img src="/src/assets/info_icon.svg" class="information_popup_img" @click="show_popup('popup_L3_cache', 1300)"></div>
                    <div class="information_popup_text" id="popup_L3_cache_text">Els valors ACK i SEQ s'encarregen de portar el recompte dels bits de dades enviats, el ACK es un validador que el receptor envia al emissor per indicar quin byte vol que sigui el seguent. El SEQ ens porta el recompte del inici </div>
                  </div>
                  <img src="../assets/local_database_L3.svg" class="tcpip_right_layer_03_cache_img">
                  <div class="tcpip_right_layer_03_cache_input_container">
                    <div class="tcpip_right_layer_03_cache_input_container_sub_ackseq">
                      <input class="tcpip_right_layer_03_cache_input_ackseq" id="tcpip_right_layer_03_cache_input_01_ID" value="0" type="text" style="margin-right: 3px;">
                      <input class="tcpip_right_layer_03_cache_input_ackseq" id="tcpip_right_layer_03_cache_input_02_ID" value="0" type="text">
                    </div>
                    <div class="tcpip_right_layer_03_cache_input_container_sub">
                      <input class="tcpip_right_layer_03_cache_input" id="tcpip_right_layer_03_cache_input_03_ID" value="2048" type="text" style="margin-right: 3px;">
                      <input class="tcpip_right_layer_03_cache_input" id="tcpip_right_layer_03_cache_input_04_ID" value="2048" type="text">
                    </div>
                    <div class="tcpip_right_layer_03_cache_input_container_sub">
                      <input class="tcpip_right_layer_03_cache_input" id="tcpip_right_layer_03_cache_input_05_ID" value="52535" type="text" style="margin-right: 3px;">
                      <input class="tcpip_right_layer_03_cache_input" id="tcpip_right_layer_03_cache_input_06_ID" value="80" type="text">
                    </div>
                  </div>
                </div>
              </div>
              <div class="tcpip_right_layer_02_container" id="tcpip_right_layer_02_container_ID" @click="goto_selected('tcpip_right_layer_02_container_ID', 700, 0)" style="flex-direction: row-reverse;">
                <!-- ------------------- INTERNET LAYER L2 ------------------- -->
                <div class="tcpip_right_layer_02">Internet Layer</div>

                <div class="tcpip_right_layer_02_cache" id="tcpip_right_layer_02_cache_ID" @click="goto_selected('tcpip_right_layer_02_cache_ID', 700, 0.4)">
                  <div class="information_popup_container" id="popup_L2_cache">
                    <div class="information_popup_img_container"><img src="/src/assets/info_icon.svg" class="information_popup_img" @click="show_popup('popup_L2_cache', 1300)"></div>
                    <div class="information_popup_text" id="popup_L2_cache_text">Els valors ACK i SEQ s'encarregen de portar el recompte dels bits de dades enviats, el ACK es un validador que el receptor envia al emissor per indicar quin byte vol que sigui el seguent. El SEQ ens porta el recompte del inici </div>
                  </div>
                  <img src="../assets/local_database_L2.svg" class="tcpip_right_layer_02_cache_img">
                  <div class="tcpip_right_layer_02_cache_input_container">
                    <div class="tcpip_right_layer_02_cache_input_container_sub" style=" margin-bottom: 2px;">
                      <input class="tcpip_right_layer_02_cache_input" id="tcpip_right_layer_02_cache_input_01_ID" value="0.0.0.0/0" type="text">
                      <input class="tcpip_right_layer_02_cache_input" id="tcpip_right_layer_02_cache_input_02_ID" value="192.168.1.1" type="text">
                      <input class="tcpip_right_layer_02_cache_input" id="tcpip_right_layer_02_cache_input_03_ID" value="-" type="text">
                      <input class="tcpip_right_layer_02_cache_input" id="tcpip_right_layer_02_cache_input_04_ID" value="-" type="text" style="width: 130%;">
                    </div>
                    <div class="tcpip_right_layer_02_cache_input_container_sub" style=" margin-bottom: 2px;">
                      <input class="tcpip_right_layer_02_cache_input" id="tcpip_right_layer_02_cache_input_05_ID" value="127.0.0.0/8" type="text">
                      <input class="tcpip_right_layer_02_cache_input" id="tcpip_right_layer_02_cache_input_06_ID" value="127.0.0.1" type="text">
                      <input class="tcpip_right_layer_02_cache_input" id="tcpip_right_layer_02_cache_input_07_ID" value="127.0.0.1" type="text">
                      <input class="tcpip_right_layer_02_cache_input" id="tcpip_right_layer_02_cache_input_08_ID" value="-" type="text" style="width: 130%;">
                    </div>
                    <div class="tcpip_right_layer_02_cache_input_container_sub" style=" margin-bottom: 8px;">
                      <input class="tcpip_right_layer_02_cache_input" id="tcpip_right_layer_02_cache_input_09_ID" value="192.168.1.0/24" type="text">
                      <input class="tcpip_right_layer_02_cache_input" id="tcpip_right_layer_02_cache_input_10_ID" value="-" type="text">
                      <input class="tcpip_right_layer_02_cache_input" id="tcpip_right_layer_02_cache_input_11_ID" value="-" type="text">
                      <input class="tcpip_right_layer_02_cache_input" id="tcpip_right_layer_02_cache_input_12_ID" value="-" type="text" style="width: 130%;">
                    </div>
                    <div class="tcpip_right_layer_02_cache_input_container_sub">
                      <input class="tcpip_right_layer_02_cache_input" id="tcpip_right_layer_02_cache_input_13_ID" value="192.168.1.1" type="text">
                      <input class="tcpip_right_layer_02_cache_input" id="tcpip_right_layer_02_cache_input_14_ID" value="-" type="text" style="width: 130%;">
                    </div>
                  </div>
                </div>
              </div>
              <div class="tcpip_right_layer_01_container" id="tcpip_right_layer_01_container_ID" @click="goto_selected('tcpip_right_layer_01_container_ID', 700, 0)" style="flex-direction: row-reverse;">
                <div class="tcpip_right_layer_01">Link Layer</div>
              </div>
              <!-- CAMBIAR EL NOM AIXO D'ABAIX -->
              <div class="tcpip_right_layer_00_container" id="tcpip_right_layer_00_container_ID" @click="goto_selected('tcpip_right_layer_00_container_ID', 700, 0)" style="flex-direction: row-reverse;">
                <!-- ------------------- PHISICAL LAYER L0 ------------------- -->
                <div class="tcpip_right_layer_00">
                  <div class="tcpip_right_layer_00_ethcard_container"><img src="/src/assets/eth_card_icon.svg" class="tcpip_right_layer_00_ethcard_img"></div>
                </div>
                <div class="tcpip_right_layer_00_mac_container">
                  <input class="tcpip_right_layer_00_mac_text" id="tcpip_right_layer_00_mac_text_ID" readonly value="MAC: -" type="text">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="tcpip_container_02" id="tcpip_container_02_ID">
      <div class="tcpip_text_container">
        <div class="tcpip_theory_tittle">HTTP <div class="tcpip_title_02">   Descripció teórica</div></div>
        <div class="tcpip_theory">
          El protocol HTTP i HTTPS estan dins de la família de protocols que engloba TCP/IP, concretament a la capa d'aplicació. En aquesta descripció teòrica s'explicaran adicionalment de HTTP,
          totes les capes de TCP/IP, teoria que es compartida amb els protocols de la família TCP/IP.
          <br><br>
          Primerament cal posar context i explicar en detall quina arquitectura de xarxa tenim aquí. Podem veure una representació gràfica dels tres dispositius principals: un client, un servidor i un router.
          Aquests dispositius estan interconnectats entre si amb un cable de coure o fibra òptica. L'arquitectura que es mostra està composta d'una xarxa local on tenim el client i el router, simbolitzant
          la xarxa que la gran majoria de persones té a casa. I, per altra banda, veiem la xarxa pública, on tenim també el router i el servidor. Un bon esquema gràfic és el següent:
         
          <div style="padding-left: 170px; padding-right: 170px; padding-top: 40px; padding-bottom: 40px;"><img style="width: 100%;" src="/src/assets/arquitectura_network.svg"></div>
          
          En aquest exemple veiem que el router no esta conectat directament amb el servidor, sino que primer pasa per Internet. Ho simplificarem i no tindrem en compte la complexitat de la xarxa pública.
          Si vols saber amb mes profunditat com funcionen les xarxes públiques, pots visitar la pindola de <RouterLink to="/home">BGP</RouterLink> i <RouterLink to="/home">Xarxes Públiques</RouterLink>.
          <br><br>
          
          La familia de protocols TCP/IP estan composta principalment per 4 capes, que engloben multiples funcionalitats en cadascuna d'elles. Aquestes capes són: Una primera capa d'applicació, 
          una segona capa de transport, unaltre d'Internet i una última d'enllaç. En la seguent figura es poden veure ben representades a demes de quins protocols actuen en cadascuna d'elles:

          <div style="padding-left: 170px; padding-right: 170px; padding-top: 40px; padding-bottom: 40px;"><img style="width: 100%;" src="/src/assets/tcpip_layers.svg"></div>
          
          A continuació es detallen les diverses capes esmentades:

        </div>
      </div>
    </div>

    <div class="tcpip_container_03" id="tcpip_container_03_ID">
      <div class="tcpip_title">HTTP <div class="tcpip_title_02">   Història</div></div>
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
    
  </div>

  <!-- tcpip_container_01 -> auxiliar_functions.txt -->
  <!-- tcpip_container_02 -> auxiliar_functions.txt -->
</template>

<script setup>
import { ref, onMounted, inject } from 'vue';
import anime from 'animejs';
import { RouterLink } from 'vue-router';

const tcpip_wrapper_in = ref(null);
const tcpip_animation_container = ref(null);
const terminal_input_container = ref(null);
const demoWrapper = ref(null);
var input_cache, input_cache_wrapper = null;

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

// PROBA HTML 5 NATIU
/*
let animationFrame;
let startTime;
let isRunning = false; 
let isOnCourse = false;
let startPosition = { x: 0, y: 0 };
let endPosition = { x: 0, y: 0 };
let startPositionWrapper = { x: 0, y: 0 };
let endPositionWrapper = { x: 0, y: 0 };
let duration = 0;*/
let animationFrame = null;
let startTime = null;
let isRunning = null; 
let isOnCourse = null; 
let duration = null;

let isInfo = true;
let isPaused = false;
let isMiddlePaused = false;
var isFirstAnim = true;
let isCommingFromMiddlePause = false;
let pausedAt = 0;
let elapsed = 0;
let progress = 0;
let startScale = 0;
let endScale = 0;
let cacheL4 = null;

let startPosition = null;
let endPosition = null;
let startPositionWrapper = null;
let endPositionWrapper = null;

onMounted(() => {
  const change_theme = inject('change_theme');
  if(change_theme) change_theme(1);
  wasDragging = false;
  //document.getElementById('tcpip_animation_container_ID').setAttribute("style",  "height: " + (window.innerHeight - 230) + "px");
  //document.getElementById('tcpip_container_ID').setAttribute("style",  "height: " + (window.innerHeight - 100) + "px"); // 150
  //document.getElementById('tcpip_container_01_ID').setAttribute("style",  "height: " + (window.innerHeight - 100) + "px");
  //document.getElementById('tcpip_container_02_ID').setAttribute("style",  "height: " + (window.innerHeight - 100) + "px");
  document.getElementById('tcpip_container_ID').style.height = (window.innerHeight - 100) + "px"; // 150
  document.getElementById('tcpip_container_01_ID').style.height = (window.innerHeight - 100) + "px"; // 150
  //document.getElementById('tcpip_container_02_ID').style.height = (window.innerHeight - 100) + "px"; // 150
  document.getElementById('tcpip_container_03_ID').style.height = (window.innerHeight - 100) + "px"; // 150
  document.getElementById('tcpip_wrapper_in_ID').setAttribute("style",  "transform: translateX(0px) translateY(0px) scale(1)");
  document.getElementById('terminal_input_container_ID').setAttribute("style",  "transform: translateX(0px) translateY(0px) scale(1)");
  document.getElementById('terminal_input_ID').setAttribute("style",  "transform: translateX(0px) translateY(0px) scale(1)");
  document.getElementById('terminal_input_copy_ID').setAttribute("style",  "transform: translateX(0px) translateY(0px) scale(1)");

  // Control del moviment de l'animació amb el ratolí
  const tcpipwrapp = tcpip_wrapper_in.value;
  const tcpcontainer = tcpip_animation_container.value;
  const terminalInput = terminal_input_container.value;
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

  tcpcontainer.addEventListener('touchstart', (event) => {
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

  tcpcontainer.addEventListener('touchend', () => {
    isDragging = false;
    document.body.style.userSelect = 'pointer';
    console.log("Dragging: false");
  });

  tcpcontainer.addEventListener('mousemove', (event) => {
    if(!isTransitioning){
      //console.log("IsDragging mousemove: ", isDragging);
      if(isDragging){
        wasDragging = true;
        //console.log("WasDragging mousemove: ", wasDragging);
        dragX = startX - event.clientX;
        dragY = startY - event.clientY;
        sumDragX = dragX - lastDragX;
        sumDragY = dragY - lastDragY;
        totalSumDragX -= sumDragX / 2;
        totalSumDragY -= sumDragY / 2;
        //console.log("TotalSumDragX: ", totalSumDragX);
        //console.log("TotalSumDragY: ", totalSumDragY);
        //tcpipwrapp.style.transform = `translate(${totalSumDragX}px, ${totalSumDragY}px) scale(${scale})`;
        tcpipwrapp.style.transform = `translateX(${totalSumDragX}px) translateY(${totalSumDragY}px) scale(${scale})`;
        lastDragX = dragX;
        lastDragY = dragY;

        const elements = document.getElementsByClassName('information_popup_text');
        for (let i = 0; i < elements.length; i++) {
          if(elements[i].style.display !== "none"){
            elements[i].style.opacity = "0";
            setTimeout(() => {
              elements[i].style.display = "none";
            }, 300);
          }
        }
      }
      else{
        wasDragging = false;
      }
    }
  });

  tcpcontainer.addEventListener('touchmove', (event) => {
    if(!isTransitioning){
      //console.log("IsDragging mousemove: ", isDragging);
      if(isDragging){
        wasDragging = true;
        console.log("WasDragging mousemove: ", wasDragging);
        dragX = startX - event.clientX;
        dragY = startY - event.clientY;
        sumDragX = dragX - lastDragX;
        sumDragY = dragY - lastDragY;
        totalSumDragX -= sumDragX / 2;
        totalSumDragY -= sumDragY / 2;
        console.log("TotalSumDragX: ", totalSumDragX);
        console.log("TotalSumDragY: ", totalSumDragY);
        //tcpipwrapp.style.transform = `translate(${totalSumDragX}px, ${totalSumDragY}px) scale(${scale})`;
        tcpipwrapp.style.transform = `translateX(${totalSumDragX}px) translateY(${totalSumDragY}px) scale(${scale})`;
        lastDragX = dragX;
        lastDragY = dragY;

        const elements = document.getElementsByClassName('information_popup_text');
        for (let i = 0; i < elements.length; i++) {
          if(elements[i].style.display !== "none"){
            elements[i].style.opacity = "0";
            setTimeout(() => {
              elements[i].style.display = "none";
            }, 300);
          }
        }
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
      scale = Math.min(Math.max(scale, 0.7), 20); //0.2 --- 2
      //const rect = document.getElementById("tcpip_animation_container_ID").getBoundingClientRect();
      const rect = document.getElementById('tcpip_wrapper_in_ID').getBoundingClientRect();
      console.log("Mouse X: ", event.clientX, "Mouse Y: ", event.clientY);
      console.log("Rect X: ", rect.x, "Rect Y: ", rect.y);

      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      const centerX = mouseX - rect.width / 2;
      const centerY = -(mouseY - rect.height / 2);
      console.log(`Coordenadas: (${centerX}, ${centerY})`);
      if (event.deltaY > 0){
        totalSumDragX = totalSumDragX + (centerX*(1/(scale+(scale/2.5))))/2; //0.3 (1/(scale+4)) (centerX*(1/(1/(scale+4))));
        totalSumDragY = totalSumDragY - (centerY*(1/(scale+(scale/2.5))))/2;
      }
      else{
        totalSumDragX = totalSumDragX - (centerX*(1/(scale+(scale/2.5))))/2;
        totalSumDragY = totalSumDragY + (centerY*(1/(scale+(scale/2.5))))/2;
      }

      tcpipwrapp.style.transform = `translateX(${totalSumDragX}px) translateY(${totalSumDragY}px) scale(${scale})`;
    }
  });

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
      var Accept_Language_var = navigator.languages;
      var User_Agent_var = navigator.userAgent;
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

      //animation2.play();
      //document.getElementById('play_ID').style.backgroundColor = 'lightgray';
      //document.getElementById('pause_ID').style.backgroundColor = 'white';
    }
  });

  const reCalcL4HexSize = document.getElementById('datagrama_HTTP_09_ID');
  const sizeDisplay = document.getElementById('datagrama_HTTP_10_ID');
  reCalcL4HexSize.addEventListener('input', () => {
    const hexString = reCalcL4HexSize.value;
    const size = hexCalculateBytes(hexString);
    sizeDisplay.innerText = `${size.bytes} Bytes`;
  });

  // Si ho declarem a fora, es carrega una vegada al inici i tenim els seguents problemes: 
  // 1- La variable que regula el traking de la camara no s'actualitza ja que esta carregat com a true
  // 2- Si actualitzem valors de posicio global es fa la carrega al iniciar la pagina i no en cada llençament de l'animació

  // Si ho declarem a dins, es carrega com a un nou objecte cada vegada, cosa que ens va be per anar cambiant els valors de la camara
  // i de posicio global. El problema es que no podem aturar una animació ja que cada vegada que es dona play o qualsevol boto es crea un objecte nou
  
  function input_cache_animation(){
    // ------------------------------------------------
    // INPUT USUARI i COMPROBAR CACHE
    // Tenim guardada la IP/MAC del router per estalviarnos un pas d'ARP
    var vm01 = 100;
    var vm02 = 400;
    var vm03 = 40;

    input_cache = anime.timeline({
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
        return (tY + vm01);
      },
      translateX: function() {
        const { tX, tY, scale } = get_transform('terminal_input_container_ID');
        return tX;
      },
      duration: 1000,
      easing: 'easeInOutSine',
    })
    input_cache.add({
      targets: '.terminal_input_container',
      begin: function(anim){
        input_cache.pause();
        document.getElementById('play_ID').style.filter = 'grayscale(0%)';
        document.getElementById('play_ID').disabled = false;
      },
    })
    input_cache.add({
      targets: '.terminal_input_container',
      translateY: function() {
        const { tX, tY, scale } = get_transform('terminal_input_container_ID');
        return (tY + vm01);
      },
      translateX: function() {
        const { tX, tY, scale } = get_transform('terminal_input_container_ID');
        return tX;
      },
      duration: 1000,
      easing: 'easeInOutSine',
    })

    var counter_wrapper = 0;
    input_cache_wrapper = anime.timeline({
      loop: false,
      autoplay: false
    })
    input_cache_wrapper.add({
      targets: '.tcpip_wrapper_in',
      change: function(anim){
        counter_wrapper++;
        //var difX = parseFloat(anim.animations[1].currentValue) - totalSumDragX;
        //var difY = parseFloat(anim.animations[0].currentValue) - totalSumDragY;
        totalSumDragY = totalSumDragX+counter_wrapper;
        totalSumDragX = totalSumDragY+counter_wrapper;
        tcpipwrapp.style = `transform: translateX(${totalSumDragX+counter_wrapper}) translateY(${totalSumDragY+counter_wrapper}) scale(${scale});`;
      },
      duration: 1000,
      easing: 'easeInOutSine',
    })
    /*if(scrollCamera){
      input_cache_wrapper.add({
        targets: '.tcpip_wrapper_in',
        translateY: function() {
          const { tX, tY, scale } = get_transform('tcpip_wrapper_in_ID');
          //totalSumDragY = (tY - (scale*(vm01)));
          return (tY - (scale*(vm01)));
        },
        translateX: function() {
          const { tX, tY, scale } = get_transform('tcpip_wrapper_in_ID');
          //totalSumDragX = tX;
          return tX;
        },
        change: function(anim){
          var difX = parseFloat(anim.animations[1].currentValue) - totalSumDragX;
          var difY = parseFloat(anim.animations[0].currentValue) - totalSumDragY;
          if (difX > 20 || difY > 20){
            console.log("Diferencia X: ", difX);
            console.log("Diferencia Y: ", difY);
          }
          console.log("-----------------------------");
          console.log("PREVIOUS TotalSumDragY: ", totalSumDragY);
          console.log("PREVIOUS TotalSumDragX: ", totalSumDragX);
          totalSumDragY = parseFloat(anim.animations[0].currentValue);
          totalSumDragX = parseFloat(anim.animations[1].currentValue);
          console.log("TotalSumDragY: ", totalSumDragY);
          console.log("TotalSumDragX: ", totalSumDragX);
          console.log("-----------------------------");
        },
        duration: 1000,
        easing: 'easeInOutSine',
      })
    }*/
    //return {input_cache, input_cache_wrapper};
  }

  function input_promise(state){
    if(input_cache == null){
      input_cache_animation();
    } 

    console.log("#001: ", input_cache)
    console.log("#0012: ", input_cache_wrapper)
    if(input_cache.began){
      console.log("Animació ja ha començat");
    } else if(!input_cache.began){
      console.log("Animació no ha començat");
    } else if(input_cache.completed){
      console.log("Animació completada");
    } else if(!input_cache.paused){
      console.log("Animació pausada");
    }

    //console.log("Input cache: ", input_cache);
    //console.log("Input cache wrapper: ", input_cache_wrapper);
    /*const animations = [input_cache.play()];
    console.log("Scroll camera PROMISE: ", scrollCamera);
    if(scrollCamera){
      animations.push(input_cache_wrapper.play()); // Scroll del fons (es pot desahabilitar)
    }
    Promise.all(animations).then(() => {
      console.log("Promise all finished");
    });*/
    
    if(state === 'start'){
      document.getElementById('play_ID').style.filter = 'grayscale(100%)';
      document.getElementById('play_ID').disabled = true;
      input_cache.play();
      input_cache_wrapper.play();
      console.log("#002: ", input_cache)

      if(input_cache.began){
        console.log("Animació ja ha començat");
      } else if(!input_cache.began){
        console.log("Animació no ha començat");
      } else if(input_cache.completed){
        console.log("Animació completada");
      } else if(!input_cache.paused){
        console.log("Animació pausada");
      }

      /*Promise.all([
        input_cache.play(),
        input_cache_wrapper.play(),
      ]).then(() => {
        //document.getElementById('play_ID').style.filter = 'grayscale(0%)'; 
        console.log("Promise all finished");
      }).catch((error) => {
        console.error("Error:", error);
      });*/
    }
    else if(state === 'pause'){
      document.getElementById('play_ID').style.filter = 'grayscale(0%)';
      document.getElementById('play_ID').disabled = false;
      document.getElementById('pause_ID').style.filter = 'grayscale(100%)';
      document.getElementById('pause_ID').disabled = true;
      input_cache.pause();
      input_cache_wrapper.pause();
    }
    else if(state === 'reset'){
      input_cache.restart();
      input_cache.pause();
      input_cache.seek(0);
      input_cache_wrapper.restart();
      input_cache_wrapper.pause();
      input_cache_wrapper.seek(0);
      restart_view();
      // Falten valors a reiniciar (input)
    }
    else if(state === 'stepback'){
      /*const currentTime = input_cache.currentTime; // Tiempo actual
      const previousStepTime = currentTime - 1000; // Un paso atrás (1000ms)
      if (previousStepTime >= 0) {
        input_cache.seek(previousStepTime); // Mover al paso anterior
        input_cache.pause(); // Pausar en ese punto
      }*/
      input_cache.reversed();
      input_cache_wrapper.reversed();
      input_cache.play();
      input_cache_wrapper.play();
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

  function easeInOutSine(t) {
    return -(Math.cos(Math.PI * t) - 1) / 2;
  }

  function animation_function(selectedObject, resolve){
    return async function step(timestamp){
      const object = document.getElementById(selectedObject);
      document.getElementById('play_ID').style.filter = 'grayscale(100%)';
      document.getElementById('play_ID').disabled = true;
      if (!startTime) {
        startTime = timestamp;
      }
      if(isCommingFromMiddlePause){
        startTime = timestamp;
        var t = Math.min((elapsed / duration) + progress, 1);
        var currentProgress = easeInOutSine(t);
        isCommingFromMiddlePause = false;
      } else{
        elapsed = timestamp - startTime;
        var t = Math.min((elapsed / duration) + progress, 1);
        var currentProgress = easeInOutSine(t);
      }

      if (isPaused) {
        isMiddlePaused = true;
        isCommingFromMiddlePause = true;
        progress = t;
        pauseMiddleFlow().then(() => {
          elapsed = 0
          isPaused = false;
          isMiddlePaused = false;
          requestAnimationFrame(step);
        });
        return;
      }

      const x = startPosition.x + (endPosition.x - startPosition.x) * (currentProgress);
      const y = startPosition.y + (endPosition.y - startPosition.y) * (currentProgress);
      const xInverse = startPositionWrapper.x + (endPositionWrapper.x - startPositionWrapper.x) * (currentProgress);
      const yInverse = startPositionWrapper.y + (endPositionWrapper.y - startPositionWrapper.y) * (currentProgress);
      const currentScale = startScale + (endScale - startScale) * currentProgress;

      /* TESTING CONSOLE LOGS*/
      console.log("Timestamp: ", timestamp);
      console.log("StartTime: ", startTime);
      console.log("PausedAt: ", pausedAt);
      console.log("Elapsed: ", elapsed);
      console.log("Progress: ", progress);
      console.log("Duration: ", duration);
      console.log("T: ", t);
      console.log("current scale: ", currentScale);
      console.log("------------------------------");

      object.style.transform = `translateX(${x}px) translateY(${y}px) scale(${currentScale})`;
      if(scrollCamera){
        totalSumDragX = xInverse;
        totalSumDragY = yInverse;
        tcpipwrapp.style.transform = `translateX(${xInverse}px) translateY(${yInverse}px) scale(${scale})`;
      }
      if (currentProgress < 1) {
        requestAnimationFrame(step);
      } else {
        console.log('Animación completada');
        document.getElementById('play_ID').style.filter = 'grayscale(0%)';
        document.getElementById('play_ID').disabled = false;
        isRunning = false;
        isOnCourse = false;
        isPaused = true;
        progress = 0;
        resolve();
      }
    }
  }

  function input_animation(setedX, setedY, settedDuration, newScale, selectedObject){
    return new Promise(async (resolve) => {
      //document.getElementById('play_ID').style.filter = 'grayscale(100%)';
      //document.getElementById('play_ID').disabled = true;
      pausedAt = 0;
      animationFrame = null;
      startTime = 0;
      isRunning = false;
      isOnCourse = false;
      duration = 0;
      startScale = 0;
      endScale = 0;
      startPosition = { x: 0, y: 0 };
      endPosition = { x: 0, y: 0 };
      startPositionWrapper = { x: 0, y: 0 };
      endPositionWrapper = { x: 0, y: 0 };

      if(!isRunning){
        const { tX, tY, scale_object } = get_transform(selectedObject);
        
        console.log("tX: ", tX);
        console.log("tY: ", tY);
        if(!isOnCourse){
          endPosition = { x: (tX + setedX), y:( tY + setedY) };
          endPositionWrapper = { x: (totalSumDragX - (scale * setedX)), y:( totalSumDragY - (scale * setedY)) };
        }
        if(scale_object == undefined){startScale = 1;}
        else{startScale = scale_object;}
        endScale = newScale;
        duration = settedDuration;
        isOnCourse = true;
        startPosition = { x: tX, y: tY };
        startPositionWrapper = { x: totalSumDragX, y: totalSumDragY };
        isRunning = true;
        startTime = null;
        animationFrame = requestAnimationFrame(animation_function(selectedObject, resolve));
      }
    });
  }

  function pauseFlow() {
    return new Promise((resolve_pause) => {
      isPaused = true;
      document.getElementById('play_ID').style.filter = 'grayscale(0%)';
      document.getElementById('play_ID').disabled = false;
      document.getElementById('play_img_ID').setAttribute("style", "filter: drop-shadow(rgb(0, 255, 0) 0px 0px 10px);");
      setTimeout(() => {
        document.getElementById('play_img_ID').setAttribute("style", "filter: drop-shadow(rgb(0, 0, 0) 0px 0px 0px);");
      }, 800);

      const interval = setInterval(() => {
        if (!isPaused) {
          clearInterval(interval);
          resolve_pause();
        }
      }, 100);
    });
  }

  /*function waitFlow(ms) {
    document.getElementById('play_ID').style.filter = 'grayscale(100%)';
    document.getElementById('play_ID').disabled = true;
    return new Promise((resolve_wait) => {
      setTimeout(() => {
        resolve_wait();
      }, ms);
    });
  }*/

  function pauseMiddleFlow() {
    return new Promise((resolveMiddle) => {
      document.getElementById('play_ID').style.filter = 'grayscale(0%)';
      document.getElementById('play_ID').disabled = false;
      const interval = setInterval(() => {
        if (!isMiddlePaused) {
          clearInterval(interval);
          resolveMiddle();
        }
      }, 100);
    });
  }

  document.querySelector('.tcpip_play').onclick = async function(){
    if(isMiddlePaused){
      // Si estem a mitges de l'animació no l'hem de tornar a generar
      isMiddlePaused = false;
    }
    if(isPaused){
      // Si al clicar play esta pausada l'hem de des-pausar i que torni al seu curs
      isPaused = false;
    }
    
    if ((!isMiddlePaused) && (!isPaused) && (isFirstAnim)){
      //playFlow = true;
      const input = document.getElementById('terminal_input_ID');
      const value = input.value.trim();
      const {acceptLanguage, userAgent, agent}  = acceptLanguageAndUserAgent();
      console.log("Accept_Language: ", acceptLanguage);
      console.log("User_Agent: ", userAgent);

      if (value === '') {
        // Si el input està buit
        await goto_selected('terminal_container_ID', 1500, 0);
        document.getElementById('terminal_input_ID').style.transitionDuration = '0.5s';
        document.getElementById('terminal_input_ID').style.filter = 'drop-shadow(0 0 0px rgba(255, 255, 255, 1));'; //rgba(0, 140, 255, 1)
        document.getElementById('terminal_input_ID').style.boxShadow = 'rgb(109 200 255) 0px 0px 4px 4px'; //rgb(109 225 255)
        document.getElementById('terminal_input_ID').focus();
        setTimeout(() => {
          document.getElementById('terminal_input_ID').style.filter = 'drop-shadow(0 0 0px rgba(255, 255, 255, 0));';
          document.getElementById('terminal_input_ID').style.boxShadow = 'rgb(0 0 0) 0px 0px 0px 0px';
        }, 1000);

      } else if (check_url(value)) {
        isFirstAnim = false;
        // ---------------------------------- TIMELINE ----------------------------------
        /* Iniciem tots els valors de IP i MAC */
        let pc_local_ip = randomLocalIP('192.168.1.2', '192.168.1.254');
        let pc_local_mac = randomMAC();
        let router_local_mac = randomMAC();
        let router_public_ip = randomPublicIP();
        let router_public_mac = randomMAC();
        let pc_local_mac_L0 = String("MAC: ".concat(pc_local_mac));
        var server_public_ip = randomPublicIP();
        let server_public_mac = randomMAC();
        textSmoothTransition('router_local_info_ip_input_ID', '192.168.1.1', 800, 1);
        textSmoothTransition('router_local_info_mac_input_ID', router_local_mac, 800, 1);
        textSmoothTransition('router_public_info_ip_input_ID', router_public_ip, 800, 1);
        textSmoothTransition('router_public_info_mac_input_ID', router_public_mac, 800, 1);
        textSmoothTransition('server_public_info_ip_input_ID', server_public_ip, 800, 1);
        textSmoothTransition('tcpip_left_layer_04_cache_input_01_ID', value, 800, 1);
        textSmoothTransition('tcpip_left_layer_04_cache_input_02_ID', server_public_ip, 800, 1);
        textSmoothTransition('server_public_info_mac_input_ID', server_public_mac, 800, 1);
        textSmoothTransition('client_info_ip_input_ID', pc_local_ip, 800, 1);
        textSmoothTransition('client_info_mac_input_ID', pc_local_mac, 800, 1);
        textSmoothTransition('tcpip_left_layer_02_cache_input_03_ID', pc_local_ip, 800, 1);
        textSmoothTransition('tcpip_left_layer_02_cache_input_04_ID', pc_local_mac, 800, 1);
        textSmoothTransition('tcpip_left_layer_02_cache_input_08_ID', pc_local_mac, 800, 1);
        textSmoothTransition('tcpip_left_layer_02_cache_input_10_ID', pc_local_ip, 800, 1);
        textSmoothTransition('tcpip_left_layer_02_cache_input_11_ID', pc_local_ip, 800, 1);
        textSmoothTransition('tcpip_left_layer_02_cache_input_12_ID', pc_local_mac, 800, 1);
        textSmoothTransition('tcpip_left_layer_02_cache_input_14_ID', router_local_mac, 800, 1);
        await textSmoothTransition('tcpip_left_layer_00_mac_text_ID', pc_local_mac_L0, 800, 1);
        await pauseFlow();

        /* Anem cap al input del navegador i iniciem l'animació */
        if (scrollCamera){
          await goto_selected('terminal_container_ID', 1000, 0);
        }
        await input_animation(0, 85, 1500, 1, 'terminal_input_container_ID');
        await textSmoothTransition('terminal_input_ID', check_input_url(), 500, 1);
        await input_animation(60, 0, 1500, 1, 'terminal_input_container_ID');
        await waitFlow(300);
        if(isInfo){
          /* Ens mostra el popup d'informació */
          show_popup('popup_left_L4_cache_anim', 1300);
          await waitFlow(1200);
          await pauseFlow();
          show_popup('popup_left_L4_cache_anim', 1300);
        }

        scrollCamera && await goto_selected('tcpip_left_layer_04_cache_ID', 1500, 0);
        await check_url_cache_L4() && await http_animation();
        await tcp_animation();
        await pauseFlow();

        //scrollCamera && await goto_selected('terminal_input_container_ID', 1500, 0);
        //await pauseFlow();

      } else {
        // Si el input no és una URL vàlida
        console.log('No es una URL válida.');
      }

      async function http_animation(){
        await goto_selected('tcpip_left_layer_04_container_ID', 1300, 0);
        document.getElementById('terminal_input_ID').style.opacity = '0';
        document.getElementById('datagrama_container_ID').style.width = '145px';
        const divs = document.querySelectorAll('.datagrama_l04_text');
        divs.forEach(div => {
          div.style.opacity = '1';
        });
        await waitFlow(700);
        await goto_selected('datagrama_l04_text_container', 1300, 0.5);

        textSmoothTransition('datagrama_HTTP_01_ID', 'GET / HTTP/1.1', 1000, 1);
        textSmoothTransition('datagrama_HTTP_02_ID', check_input_url(), 1000, 1);
        textSmoothTransition('datagrama_HTTP_03_ID', 'keep-alive', 1000, 1);
        textSmoothTransition('datagrama_HTTP_04_ID', '1', 1000, 1);
        textSmoothTransition('datagrama_HTTP_05_ID', userAgent, 1000, 2);
        textSmoothTransition('datagrama_HTTP_06_ID', agent, 1000, 2);
        textSmoothTransition('datagrama_HTTP_07_ID', '1', 1000, 1);
        await textSmoothTransition('datagrama_HTTP_08_ID', acceptLanguage, 1000, 1);

        document.getElementById('datagrama_container_ID').style.transitionDuration = '0s';
        document.getElementById('terminal_input_ID').style.display = 'none';
        await pauseFlow();
        await goto_selected('tcpip_left_layer_04_container_ID', 1300, 0);
        await waitFlow(700);
        await input_animation(0, 58, 1500, 1, 'datagrama_container_ID');
        const httpHex = httpToHex('datagrama_l04_text_container');
        document.getElementById('datagrama_HTTP_09_ID').innerText = httpHex;
        const size = hexCalculateBytes(httpHex);
        document.getElementById('datagrama_HTTP_10_ID').innerText = `${size.bytes} Bytes`;
      }

      async function tcp_animation(){
        document.getElementById('datagrama_l02_text_container').style.width = '100%';
        const divs = document.querySelectorAll('.datagrama_l02_text');
        divs.forEach(div => {
          div.style.opacity = '1';
        });
        click_datagram('datagrama_layer_01_ID');
        //document.getElementById('datagrama_layer_01_ID').style.width = '20%';
        await waitFlow(300);
        document.getElementById('datagrama_l01_hex_ID').style.opacity = '1';
        document.getElementById('datagrama_layer_02_ID').style.backgroundColor = 'rgb(34 197 94)';
      }

      /*FUNCIONA PERO NO DONARA TEMPS, QUEDA PER LA PINDOLA DNS
        async function dns_animation(){
        await goto_selected('tcpip_left_layer_04_container_ID', 1500, 0);
        document.getElementById('tcpip_left_layer_04_container_ID').style.backgroundColor = 'rgb(127 55 255 / 22%)';
        document.getElementById('tcpip_left_layer_04_ID').style.backgroundColor = 'rgb(139 92 246)';
        await textSmoothTransition('tcpip_left_layer_04_ID', 'App Layer (DNS)', 1000, 2);

        document.getElementById("datagrama_container_ID").style.display = "inline-flex";
        await waitFlow(100);
        document.getElementById("datagrama_container_ID").style.opacity = 1;
        const hexDatagram = extractDnsValuesAndConvertToHex('datagrama_l01_text_container');
        const transactionID = '0x' + Math.floor(Math.random() * 0x10000).toString(16).padStart(4, '0');
        input_animation(-50, -20, 1500, 1, 'terminal_input_container_ID');
        await goto_selected('datagrama_container_ID', 1500, 0);
        textSmoothTransition('datagrama_DNS_02_ID', transactionID, 1000, 1);
        await textSmoothTransition('datagrama_DNS_03_ID', 'Standard query', 1000, 1);
        
        input_animation(0, 85, 1500, 1, 'terminal_input_container_ID');
        await input_animation(0, 85, 1500, 1, 'terminal_input_container_ID');
        await pauseFlow();
        input_animation(0, 85, 1500, 1, 'terminal_input_container_ID');
        await input_animation(0, 85, 1500, 1, 'terminal_input_container_ID');
        await pauseFlow();
      }*/

      async function check_url_cache_L4(){
        isRunning = true;
        isPaused = false;
        console.log("TERMINAL INPUT: ", document.getElementById('terminal_input_ID').value)
        console.log("CACHE L4 INPUT: ", document.getElementById('tcpip_left_layer_04_cache_input_01_ID').value)

        if((document.getElementById('terminal_input_ID').value.includes(document.getElementById('tcpip_left_layer_04_cache_input_01_ID').value)) && (document.getElementById('tcpip_left_layer_04_cache_input_02_ID').value != '')){
          // OPCIO 1
          document.getElementById('tcpip_left_layer_04_cache_input_01_ID').style.boxShadow = 'rgb(0 255 0) 0px 0px 3px 1px';
          document.getElementById('tcpip_left_layer_04_cache_input_02_ID').style.boxShadow = 'rgb(0 255 0) 0px 0px 3px 1px';
          await waitFlow(700);
          //await input_animation(-50, 0, 1000, 1, 'terminal_input_container_ID');
          setTimeout(() => {
            document.getElementById('tcpip_left_layer_04_cache_input_01_ID').style.boxShadow = 'none';
            document.getElementById('tcpip_left_layer_04_cache_input_02_ID').style.boxShadow = 'none';
            document.getElementById('tcpip_left_layer_04_cache_input_03_ID').style.boxShadow = 'none';
            document.getElementById('tcpip_left_layer_04_cache_input_04_ID').style.boxShadow = 'none';
            document.getElementById('tcpip_left_layer_04_cache_input_05_ID').style.boxShadow = 'none';
            document.getElementById('tcpip_left_layer_04_cache_input_06_ID').style.boxShadow = 'none';
          }, 1000);
          if(isInfo){
            /* Ens mostra el popup d'informació */
            show_popup('popup_left_L4_cache_anim_02', 1300);
            await waitFlow(1200);
            await pauseFlow();
            show_popup('popup_left_L4_cache_anim_02', 1300);
          }
          return true;
        }
        if((document.getElementById('terminal_input_ID').value.includes(document.getElementById('tcpip_left_layer_04_cache_input_03_ID').value)) && (document.getElementById('tcpip_left_layer_04_cache_input_04_ID').value != '')){
          // OPCIO 2
          document.getElementById('tcpip_left_layer_04_cache_input_01_ID').style.boxShadow = 'rgb(255 0 0) 0px 0px 3px 1px';
          document.getElementById('tcpip_left_layer_04_cache_input_02_ID').style.boxShadow = 'rgb(255 0 0) 0px 0px 3px 1px';
          await input_animation(0, 14, 1000, 1, 'terminal_input_container_ID');
          document.getElementById('tcpip_left_layer_04_cache_input_01_ID').style.boxShadow = 'none';
          document.getElementById('tcpip_left_layer_04_cache_input_02_ID').style.boxShadow = 'none';
          document.getElementById('tcpip_left_layer_04_cache_input_03_ID').style.boxShadow = 'rgb(0 255 0) 0px 0px 3px 1px';
          document.getElementById('tcpip_left_layer_04_cache_input_04_ID').style.boxShadow = 'rgb(0 255 0) 0px 0px 3px 1px';
          isRunning = true;
          isPaused = false;
          await waitFlow(700);
          //await input_animation(-50, -14, 1000, 1, 'terminal_input_container_ID');
          setTimeout(() => {
            document.getElementById('tcpip_left_layer_04_cache_input_01_ID').style.boxShadow = 'none';
            document.getElementById('tcpip_left_layer_04_cache_input_02_ID').style.boxShadow = 'none';
            document.getElementById('tcpip_left_layer_04_cache_input_03_ID').style.boxShadow = 'none';
            document.getElementById('tcpip_left_layer_04_cache_input_04_ID').style.boxShadow = 'none';
            document.getElementById('tcpip_left_layer_04_cache_input_05_ID').style.boxShadow = 'none';
            document.getElementById('tcpip_left_layer_04_cache_input_06_ID').style.boxShadow = 'none';
          }, 1000);
          if(isInfo){
            /* Ens mostra el popup d'informació */
            show_popup('popup_left_L4_cache_anim_02', 1300);
            await waitFlow(1200);
            await pauseFlow();
            show_popup('popup_left_L4_cache_anim_02', 1300);
          }
          return true;
        }
        if((document.getElementById('terminal_input_ID').value.includes(document.getElementById('tcpip_left_layer_04_cache_input_05_ID').value)) && (document.getElementById('tcpip_left_layer_04_cache_input_06_ID').value != '')){
          // OPCIO 3
          document.getElementById('tcpip_left_layer_04_cache_input_01_ID').style.boxShadow = 'rgb(255 0 0) 0px 0px 3px 1px';
          document.getElementById('tcpip_left_layer_04_cache_input_02_ID').style.boxShadow = 'rgb(255 0 0) 0px 0px 3px 1px';
          await input_animation(0, 14, 1000, 1, 'terminal_input_container_ID');
          document.getElementById('tcpip_left_layer_04_cache_input_01_ID').style.boxShadow = 'none';
          document.getElementById('tcpip_left_layer_04_cache_input_02_ID').style.boxShadow = 'none';
          document.getElementById('tcpip_left_layer_04_cache_input_03_ID').style.boxShadow = 'rgb(255 0 0) 0px 0px 3px 1px';
          document.getElementById('tcpip_left_layer_04_cache_input_04_ID').style.boxShadow = 'rgb(255 0 0) 0px 0px 3px 1px';
          isRunning = true;
          isPaused = false;
          await input_animation(0, 14, 1000, 1, 'terminal_input_container_ID');
          document.getElementById('tcpip_left_layer_04_cache_input_03_ID').style.boxShadow = 'none';
          document.getElementById('tcpip_left_layer_04_cache_input_04_ID').style.boxShadow = 'none';
          document.getElementById('tcpip_left_layer_04_cache_input_05_ID').style.boxShadow = 'rgb(0 255 0) 0px 0px 3px 1px';
          document.getElementById('tcpip_left_layer_04_cache_input_06_ID').style.boxShadow = 'rgb(0 255 0) 0px 0px 3px 1px';
          await waitFlow(700);
          //await input_animation(-50, -28, 1000, 1, 'terminal_input_container_ID');
          setTimeout(() => {
            document.getElementById('tcpip_left_layer_04_cache_input_01_ID').style.boxShadow = 'none';
            document.getElementById('tcpip_left_layer_04_cache_input_02_ID').style.boxShadow = 'none';
            document.getElementById('tcpip_left_layer_04_cache_input_03_ID').style.boxShadow = 'none';
            document.getElementById('tcpip_left_layer_04_cache_input_04_ID').style.boxShadow = 'none';
            document.getElementById('tcpip_left_layer_04_cache_input_05_ID').style.boxShadow = 'none';
            document.getElementById('tcpip_left_layer_04_cache_input_06_ID').style.boxShadow = 'none';
          }, 1000);
          if(isInfo){
            /* Ens mostra el popup d'informació */
            show_popup('popup_left_L4_cache_anim_02', 1300);
            await waitFlow(1200);
            await pauseFlow();
            show_popup('popup_left_L4_cache_anim_02', 1300);
          }
          return true;
        }
        // OPCIO 0
        document.getElementById('tcpip_left_layer_04_cache_input_01_ID').style.boxShadow = 'rgb(255 0 0) 0px 0px 3px 1px';
        document.getElementById('tcpip_left_layer_04_cache_input_02_ID').style.boxShadow = 'rgb(255 0 0) 0px 0px 3px 1px';
        await input_animation(0, 14, 1000, 1, 'terminal_input_container_ID');
        document.getElementById('tcpip_left_layer_04_cache_input_01_ID').style.boxShadow = 'none';
        document.getElementById('tcpip_left_layer_04_cache_input_02_ID').style.boxShadow = 'none';
        document.getElementById('tcpip_left_layer_04_cache_input_03_ID').style.boxShadow = 'rgb(255 0 0) 0px 0px 3px 1px';
        document.getElementById('tcpip_left_layer_04_cache_input_04_ID').style.boxShadow = 'rgb(255 0 0) 0px 0px 3px 1px';
        isRunning = true;
        isPaused = false;
        await input_animation(0, 14, 1000, 1, 'terminal_input_container_ID');
        document.getElementById('tcpip_left_layer_04_cache_input_03_ID').style.boxShadow = 'none';
        document.getElementById('tcpip_left_layer_04_cache_input_04_ID').style.boxShadow = 'none';
        document.getElementById('tcpip_left_layer_04_cache_input_05_ID').style.boxShadow = 'rgb(255 0 0) 0px 0px 3px 1px';
        document.getElementById('tcpip_left_layer_04_cache_input_06_ID').style.boxShadow = 'rgb(255 0 0) 0px 0px 3px 1px';
        setTimeout(() => {
          document.getElementById('tcpip_left_layer_04_cache_input_01_ID').style.boxShadow = 'none';
          document.getElementById('tcpip_left_layer_04_cache_input_02_ID').style.boxShadow = 'none';
          document.getElementById('tcpip_left_layer_04_cache_input_03_ID').style.boxShadow = 'none';
          document.getElementById('tcpip_left_layer_04_cache_input_04_ID').style.boxShadow = 'none';
          document.getElementById('tcpip_left_layer_04_cache_input_05_ID').style.boxShadow = 'none';
          document.getElementById('tcpip_left_layer_04_cache_input_06_ID').style.boxShadow = 'none';
        }, 1000);
        await waitFlow(300);
        if(isInfo){
          show_popup('popup_left_L4_cache_anim_03', 1000);
          await waitFlow(1000);
          await pauseFlow();
          show_popup('popup_left_L4_cache_anim_03', 1000);
        }
        textSmoothTransition('tcpip_left_layer_04_cache_input_01_ID', document.getElementById('terminal_input_ID').value, 800, 1);
        textSmoothTransition('tcpip_left_layer_04_cache_input_02_ID', server_public_ip, 800, 1);
        await input_animation(-50, -28, 1000, 1, 'terminal_input_container_ID');
        return false;
      }
    }
  };

  function dnsToHex(containerId) {
    const container = document.querySelector(`#${containerId}`);
    if (!container) {
      console.error('El contenedor no existe.');
      return '';
    }
    try{
      const inputs = container.querySelectorAll('input, textarea');
      let dnsData = {};
      inputs.forEach(input => {
        const label = input.previousSibling?.nodeValue?.trim().replace(':', '') || '';
        const value = input.value.trim();
        dnsData[label] = value;
      });
      const hexOutput = [];
      if (dnsData['Transaction ID']) {
        hexOutput.push(dnsData['Transaction ID'].replace('0x', '').padStart(4, '0'));
      }
      if (dnsData['Flags']) {
        const flagsMap = {
          'Standard query': '0100',
          'Standard query response, No error': '8180',
        };
        hexOutput.push(flagsMap[dnsData['Flags']] || '0000');
      }
      if (dnsData['Questions']) {
        hexOutput.push(parseInt(dnsData['Questions'], 10).toString(16).padStart(4, '0'));
      }
      if (dnsData['Answer RRs']) {
        hexOutput.push(parseInt(dnsData['Answer RRs'], 10).toString(16).padStart(4, '0'));
      }
      if (dnsData['Query Name']) {
        const queryNameHex = dnsData['Query Name']
          .split('.')
          .map(part => part.length.toString(16).padStart(2, '0') + part.split('').map(c => c.charCodeAt(0).toString(16)).join(''))
          .join('') + '00';
        hexOutput.push(queryNameHex);
      }
      if (dnsData['Query Type']) {
        const queryTypeMap = {
          A: '0001',
          AAAA: '001c',
          CNAME: '0005',
        };
        hexOutput.push(queryTypeMap[dnsData['Query Type']] || '0000');
      }
      if (dnsData['Query Class']) {
        const queryClassMap = {
          IN: '0001',
        };
        hexOutput.push(queryClassMap[dnsData['Query Class']] || '0000');
      }
      return hexOutput.join(' ');
    } catch (error){
      console.error('Error al extraer los valores DNS:', error);
    }
  }

  function httpToHex(containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
      console.error('El contenedor no existeix.');
      return '';
    }

    const inputs = container.querySelectorAll('input, textarea');
    const tags = container.querySelectorAll('.datagrama_l01_text_tag');
    const requestParts = [];

    var key = inputs[0].getAttribute('data-key');
    var value = inputs[0].value.trim();
    if (key === 'request-line') {
      requestParts.push(value);
    } else {
      const label = inputs[0].previousSibling?.textContent?.trim() || '';
      if (label) {
        requestParts.push(`${label} ${value}`);
      }
    }
    for(let i = 0; i < tags.length; i++){
      key = inputs[i+1].getAttribute('data-key');
      value = inputs[i+1].value.trim();
      const text = tags[i].textContent.trim();
      if (text) {
        requestParts.push(`${text} ${value}`);
      }
      if (key === 'request-line') {
        requestParts.push(value);
      } else {
        const label = inputs[i+1].previousSibling?.textContent?.trim() || '';
        if (label) {
          requestParts.push(`${text} ${label} ${value}`);
        }
      }
    }

    const requestString = requestParts.join('\r\n') + '\r\n\r\n';
    const hexString = Array.from(requestString)
    .map(char => char.charCodeAt(0).toString(16).padStart(2, '0'))
    .join(' ');
    return hexString;
  }

  function hexCalculateBytes(hexString) {
    const cleanHex = hexString.replace(/\s+/g, '');
    const bytes = cleanHex.length / 2;
    const kilobytes = bytes / 1024;

    return {
      bytes: bytes,
      kilobytes: kilobytes
    };
  }

  document.querySelector('.tcpip_pause').onclick = function(){
    //input_promise('pause');
    isRunning = false;
    isPaused = true;
    document.getElementById('play_ID').setAttribute("style", "filter: grayscale(0%);");
    document.getElementById('play_ID').disabled = false;
    document.getElementById('play_img_ID').setAttribute("style", "filter: drop-shadow(rgb(0, 255, 0) 0px 0px 10px);");
    setTimeout(() => {
      document.getElementById('play_img_ID').setAttribute("style", "filter: drop-shadow(rgb(0, 0, 0) 0px 0px 0px);");
    }, 800);
  };

  document.querySelector('.tcpip_restart').onclick = function() {
    // Aquest boto s'encarrega de reiniciar tots els valors a 0
    input_promise('reset');
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

function acceptLanguageAndUserAgent() {
  const languages = navigator.languages || ['en'];
  let qValue = 1.0;
  const formattedLanguages = languages.map((lang, index) => {
    const formatted = index === 0 ? lang : `${lang};q=${qValue.toFixed(1)}`;
    qValue -= 0.1;
    return formatted;
  });
  return {
    acceptLanguage: formattedLanguages.join(','), 
    userAgent: navigator.userAgent,
    agent: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
  };
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

async function show_popup(id, ms){
  document.getElementById('play_ID').style.filter = 'grayscale(100%)';
  document.getElementById('play_ID').disabled = true;
  var popup_text_id = id + "_text";
  const elements = document.getElementsByClassName('information_popup_text');
  for (let i = 0; i < elements.length; i++) {
    if(elements[i].id !== popup_text_id && elements[i].style.display !== "none"){
      elements[i].style.opacity = "0";
      setTimeout(() => {
        elements[i].style.display = "none";
      }, 300);
    }
  }
  if (document.getElementById(popup_text_id).style.opacity == "1"){
    document.getElementById(popup_text_id).style.opacity = "0";
    setTimeout(() => {
      document.getElementById(popup_text_id).style.display = "none";
    }, 300);
  } else {
    document.getElementById(popup_text_id).style.display = "inline";
    document.getElementById(popup_text_id).style.opacity = "1";
    await goto_selected(popup_text_id, ms, 0);
  }
}

function change_info_popups(){
  const elements = document.getElementsByClassName('information_popup_container');
  for (let i = 0; i < elements.length; i++) {
    if(elements[i].style.display === "none"){
      isInfo = true;
      elements[i].style.display = "inline";
      //document.getElementById('tcpip_info_button_ID').style.backgroundColor = "rgba(0, 0, 0, 0)";
      document.getElementById('tcpip_info_button_ID').style.filter = "opacity(100%)";
    } else {
      isInfo = false;
      elements[i].style.display = "none";
      //document.getElementById('tcpip_info_button_ID').style.backgroundColor = "rgba(255, 0, 255, 0.5)";
      document.getElementById('tcpip_info_button_ID').style.filter = "opacity(20%)";
    }
  }
}

function randomLocalIP(startIp, endIp){
  const startDecimal = startIp.split('.').reduce((acc, octet) => (acc << 8) + parseInt(octet, 10), 0);
  const endDecimal = endIp.split('.').reduce((acc, octet) => (acc << 8) + parseInt(octet, 10), 0);

  if (startDecimal > endDecimal) {
    throw new Error('El rango de IP no es válido: la IP inicial es mayor que la final.');
  }

  const randomDecimal = Math.floor(Math.random() * (endDecimal - startDecimal + 1) + startDecimal);

  return [
    (randomDecimal >>> 24) & 255,
    (randomDecimal >>> 16) & 255,
    (randomDecimal >>> 8) & 255,
    randomDecimal & 255,
  ].join('.');
}

function randomPublicIP(){
  var ip = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));
  return ip;
}

function check_input_url(){
  if (!document.getElementById('terminal_input_ID').value.includes('http://')) {
    return 'http://' + document.getElementById('terminal_input_ID').value;
  }
  return document.getElementById('terminal_input_ID').value;
}

function randomMAC() {
  const hexDigits = '0123456789ABCDEF';
  const mac = Array.from({ length: 6 }, (_, i) => {
    if (i === 0) {
      const firstByte = (Math.floor(Math.random() * 256) & 0xFE).toString(16).padStart(2, '0');
      return firstByte.toUpperCase();
    }
    return Array.from({ length: 2 }, () =>
      hexDigits[Math.floor(Math.random() * hexDigits.length)]
    ).join('');
  });
  return mac.join(':');
}

async function textSmoothTransition(inputId, targetText, ms, opt) {
  // OPT -> 1: INPUT, 2: TEXT
  const inputElement = document.getElementById(inputId);
  document.getElementById('play_ID').style.filter = 'grayscale(100%)';
  document.getElementById('play_ID').disabled = true;
  if(opt == 1){
    if (!inputElement) {
      console.error(`No se encontró el elemento con ID: ${inputId}`);
      return;
    }

    const currentText = inputElement.value;
    const maxLength = Math.max(currentText.length, targetText.length);
    const steps = 30;
    const stepDuration = ms / steps;

    let currentStep = 0;
    function updateText() {
      if (currentStep > steps) return;

      const progress = currentStep / steps;
      const interpolatedText = Array.from({ length: maxLength }, (_, i) => {
        const fromChar = currentText[i] || '';
        const toChar = targetText[i] || '';
        return progress > (i / maxLength) ? toChar : fromChar;
      }).join('');

      inputElement.value = interpolatedText;
      currentStep++;
      setTimeout(updateText, stepDuration);
    }
    updateText();
    await new Promise(resolveTextSmooth => setTimeout(() => {
      isRunning = true;
      isPaused = false;
      resolveTextSmooth();
    }, ms));
  } else if(opt == 2){
    if (!inputElement) {
      console.error(`No se encontró el elemento con ID: ${inputId}`);
      return;
    }

    const currentText = inputElement.innerText;
    const maxLength = Math.max(currentText.length, targetText.length);
    const steps = 30;
    const stepDuration = ms / steps;

    let currentStep = 0;
    function updateText() {
      if (currentStep > steps) return;

      const progress = currentStep / steps;
      const interpolatedText = Array.from({ length: maxLength }, (_, i) => {
        const fromChar = currentText[i] || '';
        const toChar = targetText[i] || '';
        return progress > (i / maxLength) ? toChar : fromChar;
      }).join('');

      inputElement.innerText = interpolatedText;
      currentStep++;
      setTimeout(updateText, stepDuration);
    }
    updateText();
    await new Promise(resolveTextSmooth => setTimeout(() => {
      isRunning = true;
      isPaused = false;
      resolveTextSmooth();
    }, ms));
  }
}

async function goto_selected(idName, ms, lambda){
  if(wasDragging == false && !isTransitioning && scrollCamera){
    isTransitioning = true;
    document.getElementById('play_ID').style.filter = 'grayscale(100%)';
    document.getElementById('play_ID').disabled = true;
    document.getElementById('tcpip_wrapper_in_ID').style.transition = "all " + ms + "ms ease";
    var v1 = document.getElementById(idName).getBoundingClientRect()
    var v2 = document.getElementById('tcpip_wrapper_in_ID').getBoundingClientRect()

    var square_px_wrapper = v2.width * v2.height;
    var square_px_object = v1.width * v1.height;
    var square_px_weight = square_px_wrapper / square_px_object;
    console.log("Square px weight: ", square_px_weight);
    // Hem de calcular la diferencia entre arees del wrapper i l'objecte seleccionat per poder calcular un pes que li aplicarem a el scale
    // Pes que necesito que per 1 sigui 1, que no hi haigui canvi pero que a mesura que creix que es suavitzi el canvi de scale (funcio logaritmica)
    var k = 1; // Mou la corba logaritmica, ha de estar a 1
    var p = 0.7 + lambda; // Amplificar la corba logaritmica
    var scale_value = 1 + Math.pow(Math.log(k * square_px_weight), p); // Default 2 - 3.5
    var scale_multiplier = ((scale_value/2)/scale)
    //console.log("Vector v1: ", v1.top, v1.left, v1.bottom, v1.right);
    var v1x = [(scale_multiplier*v1.top), (scale_multiplier*v1.left)];
    var v1y = [(scale_multiplier*v1.bottom), (scale_multiplier*v1.right)];
    //console.log("v1x: ", v1x, "v1y: ", v1y);

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
    await new Promise(resolve_gotoselected => setTimeout(() => {
      document.getElementById('tcpip_wrapper_in_ID').style.transition = "";
      isTransitioning = false;
      document.getElementById('play_ID').style.filter = 'grayscale(0%)';
      document.getElementById('play_ID').disabled = false;
      resolve_gotoselected();
    }, ms));
  }
}

async function waitFlow(ms) {
  document.getElementById('play_ID').style.filter = 'grayscale(100%)';
  document.getElementById('play_ID').disabled = true;
  return new Promise((resolve_wait) => {
    setTimeout(() => {
      resolve_wait();
    }, ms);
  });
}

function get_transform(idName) {
  const element = document.getElementById(idName)

  if (!element) {
    console.error(`Elemento con ID '${idName}' no encontrado.`);
    return { tX: 0, tY: 0, scale: 1 };
  }

  const computedStyle = window.getComputedStyle(element);
  const matrix = computedStyle.transform;
  var tX, tY, scale_object; 

  if (matrix === 'none') {
    return { tX: 0, tY: 0, scale: 1 };
  }

  if (matrix !== 'none') {
    const values = matrix.match(/matrix\(([^)]+)\)/)[1].split(', ');
    const tX_old = parseFloat(values[4]);
    const tY_old = parseFloat(values[5]);
    tX = tX_old;
    tY = tY_old;
    scale_object = parseFloat(values[3]);
  } else {
    console.log("El elemento no tiene transformación aplicada.");
  }

  console.log("tX_function: ", tX, "tY_function: ", tY, "scale_function: ", scale_object);
  return { tX, tY, scale_object };
}

function zoom_image(id){
  if (document.getElementById(id).style.width == "500px"){
    document.getElementById(id).setAttribute("style", "width: 350px");
  } else {
    document.getElementById(id).setAttribute("style", "width: 500px");
  }
}

function change_tab(tab){
  if (tab == 1){
    document.getElementById('tcpip_container_03_ID').style.display = "none";
    document.getElementById('tcpip_container_02_ID').style.display = "none";
    document.getElementById('tcpip_container_01_ID').style.display = "inline-flex";
    const element = document.getElementById('tab_animacio_ID');
    const bgColor = window.getComputedStyle(element).backgroundColor;
    if(bgColor === "rgba(0, 0, 0, 0.35)"){
      document.getElementById('tab_animacio_ID').style.background = "rgba(0, 0, 0, 0.5)";
      document.getElementById('tab_teoria_ID').style.background = "rgba(0, 0, 0, 0.35)";
      document.getElementById('tab_info_ID').style.background = "rgba(0, 0, 0, 0.35)";
      document.getElementById('tab_animacio_hr_ID').style.borderColor = "white";
      document.getElementById('tab_teoria_hr_ID').style.borderColor = "rgba(255, 255, 255, 0.20)";
      document.getElementById('tab_info_hr_ID').style.borderColor = "rgba(255, 255, 255, 0.20)";
    } else if(bgColor === "rgba(255, 255, 255, 0.25)"){
      document.getElementById('tab_animacio_ID').style.background = "rgba(255, 255, 255, 0.59)";
      document.getElementById('tab_teoria_ID').style.background = "rgba(255, 255, 255, 0.25)";
      document.getElementById('tab_info_ID').style.background = "rgba(255, 255, 255, 0.25)";
      document.getElementById('tab_animacio_hr_ID').style.borderColor = "white";
      document.getElementById('tab_teoria_hr_ID').style.borderColor = "rgba(0, 0, 0, 0.40)";
      document.getElementById('tab_info_hr_ID').style.borderColor = "rgba(0, 0, 0, 0.40)";
    }
  } else if (tab == 2){
    document.getElementById('tcpip_container_03_ID').style.display = "none";
    document.getElementById('tcpip_container_02_ID').style.display = "inline-flex";
    document.getElementById('tcpip_container_01_ID').style.display = "none";
    const element = document.getElementById('tab_teoria_ID');
    const bgColor = window.getComputedStyle(element).backgroundColor;
    if(bgColor === "rgba(0, 0, 0, 0.35)"){
      document.getElementById('tab_animacio_ID').style.background = "rgba(0, 0, 0, 0.35)";
      document.getElementById('tab_teoria_ID').style.background = "rgba(0, 0, 0, 0.5)";
      document.getElementById('tab_info_ID').style.background = "rgba(0, 0, 0, 0.35)";
      document.getElementById('tab_animacio_hr_ID').style.borderColor = "rgba(255, 255, 255, 0.20)";
      document.getElementById('tab_teoria_hr_ID').style.borderColor = "white";
      document.getElementById('tab_info_hr_ID').style.borderColor = "rgba(255, 255, 255, 0.20)";
    } else if(bgColor === "rgba(255, 255, 255, 0.25)"){
      document.getElementById('tab_animacio_ID').style.background = "rgba(255, 255, 255, 0.25)";
      document.getElementById('tab_teoria_ID').style.background = "rgba(255, 255, 255, 0.59)";
      document.getElementById('tab_info_ID').style.background = "rgba(255, 255, 255, 0.25)";
      document.getElementById('tab_animacio_hr_ID').style.borderColor = "rgba(0, 0, 0, 0.40)";
      document.getElementById('tab_teoria_hr_ID').style.borderColor = "white";
      document.getElementById('tab_info_hr_ID').style.borderColor = "rgba(0, 0, 0, 0.40)";
    }
  } else if (tab == 3){
    document.getElementById('tcpip_container_03_ID').style.display = "inline-flex";
    document.getElementById('tcpip_container_02_ID').style.display = "none";
    document.getElementById('tcpip_container_01_ID').style.display = "none";
    const element = document.getElementById('tab_info_ID');
    const bgColor = window.getComputedStyle(element).backgroundColor;
    if(bgColor === "rgba(0, 0, 0, 0.35)"){
      document.getElementById('tab_animacio_ID').style.background = "rgba(0, 0, 0, 0.35)";
      document.getElementById('tab_teoria_ID').style.background = "rgba(0, 0, 0, 0.35)";
      document.getElementById('tab_info_ID').style.background = "rgba(0, 0, 0, 0.5)";
      document.getElementById('tab_animacio_hr_ID').style.borderColor = "rgba(255, 255, 255, 0.20)";
      document.getElementById('tab_teoria_hr_ID').style.borderColor = "rgba(255, 255, 255, 0.20)";
      document.getElementById('tab_info_hr_ID').style.borderColor = "white";
    } else if(bgColor === "rgba(255, 255, 255, 0.25)"){
      document.getElementById('tab_animacio_ID').style.background = "rgba(255, 255, 255, 0.25)";
      document.getElementById('tab_teoria_ID').style.background = "rgba(255, 255, 255, 0.25)";
      document.getElementById('tab_info_ID').style.background = "rgba(255, 255, 255, 0.59)";
      document.getElementById('tab_animacio_hr_ID').style.borderColor = "rgba(0, 0, 0, 0.40)";
      document.getElementById('tab_teoria_hr_ID').style.borderColor = "rgba(0, 0, 0, 0.40)";
      document.getElementById('tab_info_hr_ID').style.borderColor = "white";
    }
  }
}

function check_url(value) {
    const regex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/.*)?$/;
    return regex.test(value);
}

async function click_datagram(datagramID){
  console.log("Click datagram: ", datagramID);
  if(datagramID === 'datagrama_layer_04_ID'){
    /* -------- LAYER 04 -------- */
    if(document.getElementById('datagrama_l04_vbutton_ID').innerText === '>'){
      /* SHOW HEX */
      document.getElementById('datagrama_l01_vbutton_ID').innerText = '<';
      document.getElementById('datagrama_l02_vbutton_ID').innerText = '<';
      document.getElementById('datagrama_l03_vbutton_ID').innerText = '<';
      document.getElementById('datagrama_l04_vbutton_ID').innerText = '<';

      document.getElementById('datagrama_l01_text_container_02_ID').style.width = '0%';
      document.getElementById('datagrama_l01_text_container_03_ID').style.width = '100%';
      document.getElementById('datagrama_l02_text_container_02_ID').style.width = '0%';
      document.getElementById('datagrama_l02_text_container_03_ID').style.width = '100%';
      document.getElementById('datagrama_l03_text_container_02_ID').style.width = '0%';
      document.getElementById('datagrama_l03_text_container_03_ID').style.width = '100%';
      document.getElementById('datagrama_l04_text_container_02_ID').style.width = '0%';
      document.getElementById('datagrama_l04_text_container_03_ID').style.width = '100%';

      document.getElementById('datagrama_l01_text_container').style.width = '25%';
      document.getElementById('datagrama_l02_text_container').style.width = '30%';
      document.getElementById('datagrama_l03_text_container').style.width = '60%';
      document.getElementById('datagrama_l04_text_container').style.width = '100%';

      document.getElementById('datagrama_l01_hex_ID').style.opacity = '1';
      document.getElementById('datagrama_l02_hex_ID').style.opacity = '1';
      document.getElementById('datagrama_l03_hex_ID').style.opacity = '1';
      document.getElementById('datagrama_l04_hex_ID').style.opacity = '1';
      
      const divs = document.querySelectorAll('.datagrama_l04_text');
      divs.forEach(div => {
        div.style.opacity = '1';
      });
    } 
    else if(document.getElementById('datagrama_l04_vbutton_ID').innerText === '<'){
      /* SHOW TEXT */
      document.getElementById('datagrama_l01_vbutton_ID').innerText = '<';
      document.getElementById('datagrama_l02_vbutton_ID').innerText = '<';
      document.getElementById('datagrama_l03_vbutton_ID').innerText = '<';
      document.getElementById('datagrama_l04_vbutton_ID').innerText = '>';

      document.getElementById('datagrama_l01_text_container_02_ID').style.width = '0%';
      document.getElementById('datagrama_l01_text_container_03_ID').style.width = '100%';
      document.getElementById('datagrama_l02_text_container_02_ID').style.width = '0%';
      document.getElementById('datagrama_l02_text_container_03_ID').style.width = '100%';
      document.getElementById('datagrama_l03_text_container_02_ID').style.width = '0%';
      document.getElementById('datagrama_l03_text_container_03_ID').style.width = '100%';
      document.getElementById('datagrama_l04_text_container_02_ID').style.width = '100%';
      document.getElementById('datagrama_l04_text_container_03_ID').style.width = '0%';

      document.getElementById('datagrama_l01_text_container').style.width = '10%';
      document.getElementById('datagrama_l02_text_container').style.width = '13%';
      document.getElementById('datagrama_l03_text_container').style.width = '15%';
      document.getElementById('datagrama_l04_text_container').style.width = '100%';

      document.getElementById('datagrama_l01_hex_ID').style.opacity = '1';
      document.getElementById('datagrama_l02_hex_ID').style.opacity = '1';
      document.getElementById('datagrama_l03_hex_ID').style.opacity = '1';
      document.getElementById('datagrama_l04_hex_ID').style.opacity = '0';
      
      const divs = document.querySelectorAll('.datagrama_l03_text');
      divs.forEach(div => {
        div.style.opacity = '1';
      });
    }

  } else if(datagramID === 'datagrama_layer_03_ID'){
    /* -------- LAYER 03 -------- */
    if(document.getElementById('datagrama_l03_vbutton_ID').innerText === '>'){
      /* SHOW HEX */
      document.getElementById('datagrama_l01_vbutton_ID').innerText = '<';
      document.getElementById('datagrama_l02_vbutton_ID').innerText = '<';
      document.getElementById('datagrama_l03_vbutton_ID').innerText = '<';
      document.getElementById('datagrama_l04_vbutton_ID').innerText = '<';

      document.getElementById('datagrama_l01_text_container_02_ID').style.width = '0%';
      document.getElementById('datagrama_l01_text_container_03_ID').style.width = '100%';
      document.getElementById('datagrama_l02_text_container_02_ID').style.width = '0%';
      document.getElementById('datagrama_l02_text_container_03_ID').style.width = '100%';
      document.getElementById('datagrama_l03_text_container_02_ID').style.width = '0%';
      document.getElementById('datagrama_l03_text_container_03_ID').style.width = '100%';
      document.getElementById('datagrama_l04_text_container_02_ID').style.width = '0%';
      document.getElementById('datagrama_l04_text_container_03_ID').style.width = '100%';

      document.getElementById('datagrama_l01_text_container').style.width = '25%';
      document.getElementById('datagrama_l02_text_container').style.width = '30%';
      document.getElementById('datagrama_l03_text_container').style.width = '60%';
      document.getElementById('datagrama_l04_text_container').style.width = '100%';

      document.getElementById('datagrama_l01_hex_ID').style.opacity = '1';
      document.getElementById('datagrama_l02_hex_ID').style.opacity = '1';
      document.getElementById('datagrama_l03_hex_ID').style.opacity = '1';
      document.getElementById('datagrama_l04_hex_ID').style.opacity = '1';
      
      const divs = document.querySelectorAll('.datagrama_l03_text');
      divs.forEach(div => {
        div.style.opacity = '1';
      });
    } 
    else if(document.getElementById('datagrama_l03_vbutton_ID').innerText === '<'){
      /* SHOW TEXT */
      document.getElementById('datagrama_l01_vbutton_ID').innerText = '<';
      document.getElementById('datagrama_l02_vbutton_ID').innerText = '<';
      document.getElementById('datagrama_l03_vbutton_ID').innerText = '>';
      document.getElementById('datagrama_l04_vbutton_ID').innerText = '<';

      document.getElementById('datagrama_l01_text_container_02_ID').style.width = '0%';
      document.getElementById('datagrama_l01_text_container_03_ID').style.width = '100%';
      document.getElementById('datagrama_l02_text_container_02_ID').style.width = '0%';
      document.getElementById('datagrama_l02_text_container_03_ID').style.width = '100%';
      document.getElementById('datagrama_l03_text_container_02_ID').style.width = '100%';
      document.getElementById('datagrama_l03_text_container_03_ID').style.width = '0%';
      document.getElementById('datagrama_l04_text_container_02_ID').style.width = '0%';
      document.getElementById('datagrama_l04_text_container_03_ID').style.width = '100%';

      document.getElementById('datagrama_l01_text_container').style.width = '10%';
      document.getElementById('datagrama_l02_text_container').style.width = '13%';
      document.getElementById('datagrama_l03_text_container').style.width = '200%';
      document.getElementById('datagrama_l04_text_container').style.width = '100%';

      document.getElementById('datagrama_l01_hex_ID').style.opacity = '1';
      document.getElementById('datagrama_l02_hex_ID').style.opacity = '1';
      document.getElementById('datagrama_l03_hex_ID').style.opacity = '0';
      document.getElementById('datagrama_l04_hex_ID').style.opacity = '1';
      
      const divs = document.querySelectorAll('.datagrama_l03_text');
      divs.forEach(div => {
        div.style.opacity = '1';
      });
    }
  } else if(datagramID === 'datagrama_layer_02_ID'){
    /* -------- LAYER 02 -------- */
    if(document.getElementById('datagrama_l02_vbutton_ID').innerText === '>'){
      /* SHOW HEX */
      document.getElementById('datagrama_l01_vbutton_ID').innerText = '<';
      document.getElementById('datagrama_l02_vbutton_ID').innerText = '<';
      document.getElementById('datagrama_l03_vbutton_ID').innerText = '<';
      document.getElementById('datagrama_l04_vbutton_ID').innerText = '<';

      document.getElementById('datagrama_l01_text_container_02_ID').style.width = '0%';
      document.getElementById('datagrama_l01_text_container_03_ID').style.width = '100%';
      document.getElementById('datagrama_l02_text_container_02_ID').style.width = '0%';
      document.getElementById('datagrama_l02_text_container_03_ID').style.width = '100%';
      document.getElementById('datagrama_l03_text_container_02_ID').style.width = '0%';
      document.getElementById('datagrama_l03_text_container_03_ID').style.width = '100%';
      document.getElementById('datagrama_l04_text_container_02_ID').style.width = '0%';
      document.getElementById('datagrama_l04_text_container_03_ID').style.width = '100%';

      document.getElementById('datagrama_l01_text_container').style.width = '25%';
      document.getElementById('datagrama_l02_text_container').style.width = '30%';
      document.getElementById('datagrama_l03_text_container').style.width = '60%';
      document.getElementById('datagrama_l04_text_container').style.width = '100%';

      document.getElementById('datagrama_l01_hex_ID').style.opacity = '1';
      document.getElementById('datagrama_l02_hex_ID').style.opacity = '1';
      document.getElementById('datagrama_l03_hex_ID').style.opacity = '1';
      document.getElementById('datagrama_l04_hex_ID').style.opacity = '1';
      
      const divs = document.querySelectorAll('.datagrama_l02_text');
      divs.forEach(div => {
        div.style.opacity = '1';
      });
    } 
    else if(document.getElementById('datagrama_l02_vbutton_ID').innerText === '<'){
      /* SHOW TEXT */
      document.getElementById('datagrama_l01_vbutton_ID').innerText = '<';
      document.getElementById('datagrama_l02_vbutton_ID').innerText = '>';
      document.getElementById('datagrama_l03_vbutton_ID').innerText = '<';
      document.getElementById('datagrama_l04_vbutton_ID').innerText = '<';

      document.getElementById('datagrama_l01_text_container_02_ID').style.width = '0%';
      document.getElementById('datagrama_l01_text_container_03_ID').style.width = '100%';
      document.getElementById('datagrama_l02_text_container_02_ID').style.width = '100%';
      document.getElementById('datagrama_l02_text_container_03_ID').style.width = '0%';
      document.getElementById('datagrama_l03_text_container_02_ID').style.width = '0%';
      document.getElementById('datagrama_l03_text_container_03_ID').style.width = '100%';
      document.getElementById('datagrama_l04_text_container_02_ID').style.width = '0%';
      document.getElementById('datagrama_l04_text_container_03_ID').style.width = '100%';

      document.getElementById('datagrama_l01_text_container').style.width = '10%';
      document.getElementById('datagrama_l02_text_container').style.width = '140%';
      document.getElementById('datagrama_l03_text_container').style.width = '50%';
      document.getElementById('datagrama_l04_text_container').style.width = '100%';

      document.getElementById('datagrama_l01_hex_ID').style.opacity = '1';
      document.getElementById('datagrama_l02_hex_ID').style.opacity = '0';
      document.getElementById('datagrama_l03_hex_ID').style.opacity = '1';
      document.getElementById('datagrama_l04_hex_ID').style.opacity = '1';
      
      const divs = document.querySelectorAll('.datagrama_l02_text');
      divs.forEach(div => {
        div.style.opacity = '1';
      });
    }
  } else if(datagramID === 'datagrama_layer_01_ID'){
    /* -------- LAYER 01 -------- */
    if(document.getElementById('datagrama_l01_vbutton_ID').innerText === '>'){
      /* SHOW HEX */
      document.getElementById('datagrama_l01_vbutton_ID').innerText = '<';
      document.getElementById('datagrama_l02_vbutton_ID').innerText = '<';
      document.getElementById('datagrama_l03_vbutton_ID').innerText = '<';
      document.getElementById('datagrama_l04_vbutton_ID').innerText = '<';

      document.getElementById('datagrama_l01_text_container_02_ID').style.width = '0%';
      document.getElementById('datagrama_l01_text_container_03_ID').style.width = '100%';
      document.getElementById('datagrama_l02_text_container_02_ID').style.width = '0%';
      document.getElementById('datagrama_l02_text_container_03_ID').style.width = '100%';
      document.getElementById('datagrama_l03_text_container_02_ID').style.width = '0%';
      document.getElementById('datagrama_l03_text_container_03_ID').style.width = '100%';
      document.getElementById('datagrama_l04_text_container_02_ID').style.width = '0%';
      document.getElementById('datagrama_l04_text_container_03_ID').style.width = '100%';

      document.getElementById('datagrama_l01_text_container').style.width = '25%';
      document.getElementById('datagrama_l02_text_container').style.width = '30%';
      document.getElementById('datagrama_l03_text_container').style.width = '60%';
      document.getElementById('datagrama_l04_text_container').style.width = '100%';

      document.getElementById('datagrama_l01_hex_ID').style.opacity = '1';
      document.getElementById('datagrama_l02_hex_ID').style.opacity = '1';
      document.getElementById('datagrama_l03_hex_ID').style.opacity = '1';
      document.getElementById('datagrama_l04_hex_ID').style.opacity = '1';
      
      const divs = document.querySelectorAll('.datagrama_l01_text');
      divs.forEach(div => {
        div.style.opacity = '1';
      });
    } 
    else if(document.getElementById('datagrama_l01_vbutton_ID').innerText === '<'){
      /* SHOW TEXT */
      document.getElementById('datagrama_l01_vbutton_ID').innerText = '>';
      document.getElementById('datagrama_l02_vbutton_ID').innerText = '<';
      document.getElementById('datagrama_l03_vbutton_ID').innerText = '<';
      document.getElementById('datagrama_l04_vbutton_ID').innerText = '<';

      document.getElementById('datagrama_l01_text_container_02_ID').style.width = '100%';
      document.getElementById('datagrama_l01_text_container_03_ID').style.width = '0%';
      document.getElementById('datagrama_l02_text_container_02_ID').style.width = '0%';
      document.getElementById('datagrama_l02_text_container_03_ID').style.width = '100%';
      document.getElementById('datagrama_l03_text_container_02_ID').style.width = '0%';
      document.getElementById('datagrama_l03_text_container_03_ID').style.width = '100%';
      document.getElementById('datagrama_l04_text_container_02_ID').style.width = '0%';
      document.getElementById('datagrama_l04_text_container_03_ID').style.width = '100%';

      document.getElementById('datagrama_l01_text_container').style.width = '100%';
      document.getElementById('datagrama_l02_text_container').style.width = '30%';
      document.getElementById('datagrama_l03_text_container').style.width = '50%';
      document.getElementById('datagrama_l04_text_container').style.width = '100%';

      document.getElementById('datagrama_l01_hex_ID').style.opacity = '0';
      document.getElementById('datagrama_l02_hex_ID').style.opacity = '1';
      document.getElementById('datagrama_l03_hex_ID').style.opacity = '1';
      document.getElementById('datagrama_l04_hex_ID').style.opacity = '1';
      
      const divs = document.querySelectorAll('.datagrama_l01_text');
      divs.forEach(div => {
        div.style.opacity = '1';
      });
    }
  }
}

function scroll_camera_button(){
  if(scrollCamera){
    scrollCamera = false;
    //document.getElementById('tcpip_scroll_camera_button_ID').style.backgroundColor = "rgba(255, 0, 255, 0.5)";
    document.getElementById('tcpip_scroll_camera_button_ID').style.filter = "opacity(20%) invert(0)"; // <------------ DARK MODE CHANGE
  }
  else{
    scrollCamera = true;
    //document.getElementById('tcpip_scroll_camera_button_ID').style.backgroundColor = "rgba(0, 0, 0, 0)";
    document.getElementById('tcpip_scroll_camera_button_ID').style.filter = "opacity(100%) invert(0)"; 
  }
}

function close_show_tutorial(){
  if(document.getElementById('tcpip_tutorial_container_ID').style.display == "none"){
    document.getElementById('tcpip_tutorial_container_ID').style.display = "inline-flex";
  } else {
    document.getElementById('tcpip_tutorial_container_ID').style.display = "none";
    document.getElementById("buttons_container_ID").style.filter = "drop-shadow(0 0 5px rgba(0, 0, 0, 0))";
  }
}

function next_prev_tutorial(type){
  console.log("color: ", document.getElementById("tcpip_tutorial_slidersnum_01_ID").style.color);
  if(type == 'next'){
    // filter: invert(1) drop-shadow(0 0 10px rgba(255, 0, 0, 0.8)); Puc agregar filtres si es posen talqual separats amb un espai
    if(document.getElementById("tcpip_tutorial_slidersnum_01_ID").style.color === "rgb(74, 132, 255)"){
      document.getElementById("tcpip_tutorial_slidersnum_02_ID").style.color = "rgb(74, 132, 255)"; //Blue
      document.getElementById("tcpip_tutorial_slidersnum_01_ID").style.color = "rgb(185, 185, 185)"; //Gray
      document.getElementById("tcpip_tutorial_previous_ID").style.color = "rgb(74, 132, 255)";
      document.getElementById("tcpip_tutorial_text_container_ID").setAttribute("style", "transform: translateX(0px) translateY(40px) scale(1);" + "width: 900px;" + "height: 400px;");
      document.getElementById("buttons_container_ID").style.filter = "drop-shadow(0 0 5px rgba(255, 255, 255, 1))";
      document.getElementById("tcpip_tutorial_text_01_ID").style.display = "none";
      document.getElementById("tcpip_tutorial_text_02_ID").style.display = "inline-flex";
      document.getElementById("tcpip_tutorial_text_03_ID").style.display = "none";
      document.getElementById("tcpip_tutorial_text_04_ID").style.display = "none";
      document.getElementById("tcpip_tutorial_text_05_ID").style.display = "none";
    } else if(document.getElementById("tcpip_tutorial_slidersnum_02_ID").style.color === "rgb(74, 132, 255)"){
      document.getElementById("tcpip_tutorial_slidersnum_03_ID").style.color = "rgb(74, 132, 255)";
      document.getElementById("tcpip_tutorial_slidersnum_02_ID").style.color = "rgb(185, 185, 185)";
      document.getElementById("buttons_container_ID").style.filter = "drop-shadow(0 0 5px rgba(255, 255, 255, 0))";
      document.getElementById("tcpip_tutorial_text_container_ID").setAttribute("style", "transform: translateX(0px) translateY(0px) scale(1);" + "width: 900px;" + "height: 400px;");
      document.getElementById("tcpip_tutorial_text_01_ID").style.display = "none";
      document.getElementById("tcpip_tutorial_text_02_ID").style.display = "none";
      document.getElementById("tcpip_tutorial_text_03_ID").style.display = "inline-flex";
      document.getElementById("tcpip_tutorial_text_04_ID").style.display = "none";
      document.getElementById("tcpip_tutorial_text_05_ID").style.display = "none";
    } else if(document.getElementById("tcpip_tutorial_slidersnum_03_ID").style.color === "rgb(74, 132, 255)"){
      document.getElementById("tcpip_tutorial_slidersnum_04_ID").style.color = "rgb(74, 132, 255)"; 
      document.getElementById("tcpip_tutorial_slidersnum_03_ID").style.color = "rgb(185, 185, 185)"; 
      document.getElementById("tcpip_tutorial_text_01_ID").style.display = "none";
      document.getElementById("tcpip_tutorial_text_02_ID").style.display = "none";
      document.getElementById("tcpip_tutorial_text_03_ID").style.display = "none";
      document.getElementById("tcpip_tutorial_text_04_ID").style.display = "inline-flex";
      document.getElementById("tcpip_tutorial_text_05_ID").style.display = "none";
    } else if(document.getElementById("tcpip_tutorial_slidersnum_04_ID").style.color === "rgb(74, 132, 255)"){
      document.getElementById("tcpip_tutorial_slidersnum_05_ID").style.color = "rgb(74, 132, 255)";
      document.getElementById("tcpip_tutorial_slidersnum_04_ID").style.color = "rgb(185, 185, 185)";
      document.getElementById("tcpip_tutorial_text_01_ID").style.display = "none";
      document.getElementById("tcpip_tutorial_text_02_ID").style.display = "none";
      document.getElementById("tcpip_tutorial_text_03_ID").style.display = "none";
      document.getElementById("tcpip_tutorial_text_04_ID").style.display = "none";
      document.getElementById("tcpip_tutorial_text_05_ID").style.display = "inline-flex";
    } else if(document.getElementById("tcpip_tutorial_slidersnum_05_ID").style.color === "rgb(74, 132, 255)"){
      document.getElementById("tcpip_tutorial_slidersnum_06_ID").style.color = "rgb(74, 132, 255)";
      document.getElementById("tcpip_tutorial_slidersnum_05_ID").style.color = "rgb(185, 185, 185)";
      document.getElementById("tcpip_tutorial_text_01_ID").style.display = "none";
      document.getElementById("tcpip_tutorial_text_02_ID").style.display = "none";
      document.getElementById("tcpip_tutorial_text_03_ID").style.display = "none";
      document.getElementById("tcpip_tutorial_text_04_ID").style.display = "none";
      document.getElementById("tcpip_tutorial_text_05_ID").style.display = "none";
      document.getElementById("tcpip_tutorial_text_06_ID").style.display = "inline-flex";
      document.getElementById("tcpip_tutorial_next_ID").innerText = "Finalitzar >";
    } else if (document.getElementById("tcpip_tutorial_next_ID").innerText == "Finalitzar >"){
      document.getElementById("tcpip_tutorial_slidersnum_01_ID").style.color = "rgb(74, 132, 255)";
      document.getElementById("tcpip_tutorial_slidersnum_06_ID").style.color = "rgb(185, 185, 185)";
      document.getElementById("tcpip_tutorial_next_ID").innerText = "Seguent >";
      document.getElementById("tcpip_tutorial_previous_ID").style.color = "rgb(185, 185, 185)";
      document.getElementById("tcpip_tutorial_text_01_ID").style.display = "inline-flex";
      document.getElementById("tcpip_tutorial_text_02_ID").style.display = "none";
      document.getElementById("tcpip_tutorial_text_03_ID").style.display = "none";
      document.getElementById("tcpip_tutorial_text_04_ID").style.display = "none";
      document.getElementById("tcpip_tutorial_text_05_ID").style.display = "none";
      document.getElementById("tcpip_tutorial_text_06_ID").style.display = "none";
      document.getElementById("tcpip_tutorial_container_ID").style.display = "none";
    }
  } else{
    if(document.getElementById("tcpip_tutorial_slidersnum_02_ID").style.color === "rgb(74, 132, 255)"){
      document.getElementById("tcpip_tutorial_slidersnum_01_ID").style.color = "rgb(74, 132, 255)";
      document.getElementById("tcpip_tutorial_slidersnum_02_ID").style.color = "rgb(185, 185, 185)";
      document.getElementById("tcpip_tutorial_previous_ID").style.color = "rgb(185, 185, 185)";
      document.getElementById("tcpip_tutorial_text_container_ID").style = "transform: translateX(0px) translateY(0px) scale(1);";
      document.getElementById("buttons_container_ID").style.filter = "drop-shadow(0 0 5px rgba(255, 255, 255, 0))";
      document.getElementById("tcpip_tutorial_text_01_ID").style.display = "inline-flex";
      document.getElementById("tcpip_tutorial_text_02_ID").style.display = "none";
      document.getElementById("tcpip_tutorial_text_03_ID").style.display = "none";
      document.getElementById("tcpip_tutorial_text_04_ID").style.display = "none";
      document.getElementById("tcpip_tutorial_text_05_ID").style.display = "none";
      document.getElementById("tcpip_tutorial_text_06_ID").style.display = "none";
    } else if(document.getElementById("tcpip_tutorial_slidersnum_03_ID").style.color === "rgb(74, 132, 255)"){
      document.getElementById("tcpip_tutorial_slidersnum_02_ID").style.color = "rgb(74, 132, 255)";
      document.getElementById("tcpip_tutorial_slidersnum_03_ID").style.color = "rgb(185, 185, 185)";
      document.getElementById("tcpip_tutorial_previous_ID").style.color = "rgb(74, 132, 255)";
      document.getElementById("tcpip_tutorial_text_container_ID").setAttribute("style", "transform: translateX(0px) translateY(40px) scale(1);" + "width: 900px;" + "height: 400px;");
      document.getElementById("buttons_container_ID").style.filter = "drop-shadow(0 0 5px rgba(255, 255, 255, 1))";
      document.getElementById("tcpip_tutorial_text_01_ID").style.display = "none";
      document.getElementById("tcpip_tutorial_text_02_ID").style.display = "inline-flex";
      document.getElementById("tcpip_tutorial_text_03_ID").style.display = "none";
      document.getElementById("tcpip_tutorial_text_04_ID").style.display = "none";
      document.getElementById("tcpip_tutorial_text_05_ID").style.display = "none";
      document.getElementById("tcpip_tutorial_text_06_ID").style.display = "none";
    } else if(document.getElementById("tcpip_tutorial_slidersnum_04_ID").style.color === "rgb(74, 132, 255)"){
      document.getElementById("tcpip_tutorial_slidersnum_03_ID").style.color = "rgb(74, 132, 255)";
      document.getElementById("tcpip_tutorial_slidersnum_04_ID").style.color = "rgb(185, 185, 185)";
      document.getElementById("tcpip_tutorial_text_01_ID").style.display = "none";
      document.getElementById("tcpip_tutorial_text_02_ID").style.display = "none";
      document.getElementById("tcpip_tutorial_text_03_ID").style.display = "inline-flex";
      document.getElementById("tcpip_tutorial_text_04_ID").style.display = "none";
      document.getElementById("tcpip_tutorial_text_05_ID").style.display = "none";
      document.getElementById("tcpip_tutorial_text_06_ID").style.display = "none";
    } else if(document.getElementById("tcpip_tutorial_slidersnum_05_ID").style.color === "rgb(74, 132, 255)"){
      document.getElementById("tcpip_tutorial_slidersnum_04_ID").style.color = "rgb(74, 132, 255)";
      document.getElementById("tcpip_tutorial_slidersnum_05_ID").style.color = "rgb(185, 185, 185)";
      document.getElementById("tcpip_tutorial_text_01_ID").style.display = "none";
      document.getElementById("tcpip_tutorial_text_02_ID").style.display = "none";
      document.getElementById("tcpip_tutorial_text_03_ID").style.display = "none";
      document.getElementById("tcpip_tutorial_text_04_ID").style.display = "inline-flex";
      document.getElementById("tcpip_tutorial_text_05_ID").style.display = "none";
      document.getElementById("tcpip_tutorial_text_06_ID").style.display = "none";
    } else if(document.getElementById("tcpip_tutorial_slidersnum_06_ID").style.color === "rgb(74, 132, 255)"){
      document.getElementById("tcpip_tutorial_slidersnum_05_ID").style.color = "rgb(74, 132, 255)";
      document.getElementById("tcpip_tutorial_slidersnum_06_ID").style.color = "rgb(185, 185, 185)";
      document.getElementById("tcpip_tutorial_text_01_ID").style.display = "none";
      document.getElementById("tcpip_tutorial_text_02_ID").style.display = "none";
      document.getElementById("tcpip_tutorial_text_03_ID").style.display = "none";
      document.getElementById("tcpip_tutorial_text_04_ID").style.display = "none";
      document.getElementById("tcpip_tutorial_text_05_ID").style.display = "inline-flex";
      document.getElementById("tcpip_tutorial_text_06_ID").style.display = "none";
      document.getElementById("tcpip_tutorial_next_ID").innerText = "Seguent >";
    }
  }
}

</script>

<style scoped>
/*.tcpip_container, .tcpip_container_01, .tcpip_container_02{
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(8px);
  text-justify: inter-word;
  user-select: none;
}*/
.buttons_container{
  transition: 0.3s;
}
.tcpip_container_03, .tcpip_container_01, .tcpip_container_02{
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
.tcpip_left_layer_04_cache_input{
  transition-duration: 0.7s;
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
.tcpip_tutorial_text_container{
  transition-duration: 0.7s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.terminal_input_container.active .terminal_fake_cursor{
  left: calc(-20px + 100%);
}
</style>