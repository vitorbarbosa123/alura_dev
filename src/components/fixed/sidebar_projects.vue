<template>
  <div class="sidebar_projects">
      <div class="infos">
          <h2 class="projects_title">Seu Projeto</h2>
          <input type="text" placeholder="Nome do seu Projeto" class="descriptions">
          <input type="text" placeholder="Descrição do seu Projeto" class="descriptions">
      </div>
      <div>
          <h2 class="projects_title">Personalização</h2>
          <select class="descriptions">
              <option value="0">JavaScript</option>
              <option value="1">PHP</option>
              <option value="2">Java</option>
          </select>
      </div>    
  </div>
</template>

<script>
export default {
    props:['projects']
}
</script>

<style>


.projects_title {
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.4em;
    text-transform: uppercase;
    color: #FFFFFF;
}
.infos {
    display: flex;
    flex-direction: column;
    
}
.descriptions {
    margin-bottom: 15px; 
    width: 250px;
    height: 56px;

    background: rgba(255, 255, 255, 0.16);
    border-radius: 8px;

}

.descriptions::placeholder {
    color: white;
    opacity: 0.64;
}
input, select, textarea{
    color: white;
}

option {
   background-color: #051D3B;
}

</style>