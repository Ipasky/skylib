<template>
  <div class="main_title_container_01" id="main_title_container_01_ID">
    <div class="main_title_011">SkyLib</div>
    <div class="main_title_012">Llibreria d'animacions interactives de conceptes d'Enginyeria</div>
    <div class="main_title_013">Isaac Pascual</div>
    <div class="main_title_014">TFG 2024-2025</div>
  </div>

  <div class="main_title_container_02" id="main_title_container_02_ID">
      <div class="main_title_021">ABOUT THIS PROJECT</div>
      <div>Descripció del projecte, links a github i tfg paper</div>
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
        const mainTitle = document.getElementById('main_title_container_01_ID');
        const mainTitle02 = document.getElementById('main_title_container_02_ID');

        if (mainTitle && mainTitle02) {
          mainTitle.style.height = (window.innerHeight - 150) + 'px';
          //mainTitle.style.width = (window.innerWidth - 500) + 'px';
          mainTitle02.style.height = (window.innerHeight - 150) + 'px';
          //mainTitle02.style.width = (window.innerWidth - 500) + 'px';
        }
      }
    }
  }
</script>

<style scoped>
.main_title_container_02{
  background: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(8px);
}
</style>