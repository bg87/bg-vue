<template>
    <div class="notes">

            <h3>Random note on page load.</h3>

        <div class="layout">
            <ul class="grid">
                <li v-for="note in $store.state.notes">
                   <div class="card">
                        <div class="og-expander">
                            <div class="og-expander-inner">
                                <span class="og-close"></span>
                                <div class="og-fullimg">
                                    <div class="og-loading"></div>
                                </div>
                                <div class="content">    
                                    <p @click="openNoteView(note)">{{ note.content.substring(0,100) }}</p>
                                    <a href="#">{{ note.tag }}</a>
                                </div>
                            </div>
                        </div>
                    </div> 
                </li>
            </ul>
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
        }
    }
</script>

<style>
    .notes {
        margin-top: 3em;
    }
    ul {
        list-style: none;
    }
    .grid {
        list-style: none;
        padding: 20px 0;
        margin: 0 auto;
        text-align: center;
        width: 100%;
    }
    .grid li {
        display: inline-block;
        margin: 10px 5px 0 5px;
        vertical-align: top;
        height: 250px;
    }
    .card {
        border-radius: 3px;
        width: 12em;
        height: 15em; 
        padding: 5px;
        font-weight: bold;
        -webkit-box-shadow: 1px 1px 10px 0px rgba(50, 50, 50, 0.75);
        -moz-box-shadow: 1px 1px 10px 0px rgba(50, 50, 50, 0.75);
        box-shadow: 1px 1px 10px 0px rgba(50, 50, 50, 0.75);
    }
    .content:hover {
        cursor: pointer;
    }
</style>