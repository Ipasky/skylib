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


## Guia per implementar una pindola de coneixement
Si t'ha agradat la finalitat d'aquest projecte i vols contribuir amb el disseny i creació de la teva propia pindola de coneixement, estas en el lloc correcte. En aquest document s'expliquen detalladament les funcions principals i els requisits per a desenvolupar una pindola que vaigi acord amb els objectius del projecte.

En primer lloc cal remarcar que aquest projecte no te finalitat economica, esta completament pensat per a la comunitat d'estudiants i persones interesades en ampliar coneixements. Per tant tot el temps que vulgis invertir a dissenyar pindoles de coneixement que sapigues que no hi ha mes recompensa que la gratitud d'aportar a un projecte colectiu i el reconeixement del autor (no hay money).

Dit aixó, començem amb l'explicaciço general de l'arquitectura de la web:

### Arquitectura web
Aquest projecte esta pensat per a que sigui content-driven, es a dir que solament hi haigui implementació front-end, concretament amb vue, que parlarem mes endavant. El fet que no hi haigui un backend ens facilita la gestió i tractament de les dades d'usuari ja que directament no existeix. 

El repositori del github on trobem tot el projecte esta sent desplegat en un github pages. Una eina de github que ens permet publicar una web sense backend, esta dedicada per a portfolios o projectes personals. En aquest cas ens va perfecte ja que es totalment gratuit.

En cuant a la tecnologia del front-end tenim vue.js, esta el projecte dividit en multiples components on cadascun d'ells son prou independents dels altres. Aixo va perfecte per a desenvolupar pindoles que les tindrem encapsulades en components.

### Arquitectura i Lògica del Projecte en Vue.js
El projecte està desenvolupat utilitzant Vue.js, organitzat seguint una arquitectura modular basada en components. La càrrega inicial del projecte comença amb el fitxer index.html, que actua com a punt d’entrada. Aquest document inclou un element HTML (<div id="app">), que és on es muntarà l’aplicació Vue, i carrega el fitxer /main.js mitjançant un <script>.

#### Estructura i Inicialització de l’Aplicació
El fitxer main.js és el responsable d’inicialitzar l’aplicació Vue. La configuració d’inicialització segueix aquest esquema:
```python
const app = createApp(App)
app.use(router)
app.mount('#app')
```