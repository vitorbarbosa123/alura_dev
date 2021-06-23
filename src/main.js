import Vue from 'vue'
import App from './App.vue'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { routes } from './routes';
// Utiliza-se entre chaves pois a exportação não é default.

import VueRouter from 'vue-router';


Vue.use(VueRouter);

library.add(fas)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode: 'history'
});

// É importante lembrar que no caso do Vue é possível usar o "mode:'history'"
// Para remover o '#' da url. Irá funcionar corretamente pois estamos em 
// localhost. Entretanto, lembre lembrar de configurar o servidor para em
// toda e qualquer situação, retornar o index.html

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import hljsVuePlugin from "@highlightjs/vue-plugin";

hljs.registerLanguage('javascript', javascript);
Vue.use(hljsVuePlugin)


new Vue({
  el: '#app',
  components: { App },
  router,
  template: '<App/>',
})
