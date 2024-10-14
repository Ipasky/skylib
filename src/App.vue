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
      <div class="topbar_burger"><button @click="burger_menu(0)">burger</button></div>
      <div class="topbar_color">Theme</div>
      <div class="topbar_language">Language</div>
      <RouterLink to="/" class="topbar_language" @click="burger_menu(1)">Index</RouterLink>
      <RouterLink to="/animation" class="topbar_language" @click="burger_menu(1)">Animations</RouterLink>
    </div>

    <!-- VISTA DE LA RUTA ESPECIFICADA -->
    <div class="router_container" id="router_container_ID">
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
        <div class="scroll_menu_animations_cyber_nmap">Nmap</div>
        <div class="scroll_menu_animations_cyber_nmap">Nmap</div>
      </div>
    </div>
      <div class="router_flex_container" id="router_flex_container_ID">
        <RouterView />
      </div>
    </div>

    <!-- PEU DE PAGINA -->
    <footer></footer>
  </div>
</template>

<script>
  window.onload = function (){
    document.getElementById('topbar_container_ID').setAttribute("style", "width: " + (window.innerWidth - 500) + "px");
    document.getElementById('scroll_menu_container_ID').setAttribute("style",  "width: " + (window.innerWidth - 500) + "px; height: " + (window.innerHeight - 170) + "px");
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
    document.getElementById('scroll_menu_container_ID').setAttribute("style",  "width: " + (window.innerWidth - 500) + "px; height: " + (window.innerHeight - 170) + "px");
    document.getElementById('router_container_ID').setAttribute("style",  "width: " + (window.innerWidth - 500) + "px");

    // Si el menu burger esta obert mentres fem un resize de la pagina, cal ajustar la mida del router_flex_container_ID
    if(document.getElementById('scroll_menu_text_container_ID').style.width == "0px"){
      document.getElementById('router_flex_container_ID').setAttribute("style",  "width: " + (window.innerWidth - 500) + "px");
    }else{
      document.getElementById('router_flex_container_ID').setAttribute("style",  "width: " + (window.innerWidth - 780) + "px");
    }
  };

  function burger_menu(state){
    // L'estat 0 es per obrir i tancar normal el menu, si li pasem un 1 volem que si esta obert es tanqui.
    if(document.getElementById('scroll_menu_text_container_ID').style.width == "0px" && state == 0){
      document.getElementById('scroll_menu_text_container_ID').style.width = "250px";
      document.getElementById('router_flex_container_ID').setAttribute("style",  "width: " + (window.innerWidth - 780) + "px");
      //document.getElementById('main_title_container_02_ID').setAttribute("style",  "width: " + (window.innerWidth - 780) + "px; height: " + (window.innerHeight - 170) + "px");
    } else{
      document.getElementById('scroll_menu_text_container_ID').style.width = "0px";
      document.getElementById('router_flex_container_ID').setAttribute("style",  "width: " + (window.innerWidth - 500) + "px");
      //document.getElementById('main_title_container_02_ID').setAttribute("style",  "width: " + (window.innerWidth - 500) + "px; height: " + (window.innerHeight - 170) + "px");
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
