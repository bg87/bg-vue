<template>
    <div class="main">
        <app-nav></app-nav>
        
        <div class="panel1">
            <h1>This app is under construction.</h1>
            <transition name="fade">
                <button @click="show = true" v-if="!show">Push me</button>
            </transition>
            <transition name="fade">
                <div v-if="show" class="message">
                    <h1>It's still under construction</h1>
                    <p>But you can scroll down to see what it may look like when it's done</p>
                </div>
            </transition>
            <transition name="slide">
                <span v-if="show" class="fa fa-arrow-circle-down"></span>
            </transition>
        </div>
        <div class="panel2">
            <transition name="fade">
                <div class="panel2Content" v-if="trigger">
                    <boxes-nav></boxes-nav>

                    <boxes-notes></boxes-notes>

                    <view-note></view-note>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    import BoxesNav from './BoxesNav.vue';
    import BoxesNotes from './BoxesNotes.vue';
    import ViewNote from './ViewNote.vue';

    export default {
        data() {
            return {
                show: false,
                trigger: false
            }
        },
        methods: {
            handleScroll() {
                if(pageYOffset > 400) {
                    this.trigger = true;
                }
            }
        },
        created() {
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll);
        },
        components: {
            'boxes-nav': BoxesNav,
            'boxes-notes': BoxesNotes,
            'view-note': ViewNote
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
    .fade-leave {
        opacity: 0;
    }
    .fade-leave-active {
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
    .message {
        margin-top:4em;
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
        margin-top: 2em;
        font-size:3em;
    }
    .panel2 {
        background-color: ;
        height: 100vh;
    }
</style>