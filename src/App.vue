<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="main_container">
    <!-- BARRA DE NAVEGACIó SUPERIOR -->
    <!-- Per amagar la barra de navegació al fer scroll "https://www.w3schools.com/howto/howto_js_navbar_shrink_scroll.asp" -->
    <div class="topbar_container" id="topbar_container_ID">
      <div class="topbar_logo_container"><RouterLink to="/" class="topbar_logo_router" @click="burger_menu(1)"><img src="/src/assets/Logo_01.png" class="topbar_logo_img"></RouterLink></div>
      <div class="topbar_burger"><button @click="burger_menu(0)"><img src="/src/assets/HamburgerIcon.png" class="topbar_burger_img"></button></div>
      <div class="topbar_color">Theme</div>
      <div class="topbar_language">Language</div>
      <RouterLink to="/" class="topbar_language" @click="burger_menu(1)">Index</RouterLink>
    </div>

    <!-- CONTAINER ROUTER VIEW -->
    <div class="router_container" id="router_container_ID">

      <!-- SCROLL LATERAL MENU -->
      <div class="scroll_menu_container" id="scroll_menu_container_ID">
        <div class="scroll_menu_text_container" id="scroll_menu_text_container_ID">
          <div class="scroll_menu_home"><RouterLink to="/" class="" @click="burger_menu(1)">Home</RouterLink></div>
          <div class="scroll_menu_about">About us</div>
          <div class="scroll_menu_animations_internet"><RouterLink to="/anim/internetprotocols" class="" @click="burger_menu(1)">Internet Protocols</RouterLink></div>
          <div class="scroll_menu_animations_internet_tcpip"><RouterLink to="/anim/internetprotocols/tcpip" class="" @click="burger_menu(1)">TCP/IP</RouterLink></div>
          <div class="scroll_menu_animations_internet_tcpip"><RouterLink to="/anim/internetprotocols/tcpip" class="" @click="burger_menu(1)">TCP/IP</RouterLink></div>
          <div class="scroll_menu_animations_crypto"><RouterLink to="/anim/cryptography" class="" @click="burger_menu(1)">Cryptography</RouterLink></div>
          <div class="scroll_menu_animations_crypto_rsa"><RouterLink to="/anim/cryptography/rsa" class="" @click="burger_menu(1)">RSA</RouterLink></div>
          <div class="scroll_menu_animations_cyber"><RouterLink to="/anim/cybersecurity" class="" @click="burger_menu(1)">Cybersecurity</RouterLink></div>
          <div class="scroll_menu_animations_cyber_nmap"><RouterLink to="/anim/cybersecurity/nmap" class="" @click="burger_menu(1)">Nmap</RouterLink></div>
          <div class="scroll_menu_animations_cyber_nmap"><RouterLink to="/anim/cybersecurity/nmap" class="" @click="burger_menu(1)">Nmap</RouterLink></div>
          <div class="scroll_menu_animations_cyber_nmap"><RouterLink to="/anim/cybersecurity/nmap" class="" @click="burger_menu(1)">Nmap</RouterLink></div>
          <div class="scroll_menu_animations_cyber_nmap"><RouterLink to="/anim/cybersecurity/nmap" class="" @click="burger_menu(1)">Nmap</RouterLink></div>
          <div class="scroll_menu_animations_cyber_nmap"><RouterLink to="/anim/cybersecurity/nmap" class="" @click="burger_menu(1)">Nmap</RouterLink></div>
          <div class="scroll_menu_animations_cyber_nmap"><RouterLink to="/anim/cybersecurity/nmap" class="" @click="burger_menu(1)">Nmap</RouterLink></div>
        </div>
      </div>

      <!-- ROUTER VIEW VARIABLE -->
      <div class="router_flex_container" id="router_flex_container_ID">
        <RouterView />
      </div>

      <!-- PEU DE PAGINA -->
      <div class="footer_container" id="footer_container_ID">
        <div class="footer_text">GitHub</div>
        <div class="footer_text">PDF Link</div>
        <div class="footer_text">Isaac Pascual</div>
        <div class="footer_text">TFG 2024-2025</div>
      </div>
    </div>
  </div>
</template>

<script>
  window.onload = function (){
    document.getElementById('topbar_container_ID').setAttribute("style", "width: " + (window.innerWidth - 500) + "px");
    document.getElementById('scroll_menu_container_ID').setAttribute("style",  "width: " + (window.innerWidth - 500) + "px; height: " + (window.innerHeight - 150) + "px");
    document.getElementById('router_container_ID').setAttribute("style",  "width: " + (window.innerWidth - 500) + "px");

    // Si el menu burger esta obert mentres fem un resize de la pagina, cal ajustar la mida del router_flex_container_ID
    if(document.getElementById('scroll_menu_text_container_ID').style.width == "0px"){
      document.getElementById('router_flex_container_ID').setAttribute("style",  "width: " + (window.innerWidth - 780) + "px");
    }else{
      document.getElementById('router_flex_container_ID').setAttribute("style",  "width: " + (window.innerWidth - 500) + "px");
    }
  };
  window.onresize = function (){
    document.getElementById('topbar_container_ID').setAttribute("style", "width: " + (window.innerWidth - 500) + "px");
    document.getElementById('scroll_menu_container_ID').setAttribute("style",  "width: " + (window.innerWidth - 500) + "px; height: " + (window.innerHeight - 150) + "px");
    document.getElementById('router_container_ID').setAttribute("style",  "width: " + (window.innerWidth - 500) + "px");

    // Si el menu burger esta obert mentres fem un resize de la pagina, cal ajustar la mida del router_flex_container_ID
    if(document.getElementById('scroll_menu_text_container_ID').style.width == "0px"){
      document.getElementById('router_flex_container_ID').setAttribute("style",  "width: " + (window.innerWidth - 500) + "px");
    }else{
      document.getElementById('router_flex_container_ID').setAttribute("style",  "width: " + (window.innerWidth - 780) + "px");
    }
  };

  function burger_menu(state){
    // L'estat 0 es per obrir i tancar normal el menu, si li pasem un 1 volem que, unicament si esta obert, es tanqui.
    if(document.getElementById('scroll_menu_text_container_ID').style.width == "0px" && state == 0){
      document.getElementById('scroll_menu_text_container_ID').style.width = "250px";
      document.getElementById('router_flex_container_ID').setAttribute("style",  "width: " + (window.innerWidth - 780) + "px");
    } else{
      document.getElementById('scroll_menu_text_container_ID').style.width = "0px";
      document.getElementById('router_flex_container_ID').setAttribute("style",  "width: " + (window.innerWidth - 500) + "px");
    }
  };
</script>

<style scoped>
.topbar_container, .scroll_menu_text_container{
  background: rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(8px);
}
</style>
