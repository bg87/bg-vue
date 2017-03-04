<template>
    <div class="main">
        <p class="center-align">{{ $store.state.key }}</p>

        <section>
            fdasjkk
        </section>
    </div>
</template>

<script>
    import { keyMixin } from './keyMixin';
    const TonalKey = require('../vendor/tonal-key');

    export default {
        data() {
            return {
                tonalKey: TonalKey
            }
        },
        mixins: [keyMixin]
    }

</script>

<style scoped>
    .main {
        background-color: black;
        margin: 0;
        padding: 0.5em 0.3em 0.3em 0.3em;
    }
    .main p {
        margin: 0;
        color: white;
        font-size: 1.5em;
    }
    section {
        background-color: white;
        margin: 1em;
        padding: 1em;
    }
</style>