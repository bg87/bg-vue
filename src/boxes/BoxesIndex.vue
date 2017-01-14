<template>
    <div class="main">
        <header>
            <app-nav></app-nav>

            <h2 class="headerNote">random note random note random note random note random note</h2>

            <ul>
                <li>New Note</li>
                <li>
                    <select>
                        <option value="" disabled selected>Note Order</option>
                        <option>Shuffle</option>
                        <option>Newest First</i></option>
                        <option>Oldest First</option>
                    </select>
                </li>
            </ul>
        </header>
        <div>
            <transition name="fade">
                <div class="panel2Content">
                    <!--<boxes-nav></boxes-nav>-->

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

            }
        },
        methods: {
            
        },
        components: {
            'boxes-nav': BoxesNav,
            'boxes-notes': BoxesNotes,
            'view-note': ViewNote
        }
    }
</script>

<style scoped>
    header {
        width: 100%;
    }
    .headerNote {
        text-align: center;
        width: 60%;
        margin: auto;
    }
    ul {
       text-align: center; 
       margin-top: 3em;
    }
    ul li {
        display: inline;
        margin: 1em;
        font-weight: bold;
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
    @keyframes slide-in {
        from {
            transform: translateX(500px);
        }
        to {
            transform: translateX(0);
        }
    }
</style>