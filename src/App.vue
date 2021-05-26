<template>
  <div>
  <infos></infos>
  <sidebar></sidebar>
  <projects></projects>

  </div>
</template>

<script>

import infos from './components/shared/info-header.vue'
import sidebar from './components/shared/sidebar.vue'
import projects from './components/fixed/sidebar_projects.vue'
export default {

    components: {
      'infos': infos,
      'sidebar': sidebar,
      'projects': projects
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;600&display=swap');

* {
  font-family: 'Inter', sans-serif;

}
body  {   
  background-color: #051D3B;

}
</style>
