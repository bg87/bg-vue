<template>
    <div class="main">
        <div class="container">
            <div class="align center search">
                <form>
                    <div class="input-field">
                        <select materialize="material_select"
                            v-model="key"
                            class="browser-default">
                            <option v-for="note in chromatic">{{note}}</option>
                        </select>
                        <label v-if="key === ''">Pick a key</label>
                    </div>
                    <button @click="setKey()" class="btn" type="button">GO!</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import { keyMixin } from './keyMixin';

    export default {
        data() {
            return {
                key: ''
            }
        },
        methods: {
            setKey() {
                this.$store.state.key = this.key;
                if(this.$store.state.key != '') {
                    this.$router.push('/overview');
                }
            }
        },
        mixins: [keyMixin]
    }
</script>

<style scoped>
    form {
        margin-top: 25%;
    }
    button {
        margin-top: 10%;
    }
    label {
        margin-left: 3em;
    }
    select {
        font-weight: bold;
    }
</style>