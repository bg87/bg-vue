<template>
    <div :class="{expand: $store.state.viewNote}">
        <a class="closebtn" @click="closeNoteView()">&times;</a>
        <p>{{ $store.state.selectedNote.content }}</p>
        {{ $store.state.selectedNote.tag }}
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
            }
        }
    }
</script>

<style scoped>
    div {
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
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
    cursor: pointer;
}
</style>