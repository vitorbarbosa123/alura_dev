<template>
  <div class="code_wrapper">
      <div id="code_highlight">
          <p>Visualizar com o highlight</p>
      </div>
  </div>
</template>

<script>
export default {
    props:['code_highlight']
}
</script>

<style>

.code_wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
}
#code_highlight {
    margin-top: 30px;
    margin-right: 20px;
    width: 600px;
    height: 56px;
    background: rgba(80, 129, 251, 0.08);
    border-radius: 8px;
}
.code_wrapper p {
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #FFFFFF;
}
</style>