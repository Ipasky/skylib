<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="main_container">
    <!-- BARRA DE NAVEGACIó SUPERIOR -->
    <!-- Per amagar la barra de navegació al fer scroll "https://www.w3schools.com/howto/howto_js_navbar_shrink_scroll.asp" -->
    <div class="topbar_container" id="topbar_container_ID">
      <div class="topbar_container_left">
        <div class="topbar_burger"><button @click="burger_menu(0)" class="topbar_burger_img"><img src="/src/assets/HamburgerIcon.png" class="topbar_burger_img"></button></div>
        <div class="topbar_logo_container"><RouterLink to="/" class="topbar_logo_router" @click="burger_menu(1)"><img src="/src/assets/Logo_01.png" class="topbar_logo_img"></RouterLink></div>
        <RouterLink to="/" class="topbar_fast_links" @click="burger_menu(1)">Home</RouterLink>
        <RouterLink to="/" class="topbar_fast_links" @click="burger_menu(1)">Animations</RouterLink>
        <RouterLink to="/" class="topbar_fast_links" @click="burger_menu(1)">GitHub</RouterLink>
      </div>
      <div class="topbar_container_right">
        <div class="topbar_theme"><div class="topbar_theme_rounded" @click="change_theme()"><img src="/src/assets/sun_icon_04.png" class="topbar_theme_img" id="topbar_theme_img_ID"></div></div>
        <div class="header_language" id="header_language_id"><div class="language_country_name">Català</div></div> <!-- <img src="/src/assets/english_flag.png" class="language_flag_img"> -->
        <div class="header_language_dropdown" id="header_language_dropdown_id">
          <a href="index.html">Català</a>
          <a href="#index_es.html">Espanyol</a>
          <a href="#index_uk.html">Anglès</a>
        </div>
      </div>
    </div>

    <!-- CONTAINER ROUTER VIEW -->
    <div class="router_container" id="router_container_ID">

      <!-- SCROLL LATERAL MENU -->
      <div class="scroll_menu_container" id="scroll_menu_container_ID">
        <div class="scroll_menu_text_container" id="scroll_menu_text_container_ID">
          <div class="scroll_menu_home"><RouterLink to="/" class="" @click="burger_menu(1)">Home</RouterLink></div>
          <div class="scroll_menu_about">About us</div>
          <div class="scroll_menu_animations_internet"><RouterLink to="/internetprotocols" class="" @click="burger_menu(1)">Internet Protocols</RouterLink></div>
          <div class="scroll_menu_animations_internet_tcpip"><RouterLink to="/internetprotocols/tcpip" class="" @click="burger_menu(1)">TCP/IP</RouterLink></div>
          <div class="scroll_menu_animations_internet_tcpip"><RouterLink to="/internetprotocols/tcpip" class="" @click="burger_menu(1)">TCP/IP</RouterLink></div>
          <div class="scroll_menu_animations_crypto"><RouterLink to="/cryptography" class="" @click="burger_menu(1)">Cryptography</RouterLink></div>
          <div class="scroll_menu_animations_crypto_rsa"><RouterLink to="/cryptography/rsa" class="" @click="burger_menu(1)">RSA</RouterLink></div>
          <div class="scroll_menu_animations_cyber"><RouterLink to="/cybersecurity" class="" @click="burger_menu(1)">Cybersecurity</RouterLink></div>
          <div class="scroll_menu_animations_cyber_nmap"><RouterLink to="/cybersecurity/nmap" class="" @click="burger_menu(1)">Nmap</RouterLink></div>
          <div class="scroll_menu_animations_cyber_nmap"><RouterLink to="/cybersecurity/nmap" class="" @click="burger_menu(1)">Nmap</RouterLink></div>
          <div class="scroll_menu_animations_cyber_nmap"><RouterLink to="/cybersecurity/nmap" class="" @click="burger_menu(1)">Nmap</RouterLink></div>
          <div class="scroll_menu_animations_cyber_nmap"><RouterLink to="/cybersecurity/nmap" class="" @click="burger_menu(1)">Nmap</RouterLink></div>
          <div class="scroll_menu_animations_cyber_nmap"><RouterLink to="/cybersecurity/nmap" class="" @click="burger_menu(1)">Nmap</RouterLink></div>
          <div class="scroll_menu_animations_cyber_nmap"><RouterLink to="/cybersecurity/nmap" class="" @click="burger_menu(1)">Nmap</RouterLink></div>
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
  window.onscroll = function() {
    /* No m'acaba de convencer, de moment ho deixo comentat
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 0) {
      document.getElementById('topbar_container_ID').style.height = "55px";
    } else {
      document.getElementById('topbar_container_ID').style.height = "70px";
    }
    */
  };

  window.onload = function (){
    document.getElementById('topbar_container_ID').setAttribute("style", "width: " + (window.innerWidth - 500) + "px");
    document.getElementById('scroll_menu_container_ID').setAttribute("style",  "width: " + (window.innerWidth - 500) + "px; height: " + (window.innerHeight - 150) + "px");
    document.getElementById('router_container_ID').setAttribute("style",  "width: " + (window.innerWidth - 500) + "px");
    
    let language_width = document.getElementById('header_language_id').offsetWidth;
    document.getElementById('header_language_dropdown_id').setAttribute("style", "width: " + (language_width + 10) + "px");

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

    let language_width = document.getElementById('header_language_id').offsetWidth;
    document.getElementById('header_language_dropdown_id').setAttribute("style", "width: " + (language_width + 10) + "px");

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

  function change_theme(){
    console.log("SRC: ", document.getElementById('topbar_theme_img_ID').src)
    // Aixo una vegada es desplegui al github s'haura de mirar si el path es correcte (segurament s'haura de canviar)
    if (document.getElementById('topbar_theme_img_ID').src == "http://localhost:5173/src/assets/sun_icon_04.png") {
      // Dark mode
      document.getElementById('topbar_theme_img_ID').style.opacity = 0;
      setTimeout(() => {
        document.getElementById('topbar_theme_img_ID').src = "/src/assets/moon_icon_03.png";
        document.getElementById('topbar_theme_img_ID').style.opacity = 1;
      }, 150);
    } else {
      // Light mode
      document.getElementById('topbar_theme_img_ID').style.opacity = 0;
      setTimeout(() => {
        document.getElementById('topbar_theme_img_ID').src = "/src/assets/sun_icon_04.png";
        document.getElementById('topbar_theme_img_ID').style.opacity = 1;
      }, 150);
    }
  }
</script>

<style scoped>
.topbar_container, .scroll_menu_text_container{
  background: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(8px);
  transition: 0.3s ease-in-out;
}

.header_language_dropdown{
  background: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(20px);
}
.header_language_dropdown a{
  text-decoration: none;
  display: block;
  text-align: left;
  color: white;
}
.header_language:hover + .header_language_dropdown, .header_language_dropdown:hover{
  display: block;
  cursor: pointer;
}

/* Toggle switch 

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;

}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.566);
  border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.315);
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 5px;
  bottom: 5px;
  background-color: white;
  background-color: rgb(255, 144, 26);
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(30px);
  -ms-transform: translateX(30px);
  transform: translateX(30px);
}

.slider.round {
  border-radius: 20px;
}

.slider.round:before {
  border-radius: 50%;
}
*/
</style>
