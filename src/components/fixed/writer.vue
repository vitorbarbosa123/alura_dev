<template>
  <main>
      <div class="coding_wrapper">
        <div class="coding_box">
          <div class="elipses">
            <div class="elipse"></div>
            <div class="elipse"></div>
            <div class="elipse"></div>
          </div>
          <div class="code_text_area"> 
            <code 
              class="preview hljs javascript"
              contenteditable="true"
              aria-label="editor"
            ></code>  
          </div>
        </div>
      </div>
      <div class="code_wrapper" >
      <button @click="highlightVisualize()" id="code_highlight">
          <p>Visualizar com o highlight</p>
      </button>
  </div>
  </main>
</template>

<script>
import hljs from 'highlight.js';

export default {
    props:['writer'],
    methods: {
      highlightVisualize(){
        const codeEditor = document.querySelector('.code_text_area');
        const code = codeEditor.querySelector('code');
        hljs.highlightElement(code);
    }      
}
}
</script>

<style>

@import '../../external_styles/dracula.css';
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

.code_text_area {
  color: white;
  font-family: 'Roboto Mono', monospace;
  padding: 1.5%;
  font-size: 14px;
  line-height: 25px;
  margin-left: 1%;
  border: none;

/* Neutral/$white */

color: #FFFFFF;;
}

.elipses {
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

.code_wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    
}
#code_highlight {
    margin-top: 5% ;
    margin-right: 20px;
    width: 600px;
    height: 56px;
    background: rgba(80, 129, 251, 0.08);
    border-radius: 8px;
    border: none;
}
.code_wrapper p {
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #FFFFFF;
}

.hljs {
  color: white;
  background-color:  #141414;
  font-size: 1.2em;
}
</style>