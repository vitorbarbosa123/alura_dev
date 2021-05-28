<template>
  <div>
    <infos></infos>
    <div id="content_wrapper">
        <sidebar></sidebar>
        <writer></writer>
        <projects></projects>
    </div>
  </div>
</template>

<script>

import infos from '../shared/info-header.vue'
import sidebar from '../shared/sidebar.vue'
import projects from '../fixed/sidebar_projects.vue'
import writer from '../fixed/writer.vue'

export default {

    components: {
      'infos': infos,
      'sidebar': sidebar,
      'projects': projects,
      'writer': writer,
      
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');
* {
  font-family: 'Inter', sans-serif;

}
body  {   
  background-color: #051D3B;

}
#content_wrapper {
  display: flex;
  justify-content: space-around;
  align-content: center;
  
  
  

}
</style>
