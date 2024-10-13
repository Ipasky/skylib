<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="main_container">
    <!-- BARRA DE NAVEGACIó SUPERIOR -->
    <!-- Per amagar la barra de navegació al fer scroll "https://www.w3schools.com/howto/howto_js_navbar_shrink_scroll.asp" -->
    <div class="topbar_container" id="topbar_container_ID">
      <div class="topbar_logo">
        Logo topbar
      </div>
      <div class="topbar_burger"><button @click="burger_menu">burger</button></div>
      <div class="topbar_color">Theme</div>
      <div class="topbar_language">Language</div>
      <RouterLink to="/" class="topbar_language">Index</RouterLink>
      <RouterLink to="/animation" class="topbar_language">Animations</RouterLink>
    </div>
    <div class="scroll_menu_container" id="scroll_menu_container_ID">
      <div class="scroll_menu_text_container" id="scroll_menu_text_container_ID">
        <div class="scroll_menu_home">Home</div>
        <div class="scroll_menu_about">About us</div>
        <div class="scroll_menu_animations_internet">Internet Protocols</div>
        <div class="scroll_menu_animations_internet_tcpip">TCP/IP</div>
        <div class="scroll_menu_animations_internet_tcpip">TCP/IP</div>
        <div class="scroll_menu_animations_crypto">Cryptography</div>
        <div class="scroll_menu_animations_crypto_rsa">RSA</div>
        <div class="scroll_menu_animations_cyber">Cybersecurity</div>
        <div class="scroll_menu_animations_cyber_nmap">Nmap</div>
        <div class="scroll_menu_animations_cyber_nmap">Nmap</div>
        <div class="scroll_menu_animations_cyber_nmap">Nmap</div>

      </div>
    </div>

    <!-- VISTA DE LA RUTA ESPECIFICADA -->
    <RouterView />

    <!-- PEU DE PAGINA -->
    <footer></footer>
  </div>
</template>

<script>
  window.onload = function (){
    document.getElementById('topbar_container_ID').setAttribute("style", "width: " + (window.innerWidth - 500) + "px");
    document.getElementById('scroll_menu_container_ID').setAttribute("style",  "width: " + (window.innerWidth - 500) + "px; height: " + (window.innerHeight - 170) + "px");
    //document.getElementById('scroll_menu_container_ID').setAttribute("style", "margin-right: " + (window.innerWidth - 700) + "px; height: " + (window.innerHeight - 170) + "px");
  };
  window.onresize = function (){
    document.getElementById('topbar_container_ID').setAttribute("style", "width: " + (window.innerWidth - 500) + "px");
    document.getElementById('scroll_menu_container_ID').setAttribute("style",  "width: " + (window.innerWidth - 500) + "px; height: " + (window.innerHeight - 170) + "px");
    //document.getElementById('scroll_menu_container_ID').setAttribute("style", "margin-right: " + (window.innerWidth - 700) + "px");
  };

  function burger_menu(){
    if(document.getElementById('scroll_menu_text_container_ID').style.width == "0px")
      document.getElementById('scroll_menu_text_container_ID').style.width = "250px";
    else{
      document.getElementById('scroll_menu_text_container_ID').style.width = "0px";
    }
  };
</script>

<style scoped>
.topbar_container{
  background: rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(8px);
}
</style>
