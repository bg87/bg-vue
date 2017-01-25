<template>
    <div class="main">
        <header>
            <app-nav></app-nav>
            
            <div class="headerNote" v-if="!$store.state.user">
                <transition name="fade">
                    <h3><em>A personal note repository for writers and creatives. Sign up and start making notes!</em></h3>
                </transition>
            </div>

            <div class="headerNote" v-if="$store.state.user">
                <transition name="fade">
                    <h3 v-if="randomNote"><em>{{ randomNote.content.substring(0,200) }}</em></h3>
                </transition>
            </div>
        </header>

        <ul class="sidebar" v-if="$store.state.user">
            <li data-toggle="tooltip" title="new note" @click="newNote"><i class="fa fa-file-text-o"></i></li>
            <li>
                <div class="dropdown" data-toggle="tooltip" title="note order">
                    <i class="fa fa-list" type="button" data-toggle="dropdown" title="note order"></i>
                    <ul class="dropdown-menu">
                        <li @click="shuffle">Shuffle</li>
                        <li @click="newest">Newest First</li>
                        <li @click="oldest">Oldest First</li>
                        <input v-model="searchText" class="form-control" placeholder="search" />
                    </ul>
                </div>
            </li>
        </ul>

        <transition name="fade">
            <new-note v-if="$store.state.newNoteModal"></new-note>
            <delete-note v-if="$store.state.deleteNoteModal"></delete-note>
            <edit-note v-if="$store.state.editNoteModal"></edit-note>
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
    import EditNote from './EditNote.vue';

    export default {
        data() {
            return {
                notes: this.$store.state.userNotes,
                randomNote: '',
                searchText: '',
                noteOrder: ''
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
            }
        },
        computed: {

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
        margin: 1em;
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