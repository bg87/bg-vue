<template>
    <div :class="{expand: $store.state.viewNote}">

    </div>
</template>

<script>
    export default {
        data() {
            return{

            }
        },
        methods: {

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
</style>