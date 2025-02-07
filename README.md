# TFG

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Tailwind

```sh
npx tailwindcss -i ./src/assets/input.css -o ./src/assets/output.css --watch
```


## Guia per implementar una píndola de coneixement
Si t'ha agradat la finalitat d'aquest projecte i vols contribuir amb el disseny i creació de la teva pròpia píndola de coneixement, estàs en el lloc correcte. En aquest document s'expliquen detalladament les funcions principals i els requisits per a desenvolupar una píndola que vagi acord amb els objectius del projecte.

En primer lloc, cal remarcar que aquest projecte no té finalitat econòmica, està completament pensat per a la comunitat d'estudiants i persones interessades a ampliar coneixements. Per tant, tot el temps que vulguis invertir a dissenyar píndoles de coneixement que sàpigues que no hi ha més recompensa que la gratitud d'aportar a un projecte col·lectiu, el reconeixement públic, i les meves més sinceres gratituds (no hay money).

Dit això, comencem amb l'explicació general de l'arquitectura de la web:

### Arquitectura web
Aquest projecte està pensat perquè sigui content-driven, és a dir que solament hi hagi implementació del front-end, concretament amb Vue.js, que parlarem més endavant. El fet que no hi hagi un back-end ens facilita la gestió i tractament de les dades d'usuari, ja que directament no existeix.

El repositori del GitHub on trobem tot el projecte està sent desplegat en un GitHub Pages. Una eina de GitHub que ens permet publicar una web sense back-end, està dedicada per a portafolis o projectes personals. En aquest cas ens va perfecte, pel fet que és totalment gratuït.

Pel que fa a la tecnologia del front-end tenim Vue.js, està el projecte dividit en múltiples components on cadascun d'ells són prou independents dels altres. Això va perfecte per a desenvolupar píndoles que les tindrem encapsulades en components.

### Arquitectura i Lògica del Projecte en Vue.js
El projecte està desenvolupat utilitzant Vue.js, organitzat seguint una arquitectura modular basada en components. La càrrega inicial del projecte comença amb el fitxer index.html, que actua com a punt d’entrada. Aquest document inclou un element HTML `<div id="app">`, que és on es muntarà l’aplicació Vue, i carrega el fitxer /main.js mitjançant un `<script>`.

#### Estructura i Inicialització de l’Aplicació
El fitxer main.js és el responsable d’inicialitzar l’aplicació Vue. La configuració d’inicialització segueix aquest esquema:
```js
const app = createApp(App)
app.use(router)
app.mount('#app')
```

#### Estructura App.vue
El fitxer App.vue actua com a component principal de l’aplicació i conté l’estructura base de la interfície. Inclou els elements fixos que sempre són visibles, com ara:
- Fons de la pàgina.
- Barra de navegació superior.
- Barra de navegació lateral.
- Footer.

A més, aquest component gestiona el canvi dinàmic de contingut mitjançant Vue Router. Això es fa utilitzant `<RouterView />`, que s’encarrega de carregar els components corresponents segons la ruta activa.

#### Gestió de Navegació amb Vue Router
La navegació dins de l’aplicació es gestiona mitjançant Vue Router. L’usuari pot canviar de secció fent clic en un enllaç de navegació `<RouterLink>` que actualitza la ruta i carrega el component corresponent en `<RouterLink>`.

Exemple de definició de rutes en el fitxer src/router/index.js:
```js
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            name: 'index',
            component: () => import('../views/index_view.vue')
        },
        ...
    ]
})
export default router
```