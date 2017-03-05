<template>
    <div>
        <!--<nav class="nav-extended">
            <div class="nav-wrapper">
                <div class="brand-logo center">
                    <ul>
                        <li><router-link to="/boxes"><i class="medium material-icons">note</i></router-link></li>
                        <li><router-link to="/"><i class="medium material-icons">home</i></router-link></li>
                        <li><router-link to="/key"><i class="medium material-icons">vpn_key</i></router-link></li>
                    </ul>
                </div>
                <ul>
                    <li><a v-if="$store.state.user" @click="signOut">Sign Out</a></li>
                    <li><a v-if="!$store.state.user" @click="openAuthModal">Sign In</a></li>
                </ul>
            </div>

        </nav> -->


        <nav class="nav-extended">
            <div class="nav-wrapper">
                <a href="#" data-activates="slide-out" class="button-collapse"><i class="material-icons">menu</i></a>
                <ul id="nav-mobile" class="hide-on-med-and-down">
                    <li><router-link to="/"><i class="medium material-icons">home</i></router-link></li>
                    <li><router-link to="/boxes"><i class="medium material-icons">note</i></router-link></li>
                    <li><router-link to="/key"><i class="medium material-icons">vpn_key</i></router-link></li>
                    <li><a v-if="$store.state.user" @click="signOut">Sign Out</a></li>
                    <li><a v-if="!$store.state.user" @click="openAuthModal">Sign In</a></li>
                </ul>
                <ul class="side-nav" id="slide-out">
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/boxes">Boxes app</router-link></li>
                    <li><router-link to="/key">Key app</router-link></li>
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
                this.$store.state.userNotes = '';
                this.$store.state.user = false;
            }
        }
    }

    $(document).ready(function() {
        $('.button-collapse').sideNav();
    });

</script>

<style scoped>
    .nav-wrapper {
        background: rgba(226,226,226,1);
        background: linear-gradient(to right, rgba(226,226,226,1) 0%, rgba(219,219,219,0.99) 16%, rgba(254,254,254,0.95) 76%, rgba(209,209,209,0.94) 100%);

       -webkit-box-shadow: 0px 0px 34px -8px rgba(0,0,0,0.75);
       -moz-box-shadow: 0px 0px 34px -8px rgba(0,0,0,0.75);
       box-shadow: 0px 0px 34px -8px rgba(0,0,0,0.75);
    }
    a {
        font-weight: bold;
        color: #788585;
    }
    i {
        color: #788585;
    }
</style>