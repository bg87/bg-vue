<template>
    <div class="main">
        <div class="align center search">
            <form>
                <div class="input-field key-search">
                    <select materialize="material_select"
                        v-model="key"
                        class="browser-default">
                        <option v-for="note in notes">{{note}}</option>
                    </select>
                    <label v-if="key === ''">Pick a key</label>
                </div>
            </form>
        </div>

        <transition name="modal">
            <section v-if="key != ''">
                    <div>
                        {{ scale('major') }}
                    </div>
            </section>
        </transition>
    </div>
</template>

<script>
    const TonalKey = require('../vendor/tonal-key');

    export default {
        data() {
            return {
                key: '',
                tonalKey: TonalKey,
                notes: ['C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab', 'A', 'A#', 'Bb', 'B']
            }
        },
        methods: {
            scale(quality) {
                const scale = this.tonalKey.scale(this.key + " " + quality);
                return scale;
            }
        }
    }

</script>

<style scoped>
    .main {
        background-color: #7293A0;
        margin: 0;
        padding: 0.5em 0.3em 0.3em 0.3em;
    }
    .main p {
        color: white;
        margin: 0;
        font-size: 1.5em;
    }
    section {
        background-color: white;
        margin: 3em 1em 1em 1em;
        padding: 1em;
        border-radius: 5px;
    }
    .key-search {
        margin: 3em 1em 1em 1em;
    }
    label {
        margin-left: 2em;
    }

    .modal-enter {
        opacity: 0;
    }
    .modal-enter-active {
        transition: opacity .4s;
    }
    .modal-leave {
        opacity: 0;
    }
    .modal-leave-active {
        transition: opacity .4s;
    }
</style>
