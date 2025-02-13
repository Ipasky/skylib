<template>
  <div class="home_container_title" id="home_container_title_ID">
    <div class="home_title_01" id="home_title_01_ID">SkyLib</div>
    <div class="home_title_02" id="home_title_02_ID">Biblioteca de simulacions sobre conceptes i protocols d'Enginyeria</div>
    <div class="home_title_03">Isaac Pascual</div>
    <div class="home_title_04">TFG 2024-2025</div>
  </div>
  <div class="home_container_about_links" id="home_container_about_links_ID">
    <div class="home_container_about" id="home_container_about_ID">
      <div class="home_about_01" id="home_about_01_ID">SOBRE EL PROJECTE</div>
      <div id="home_about_02_ID">
        <br>
        Benvinguts a SkyLib, una biblioteca recopilatòria de simulacions sobre protocols i conceptes d'Enginyeria. 
        Tens a la teva disposició nombroses píndoles de coneixement de múltiples àrees d'enginyeria, desde xarxes, criptografia, bases de dades fins a ciberseguretat. 
        En cadascuna d'aquestes píndoles trobem: una simulació on podràs explorar i interactuar lliurement, una descripció teòrica en la qual tens explicat el protocol o concepte
        de manera tradicional i per últim mes informació rellevant com pot ser, quina història té o dades interessants.
        <br><br>
        Aquest projecte es open-source, tens tot el codi a la teva disposició, si estas interesat pots anar a consultarlo lliurement al GitHub. 
        A demes esta pensat per a que sigui colaboratiu, es a dir que qualsevol persona que s'animi a contribuir pugi fer-ho. En el cas d'estar interessat, 
        deixo a continuació un tutorial explicatiu on exposo detalladament quins son els requisits, explico parts necesaries del codi i eines que he utilitzat, i altra informació d'interes, 
        a més de deixar un exemple en blanc com a punt de partida per tenir una referencia i perquè puguis començar a crear la teva pròpia simulació.
        <br>
        <img src="/arquitectura_diagrama.svg">
        <br>
        Actualment a dia <span id="current_date_ID"></span>, el projecte es troba en fase de desenvolupament, per tant, moltes de les simulacions no estan completes o no estan disponibles. No obstant estem treballant
        per a poder oferir una experiència mes completa i satisfactòria.
      </div>
    </div>
    <div class="home_container_links" id="home_container_links_ID">
        <div class="home_about_01">ENLLAÇOS</div>
        <div class="home_link" onclick="window.open('https://github.com/Ipasky/TFG', '_blank')"><img src="/github_logo_white.png" class="footer_github_img" id="link_github_img_ID">GitHub</div>
        <div class="home_link">Contribuir</div>
        <div class="home_link"><img src="/ddd_logo.png" class="footer_ddd_img">TFG Paper</div>
        <div class="home_link">Contacte</div>
        <div class="home_link">Sobre nosaltres</div>
    </div>
  </div>
  <div class="home_container_aboutus" id="home_container_aboutus_ID">
    <div class="home_aboutus_01">SOBRE NOSALTRES</div>
    <div>Aquest projecte forma part del treball de fi de grau en l'Universitat Autonoma de Barcelona</div>
    - Explicació de la motivació del treballant
    - Sobre mi
    - Sobre el tutor
    - Agraiments?
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

      const now = new Date();
      const day = String(now.getDate()).padStart(2, '0');
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const year = now.getFullYear();
      document.getElementById('current_date_ID').innerText = `${day}/${month}/${year}`;
    },
      beforeDestroy() {
      window.removeEventListener('resize', this.setElementStyles);
    },
      methods: {
      setElementStyles() {
        const mainTitle = document.getElementById('home_container_title_ID');
        //const mainTitle02 = document.getElementById('home_container_about_links_ID');

        if (mainTitle) {
          mainTitle.style.height = (window.innerHeight - 150) + 'px';
          //mainTitle02.style.height = (window.innerHeight - 150) + 'px';
        }
      }
    }
  }
</script>

<style scoped>
.home_container_about,
.home_container_links,
.home_container_aboutus{
  background: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(8px);
}
</style>