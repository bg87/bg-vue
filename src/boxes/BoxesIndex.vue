<template>
    <div class="main">
        <header>
            <app-nav></app-nav>

            <div class="headerNote">
                <transition name="fade">
                    <h3 v-if="randomNote"><em>{{ randomNote.content.substring(0,200) }}</em></h3>
                </transition>
            </div>
        </header>

        <ul class="sidebar" v-if="$store.state.user">
            <li data-toggle="tooltip" title="settings"><i class="fa fa-cog"></i></li>
            <li data-toggle="tooltip" title="new note" @click="newNote"><i class="fa fa-file-text-o"></i></li>
            <li>
                <div class="dropdown" data-toggle="tooltip" title="note order">
                    <i class="fa fa-list" type="button" data-toggle="dropdown" title="note order"></i>
                    <ul class="dropdown-menu">
                        <li>Shuffle</li>
                        <li>Newest First</li>
                        <li>Oldest First</li>
                    </ul>
                </div>
            </li>
        </ul>

        <transition name="fade">
            <new-note v-if="$store.state.newNoteModal"></new-note>
            <delete-note v-if="$store.state.deleteNoteModal"></delete-note>
        </transition>

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
    import NewNote from './NewNote.vue';
    import DeleteNote from './DeleteNote.vue';

    export default {
        data() {
            return {
                notes: this.$store.state.userNotes,
                randomNote: ''
            }
        },
        methods: {
            newNote() {
                this.$store.state.newNoteModal = true;
            }
        },
        created()  {
            // Get all user notes
            const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
            this.$http.get(this.$store.state.serverURL + '/notes' + token)
                .then((response) => {
                        this.$store.state.userNotes = response.body.notes;
                    }, (error) => {
                        console.log(error);
                    });
            
            // Reset randomNote every two minutes
            this.randomNote = this.notes[Math.floor(Math.random() * this.notes.length)];
            window.setInterval(() => {
                this.randomNote = this.notes[Math.floor(Math.random() * this.notes.length)];
            }, 120000);
        },
        components: {
            'boxes-notes': BoxesNotes,
            'view-note': ViewNote,
            'new-note': NewNote,
            'delete-note': DeleteNote
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
        height: 12em;
    }
    .sidebar {
        position: fixed;
        padding: 8px;
        margin: 0;
    }
    .sidebar li {
        margin-bottom: 10px;
        font-size: 30px;
        cursor: pointer;
    }
    .dropdown-menu {
        padding: 5px;
    }
    .dropdown-menu li {
        margin: 0;
        font-size: 1em;
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
</style>