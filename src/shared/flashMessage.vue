<template>
    <div>
        <transition name="modal">
            <div class="flash-message" v-if="$store.state.message">
                <div>
                    <p>{{ $store.state.messageText }}</p>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        methods: {

        }
    }
</script>

<style scoped>
    .flash-message p {
        font-weight: bold;
        margin: 0;
        padding: 0;
    }
    .modal-enter {
        opacity: 0;
    }
    .modal-enter-active {
        transition: opacity 1s;
    }
    .modal-leave {
        opacity: 0;
    }
    .modal-leave-active {
        transition: opacity 1s;
    }
</style>