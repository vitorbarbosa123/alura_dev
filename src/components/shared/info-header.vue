<template>
  <div>
      <nav class="navbar">
        <ul class="navbar_list">
          <li class="navbar_itens"><a href=""><img src="/src/assets/logo.png" alt="Logo" id="logo"></a></li>
          <li><input type="text" placeholder="Busque por algo" id="search"></li>
          <li><div class="user">
                <img src="/src/assets/profile.jpg" alt="" id="avatar">
                <p id="username">Vitor</p>
              </div></li>
        </ul>
      </nav>
  </div>
</template>

<script>
export default {
    props: ['infos']

}
</script>

<style>
.navbar_list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
}
#logo {
  width: 200px;
}

.navbar_list {
  list-style-type: none;
}

#search {
  width: 600px;
  height: 56px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.16);
}

#search::placeholder {
  
  padding: 2%;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
  opacity: 0.64;
}

.user {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  
}
#avatar {
  width: 50px;
  height:50px;
  padding: 10%;
  border-radius: 50px;
}
#username {
  margin-right: 50px;
  font-size: 18px;
  line-height: 24px;
  color: white;
}
</style>