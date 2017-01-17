<template>
    <div>
        <div class="notes">

            <div class="layout" v-if="!$store.state.user">

                <ul class="grid">
                    <li v-for="note in $store.state.dummyNotes">
                        <div class="card">
                            <span class="og-close"></span>
                            <div class="og-fullimg">
                                <div class="og-loading"></div>
                            </div>
                            <div class="content">    
                                <p @click="openNoteView(note)">{{ note.content.substring(0,100) }}</p>
                                <a href="#">{{ note.tag }}</a>
                            </div>
                        </div> 
                    </li>
                </ul>
            </div>

            <div class="layout" v-if="$store.state.user">
                <ul class="grid">
                    <li v-for="note in $store.state.userNotes">
                        <div class="card">
                            <span class="og-close"></span>
                            <div class="og-fullimg">
                                <div class="og-loading"></div>
                            </div>
                            <div class="content">    
                                <p @click="openNoteView(note)">{{ note.content.substring(0,100) }}</p>
                                <a href="#">{{ note.tag }}</a>
                            </div>
                        </div> 
                    </li>
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
            }
        },
        created() {
            // Get all user notes
            const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
            this.$http.get(this.$store.state.serverURL + '/notes' + token)
                .then((response) => {
                        this.$store.state.userNotes = response.body.notes;
                    }, (error) => {
                        console.log(error);
                    });
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
        background-color: #ededed;
    }
    .content:hover {
        cursor: pointer;
    }
</style>