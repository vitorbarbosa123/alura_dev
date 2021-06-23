<template>
  <div>
      <infos></infos>
      <sidebar></sidebar>
  </div>
</template>

<script>
import infos from '../shared/info-header.vue'
import sidebar from '../shared/sidebar.vue'
export default {
    components: {
    'infos': infos,
    'sidebar': sidebar,
    }
}
</script>

<style>

</style>