<template>
    <div class="viewNote" :class="{expand: $store.state.viewNote}">
        <div class="navContainer" v-if="$store.state.viewNote">
            <div class="nav">
                <a class="closebtn" @click="closeNoteView()">&times;</a>
                <div class="navRight">
                    <i class="fa fa-pencil-square-o" data-toggle="tooltip" title="edit" @click="openEditNoteModal"></i>
                    <i class="fa fa-trash" data-toggle="tooltip" title="delete" @click="openDeleteNoteModal"></i>
                </div>
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
        methods: {
            closeNoteView() {
                this.$store.state.viewNote = false;
                this.$store.state.selectedNote = '';
            },
            openDeleteNoteModal() {
                this.$store.state.deleteNoteModal = true;
            },
            openEditNoteModal() {
                this.$store.state.editNoteModal = true;
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
        background-color: #7EB0FC;
        transition: .3s;
    }
    .navContainer {
        background-color: #71a3ef;
    }
    .nav {
        width: 95%;
        margin: auto;
    }
    .navRight {
        float: right;
        font-weight: bold;
        margin-top: 10px;
    }
    .navRight i {
        font-size: 30px;
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
        margin-top:1em;
        font-size: 2em;
    }
    .note .tag {
        font-weight: bold;
        vertical-align: bottom;
        margin-bottom:3em;
    }
</style>