<template>
  <div class="home_container_title" id="home_container_title_ID">
    <div class="home_title_01">SkyLib</div>
    <div class="home_title_02">Llibreria d'animacions interactives de conceptes d'Enginyeria</div>
    <div class="home_title_03">Isaac Pascual</div>
    <div class="home_title_04">TFG 2024-2025</div>
  </div>

  <div class="home_container_about" id="home_container_about_ID">
      <div class="home_about_01">ABOUT THIS PROJECT</div>
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
        const mainTitle = document.getElementById('home_container_title_ID');
        const mainTitle02 = document.getElementById('home_container_about_ID');

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
.home_container_about{
  background: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(8px);
}
</style>