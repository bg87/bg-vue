<template>
    <div>
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

                <div class="modal-header">
                    <p>Sign In</p>
                </div>

                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <input type="text"
                                    placeholder="Email" 
                                    class="form-control"
                                    v-model="user.email"
                                    autofocus="true"/>
                        </div>
                        
                        <div class="form-group">
                            <input type="password"
                                    placeholder="Password" 
                                    class="form-control"
                                    v-model="user.password"/>
                        </div>
                    </form>

                    <p class="create-account">Or create an account</p>
                    <form>
                        <div class="form-group">
                            <input type="email" 
                                    placeholder="Email"
                                    class="form-control"
                                    v-model="newUser.email"/>
                        </div>

                        <div class="form-group">
                            <input type="password"
                                    placeholder="Password" 
                                    class="form-control"
                                    v-model="newUser.password"/>
                        </div>
                    </form>
                </div>

                <div class="modal-footer">
                    <div name="footer">
                        <button class="sign-up"
                                @click.prevent 
                                @click="signUp">
                            Sign Up
                        </button>
                        <button class="sign-in"
                                @click.prevent 
                                @click="signIn" 
                                type="submit">
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>  
    export default {
        data() {
            return {
                // user sign in info
                user: {
                    email: '',
                    password: ''
                },
                // new user sign up info
                newUser: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            signUp() {
                // Close modal
                this.$store.state.authModal = false;

                // Sign up new user
                this.$http.post(this.$store.state.serverURL + '/users/signup', this.newUser)
                    .then((response) => {
                        // Store token and user id in localStorage
                        localStorage.setItem('token', response.body.token);
                        localStorage.setItem('userId', response.body.userId);
                        this.$store.state.user = true;
                        this.flashMessage();
                    }, (response) => {
                        console.log('Error creating user', response);
                    });
            },
            // Sign in and get notes
            signIn() {
                // close modal
                this.$store.state.authModal = false;
                
                // Sign in user
                this.$http.post(this.$store.state.serverURL + '/users/signin', this.user)
                    .then((response) => {
                        // Store token and user id in localStorage
                        localStorage.setItem('token', response.body.token);
                        localStorage.setItem('userId', response.body.userId);
                        this.$store.state.user = true;
                        this.flashMessage();
                        // Set notes in store
                        this.$store.state.userNotes = response.body.notes;
                    }, (response) => {
                        console.log('Auth failed');
                    });
            },
            // Show flash message for 2 seconds
            flashMessage() {
                let that = this;
                that.$store.state.message = true;
                that.$store.state.messageText = 'You just signed in!';
                window.setTimeout(() => {
                    that.$store.state.message = false;
                }, 2000);
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
        width: 50%;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-header {
        padding: 0;
        text-align: center;
        font-size: 1.5em;
        color: #007EA7;
    }
    .create-account {
        margin-top: 3em;
        text-align: center;
        font-size: 1.5em;
        color: #007EA7;
    }
    .sign-in {
        border: 2px solid #007EA7;
        border-radius: 3px;
        background-color: white;
        color: #007EA7; 
        font-weight: bold;
        margin-left: 5em;
    }
    .sign-up {
        border: 2px solid #007EA7;
        border-radius: 3px;
        background-color: white;
        color: #007EA7; 
        font-weight: bold;
        float: left;
    }
    @media (max-width: 500px) {
        .modal-container {
            width: 80%;
            margin: 0px auto;
            padding: 20px 30px;
            background-color: #fff;
            border-radius: 2px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
            transition: all .3s ease;
            font-family: Helvetica, Arial, sans-serif;
        }
        .modal-header {
            padding: 0;
            text-align: center;
            font-size: 1.2em;
            color: #007EA7;
        }
        .create-account {
            margin-top: 3em;
            text-align: center;
            font-size: 1.2em;
            color: #007EA7;
        }
    }
</style>