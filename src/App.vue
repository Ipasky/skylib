<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { provide } from 'vue';

provide('change_theme', change_theme);
provide('burger_menu', burger_menu);
</script>

<template>
  <div class="main_container">
    <!------- BACKGROUND IMAGE ------->
    <div id="section_id_img" class="section_img"> 
      <img src="/day_sky-3.jpg" class="backgroundImage" id="backgroundImage_id">
      <video class="background_image_transition" id="background_image_transition_ID">
        <source src="" type="video/mp4">
      </video>
    </div>
    <!-- BARRA DE NAVEGACIó SUPERIOR -->
    <!-- Per amagar la barra de navegació al fer scroll "https://www.w3schools.com/howto/howto_js_navbar_shrink_scroll.asp" -->
    <div class="topbar_container" id="topbar_container_ID">
      <div class="topbar_container_left">
        <div class="topbar_burger"><button @click="burger_menu(0)" class="topbar_burger_img"><img src="/hamburger_icon.svg" class="topbar_burger_img" id="topbar_burger_img_ID"></button></div>
        <div class="topbar_logo_container"><RouterLink to="/home" class="topbar_logo_router" @click="burger_menu(1)"><img src="/Logo_01.png" class="topbar_logo_img"></RouterLink></div>
        <RouterLink to="/home" class="topbar_fast_links" @click="burger_menu(1)">Inici</RouterLink>
        <RouterLink to="/animations" class="topbar_fast_links" @click="burger_menu(1)">Simulacions</RouterLink>
        <RouterLink to="/home" class="topbar_fast_links" @click="burger_menu(1)">GitHub</RouterLink>
      </div>
      <div class="topbar_container_right">
        <div class="topbar_theme"><div class="topbar_theme_rounded" id="topbar_theme_rounded_ID" @click="change_theme(0)"><img src="/sun_icon.svg" class="topbar_theme_img" id="topbar_theme_img_ID"></div></div>
        <div class="header_language" id="header_language_id"><div class="language_country_name" id="language_country_name_ID">Català</div></div> <!-- <img src="/english_flag.png" class="language_flag_img"> -->
        <div class="header_language_dropdown" id="header_language_dropdown_ID">
          <a href="">Català</a>
          <a href="">Espanyol</a>
          <a href="">Anglès</a>
        </div>
      </div>
    </div>

    <!-- CONTAINER ROUTER VIEW -->
    <div class="router_container" id="router_container_ID">

      <!-- SCROLL LATERAL MENU -->
      <div class="scroll_menu_container" id="scroll_menu_container_ID">
        <div class="scroll_menu_text_container" id="scroll_menu_text_container_ID">
          <div class="scroll_menu_home"><RouterLink to="/home" class="scroll_menu_home_text" @click="burger_menu(1)">Inici</RouterLink></div>
          <div class="scroll_menu_animations"><RouterLink to="/animations" class="scroll_menu_animations_text" @click="burger_menu(1)">Simulacions</RouterLink></div>
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
        <div class="footer_github" onclick="window.open('https://github.com/Ipasky/TFG', '_blank')"><img src="/github_logo_white.png" class="footer_github_img">GitHub</div>
        <div class="footer_ddd"><img src="/ddd_logo.png" class="footer_ddd_img">TFG Paper</div>
        <div class="footer_text">Contacte</div>
        <div class="footer_text">Contribuir</div>
        <div class="footer_text">Sobre nosaltres</div>
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
    //document.getElementById('topbar_container_ID').setAttribute("style", "width: " + (window.innerWidth - 400) + "px");
    //document.getElementById('scroll_menu_container_ID').setAttribute("style",  "width: " + (window.innerWidth - 400) + "px; height: " + (window.innerHeight - 150) + "px");
    //document.getElementById('router_container_ID').setAttribute("style",  "width: " + (window.innerWidth - 400) + "px");
    //document.getElementById('footer_container_ID').setAttribute("style",  "width: " + (window.innerWidth - 400) + "px");

    document.getElementById('topbar_container_ID').style.width = (window.innerWidth - 400) + "px";
    document.getElementById('scroll_menu_container_ID').style.width = (window.innerWidth - 400) + "px";
    document.getElementById('scroll_menu_container_ID').style.height = (window.innerHeight - 150) + "px";
    document.getElementById('router_container_ID').style.width = (window.innerWidth - 400) + "px";
    document.getElementById('footer_container_ID').style.width = (window.innerWidth - 400) + "px";
    
    let language_width = document.getElementById('header_language_id').offsetWidth;
    //document.getElementById('header_language_dropdown_ID').setAttribute("style", "width: " + (language_width + 10) + "px");
    document.getElementById('header_language_dropdown_ID').style.width = (language_width + 10) + "px";

    /*if (document.getElementById('tcpip_animation_container_ID')){
      document.getElementById('tcpip_animation_container_ID').setAttribute("style",  "height: " + (window.innerHeight - 250) + "px");
    }*/

    if(document.getElementById('tcpip_container_ID')){
      //document.getElementById('tcpip_container_ID').setAttribute("style",  "height: " + (window.innerHeight - 150) + "px");
      //document.getElementById('tcpip_container_02_ID').setAttribute("style",  "height: " + (window.innerHeight - 150) + "px");
      //document.getElementById('tcpip_container_03_ID').setAttribute("style",  "height: " + (window.innerHeight - 150) + "px");
      document.getElementById('tcpip_container_ID').style.height = (window.innerHeight - 150) + "px";
      //document.getElementById('tcpip_container_02_ID').style.height = (window.innerHeight - 150) + "px";
      document.getElementById('tcpip_container_03_ID').style.height = (window.innerHeight - 150) + "px";
    }

    /*if(document.getElementById('animations_container_ID')){
      document.getElementById('animations_container_ID').setAttribute("style",  "height: " + (window.innerHeight - 150) + "px");
    }*/

    // Si el menu burger esta obert mentres fem un resize de la pagina, cal ajustar la mida del router_flex_container_ID
    if(document.getElementById('scroll_menu_text_container_ID').style.width >= "0px"){ // ==
      //document.getElementById('router_flex_container_ID').setAttribute("style",  "width: " + (window.innerWidth - 680) + "px");
      document.getElementById('router_flex_container_ID').style.width = (window.innerWidth - 680) + "px";
    }else{
      //document.getElementById('router_flex_container_ID').setAttribute("style",  "width: " + (window.innerWidth - 400) + "px");
      document.getElementById('router_flex_container_ID').style.width = (window.innerWidth - 400) + "px";
    }

    //Depenent de l'url on ens trobem, cal canviar el color del item del slider menu
    changeSliderMenuColors()
  };

  window.onresize = function (){
    resizeBackgroundImage();
    //document.getElementById('topbar_container_ID').setAttribute("style", "width: " + (window.innerWidth - 400) + "px");
    //document.getElementById('scroll_menu_container_ID').setAttribute("style",  "width: " + (window.innerWidth - 400) + "px; height: " + (window.innerHeight - 150) + "px");
    //document.getElementById('router_container_ID').setAttribute("style",  "width: " + (window.innerWidth - 400) + "px");
    //document.getElementById('footer_container_ID').setAttribute("style",  "width: " + (window.innerWidth - 400) + "px");

    document.getElementById('topbar_container_ID').style.width = (window.innerWidth - 400) + "px";
    document.getElementById('scroll_menu_container_ID').style.width = (window.innerWidth - 400) + "px";
    document.getElementById('scroll_menu_container_ID').style.height = (window.innerHeight - 150) + "px";
    document.getElementById('router_container_ID').style.width = (window.innerWidth - 400) + "px";
    document.getElementById('footer_container_ID').style.width = (window.innerWidth - 400) + "px";
    
    /*if (document.getElementById('tcpip_animation_container_ID')){
      document.getElementById('tcpip_animation_container_ID').setAttribute("style",  "height: " + (window.innerHeight - 250) + "px");
    }*/

    if(document.getElementById('tcpip_container_ID')){
      //document.getElementById('tcpip_container_ID').setAttribute("style",  "height: " + (window.innerHeight - 100) + "px");
      //document.getElementById('tcpip_container_02_ID').setAttribute("style",  "height: " + (window.innerHeight - 100) + "px");
      //document.getElementById('tcpip_container_03_ID').setAttribute("style",  "height: " + (window.innerHeight - 100) + "px");
      document.getElementById('tcpip_container_ID').style.height = (window.innerHeight - 100) + "px";
      //document.getElementById('tcpip_container_02_ID').style.height = (window.innerHeight - 100) + "px";
      document.getElementById('tcpip_container_03_ID').style.height = (window.innerHeight - 100) + "px";
    }

    /*if(document.getElementById('animations_container_ID')){
      document.getElementById('animations_container_ID').setAttribute("style",  "height: " + (window.innerHeight - 150) + "px");
    }*/

    let language_width = document.getElementById('header_language_id').offsetWidth;
    //document.getElementById('header_language_dropdown_ID').setAttribute("style", "width: " + (language_width + 10) + "px");
    document.getElementById('header_language_dropdown_ID').style.width = (language_width + 10) + "px";

    // Si el menu burger esta obert mentres fem un resize de la pagina, cal ajustar la mida del router_flex_container_ID
    if(document.getElementById('scroll_menu_text_container_ID').style.width <= "0px"){ // ==
      document.getElementById('router_flex_container_ID').style.width = (window.innerWidth - 400) + "px";
    }else{
      document.getElementById('router_flex_container_ID').style.width = (window.innerWidth - 680) + "px";
    }
  };

  function changeSliderMenuColors(){
    if(document.getElementById('topbar_theme_img_ID').src == window.location.origin + "/sun_icon.svg"){
      var menuItems = [
        { className: 'scroll_menu_home', keyword: '/home', color: 'black' },
        { className: 'scroll_menu_animations', keyword: '/animations', color: 'black' },
        { className: 'scroll_menu_animations_internet', keyword: '/internetprotocols', color: 'black'},
        { className: 'scroll_menu_animations_internet_http', keyword: '/internetprotocols/tcpip', color: '#9ca3af'},
        { className: 'scroll_menu_animations_internet_tcpudp', keyword: '/internetprotocols/tcpudp', color: '#9ca3af'},
        { className: 'scroll_menu_animations_internet_dns', keyword: '/internetprotocols/dns', color: '#9ca3af'}
      ];
      menuItems.forEach(item => {
        const element = document.getElementsByClassName(item.className)[0];
        const itemPath = window.location.pathname.startsWith(item.keyword);
        element.style.color = itemPath ? "rgb(0 112 255)" : item.color;
        element.style.backgroundColor = itemPath ? "#0090ff1f" : "transparent";
        element.style.hover = itemPath ? "none" : "pointer";
      });
    } else{
      var menuItems = [
        { className: 'scroll_menu_home', keyword: '/home', color: 'white' },
        { className: 'scroll_menu_animations', keyword: '/animations', color: 'white' },
        { className: 'scroll_menu_animations_internet', keyword: '/internetprotocols', color: 'white'},
        { className: 'scroll_menu_animations_internet_http', keyword: '/internetprotocols/tcpip', color: '#9ca3af'},
        { className: 'scroll_menu_animations_internet_tcpudp', keyword: '/internetprotocols/tcpudp', color: '#9ca3af'},
        { className: 'scroll_menu_animations_internet_dns', keyword: '/internetprotocols/dns', color: '#9ca3af'}
      ];
      menuItems.forEach(item => {
        const element = document.getElementsByClassName(item.className)[0];
        const itemPath = window.location.pathname.startsWith(item.keyword);
        element.style.color = itemPath ? "#38baff" : item.color;
        element.style.backgroundColor = itemPath ? "#0090ff1f" : "transparent";
        element.style.hover = itemPath ? "none" : "pointer";
      });
    }


  }

  function resizeBackgroundImage(){
    console.log(" ");
    let aspectRatioImage = (document.getElementById("backgroundImage_id").offsetWidth / document.getElementById("backgroundImage_id").offsetHeight);
    let aspectRatioImageTransition = (document.getElementById("background_image_transition_ID").offsetWidth / document.getElementById("background_image_transition_ID").offsetHeight);
    //console.log("Image Aspect ratio: ", aspectRatioImage);
    //console.log("Image width: ", document.getElementById("backgroundImage_id").offsetWidth);
    //console.log("Image height: ", document.getElementById("backgroundImage_id").offsetHeight);
    let aspectRatioWindow = (window.innerWidth / window.innerHeight);
    //console.log("Window Aspect ratio: ", aspectRatioWindow);
    //console.log("Window width: ", window.innerWidth);
    //console.log("Window height: ", window.innerHeight);

    //const image = document.getElementById("backgroundImage_id");
    //const imageTransition = document.getElementById("background_image_transition_ID");

    //image.style.width = "auto";
    //image.style.height = "auto";

    if(aspectRatioImage > aspectRatioWindow){
      //image.style.height = window.innerHeight
      //console.log("Height: ", window.innerHeight);
      document.getElementById("backgroundImage_id").setAttribute("style", "height: " + (window.innerHeight + 100) + "px;");
      document.getElementById("background_image_transition_ID").setAttribute("style", "height: " + (window.innerHeight + 100) + "px;");
    }
    else {
      //image.style.width = window.innerWidth
      //console.log("Width: ", window.innerWidth);
      document.getElementById("backgroundImage_id").setAttribute("style", "width: " + window.innerWidth + "px;");
      document.getElementById("background_image_transition_ID").setAttribute("style", "width: " + window.innerWidth + "px;");
    }
  };

  function burger_menu(state){
    // L'estat 0 es per obrir i tancar normal el menu, si li pasem un 1 volem que, unicament si esta obert, es tanqui.
    changeSliderMenuColors();
    if(document.getElementById('scroll_menu_text_container_ID').style.width == "0px" && state == 0){
      document.getElementById('scroll_menu_text_container_ID').style.width = "250px";
      document.getElementById('router_flex_container_ID').setAttribute("style", "transition: 0.3s ease-in-out;" + "width: " + (window.innerWidth - 680) + "px");
      //document.getElementById('footer_container_ID').setAttribute("style", "transition: 0.3s ease-in-out;" + "width: " + (window.innerWidth - 680) + "px");
      document.getElementById('footer_container_ID').style.transition = "300ms ease-in-out";
      document.getElementById('footer_container_ID').style.width = (window.innerWidth - 680) + "px";
      setTimeout(() => {
        document.getElementById('router_flex_container_ID').setAttribute("style", "transition: 0s; " + "width: " + (window.innerWidth - 680) + "px");
        //document.getElementById('footer_container_ID').setAttribute("style", "transition: 700ms; " + "width: " + (window.innerWidth - 680) + "px");
        document.getElementById('footer_container_ID').style.transition = "0s";
        document.getElementById('footer_container_ID').style.transitionDuration = "700ms";
        document.getElementById('footer_container_ID').style.width = (window.innerWidth - 680) + "px";
      }, 150);
    } else{
      document.getElementById('scroll_menu_text_container_ID').style.width = "0px";
      document.getElementById('router_flex_container_ID').setAttribute("style", "transition: 0.4s ease-in-out;" + "width: " + (window.innerWidth - 400) + "px");
      //document.getElementById('footer_container_ID').setAttribute("style", "transition: 0.4s ease-in-out;" + "width: " + (window.innerWidth - 400) + "px");
      document.getElementById('footer_container_ID').style.transition = "400ms ease-in-out";
      document.getElementById('footer_container_ID').style.width = (window.innerWidth - 400) + "px";
      setTimeout(() => {
        document.getElementById('router_flex_container_ID').setAttribute("style", "transition: 0s; " + "width: " + (window.innerWidth - 400) + "px");
        //document.getElementById('footer_container_ID').setAttribute("style", "transition: 700ms; " + "width: " + (window.innerWidth - 400) + "px");
        document.getElementById('footer_container_ID').style.transition = "0s";
        document.getElementById('footer_container_ID').style.transitionDuration = "700ms";
        document.getElementById('footer_container_ID').style.width = (window.innerWidth - 400) + "px";
      }, 150);
    }
  };

  function change_theme(type){
    // El type especifica si volem un canvi o farem servir la funció per cargar el tema al fer en onLoad del component.
    // 0 -> canvi de tema
    // 1 -> carregar el tema al fer un onLoad
    var transition_to_black = false;
    var transition_to_white = false;
    if(type == 0){
      if (document.getElementById('topbar_theme_img_ID').src == window.location.origin + "/sun_icon.svg") {
        transition_to_white = false;
        transition_to_black = true;
        document.getElementById('topbar_theme_img_ID').style.opacity = 0;
        document.getElementById('topbar_theme_rounded_ID').style.pointerEvents = "none";
        document.getElementById('background_image_transition_ID').src = "/skylib_timelapse.mp4";
        document.getElementById('background_image_transition_ID').play();
        setTimeout(() => {
          document.getElementById('topbar_theme_img_ID').src = "/moon_icon.svg";
          document.getElementById('topbar_theme_img_ID').style.opacity = 1;
          document.getElementById('background_image_transition_ID').style.opacity = 1;
        }, 150);
        setTimeout(() => {
          document.getElementById('backgroundImage_id').src = "/night_sky-3.jpg";
        }, 1500);
        setTimeout(() => {
          document.getElementById('topbar_theme_rounded_ID').style.pointerEvents = "all";
          document.getElementById('background_image_transition_ID').style.opacity = 0;
          document.getElementById('background_image_transition_ID').pause();
        }, 2900);
      } else{
        transition_to_white = true;
        transition_to_black = false;
        document.getElementById('topbar_theme_img_ID').style.opacity = 0;
        document.getElementById('topbar_theme_rounded_ID').style.pointerEvents = "none";
        document.getElementById('background_image_transition_ID').src = "/skylib_timelapse_inverse.mp4";
        document.getElementById('background_image_transition_ID').play();
        setTimeout(() => {
          document.getElementById('topbar_theme_img_ID').src = "/sun_icon.svg";
          document.getElementById('topbar_theme_img_ID').style.opacity = 1;
          document.getElementById('background_image_transition_ID').style.opacity = 1;
        }, 150);
        setTimeout(() => {
          document.getElementById('backgroundImage_id').src = "/day_sky-3.jpg";
        }, 1500);
        setTimeout(() => {
          document.getElementById('topbar_theme_rounded_ID').style.pointerEvents = "all";
          document.getElementById('background_image_transition_ID').style.opacity = 0;
          document.getElementById('background_image_transition_ID').pause();
        }, 2900);
      }
    } else if(type == 1){
      if (document.getElementById('topbar_theme_img_ID').src == window.location.origin + "/sun_icon.svg") {
        transition_to_white = true;
        transition_to_black = false;
      } else{
        transition_to_white = false;
        transition_to_black = true;
      }
    }

    if (transition_to_black) {
      //** DARK MODE **//
      /* CANVI DEL FONS A NEGRE I LES LLETRES A BLANC */
      document.getElementById('topbar_container_ID').style.transitionDuration = "700ms";
      // COLOR DEL FONS
      document.getElementById('topbar_container_ID').style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      document.getElementById('scroll_menu_text_container_ID').style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      document.getElementById('header_language_dropdown_ID').style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      document.getElementById('footer_container_ID').style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      // BOX SHADOW
      document.getElementById('topbar_container_ID').style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.37)";
      document.getElementById('scroll_menu_text_container_ID').style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.37)";
      document.getElementById('header_language_dropdown_ID').style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.37)";
      document.getElementById('footer_container_ID').style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.37)";

      if(document.getElementById('home_container_about_ID')){
        document.getElementById('home_container_about_ID').style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        document.getElementById('home_container_about_ID').style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.37)";
        document.getElementById('home_container_about_ID').style.color = "white";
        document.getElementById('home_container_links_ID').style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        document.getElementById('home_container_links_ID').style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.37)";
        document.getElementById('home_container_links_ID').style.color = "white";
        document.getElementById('link_github_img_ID').style.filter = "invert(0)";
        const anim_links = document.querySelectorAll('.home_link');
        anim_links.forEach(anim_link => {
          anim_link.style.backgroundColor = "rgb(156 163 175 / 0.3)";
        });
      }
      if(document.getElementById('animations_container_ID')){
        document.getElementById('animations_container_ID').style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        document.getElementById('animations_container_ID').style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.37)";
        document.getElementById('animations_container_ID').style.color = "white";
      }
      if(document.getElementById('tcpip_container_ID')){
        document.getElementById('tcpip_container_01_ID').style.background = "rgb(0 0 0 / 50%)";
        document.getElementById('tcpip_container_02_ID').style.background = "rgb(0 0 0 / 50%)";
        document.getElementById('tcpip_container_03_ID').style.background = "rgb(0 0 0 / 50%)";
        document.getElementById('tcpip_wrapper_in_left_ID').style.background = "rgb(220 220 220 / 50%)";
        document.getElementById('tcpip_wrapper_in_middle_ID').style.background = "rgb(220 220 220 / 50%)";
        document.getElementById('tcpip_wrapper_in_right_ID').style.background = "rgb(220 220 220 / 50%)";
        document.getElementById('tab_animacio_ID').style.background = "rgb(0 0 0 / 50%)";
        document.getElementById('tab_teoria_ID').style.background = "rgb(0 0 0 / 35%)";
        document.getElementById('tab_info_ID').style.background = "rgb(0 0 0 / 35%)";
        //document.getElementById('tcpip_container_01_ID').style.color = "white";
        document.getElementById('tcpip_container_02_ID').style.color = "white";
        document.getElementById('tcpip_container_03_ID').style.color = "white";
        document.getElementById('tcpip_tabs_container_ID').style.color = "white";
        document.getElementById('tab_animacio_hr_ID').style.borderColor = "white";
        document.getElementById('tab_teoria_hr_ID').style.borderColor = "rgba(255, 255, 255, 0.20)";
        document.getElementById('tab_info_hr_ID').style.borderColor = "rgba(255, 255, 255, 0.20)";

        document.getElementById('arrow_button_image_ID').style.filter = "invert(1)";
        document.getElementById('camera_button_image_ID').style.filter = "invert(1)";
        document.getElementById('info_button_image_ID').style.filter = "invert(1)";
        document.getElementById('tutorial_button_image_ID').style.filter = "invert(1)";
        document.getElementById('pause_button_image_ID').style.filter = "invert(1)";
        document.getElementById('tcpip_animation_container_tittle_ID').style.color = "white";
        document.getElementById('terminal_container_ID').style.color = "white";
        document.getElementById('router_dns_container_ID').style.color = "white";
        document.getElementById('server_container_ID').style.color = "white";
        document.getElementById('router_info_container_ID').style.color = "white";
      }
      if(document.getElementById('internetprotocols_container_ID')){
        document.getElementById('internetprotocols_container_ID').style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        document.getElementById('internetprotocols_container_ID').style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.37)";
        document.getElementById('internetprotocols_container_ID').style.color = "white";
        const fast_links = document.querySelectorAll('.internetprotocols_tcpip_container');
        fast_links.forEach(fast_link => {
          fast_link.style.backgroundColor = "rgba(156, 163, 175, 0.3)";
        });
      }

      document.getElementById('topbar_theme_rounded_ID').style.backgroundColor = "rgb(156 163 175 / 0.3)";
      document.getElementById('language_country_name_ID').style.backgroundColor = "rgb(156 163 175 / 0.3)";
      document.getElementById('language_country_name_ID').style.color = "white";
      document.getElementById('topbar_burger_img_ID').style.filter = "invert(0)";
      document.getElementById('topbar_theme_img_ID').style.filter = "invert(0)";
      document.getElementById('header_language_dropdown_ID').style.color = "white";
      const fast_links = document.querySelectorAll('.topbar_fast_links');
      fast_links.forEach(fast_link => {
        fast_link.style.color = "white";
      });
      const anim_links = document.querySelectorAll('.animations_box');
      anim_links.forEach(anim_link => {
        anim_link.style.backgroundColor = "rgb(156 163 175 / 0.3)";
      });

      const scroll_container = document.getElementById('scroll_menu_text_container_ID');
      const scroll_divs = scroll_container.querySelectorAll('div');
      scroll_divs.forEach(div => {
        if (window.getComputedStyle(div).color === 'rgb(0, 0, 0)' || window.getComputedStyle(div).color.toLowerCase() === 'black') {
          div.style.color = 'white';
        }
      });
    } else {
      //** LIGHT MODE **//
      /* CANVI DEL FONS A BLANC I LES LLETRES A NEGRE */
      document.getElementById('topbar_container_ID').style.transitionDuration = "700ms";
      // COLOR DEL FONS
      document.getElementById('topbar_container_ID').style.backgroundColor = "rgb(255 255 255 / 59%)";
      document.getElementById('scroll_menu_text_container_ID').style.backgroundColor = "rgb(255 255 255 / 59%)";
      document.getElementById('header_language_dropdown_ID').style.backgroundColor = "rgb(255 255 255 / 59%)";
      document.getElementById('footer_container_ID').style.backgroundColor = "rgb(255 255 255 / 59%)";
      // BOX SHADOW
      document.getElementById('topbar_container_ID').style.boxShadow = "0 4px 30px rgb(138 138 138 / 37%)";
      document.getElementById('scroll_menu_text_container_ID').style.boxShadow = "0 4px 30px rgb(138 138 138 / 37%)";
      document.getElementById('header_language_dropdown_ID').style.boxShadow = "0 4px 30px rgb(138 138 138 / 37%)";
      document.getElementById('footer_container_ID').style.boxShadow = "0 4px 30px rgb(138 138 138 / 37%)";
      
      if(document.getElementById('home_container_about_ID')){
        document.getElementById('home_container_about_ID').style.backgroundColor = "rgb(255 255 255 / 59%)";
        document.getElementById('home_container_about_ID').style.boxShadow = "0 4px 30px rgb(138 138 138 / 37%)";
        document.getElementById('home_container_about_ID').style.color = "black";
        document.getElementById('home_container_links_ID').style.backgroundColor = "rgb(255 255 255 / 59%)";
        document.getElementById('home_container_links_ID').style.boxShadow = "0 4px 30px rgb(138 138 138 / 37%)";
        document.getElementById('home_container_links_ID').style.color = "black";
        document.getElementById('link_github_img_ID').style.filter = "invert(1)";
        const anim_links = document.querySelectorAll('.home_link');
        anim_links.forEach(anim_link => {
          anim_link.style.backgroundColor = "rgba(255, 255, 255, 0.52)";
        });
      }
      if(document.getElementById('animations_container_ID')){
        document.getElementById('animations_container_ID').style.backgroundColor = "rgb(255 255 255 / 59%)";
        document.getElementById('animations_container_ID').style.boxShadow = "0 4px 30px rgb(138 138 138 / 37%)";
        document.getElementById('animations_container_ID').style.color = "black";
      }
      if(document.getElementById('tcpip_container_ID')){
        document.getElementById('tcpip_container_01_ID').style.background = "rgb(255 255 255 / 59%)";
        document.getElementById('tcpip_container_02_ID').style.background = "rgb(255 255 255 / 59%)";
        document.getElementById('tcpip_container_03_ID').style.background = "rgb(255 255 255 / 59%)";
        document.getElementById('tcpip_wrapper_in_left_ID').style.background = "rgb(255 255 255 / 50%)";
        document.getElementById('tcpip_wrapper_in_middle_ID').style.background = "rgb(255 255 255 / 50%)";
        document.getElementById('tcpip_wrapper_in_right_ID').style.background = "rgb(255 255 255 / 50%)";
        document.getElementById('tab_animacio_ID').style.background = "rgb(255 255 255 / 59%)";
        document.getElementById('tab_teoria_ID').style.background = "rgb(255 255 255 / 25%)";
        document.getElementById('tab_info_ID').style.background = "rgb(255 255 255 / 25%)";
        //document.getElementById('tcpip_container_01_ID').style.color = "black";
        document.getElementById('tcpip_container_02_ID').style.color = "black";
        document.getElementById('tcpip_container_03_ID').style.color = "black";
        document.getElementById('tcpip_tabs_container_ID').style.color = "black";
        document.getElementById('tab_animacio_hr_ID').style.borderColor = "white";
        document.getElementById('tab_teoria_hr_ID').style.borderColor = "rgba(0, 0, 0, 0.40)";
        document.getElementById('tab_info_hr_ID').style.borderColor = "rgba(0, 0, 0, 0.40)";

        document.getElementById('arrow_button_image_ID').style.filter = "invert(0)";
        document.getElementById('camera_button_image_ID').style.filter = "invert(0)";
        document.getElementById('info_button_image_ID').style.filter = "invert(0)";
        document.getElementById('tutorial_button_image_ID').style.filter = "invert(0)";
        document.getElementById('pause_button_image_ID').style.filter = "invert(0)";
        document.getElementById('tcpip_animation_container_tittle_ID').style.color = "black";
        document.getElementById('terminal_container_ID').style.color = "black";
        document.getElementById('router_dns_container_ID').style.color = "black";
        document.getElementById('server_container_ID').style.color = "black";
        document.getElementById('router_info_container_ID').style.color = "black";

      }
      if(document.getElementById('internetprotocols_container_ID')){
        document.getElementById('internetprotocols_container_ID').style.backgroundColor = "rgb(255 255 255 / 59%)";
        document.getElementById('internetprotocols_container_ID').style.boxShadow = "0 4px 30px rgb(138 138 138 / 37%)";
        document.getElementById('internetprotocols_container_ID').style.color = "black";
        const fast_links = document.querySelectorAll('.internetprotocols_tcpip_container');
        fast_links.forEach(fast_link => {
          fast_link.style.backgroundColor = "rgb(255 255 255 / 60%)";
        });
      }
      document.getElementById('topbar_theme_rounded_ID').style.backgroundColor = "rgb(255 255 255 / 52%)";
      document.getElementById('language_country_name_ID').style.backgroundColor = "rgb(255 255 255 / 52%)";
      document.getElementById('language_country_name_ID').style.color = "black";
      document.getElementById('topbar_burger_img_ID').style.filter = "invert(1)";
      document.getElementById('topbar_theme_img_ID').style.filter = "invert(1)";
      document.getElementById('header_language_dropdown_ID').style.color = "black";

      const fast_links = document.querySelectorAll('.topbar_fast_links');
      fast_links.forEach(fast_link => {
        fast_link.style.color = "black";
      });
      const anim_links = document.querySelectorAll('.animations_box');
      anim_links.forEach(anim_link => {
        anim_link.style.backgroundColor = "rgb(255 255 255 / 60%)";
      });

      const scroll_container = document.getElementById('scroll_menu_text_container_ID');
      const scroll_divs = scroll_container.querySelectorAll('div');
      scroll_divs.forEach(div => {
        if (window.getComputedStyle(div).color === 'rgb(255, 255, 255)' || window.getComputedStyle(div).color.toLowerCase() === 'white') {
          div.style.color = 'black';
        }
      });
    }
  }
</script>

<style scoped>
.backgroundImage, .background_image_transition{
  max-width: none;
  height: auto;
  position: fixed;
  z-index: -5;
  top: -100px;
  left: 0px;
  box-sizing: content-box;
  transition-duration: 300ms;
}
.background_image_transition{
  opacity: 0;
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
