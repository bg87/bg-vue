<template>
    <div>
        <div class="parallax-container">
            <div class="parallax">
                <header>
                    <div class="header-note center-align" v-if="!$store.state.user">
                        <transition name="fade">
                            <p><em>A personal note repository for writers and creatives.</em></p>
                        </transition>
                    </div>

                    <div class="header-note center-align" v-else-if="$store.state.user">
                        <transition name="fade">
                            <p v-if="randomNote"><em>{{ randomNote.content.substring(0,200) }}</em></p>
                        </transition>
                    </div>
                </header>
            </div>
        </div>

        <boxes-notes></boxes-notes>                        

        <transition name="fade">
            <view-note></view-note>
        </transition>

        <transition name="fade">
            <new-note v-if="$store.state.newNoteModal"></new-note>
            <delete-note v-if="$store.state.deleteNoteModal"></delete-note>
            <edit-note v-if="$store.state.editNoteModal"></edit-note>
        </transition>
    </div>
</template>

<script>
    import BoxesNotes from './BoxesNotes.vue';
    import ViewNote from './ViewNote.vue';
    import NewNote from './NewNote.vue';
    import DeleteNote from './DeleteNote.vue';
    import EditNote from './EditNote.vue';

    export default {
        data() {
            return {
                notes: this.$store.state.userNotes
            }
        },
        methods: {
            newNote() {
                this.$store.state.newNoteModal = true;
            },
            shuffle() {
                let notes = this.$store.state.userNotes;
                this.$store.state.userNotes = notes.sort((a, b) => {
                    return 0.5 - Math.random();
                    });
            },
            newest() {
                // Get all user notes
                const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
                this.$http.get(this.$store.state.serverURL + '/notes' + token)
                    .then((response) => {
                        this.$store.state.userNotes = response.body.notes;
                    }, (error) => {
                        console.log(error);
                    });
            },
            oldest() {
                // Get all user notes
                const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
                this.$http.get(this.$store.state.serverURL + '/notes' + token)
                    .then((response) => {
                        this.$store.state.userNotes = response.body.notes.reverse();
                    }, (error) => {
                        console.log(error);
                    });
            },
            // Search notes for keyword or phrase
            search() {
                if(this.searchText) {
                    let notes = [];

                    this.$store.state.userNotes.filter((note) => {
                        if(note.content.search(this.searchText) > -1) {
                            notes.push(note);
                        }
                    });
                    this.$store.state.userNotes = notes;
                }
            }
        },
        created()  {
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
            'delete-note': DeleteNote,
            'edit-note': EditNote
        }
    }

    $(document).ready(function(){
      $('.parallax').parallax();
    });
</script>

<style scoped>
    .parallax {
        background: url('../assets/desk1-min.png') no-repeat center center fixed;
        background-size: cover;
    }
    header {
        width: 100%;
        height: 20em;
    }
    .header-note {
        width: 100%;
        margin-top: 4em;
        font-size: 1.5em;
        color: white;
        position: fixed;
    }
    .fade-enter {
        opacity: 0;
    }
    .fade-enter-active {
        transition: opacity .4s;
    }
    .fade-leave {
        opacity: 0;
    }
    .fade-leave-active {
        transition: opacity .4s;
    }
    @media (max-width: 700px) {
        .header-note {
            font-size: 1.2em;
        }
    }
</style>