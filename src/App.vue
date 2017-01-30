<template>
  <div id="app">
    <transition name="modal" appear>
      <router-view></router-view>
    </transition>

    <!-- Auth modal -->
    <transition name="modal">
        <div v-if="$store.state.authModal">
            <auth></auth>
        </div>
    </transition>

    <flash-message></flash-message>

  </div>
</template>

<script>
  import Nav from './Nav.vue';
  import Auth from './auth/Auth.vue';
  import FlashMessage from './shared/flashMessage.vue';

export default {
  name: 'app',
  data() {
    return {
      signIn: false
    }
  },
  methods: {

  },
  created() {
    if(localStorage.getItem('userId') !== null) {
      this.$store.state.user = true;
    } else {
      this.$store.state.user = false;
    }

    // Get all user notes
    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
    this.$http.get(this.$store.state.serverURL + '/notes' + token)
        .then((response) => {
              this.$store.state.userNotes = response.body.notes;
          }, (error) => {
              console.log(error);
          });
  },
  components: {
            'auth': Auth,
            'flash-message': FlashMessage
        }
}
</script>

<style>
  body {
    margin: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; 
    color: #2c3e50;
    margin: 0;
    padding: 0;

  }
  h1, h2, h3 {
    font-weight: normal;
    margin: 0;
  }
  .flash-message {
    background-color: #42b983;
    border-radius: 3px;
    color: white;
    position: fixed;
    z-index: 9998;
    bottom: 1em;
    left: 1em;
    padding: 8px;
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
