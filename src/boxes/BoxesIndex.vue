<template>
    <div>
        <header>
            <app-nav></app-nav>
            
            <div class="header-note" v-if="!$store.state.user">
                <transition name="fade">
                    <h3><em>A personal note repository for writers and creatives.</em></h3>
                </transition>
            </div>

            <div class="header-note" v-if="$store.state.user">
                <transition name="fade">
                    <h3 v-if="randomNote"><em>{{ randomNote.content.substring(0,200) }}</em></h3>
                </transition>
            </div>
        </header>

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
            // Search notes for keyword or words
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
            'delete-note': DeleteNote,
            'edit-note': EditNote
        }
    }
</script>

<style scoped>
    header {
        width: 100%;
    }
    .header-note {
        text-align: center;
        width: 60%;
        margin: 2em auto;
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
</style>