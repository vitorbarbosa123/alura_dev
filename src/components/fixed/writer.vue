<template>
  <div>
      <div class="coding_wrapper">
        <div class="coding_box">
          <div id="elipses">
            <div class="elipse"></div>
            <div class="elipse"></div>
            <div class="elipse"></div>
            </div>
          <div class="code_text">
            <p>const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj) const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res) const unfold = (f, seed) => { const go = (f, seed, acc) => { const res = f(seed) return res ? go(f, res[1], acc.concat([res[0]])) : acc } return go(f, seed,</p>
          </div>

        </div>
      </div>
  </div>
</template>

<script>
export default {
    props:['writer']
}
</script>

<style>
.coding_wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 600px;
  height: 350px;
  background: #6BD1FF;
  border-radius: 8px;
  
}

.coding_box {
  width: 550px;
  height: 300px;  
  background: #141414;
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.24);
  border-radius: 8px;
}

.code_text {
  color: white;
  font-family: 'Roboto Mono', monospace;
  padding: 1.5%;
  font-size: 14px;
  line-height: 25px;
  margin-left: 1%;

/* Neutral/$white */

color: #FFFFFF;;
}
#elipses {
  display: flex;
  flex-direction: row;
  margin-top: 5%;
  margin-left: 2%;
  
}

.elipse {
    background-color: #45597e;
    width: 12px;
    height: 12px;
    border-radius: 50%;

    margin-left: 1%;
}

.elipse:first-child {
  background-color: #FF5F56
}

.elipse:nth-child(2) {
  background-color: #FFBD2E;
}
.elipse:last-child {
  background-color: #27C93F;
}
</style>