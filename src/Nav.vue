<template>
    <div>
        <nav>
            <div class="nav-wrapper">
                <div class="brand-logo center">
                    <ul>
                        <li><router-link to="/boxes"><i class="medium material-icons">note</i></router-link></li>
                        <li><router-link to="/"><i class="medium material-icons">home</i></router-link></li>
                        <li><router-link to="/notebook"><i class="medium material-icons">book</i></router-link></li>
                    </ul>
                </div>
                <ul class="right">
                    <li><a v-if="$store.state.user" @click="signOut">Sign Out</a></li>
                    <li><a v-if="!$store.state.user" @click="openAuthModal">Sign In</a></li>
                </ul>
            </div>

        </nav> 

    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            openAuthModal() {
                this.$store.state.authModal = true;
            },
            signOut() {
                // clear local storage
                localStorage.clear();
                this.$store.state.user = false;

            }
        }
    }
</script>

<style scoped>
    .nav-wrapper {
        background-color: #2C3D55;
    }
    a {
        font-weight: bold;
    }
</style>