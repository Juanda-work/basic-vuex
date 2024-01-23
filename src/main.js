import { createApp } from 'vue'
import App from './App.vue'

//* Importamos el store colocando el nombre que queramos, en este caso store.
//*  Si solo hacemos referencia a la carpeta (./store) 
// * entonces automáticamente buscará un fichero 'index'
import store from './store'


// Colocamos el store en la posición mas alta posible.
createApp(App)
    .use(store)
    .mount('#app')
