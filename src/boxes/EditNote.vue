<template>
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

</script>

<style scoped>
    
</style>