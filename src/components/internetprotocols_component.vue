<template>
    <div class="internetprotocols_container" id="internetprotocols_container_ID">
        <div class="internetprotocols_title">Protocols TCP/IP</div>
        <div class="internetprotocols_description">
          TCP/IP és una agrupació de protocols la qual ens permeten realitzar comunicacions entre dos dispositius interconnectats entre si.
          Aquest conjunt defineix com es transmet, rep i interpreten les dades que s'envien a través de la xarxa. Són essencials avui dia, ja que conformen la base 
          del funcionament d'Internet i de les comunicacions modernes.
        </div>
        <div class="internetprotocols_list_container">

          <RouterLink to="/internetprotocols/tcpip" class="internetprotocols_tcpip_container" @click="burger_menu(1)">
            <div class="ip_image_container">
              <img src="/ip_image_02.jpg" class="ip_image">
            </div>
            <div class="ip_text_container">
              <div class="ip_title">HTTP</div>
              <div class="ip_description">
                Protocol de la capa d'aplicació que permet la transferència de fitxers d'hipertext i multimèdia a través de la xarxa.
              </div>
            </div>
          </RouterLink>
          
          <RouterLink to="/internetprotocols/tcpip" class="internetprotocols_tcpip_container" @click="burger_menu(1)">
            <div class="ip_image_container">
              <img src="/ip_image_02.jpg" class="ip_image">
            </div>
            <div class="ip_text_container">
              <div class="ip_title">TCP/UDP</div>
              <div class="ip_description">
                Protocols de la capa de transport, els cuals ens permeten l'enviament de dades cap a altres hosts de la xarxa. TCP de manera fiable, amb correció d'errors i UDP de manera mes rapida.
              </div>
            </div>
          </RouterLink>

          <RouterLink to="/internetprotocols/tcpip" class="internetprotocols_tcpip_container" @click="burger_menu(1)">
            <div class="ip_image_container">
              <img src="/ip_image_02.jpg" class="ip_image">
            </div>
            <div class="ip_text_container">
              <div class="ip_title">DNS</div>
              <div class="ip_description">
                The Internet protocol suite, commonly known as TCP/IP, is a framework for organizing the set of communication protocols used in the Internet.
              </div>
            </div>
          </RouterLink>

          <RouterLink to="/internetprotocols/tcpip" class="internetprotocols_tcpip_container" @click="burger_menu(1)">
            <div class="ip_image_container">
              <img src="/ip_image_02.jpg" class="ip_image">
            </div>
            <div class="ip_text_container">
              <div class="ip_title">ARP</div>
              <div class="ip_description">
                The Internet protocol suite, commonly known as TCP/IP, is a framework for organizing the set of communication protocols used in the Internet.
              </div>
            </div>
          </RouterLink>

          <RouterLink to="/internetprotocols/tcpip" class="internetprotocols_tcpip_container" @click="burger_menu(1)">
            <div class="ip_image_container">
              <img src="/ip_image_02.jpg" class="ip_image">
            </div>
            <div class="ip_text_container">
              <div class="ip_title">BGP</div>
              <div class="ip_description">
                The Internet protocol suite, commonly known as TCP/IP, is a framework for organizing the set of communication protocols used in the Internet.
              </div>
            </div>
          </RouterLink>

          <RouterLink to="/internetprotocols/tcpip" class="internetprotocols_tcpip_container" @click="burger_menu(1)">
            <div class="ip_image_container">
              <img src="/ip_image_02.jpg" class="ip_image">
            </div>
            <div class="ip_text_container">
              <div class="ip_title">Routing Queues</div>
              <div class="ip_description">
                The Internet protocol suite, commonly known as TCP/IP, is a framework for organizing the set of communication protocols used in the Internet.
              </div>
            </div>
          </RouterLink>

          <RouterLink to="/internetprotocols/tcpip" class="internetprotocols_tcpip_container" @click="burger_menu(1)">
            <div class="ip_image_container">
              <img src="/ip_image_02.jpg" class="ip_image">
            </div>
            <div class="ip_text_container">
              <div class="ip_title">Routing</div>
              <div class="ip_description">
                The Internet protocol suite, commonly known as TCP/IP, is a framework for organizing the set of communication protocols used in the Internet.
              </div>
            </div>
          </RouterLink>
        </div>
    </div>
</template>

<script>
  import { inject } from 'vue';

  export default {
    mounted() {
      const change_theme = inject('change_theme');
      const burger_menu = inject('burger_menu');
      this.setElementStyles();
      window.addEventListener('resize', this.setElementStyles);
      if(change_theme) change_theme(1);
    },
      beforeDestroy() {
      window.removeEventListener('resize', this.setElementStyles);
    },
      methods: {
      setElementStyles() {
        const mainTitle = document.getElementById('internetprotocols_container_ID');

        if (mainTitle) {
          //mainTitle.style.height = (window.innerHeight) + 'px'; //150px
        }
      }
    }
  }
</script>

<style scoped>
  .internetprotocols_container{
    background: rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.37);
    backdrop-filter: blur(8px);
    text-align: justify;
    text-justify: inter-word;
  }
  .internetprotocols_tcpip_container{
    background: rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
    text-align: justify;
    text-justify: inter-word;
  }
  .internetprotocols_tcpip_container:hover{
    background: rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);
  }
</style>