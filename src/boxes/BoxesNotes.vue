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
            <div class="navbar z-depth-3">
                <ul v-if="$store.state.user" class="center-align">
                    <li data-toggle="tooltip" 
                        title="new note" 
                        @click="newNote">
                        <i class="small material-icons">note_add</i>
                        </li>
                    <li @click="shuffle"
                        data-toggle="tooltip"
                        title="shuffle notes"><i class="small material-icons">shuffle</i></li>
                    <li @click="newest"
                        data-toggle="tooltip"
                        title="newest first"><i class="small material-icons">keyboard_arrow_up</i></li>
                    <li @click="oldest"
                        data-toggle="tooltip"
                        title="oldest first"><i class="small material-icons">keyboard_arrow_down</i></li>
                </ul>
                <div class="search">
                    <input type="text" v-model="searchText" placeholder="search">
                    <span>
                        <button @click="search">Go</button>
                    </span>
                </div> 
            </div>  

            <ul class="grid">
                <transition-group name="flip">
                    <li v-for="(note, index) in $store.state.userNotes" :key="index">
                        <div class="card">
                            <div class="inner-card">  
                                <p @click="openNoteView(note)" href="#viewNote">{{ note.content }}</p>
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
                searchText: ''
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
                let window_top = $(window).scrollTop();
                let grid_top = $(".grid").offset().top - 110;

                if (window_top > grid_top) {
                    $('.navbar').addClass('sticky');
                } else if(window_top < grid_top) {
                    $('.navbar').removeClass('sticky');
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
    
    $(window).on("scroll", function() {
        $("#navbar").css("top", Math.max(0, 20 - $(window).scrollTop()));
    });

</script>

<style>
    .layout {
        width: 100%;
        margin: auto;
    }
    .notes {
        margin-bottom: 3em;
        margin-top: 2em;
    }
    .navbar {
        background-color: white;
        border-radius: 0;
        width: 85%;
        margin: auto;
        display: inline;
    }
    .navbar ul {
        text-align: center;
    }
    .navbar li {    
        cursor: pointer;
        display: inline;
        margin-right: 1em;
    }
    .search {
        text-align: center;
        margin-bottom: 1em;
    }
    .search input {
        width: 75%;
        margin: auto;
    }
    .search button {
       border: none;
       background-color: #00171F;
       color: white;
       font-weight: bold;
    }
    .sticky {
        width: 100%;
        position: fixed;
         background-color: #7293A0;
         color: white;
        top: 0;
        margin: 0;
        z-index: 100;
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
        background-color: #565D63;
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