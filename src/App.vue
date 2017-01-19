<template>
  <div id="app">
    <transition name="modal" appear>
      <router-view></router-view>
    </transition>

    <!-- Auth modal -->
    <transition name="message">
        <div v-if="$store.state.authModal">
            <auth></auth>
        </div>
    </transition>

    <!-- Sign in message -->
    <transition name="modal">
      <div class="flash-message" v-if="$store.state.message">
        <div>
          <p>You're signed in!</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import Nav from './Nav.vue';
  import Auth from './auth/Auth.vue';

export default {
  name: 'app',
  data() {
    return {
      signIn: false,
      message: 'You just signed in!'
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
            'auth': Auth
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
    margin:0;
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
