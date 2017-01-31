<template>
    <div class="notes">
        <div class="layout" v-if="!$store.state.user">
            <ul class="grid">
                <li v-for="note in $store.state.dummyNotes">
                    <div class="card">
                        <div class="inner-card">
                            <p>{{ note.content }}</p>
                        </div>
                        <div class="tag">
                            <a>{{ note.tag }}</a>
                        </div>
                    </div> 
                </li>
            </ul>
        </div>

        <div class="layout" v-if="$store.state.user">
            <ul class="grid">
                <ul class="options" v-if="$store.state.user" v-bind:class="{ sticky: sticky }">
                    <li data-toggle="tooltip" title="new note" @click="newNote"><i class="fa fa-file-text-o"></i></li>
                    <li>
                        <div class="dropdown" data-toggle="tooltip" title="note order">
                            <i class="fa fa-list" type="button" data-toggle="dropdown" title="note order"></i>
                            <ul class="dropdown-menu">
                                <li @click="shuffle">Shuffle</li>
                                <li @click="newest">Newest First</li>
                                <li @click="oldest">Oldest First</li>
                                <div class="form-group">
                                    <input v-model="searchText" class="form-control" placeholder="search"/>
                                    <button @click="search">GO</button>
                                </div>
                            </ul>
                        </div>
                    </li>
                </ul>

                <transition-group name="flip">
                    <li v-for="(note, index) in $store.state.userNotes" :key="index">
                        <div class="card">
                            {{ sticky }}
                            <div class="inner-card">   
                                <p @click="openNoteView(note)">{{ note.content }}</p>
                            </div>
                            <div class="tag">
                                <a @click="searchTag(note.tag)">{{ note.tag }}</a>
                            </div>
                        </div> 
                    </li>
                </transition-group>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                notes: this.$store.state.userNotes,
                randomNote: '',
                noteOrder: '',
                searchText: '',
                sticky: false
            }
        },
        methods: {
            openNoteView(note) {
                this.$store.state.viewNote = true;
                this.$store.state.selectedNote = note;
            },
            searchTag(tag) {
                // Filter userNotes by the tag that was clicked
                let notes = this.$store.state.userNotes;
                let filteredNotes = [];
                notes.forEach((note) => { 
                    if(tag === note.tag) {
                        filteredNotes.push(note);
                    }
                });
                this.$store.state.userNotes = filteredNotes;
            },
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
            },
            // sticky header on scroll
            handleScroll(event) {
                let grid_top = $(".grid").offset().top;
                let window_top = $(window).scrollTop();

                console.log(window_top);
                if (window_top > grid_top) {
                    this.sticky = true;
                } else if(window_top <grid_top) {
                    this.sticky = false;
                }
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

<style>
    .notes {
        margin-bottom: 3em;
        margin-top: 2em;
    }
    .options {
        padding: 4px;
        background-color: white;
    }
    .options li {    
        font-size: 30px;
        cursor: pointer;
        padding: .5em;
    }
    .dropdown-menu {
        padding: 5px;
    }
    .dropdown-menu li {
        margin: 1em;
        font-size: 1em;
        font-weight: bold;
    }
    button {
        border: 2px solid #007EA7;
        border-radius: 3px;
        background-color: #007EA7;
        color: white;
        margin-top:1em; 
        font-weight: bold;
        width: 100%;
    }
    .sticky {
        margin-top: 0 !important;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 100;
        transition: .5s;
    }
    .grid {
        list-style: none;
        margin: auto;
        text-align: center;
        width: 100%;
        padding: 1em;
    }
    .grid li {
        display: inline-block;
        margin: 5px 5px 5px 5px;
        vertical-align: top;
        
    }
    .card {
        width: 15em;
        height: 15em; 
        padding: 10px;
        font-weight: bold;
        background-color: #00171F;
        color: white;
    }
    .inner-card {
        width: 100%;
        height: 80%;
        overflow: hidden;
    }
    .inner-card:hover {
        cursor: pointer;
    }
    .tag {
        padding-top: 1em;
    }
    .flip-move {
        transition: transform 1s;
    }
    @media (max-width: 700px) {
        .card {
            width: 12em;
            height: 12em;
            padding: 10px; 
        }
        .grid li {
            display: inline-block;
            margin: 3px 3px 3px 3px;
            vertical-align: top;
            
        }
    }
    @media (max-width: 400px) {
        .card {
            width: 10em;
            height: 10em;
            padding: 10px; 
        }
        .grid li {
            display: inline-block;
            margin: 2px 2px 2px 2px;
            vertical-align: top;
            overflow: hidden;
        }
    }
</style>