<template>
  <div class="main_title_container" id="main_title_container_ID">
    <div class="main_title_01">SkyLib</div>
    <div class="main_title_02">Llibreria d'animacions interactives de conceptes d'Enginyeria</div>
    <div class="main_title_03">Isaac Pascual</div>
    <div class="main_title_04">TFG 2024-2025</div>
  </div>

  <div class="main_title_container_02" id="main_title_container_02_ID">
      <div>container 02</div>
      <div>Descripció del projecte, links i </div>
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
        const mainTitle = document.getElementById('main_title_container_ID');
        const mainTitle02 = document.getElementById('main_title_container_02_ID');

        if (mainTitle && mainTitle02) {
          mainTitle.style.height = (window.innerHeight - 170) + 'px';
          mainTitle.style.width = (window.innerWidth - 500) + 'px';
          mainTitle02.style.height = (window.innerHeight - 150) + 'px';
          mainTitle02.style.width = (window.innerWidth - 500) + 'px';
        }
      }
    }
  }
</script>