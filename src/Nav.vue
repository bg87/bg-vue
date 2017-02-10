<template>
    <div>

        <div id="mySidenav" class="sidenav">
        <a class="closebtn" @click="closeNav()">&times;</a>
        
            <div @click="closeNav()">
                <router-link to="/">Home</router-link>
                <router-link to="/boxes">Boxes app</router-link>
                <router-link to="/notebook">Notebook app</router-link>
                <hr>
                    <a v-if="$store.state.user" @click="signOut">Sign Out</a>
                    <a v-if="!$store.state.user" @click="openAuthModal">Sign In</a>
            </div>
        </div>
        
        <div class="openNav"><span @click="openNav()">&#9776;</span></div>
    </div>
</template>

<script>
    export default {
        methods: {
            openNav() {
                document.getElementById("mySidenav").style.width = "100%";
            },
            closeNav() {
                document.getElementById("mySidenav").style.width = "0";
            },
            openAuthModal() {
                this.$store.state.authModal = true;
            },
            signOut() {
                // clear local storage
                localStorage.clear();
                this.$store.state.user = false;

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
        background-color: #2C3D55;
        overflow-x: hidden;
        transition: 0.4s;
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
        text-align: center;
        color: white;
        margin: 0em auto .5em;
    }
    .openNav span {
        font-size: 25px;
        cursor: pointer;
        padding: 4px 10px;
        color: black;
    }
    hr {
        width: 60%;
    }

    @media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
    .sidenav a {font-size: 18px;}
    }
</style>