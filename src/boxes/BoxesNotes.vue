<template>
    <div>
        <div class="notes">
            <div class="layout" v-if="!$store.state.user">
                <ul class="grid">
                    <li v-for="note in $store.state.dummyNotes">
                        <div class="card">
                            <div class="content">    
                                <p @click="openNoteView(note)">{{ note.content.substring(0,100) }}</p>
                                <a class="tag">{{ note.tag }}</a>
                            </div>
                        </div> 
                    </li>
                </ul>
            </div>

                <div class="layout" v-if="$store.state.user">
                    <ul class="grid">
                        <transition-group name="flip">
                            <li v-for="(note, index) in $store.state.userNotes" :key="index">
                                <div class="card">
                                    <div class="content">   
                                        <p @click="openNoteView(note)">{{ note.content.substring(0,100) }}</p>
                                        <a class="tag" @click="searchTag(note.tag)">{{ note.tag }}</a>
                                    </div>
                                </div> 
                            </li>
                        </transition-group>
                    </ul>
                </div>
        </div>
    </div>
</template>

<script>
    export default {
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
            }
        }
    }
</script>

<style>
    ul {
        list-style: none;
    }
    .grid {
        list-style: none;
        margin: auto;
        text-align: center;
        width: 100%;
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
    .content:hover {
        cursor: pointer;
    }
    .flip-move {
        transition: transform 1s;
    }
</style>