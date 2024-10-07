<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="main_container">
    <div class="topbar_container" id="topbar_container_ID">
      <div class="topbar_logo">
        Logo topbar
      </div>
      <div class="topbar_burger">Burger</div>
      <div class="topbar_color">Theme</div>
      <div class="topbar_language">Language</div>
    </div>
    <!-- Aqui depenent de l'arrel que ens trobem va un component o unaltre
         El que hi ha a continuació d'ha de posar en un component
    -->
    <div class="main_title_container" id="main_title_container_ID">
      <div class="main_title_01">SkyLib</div>
      <div class="main_title_02">Llibreria d'animacions interactives de conceptes d'Enginyeria</div>
      <div class="main_title_03">Isaac Pascual</div>
      <div class="main_title_04">TFG 2024-2025</div>
    </div>
    <div class="main_title_container_02" id="main_title_container_02_ID">
      <div>container 02</div>
    </div>
  </div>
  <RouterView />
</template>

<script>
  window.onload = function (){
    document.getElementById('topbar_container_ID').setAttribute("style", "width: " + (window.innerWidth - 500) + "px");

    document.getElementById('main_title_container_ID').setAttribute("style", "height: " + (window.innerHeight - 170) + "px; " + "width: " + (window.innerWidth - 500) + "px");
    document.getElementById('main_title_container_02_ID').setAttribute("style", "height: " + (window.innerHeight - 150) + "px; " + "width: " + (window.innerWidth - 500) + "px");
  };

  window.onresize = function (){
    document.getElementById('topbar_container_ID').setAttribute("style", "width: " + (window.innerWidth - 500) + "px");
    document.getElementById('main_title_container_ID').setAttribute("style", "height: " + (window.innerHeight - 100) + "px; " + "width: " + (window.innerWidth - 500) + "px");
    document.getElementById('main_title_container_02_ID').setAttribute("style", "height: " + (window.innerHeight - 100) + "px; " + "width: " + (window.innerWidth - 500) + "px");
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
