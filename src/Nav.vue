<template>
    <div>
    <div id="mySidenav" class="sidenav">
      <a class="closebtn" @click="closeNav()">&times;</a>
      
      <div @click="closeNav()">
        <router-link to="/">Home</router-link>
        <router-link to="/boxes">Boxes app</router-link>
        <router-link to="/notebook">Notebook app</router-link>
      </div>
    </div>

    <span class="openNav" @click="openNav()">&#9776;</span>
    </div>
</template>

<script>
  export default {
  data () {
    return {

    }
  },
  methods: {
    openNav: () => {
        document.getElementById("mySidenav").style.width = "100%";
    },
    closeNav: () => {
        document.getElementById("mySidenav").style.width = "0";
    }
  }
}
</script>

<style scoped>
    .sidenav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
    text-align: center;
}

.sidenav a {
    padding: 8px 8px 8px 32px;
    margin:auto;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.4s;
    cursor: pointer;
}

.sidenav a:hover{
    color: #f1f1f1;
}

.sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
    cursor: pointer;
}
.openNav {
    font-size: 30px;
    cursor: pointer;
    margin-left:10px;
}
@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>