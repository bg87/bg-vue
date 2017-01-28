<template>
    <div>
        <div class="wireframe">
            <app-nav></app-nav>
            <div class="info">
                <h1>Brandon Gladen</h1>
                <h3><em>Web Developer</em></h3>
                <p>(218) 556-4588</p>
                <p>me@brandongladen.com</p>
                <div>
                    <a href="http://github.com/bg87"><img src="./assets/github2.png" alt="github" class="social" /></a>
                    <a href="https://www.linkedin.com/in/brandon-gladen-19a452109"><img src="./assets/linkedin2.png" alt="linkdedin" class="social" /></a>
                </div>
            </div>
            <img  src="./assets/icarus.png" alt="icarus" class="icarus"/>
            <div class="about">
                <h1>I make websites and applications using a variety of languages and frameworks.</h1>
                <div class="logos">
                    <img class="logo" src="./assets/node.png" alt="node" />
                    <img class="logo" src="./assets/angular.png" alt="angular" />
                    <img class="logo" src="./assets/rails.png" alt="rails" />
                    <img class="logo" src="./assets/vue.png" alt="vue" />
                </div>
            </div>
        </div>

        <div class="story">
            <div class=" GCI">
                <h2>I used to do this.</h2>
                <ul class="GCIdivs">
                    <li>
                        <div class="imgContainer1">
                            <div class="caption">
                                Digging a hole.
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="imgContainer2">
                            <div class="caption">
                                Putting pipe in a hole.
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="imgContainer3">
                            <div class="caption">
                                Removing pipe from a hole.
                            </div>
                        </div>
                    </li>
                </ul> 
            </div>
        </div>

        <div class="now">
            <h2>Now I do this.</h2>
                <div class="code">
                    <transition name="slide-fade">
                        <h4 v-if="trigger1">app.set('port', process.env.PORT || 3000);</h4>
                    </transition>
                    <transition name="slide-fade">
                        <h4 v-if="trigger2">app.listen(app.get('port'), function() {</h4>
                        </transition>
                    <transition name="slide-fade">
                        <h4 v-if="trigger3">console.log('Listening on port: ', app.get('port'));</h4>
                        </transition>
                    <transition name="slide-fade">
                        <h4 v-if="trigger4">});<span class="cursor" v-if="cursor">&verbar;</span></h4>
                    </transition>
                </div>
        </div>

        <!--<contact></contact>-->
    </div>
</template>

<script>
    import Contact from './shared/Contact.vue';

    export default {
        data() {
            return {
                trigger1: false,
                trigger2: false,
                trigger3: false,
                trigger4: false,
                cursor: false
            }
        },
        methods: {
            handleScroll(event) {
                console.log('scroll:', window.pageYOffset);
                if(window.pageYOffset > 1100) {
                    this.trigger1 = true;
                }
                if(window.pageYOffset > 1200) {
                    this.trigger2 = true;
                }
                if(window.pageYOffset > 1400) {
                    this.trigger3 = true;
                }
                if(window.pageYOffset > 1500) {
                    this.trigger4 = true;
                }
            }
        },
        created() {
            window.addEventListener('scroll', this.handleScroll);
            window.setInterval(() => {
                this.cursor = !this.cursor;
            }, 800)
        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll);
        },
        components: {
            'contact': Contact
        }
    }
</script>

<style scoped>
    .info {
        text-align: center;
        margin-top: 30px;
        color: white;
    }
    .social:hover {
       -webkit-transform: rotateZ(15deg); 
        transform: rotateZ(15deg);
    }

    .social {
        height: 2.5em;
        width: 2.5em;
        margin: 1em;
        transition: .3s;
        opacity: 0.85;
    }
    .icarus {
        opacity: 0.03;
        height: 11em;
        width:12em;
        float: right;
    }
    .wireframe {
        width: 100%;
        height: 100vh;
        background: url('assets/wireframe.png') no-repeat center center fixed; 
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }
    .about {
        padding: 8em 8em 0em 8em;
        text-align: center;
        color: white;
    }
    .logos {
        margin-top: 7em;
    }
    .logo {
        height: 4em;
        width: 4em;
        margin: 1em;
        filter: grayscale(80%); 
        transition: .5s;     
    }  
    .logo:hover {
        filter: grayscale(0%);        
    }
    .story {
        background: rgba(179, 179, 179, 1);
        background: -webkit-linear-gradient(top, rgba(166, 166, 166, 1), rgba(179, 179, 179, .1)); /* For Safari 5.1 to 6.0 */
        background: -o-linear-gradient(bottom, rgba(166, 166, 166, 1), rgba(179, 179, 179, .1)); /* For Opera 11.1 to 12.0 */
        background: -moz-linear-gradient(bottom, rgba(166, 166, 166, 1), rgba(179, 179, 179, .1)); /* For Firefox 3.6 to 15 */
        background: linear-gradient(to bottom, rgba(166, 166, 166, 1), rgba(179, 179, 179, .1)); /* Standard syntax */
    }
    .GCIdivs {
        margin: auto;
        text-align: center;
        width: 100%;
        padding-bottom:3em;
    }
    .GCIdivs li {
        margin: 0;
        display: inline-block;
        vertical-align: top;
    }
    .GCIdivs li div {
        margin: 3px;
    }
    .imgContainer1 {
        background: url('./assets/gci.png');
        background-size: cover;
        width: 25em;
        height: 20em;
        text-align: center;
        margin: 1em;
    }
    .imgContainer2 {
        background: url('./assets/pipe.png');
        background-size: cover;
        width: 25em;
        height: 20em;
        text-align: center;
        margin: 1em;
    }
    .imgContainer3 {
        background: url('./assets/wreckingBall.png');
        background-size: cover;
        width: 25em;
        height: 20em;
        text-align: center;
        margin: 1em;
    }
    .caption {
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        padding-top: 1em;
        height: 3.5em;
        font-weight: bold;
    }
    .GCI h2 {
        text-align: center;
        margin: 0em 5em 5em 5em;
        padding-top: 3em;
        color: white;
    }
    .now {
        width: 100%;
        height: 100vh;
    }
    .now h2 {
        text-align: center;
        padding-top:3em;
    }
    .code {
       width: 80%;
       padding:3%;
       margin: auto;
       margin-top: 8em;
       background-color: black;
       border-radius: 5px;
       color: #e3e3e3;
    }
    .cursor {
        background-color: white;
    }
    @media (max-width: 400px) {
        .wireframe {
            width: 100%;
            height:31em;
        
            background: url('assets/wireframe.png') no-repeat center center fixed; 
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
        }
        .about {
            padding: 8em;
            text-align: center;
            color: white;
            font-size: .7em;
        }
        .about h1 {
            font-size: 2.3em;
        }
    }

     @media (max-width: 600px) {
         .icarus {
            height: 4em;
            width:5em;
            float: right;
        }
        .projects {
            margin-top:1em
        }
        .project-img {
            height: 3em;
            width: 3em;
            margin:1em;
            filter: grayscale(80%); 
            transition: .5s;     
        }
        .wireframe {
            width: 100%;
            height: 100%;
        
            background: url('assets/wireframe.png') no-repeat center center fixed; 
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
        }
        .GCI h2 {
            text-align: center;
            margin: 5em;
            font-size: 1.5em;
        }
     }

     @media (max-width: 775px) {
         .wireframe {
            width: 100%;
            height: 100%;
        
            background: url('assets/wireframe.png') no-repeat center center fixed; 
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
        }
         .imgContainer1 {
                background: url('./assets/gci.png');
                background-size: cover;
                width: 20em;
                height: 15em;
                text-align: center;
                margin: 1em;
            }
            .imgContainer2 {
                background: url('./assets/pipe.png');
                background-size: cover;
                width: 20em;
                height: 15em;
                text-align: center;
                margin: 1em;
            }
            .imgContainer3 {
                background: url('./assets/wreckingBall.png');
                background-size: cover;
                width: 20em;
                height: 15em;
                text-align: center;
                margin: 1em;
            }
     }

    .slide-fade-enter-active {
        transition: all 1s ease;
    }
    .slide-fade-enter {
        transform: translateX(50%);
        opacity: 0;
    }
</style>