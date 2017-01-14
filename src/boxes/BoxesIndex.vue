<template>
    <div class="main">
        <header>
            <app-nav></app-nav>

            <div class="headerNote">
                <transition name="fade">
                    <h3><em>{{ randomNote.content }}</em></h3>
                </transition>
            </div>
        </header>

        <ul class="sidebar">
            <li><i class="fa fa-cog"></i></li>
            <li><i class="fa  fa-files-o"></i></li>
            <li><i class="fa fa-list"></i></li>
        </ul>

        <div>
            <transition name="fade">
                <div>
                    <boxes-notes></boxes-notes>

                    <view-note></view-note>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    import BoxesNotes from './BoxesNotes.vue';
    import ViewNote from './ViewNote.vue';

    export default {
        data() {
            return {
                notes: this.$store.state.dummyNotes,
                randomNote: ''
            }
        },
        created()  {
            this.randomNote = this.notes[Math.floor(Math.random() * this.notes.length)];
            window.setInterval(() => {
                this.randomNote = this.notes[Math.floor(Math.random() * this.notes.length)];
            }, 3000)
        },
        components: {
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
        height: 15em;
    }
    .sidebar {
        position: fixed;
        padding: 8px;
        margin: 0;
        font-size: 30px;
        cursor: pointer;
    }
    .sidebar li {
        margin-bottom: 10px;
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
</style>