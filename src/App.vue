<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="main_container">
    <!------- BACKGROUND IMAGE ------->
    <div id="section_id_img" class="section_img"> 
      <img src="/src/assets/background_img_02.jpg" class="backgroundImage" id="backgroundImage_id">
    </div>
    <!-- BARRA DE NAVEGACIó SUPERIOR -->
    <!-- Per amagar la barra de navegació al fer scroll "https://www.w3schools.com/howto/howto_js_navbar_shrink_scroll.asp" -->
    <div class="topbar_container" id="topbar_container_ID">
      <div class="topbar_container_left">
        <div class="topbar_burger"><button @click="burger_menu(0)" class="topbar_burger_img"><img src="/src/assets/HamburgerIcon.png" class="topbar_burger_img"></button></div>
        <div class="topbar_logo_container"><RouterLink to="/home" class="topbar_logo_router" @click="burger_menu(1)"><img src="/src/assets/Logo_01.png" class="topbar_logo_img"></RouterLink></div>
        <RouterLink to="/home" class="topbar_fast_links" @click="burger_menu(1)">Menú</RouterLink>
        <RouterLink to="/animations" class="topbar_fast_links" @click="burger_menu(1)">Animacions</RouterLink>
        <RouterLink to="/home" class="topbar_fast_links" @click="burger_menu(1)">GitHub</RouterLink>
      </div>
      <div class="topbar_container_right">
        <div class="topbar_theme"><div class="topbar_theme_rounded" @click="change_theme()"><img src="/src/assets/sun_icon.svg" class="topbar_theme_img" id="topbar_theme_img_ID"></div></div>
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
          <div class="scroll_menu_home"><RouterLink to="/home" class="scroll_menu_home_text" @click="burger_menu(1)">Home</RouterLink></div>
          <div class="scroll_menu_animations"><RouterLink to="/animations" class="scroll_menu_animations_text" @click="burger_menu(1)">Animations</RouterLink></div>
          <div class="scroll_menu_github"><RouterLink to="/home" class="scroll_menu_github_text" @click="burger_menu(1)">GitHub</RouterLink></div>

          <div class="scroll_menu_animations_internet"><RouterLink to="/internetprotocols" class="scroll_menu_animations_internet_text" @click="burger_menu(1)">Protocols TCP/IP</RouterLink></div>
          <div class="scroll_menu_animations_internet_http"><RouterLink to="/internetprotocols/tcpip" class="scroll_menu_animations_internet_sub_text" @click="burger_menu(1)">│ HTTP</RouterLink></div>
          <div class="scroll_menu_animations_internet_tcpudp"><RouterLink to="/home" class="scroll_menu_animations_internet_sub_text" @click="burger_menu(1)">│ TCP/UDP</RouterLink></div>
          <div class="scroll_menu_animations_internet_dns"><RouterLink to="/home" class="scroll_menu_animations_internet_sub_text" @click="burger_menu(1)">│ DNS</RouterLink></div>
          <div class="scroll_menu_animations_internet_arp"><RouterLink to="/home" class="scroll_menu_animations_internet_sub_text" @click="burger_menu(1)">│ ARP</RouterLink></div>
          <div class="scroll_menu_animations_internet_bgp"><RouterLink to="/home" class="scroll_menu_animations_internet_sub_text" @click="burger_menu(1)">│ BGP</RouterLink></div>
          <div class="scroll_menu_animations_internet_routingq"><RouterLink to="/home" class="scroll_menu_animations_internet_sub_text" @click="burger_menu(1)">│ Routing</RouterLink></div>
          
          <div class="scroll_menu_animations_codingtheory"><RouterLink to="/home" class="scroll_menu_animations_codingtheory_text" @click="burger_menu(1)">Coding Theory</RouterLink></div>
          <div class="scroll_menu_animations_codingtheory_rs"><RouterLink to="/" class="scroll_menu_animations_codingtheory_sub_text" @click="burger_menu(1)">│ Reed-Solomon</RouterLink></div>
          <div class="scroll_menu_animations_codingtheory_bch"><RouterLink to="/" class="scroll_menu_animations_codingtheory_sub_text" @click="burger_menu(1)">│ BCH</RouterLink></div>
          <div class="scroll_menu_animations_codingtheory_zip"><RouterLink to="/" class="scroll_menu_animations_codingtheory_sub_text" @click="burger_menu(1)">│ ZIP</RouterLink></div>
          <div class="scroll_menu_animations_codingtheory_jpeg"><RouterLink to="/" class="scroll_menu_animations_codingtheory_sub_text" @click="burger_menu(1)">│ JPEG</RouterLink></div>
          <div class="scroll_menu_animations_codingtheory_h264"><RouterLink to="/" class="scroll_menu_animations_codingtheory_sub_text" @click="burger_menu(1)">│ H.264</RouterLink></div>

          <div class="scroll_menu_animations_cryptography"><RouterLink to="/cryptography" class="scroll_menu_animations_cryptography_text" @click="burger_menu(1)">Cryptography</RouterLink></div>
          <div class="scroll_menu_animations_cryptography_rsa"><RouterLink to="/cryptography/rsa" class="scroll_menu_animations_cryptography_sub_text" @click="burger_menu(1)">│ RSA</RouterLink></div>
          <div class="scroll_menu_animations_cryptography_diffiehellman"><RouterLink to="/" class="scroll_menu_animations_cryptography_sub_text" @click="burger_menu(1)">│ Diffie-Hellman</RouterLink></div>
          
          <div class="scroll_menu_animations_cybersecurity"><RouterLink to="/cybersecurity" class="scroll_menu_animations_cybersecurity_text" @click="burger_menu(1)">Cybersecurity</RouterLink></div>
          <div class="scroll_menu_animations_cybersecurity_nmap"><RouterLink to="/cybersecurity/nmap" class="scroll_menu_animations_cybersecurity_sub_text" @click="burger_menu(1)">│ Nmap</RouterLink></div>
          <div class="scroll_menu_animations_cybersecurity_bufferoverflow"><RouterLink to="/" class="scroll_menu_animations_cybersecurity_sub_text" @click="burger_menu(1)">│ Buffer Overflow</RouterLink></div>
          <div class="scroll_menu_animations_cybersecurity_ddos"><RouterLink to="/" class="scroll_menu_animations_cybersecurity_sub_text" @click="burger_menu(1)">│ DDoS</RouterLink></div>
        </div>
      </div>

      <!-- ROUTER VIEW VARIABLE -->
      <div class="router_flex_container" id="router_flex_container_ID">
        <RouterView />
      </div>

      <!-- PEU DE PAGINA -->
      <div class="footer_container" id="footer_container_ID">
        <div class="footer_github"><img src="/src/assets/github_logo_white.png" class="footer_github_img">GitHub</div>
        <div class="footer_ddd"><img src="/src/assets/ddd_logo.png" class="footer_ddd_img">TFG Document</div>
        <div class="footer_text">Contact</div>
        <div class="footer_text">Contribute</div>
        <div class="footer_text">About</div>
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
    resizeBackgroundImage();
    // 500 -> 400
    // 780 -> 680
    document.getElementById('topbar_container_ID').setAttribute("style", "width: " + (window.innerWidth - 400) + "px");
    document.getElementById('scroll_menu_container_ID').setAttribute("style",  "width: " + (window.innerWidth - 400) + "px; height: " + (window.innerHeight - 150) + "px");
    document.getElementById('router_container_ID').setAttribute("style",  "width: " + (window.innerWidth - 400) + "px");
    document.getElementById('footer_container_ID').setAttribute("style",  "width: " + (window.innerWidth - 400) + "px");
    
    let language_width = document.getElementById('header_language_id').offsetWidth;
    document.getElementById('header_language_dropdown_id').setAttribute("style", "width: " + (language_width + 10) + "px");

    /*if (document.getElementById('tcpip_animation_container_ID')){
      document.getElementById('tcpip_animation_container_ID').setAttribute("style",  "height: " + (window.innerHeight - 250) + "px");
    }*/

    if(document.getElementById('tcpip_container_ID')){
      document.getElementById('tcpip_container_ID').setAttribute("style",  "height: " + (window.innerHeight - 150) + "px");
      document.getElementById('tcpip_container_02_ID').setAttribute("style",  "height: " + (window.innerHeight - 150) + "px");
      document.getElementById('tcpip_container_03_ID').setAttribute("style",  "height: " + (window.innerHeight - 150) + "px");
    }

    /*if(document.getElementById('animations_container_ID')){
      document.getElementById('animations_container_ID').setAttribute("style",  "height: " + (window.innerHeight - 150) + "px");
    }*/

    // Si el menu burger esta obert mentres fem un resize de la pagina, cal ajustar la mida del router_flex_container_ID
    if(document.getElementById('scroll_menu_text_container_ID').style.width >= "0px"){ // ==
      document.getElementById('router_flex_container_ID').setAttribute("style",  "width: " + (window.innerWidth - 680) + "px");
    }else{
      document.getElementById('router_flex_container_ID').setAttribute("style",  "width: " + (window.innerWidth - 400) + "px");
    }

    //Depenent de l'url on ens trobem, cal canviar el color del item del slider menu
    changeSliderMenuColors()
  };

  window.onresize = function (){
    resizeBackgroundImage();
    document.getElementById('topbar_container_ID').setAttribute("style", "width: " + (window.innerWidth - 400) + "px");
    document.getElementById('scroll_menu_container_ID').setAttribute("style",  "width: " + (window.innerWidth - 400) + "px; height: " + (window.innerHeight - 150) + "px");
    document.getElementById('router_container_ID').setAttribute("style",  "width: " + (window.innerWidth - 400) + "px");
    document.getElementById('footer_container_ID').setAttribute("style",  "width: " + (window.innerWidth - 400) + "px");
    
    /*if (document.getElementById('tcpip_animation_container_ID')){
      document.getElementById('tcpip_animation_container_ID').setAttribute("style",  "height: " + (window.innerHeight - 250) + "px");
    }*/

    if(document.getElementById('tcpip_container_ID')){
      document.getElementById('tcpip_container_ID').setAttribute("style",  "height: " + (window.innerHeight - 100) + "px"); //150
      document.getElementById('tcpip_container_02_ID').setAttribute("style",  "height: " + (window.innerHeight - 100) + "px");
      document.getElementById('tcpip_container_03_ID').setAttribute("style",  "height: " + (window.innerHeight - 100) + "px");
    }

    /*if(document.getElementById('animations_container_ID')){
      document.getElementById('animations_container_ID').setAttribute("style",  "height: " + (window.innerHeight - 150) + "px");
    }*/

    let language_width = document.getElementById('header_language_id').offsetWidth;
    document.getElementById('header_language_dropdown_id').setAttribute("style", "width: " + (language_width + 10) + "px");

    // Si el menu burger esta obert mentres fem un resize de la pagina, cal ajustar la mida del router_flex_container_ID
    if(document.getElementById('scroll_menu_text_container_ID').style.width <= "0px"){ // ==
      document.getElementById('router_flex_container_ID').setAttribute("style",  "width: " + (window.innerWidth - 400) + "px");
    }else{
      document.getElementById('router_flex_container_ID').setAttribute("style",  "width: " + (window.innerWidth - 680) + "px");
    }
  };

  function changeSliderMenuColors(){
    //Depenent de l'url on ens trobem, cal canviar el color del item del slider menu
    const menuItems = [
      { className: 'scroll_menu_home', keyword: '/home', color: 'white' },
      { className: 'scroll_menu_animations', keyword: '/animations', color: 'white' },
      { className: 'scroll_menu_animations_internet', keyword: '/internetprotocols', color: 'white'},
      { className: 'scroll_menu_animations_internet_http', keyword: '/internetprotocols/tcpip', color: 'rgb(156 163 175)'}
    ];
    menuItems.forEach(item => {
      const element = document.getElementsByClassName(item.className)[0];
      const itemPath = window.location.pathname.startsWith(item.keyword);
      element.style.color = itemPath ? "#38baff" : item.color;
      element.style.backgroundColor = itemPath ? "#0090ff1f" : "transparent";
      element.style.hover = itemPath ? "none" : "pointer";
    });
  }

  function resizeBackgroundImage(){
    console.log(" ");
    let aspectRatioImage = (document.getElementById("backgroundImage_id").offsetWidth / document.getElementById("backgroundImage_id").offsetHeight);
    console.log("Image Aspect ratio: ", aspectRatioImage);
    console.log("Image width: ", document.getElementById("backgroundImage_id").offsetWidth);
    console.log("Image height: ", document.getElementById("backgroundImage_id").offsetHeight);
    let aspectRatioWindow = (window.innerWidth / window.innerHeight);
    console.log("Window Aspect ratio: ", aspectRatioWindow);
    console.log("Window width: ", window.innerWidth);
    console.log("Window height: ", window.innerHeight);

    const image = document.getElementById("backgroundImage_id");

    //image.style.width = "auto";
    //image.style.height = "auto";

    if(aspectRatioImage > aspectRatioWindow){
      //image.style.height = window.innerHeight
      console.log("Height: ", window.innerHeight);
      document.getElementById("backgroundImage_id").setAttribute("style", "height: " + window.innerHeight + "px;");
    }
    else {
      //image.style.width = window.innerWidth
      console.log("Width: ", window.innerWidth);
      document.getElementById("backgroundImage_id").setAttribute("style", "width: " + window.innerWidth + "px;");
    }
  };

  function burger_menu(state){
    // L'estat 0 es per obrir i tancar normal el menu, si li pasem un 1 volem que, unicament si esta obert, es tanqui.
    changeSliderMenuColors();
    if(document.getElementById('scroll_menu_text_container_ID').style.width == "0px" && state == 0){
      document.getElementById('scroll_menu_text_container_ID').style.width = "250px";
      document.getElementById('router_flex_container_ID').setAttribute("style", "transition: 0.3s ease-in-out;" + "width: " + (window.innerWidth - 680) + "px");
      document.getElementById('footer_container_ID').setAttribute("style", "transition: 0.3s ease-in-out;" + "width: " + (window.innerWidth - 680) + "px");
      setTimeout(() => {
        document.getElementById('router_flex_container_ID').setAttribute("style", "transition: 0s; " + "width: " + (window.innerWidth - 680) + "px");
        document.getElementById('footer_container_ID').setAttribute("style", "transition: 0s; " + "width: " + (window.innerWidth - 680) + "px");
      }, 150);
      
    } else{
      document.getElementById('scroll_menu_text_container_ID').style.width = "0px";
      document.getElementById('router_flex_container_ID').setAttribute("style", "transition: 0.4s ease-in-out;" + "width: " + (window.innerWidth - 400) + "px");
      document.getElementById('footer_container_ID').setAttribute("style", "transition: 0.4s ease-in-out;" + "width: " + (window.innerWidth - 400) + "px");
      setTimeout(() => {
        document.getElementById('router_flex_container_ID').setAttribute("style", "transition: 0s; " + "width: " + (window.innerWidth - 400) + "px");
        document.getElementById('footer_container_ID').setAttribute("style", "transition: 0s; " + "width: " + (window.innerWidth - 400) + "px");
      }, 150);
      
    }
  };

  function change_theme(){
    console.log("SRC: ", document.getElementById('topbar_theme_img_ID').src)
    // Aixo una vegada es desplegui al github s'haura de mirar si el path es correcte (segurament s'haura de canviar)
    if (document.getElementById('topbar_theme_img_ID').src == "http://localhost:5173/src/assets/sun_icon.svg") {
      // Dark mode
      document.getElementById('topbar_theme_img_ID').style.opacity = 0;
      setTimeout(() => {
        document.getElementById('topbar_theme_img_ID').src = "/src/assets/moon_icon.svg";
        document.getElementById('topbar_theme_img_ID').style.opacity = 1;
      }, 150);
    } else {
      // Light mode
      document.getElementById('topbar_theme_img_ID').style.opacity = 0;
      setTimeout(() => {
        document.getElementById('topbar_theme_img_ID').src = "/src/assets/sun_icon.svg";
        document.getElementById('topbar_theme_img_ID').style.opacity = 1;
      }, 150);
    }
  }
</script>

<style scoped>
.backgroundImage{
  max-width: none;
  height: auto;
  position: fixed;
  z-index: -5;
  top: 0px;
  left: 0px;
  box-sizing: content-box;
}

.topbar_container, .scroll_menu_text_container{
  background: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(8px);
  /* transition: 0.3s ease-in-out;*/
}

.header_language_dropdown, .footer_container{
  background: rgba(0, 0, 0, 0.5);
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

/* Scrollbar personalitzada del slider menu */
.scroll_menu_text_container::-webkit-scrollbar {
  width: 6px;
}
.scroll_menu_text_container::-webkit-scrollbar-thumb {
  background: rgba(100, 100, 100, 0.5);
  border-radius: 4px;
}
.scroll_menu_text_container::-webkit-scrollbar-thumb:hover {
  background: rgba(100, 100, 100, 0.8); 
}
.scroll_menu_text_container::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}
.scroll_menu_text_container {
  scrollbar-width: thin;
  scrollbar-color: rgb(196 196 196 / 50%) rgba(0, 0, 0, 0.1);
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
