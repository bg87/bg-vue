<template>
    <div>
        <transition name="modal">
            <div class="modal-mask">
                <div class="modal-wrapper">
                    <div class="modal-container">

                    <div class="modal-header">
                        <div>
                            <p>Sign In</p>
                        </div>
                    </div>

                    <div class="modal-body">
                        <div>
                            <p>default body</p>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <div name="footer">
                            <button class="sign-up" @click="signUp">
                                Sign Up
                            </button>
                            <button class="sign-in" @click="signIn">
                                Sign In
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        methods: {
            signUp() {
                this.$store.state.authModal = false;
            },
            signIn() {
                this.$store.state.authModal = false;
            }
        }
    }
</script>

<style scoped>
   .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 300px;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-header {
        text-align: center;
        font-size: 1.5em;
        color: #42b983;
    }

    .modal-body {
        
    }

    .sign-in {
        border: 2px solid #42b983;
        border-radius: 3px;
        background-color: white;
        color: #42b983; 
        font-weight: bold;
    }
    .sign-up {
        border: 2px solid #42b983;
        border-radius: 3px;
        background-color: white;
        color: #42b983; 
        font-weight: bold;
        float: left;
    }

</style>