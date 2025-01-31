<template>
  <div class="home_container_title" id="home_container_title_ID">
    <div class="home_title_01">SkyLib</div>
    <div class="home_title_02">Biblioteca d'animacions interactives de conceptes d'Enginyeria</div>
    <div class="home_title_03">Isaac Pascual</div>
    <div class="home_title_04">TFG 2024-2025</div>
  </div>

  <div class="home_container_about" id="home_container_about_ID">
      <div class="home_about_01">EL PROJECTE</div>
      <div>
        <br>
        Benvinguts a SkyLib, una biblioteca recopilatòria d'animacions sobre protocols i conceptes d'Enginyeria. 
        Tens a la teva disposició nombroses píndoles de coneixement de múltiples àrees com Xarxes, Criptografia i Ciberseguretat entre d'altres. 
        En cadascuna d'aquestes píndoles trobem una animació interactiva on podràs explorar i interactuar lliurement, una descripció teòrica en la qual tens explicat el protocol o concepte
        de manera tradicional i per últim mes informació rellevant com potser quina història té.
        <br><br>
        Aquest projecte esta pensat per a que sigui colaboratiu, es a dir que qualsevol persona que vulgi contribuir pot fer-ho. En el cas d'estar interessat, deixo a continuació 
        un tutorial explicatiu on exposo detalladament el codi i les eines que he utilitzat, a més de deixar un exemple en blanc perquè puguis començar a crear la teva pròpia animació.
        <br><br>

      </div>
      <br><br>
      - Breu descripció del projecte
      - Link a component howto contribute
      - Links a github per contribuir i tfg paper
  </div>
</template>

<script>
  import { inject } from 'vue';
  export default {
    mounted() {
      const change_theme = inject('change_theme');
      if(change_theme) change_theme(1);
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