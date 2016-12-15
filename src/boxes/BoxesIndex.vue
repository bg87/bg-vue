<template>
    <div class="main">
        <app-nav></app-nav>
        
        <div class="panel1">
            <h1>This app is under construction.</h1>
            <button @click="show = true">Push me</button>
            <transition name="fade">
                <div v-if="show">
                    <h1>It's still under construction</h1>
                    <p>But you can scroll down for a suprise</p>
                </div>
            </transition>
            <transition name="slide">
                <span v-if="show" class="fa fa-arrow-circle-down"></span>
            </transition>
        </div>
        <div class="panel2">
            <div class="panel2Content"></div>
        </div>
        <div class="panel3">

        </div>
        <div class="panel4">
            
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: false
            }
        },
        methods: {
            handleScroll(event) {
                console.log('scroll');
            }
        },
        created() {
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }
</script>

<style scoped>
    .main {
         background: url('../assets/fail.jpg') no-repeat center center fixed; 
         -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        height: 100vh; 
    }
    .panel1 {
        text-align: center;
        color: white;
        margin-top: 4em;
        background: url('../assets/fail.jpg') no-repeat center center fixed; 
         -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        height: 100vh; 
    }
    .fade-enter {
        opacity: 0;
    }
    .fade-enter-active {
        transition: opacity 1s;
    }
    .slide-enter{
        opacity: 0;
    }
    .slide-enter-active {
        animation: slide-in .6s ease-out forwards;
        transition: 1.5s;
    }
    @keyframes slide-in {
        from {
            transform: translateX(500px);
        }
        to {
            transform: translateX(0);
        }
    }

    button {
        padding: 1em 2em;
        margin: 2em;
        font-weight: bold;
        border-radius: 5px;
        border: none;
        color: white;
        background-color: rgba(97, 132, 250, 0.65);
        transition: 0.5s;
    }
    button:hover {
        background-color: rgba(97, 132, 250, 1);
    }
    .fa-arrow-circle-down {
        margin-top: 3em;
        font-size:3em;
    }
    .panel2 {
        background-color: #e0e0e0;
        height: 75vh;
        padding: 5em;
    }
    .panel2Content {
        height: 60vh;
        width: 60vh;
        margin: auto;
        background: url('../assets/violin.jpg') no-repeat center center; 
         -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover; 
        opacity: 1;
        border-radius: 50%;
    }
    .panel3 {
        height: 100vh;
    }
    .panel4 {
        height: 100vh;
    }
</style>