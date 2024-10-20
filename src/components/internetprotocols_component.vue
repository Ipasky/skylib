<template>
    <div class="internetprotocols_container" id="internetprotocols_container_ID">
        <div class="internetprotocols_title">Internet Protocols</div>
        <div class="internetprotocols_description">
          "TEXT DE PROBA DE LA WIKIPEDIA"
          The Internet Protocol (IP) is the network layer communications protocol in the Internet protocol suite for relaying datagrams across network boundaries. Its routing function enables internetworking, and essentially establishes the Internet.
          IP has the task of delivering packets from the source host to the destination host solely based on the IP addresses in the packet headers.
        </div>
        <div class="internetprotocols_list_container">

          <!-- S'ha d'arreglar que quan clickis a tot el container et porti cap a la secció i no nomes quan clickes a sobre del text TCP/IP -->
          <div class="internetprotocols_tcpip_container">
            <div class="internetprotocols_tcpip_title"><RouterLink to="/internetprotocols/tcpip" class="" @click="burger_menu(1)">TCP/IP</RouterLink></div>
            <div class="internetprotocols_tcpip_description">
              The Internet protocol suite, commonly known as TCP/IP, is a framework for organizing the set of communication protocols used in the Internet.
            </div>
          </div>
          
          <div class="internetprotocols_tcpip_container">
            <div class="internetprotocols_tcpip_title"><RouterLink to="/internetprotocols/tcpip" class="" @click="burger_menu(1)">TCP/IP</RouterLink></div>
            <div class="internetprotocols_tcpip_description">
              The Internet protocol suite, commonly known as TCP/IP, is a framework for organizing the set of communication protocols used in the Internet.
            </div>
          </div>

          <div class="internetprotocols_tcpip_container">
            <div class="internetprotocols_tcpip_title"><RouterLink to="/internetprotocols/tcpip" class="" @click="burger_menu(1)">TCP/IP</RouterLink></div>
            <div class="internetprotocols_tcpip_description">
              The Internet protocol suite, commonly known as TCP/IP, is a framework for organizing the set of communication protocols used in the Internet.
            </div>
          </div>

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
          mainTitle.style.height = (window.innerHeight - 150) + 'px';
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