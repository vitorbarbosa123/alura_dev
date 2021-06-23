<template>
    <div>
        <nav class="sidebar">
            <h2 id="sidebar_title">MENU</h2>
            <ul class="sidebar_list">
                <li class="sidebar_itens">
                    <div class="sidebar_itens_wrapper">
                        <div class="sidebar_icon_wrapper"> <a href="/">
                        <font-awesome-icon icon="code" class="sidebar_icons"/></a>
                        </div>
                        <p><a href="/">Editor de código</a></p>
                    </div>
                </li>
                <li class="sidebar_itens">
                    <div class="sidebar_itens_wrapper"> 
                        <div class="sidebar_icon_wrapper"><a href="/meus_codigos">
                        <font-awesome-icon icon="bookmark" class="sidebar_icons"/> </a>
                        </div>
                        <p><a href="/meus_codigos">Meus códigos</a></p>
                    </div>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    props:['sidebar']
}
</script>

<style>

.sidebar {
    margin-top: 5%;
    margin-right: 70px;
}
#sidebar_title {
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.4em;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-left: 60px;

}

.sidebar_list {
    margin-left: 20px;
    list-style-type: none;
}

.sidebar_itens {
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    margin-bottom: 10px;

}

.sidebar_itens_wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.sidebar_itens_wrapper a {
    text-decoration: none;
    color: white;
}
.sidebar_icons {
    font-size: 20px;
    padding-left: 25%;
    padding-top: 25%;
}

.sidebar_icon_wrapper:hover {
    background: rgba(80, 129, 251, 0.64);
}
.sidebar_icon_wrapper:focus {
    background: #5081FB;
}
.sidebar_icon_wrapper {
    width: 48px;
    height: 48px;
    background: rgba(80, 129, 251, 0.16);
    border-radius: 16px;
}

.sidebar_itens_wrapper p {
    padding-left: 2%;
}
</style>