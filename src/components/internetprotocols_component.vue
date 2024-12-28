<template>
    <div class="internetprotocols_container" id="internetprotocols_container_ID">
        <div class="internetprotocols_title">Networking Protocols</div>
        <div class="internetprotocols_description">
          Els protocols de xarxa són tot aquell conjunt de regles, normes i mecanismes involucrats a l'hora de realitzar una comunicació entre dos dispositius 
          interconectats entre si. 
          Aquest conjunt defineix com es transmet, rep e interpreten les dades que s'envien a través de la xarxa. Son esencials avui dia, ja que conformen la base 
          del funcionament d'Internet i de les communications modernes.
        </div>
        <div class="internetprotocols_list_container">

          <RouterLink to="/internetprotocols/tcpip" class="internetprotocols_tcpip_container" @click="burger_menu(1)">
            <div class="ip_image_container">
              <img src="../assets/ip_image_02.jpg" class="ip_image">
            </div>
            <div class="ip_text_container">
              <div class="ip_title">TCP/IP</div>
              <div class="ip_description">
                  
              </div>
            </div>
          </RouterLink>
          
          <RouterLink to="/internetprotocols/tcpip" class="internetprotocols_tcpip_container" @click="burger_menu(1)">
            <div class="ip_image_container">
              <img src="../assets/ip_image_02.jpg" class="ip_image">
            </div>
            <div class="ip_text_container">
              <div class="ip_title">BGP/RIP</div>
              <div class="ip_description">
                The Internet protocol suite, commonly known as TCP/IP, is a framework for organizing the set of communication protocols used in the Internet.
              </div>
            </div>
          </RouterLink>

          <RouterLink to="/internetprotocols/tcpip" class="internetprotocols_tcpip_container" @click="burger_menu(1)">
            <div class="ip_image_container">
              <img src="../assets/ip_image_02.jpg" class="ip_image">
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
              <img src="../assets/ip_image_02.jpg" class="ip_image">
            </div>
            <div class="ip_text_container">
              <div class="ip_title">Routing Queues</div>
              <div class="ip_description">
                The Internet protocol suite, commonly known as TCP/IP, is a framework for organizing the set of communication protocols used in the Internet.
              </div>
            </div>
          </RouterLink>
        </div>
    </div>
</template>
  
<script>
    export default {
    mounted() {
      this.setElementStyles();
      window.addEventListener('resize', this.setElementStyles);
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