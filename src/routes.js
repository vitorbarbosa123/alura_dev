import home from './components/home/home.vue';
import codigos from './components/meus_codigos/meus_codigos.vue';

export const routes = [

    { path: '', component: home },
    { path: '/meus_codigos', component: codigos }

  ];