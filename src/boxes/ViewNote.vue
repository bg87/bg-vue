<template>
    <div class="viewNote" :class="{expand: $store.state.viewNote}">
        <div class="nav">
            <a class="closebtn" @click="closeNoteView()">&times;</a>
            <div class="navRight">
                <a>EDIT</a>
                <a>DELETE</a>
            </div>
        </div>
        <div class="note">
            <p class="content">{{ $store.state.selectedNote.content }}</p>
            <p class="tag">{{ $store.state.selectedNote.tag }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return{

            }
        },
        methods: {
            closeNoteView() {
                this.$store.state.viewNote = false;
                this.$store.state.selectedNote = '';
            }
        }
    }
</script>

<style scoped>
    .viewNote {
        position: fixed;
        bottom: 0;
        width: 100%;
    }
    .expand {
        height: 45%;
        background-color: #9fc1f4;
        transition: .3s;
    }
    .nav {
        width: 95%;
        margin: auto;
    }
    .navRight {
        float: right;
        font-weight: bold;
        margin-top: 15px;
    }
    .navRight a {
        text-decoration: none;
        cursor: pointer;
        margin-right: 1em;
        color: white;
    }
    .closebtn {
        color: white;
        text-decoration: none;
        font-size: 36px;
        cursor: pointer;
    }
    .note {
        color: white;
        width: 85%;
        margin: auto;
    }
    .note .content {
        font-size: 2em;
    }
    .note .tag {
        font-weight: bold;
    }
</style>