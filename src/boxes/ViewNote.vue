<template>
    <div class="viewNote" :class="{expand: $store.state.viewNote}">
        <a class="closebtn" @click="closeNoteView()">&times;</a>
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
    }
    .closebtn {
        color: white;
        text-decoration: none;
        font-size: 36px;
        margin-left: 10px;
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