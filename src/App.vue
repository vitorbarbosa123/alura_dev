<template>
  <div id="content_wrapper">
     <router-view></router-view>
  </div>
</template>

<script>


export default {

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
  }
</style>
