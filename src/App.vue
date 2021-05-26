<template>
  <infos></infos>
</template>

<script>

import infos from './components/shared/info-header.vue'
export default {

    components: {
      'infos': infos 
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
