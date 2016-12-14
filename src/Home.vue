<template>
    <div>
        <div class="main">
            <app-nav></app-nav>

            <div class="info">
                <h1>Brandon Gladen</h1>
                <h3><em>Web Developer</em></h3>
                <p>(218) 556-4588</p>
                <p>me@brandongladen.com</p>
                <div>
                    <a href="http://github.com/bg87"><img src="./assets/github.png" alt="github" class="social" /></a>
                    <a href="https://www.linkedin.com/in/brandon-gladen-19a452109"><img src="./assets/linkedin.png" alt="linkdedin" class="social" /></a>
                </div>
            </div>

        </div>
        <div class="wireframe">
            <img  src="./assets/icarus.png" alt="icarus" class="icarus"/>
            <div class="about">
            <h1>I make websites and applications using a variety of languages and frameworks.</h1>
            <div class="projects">
                <img class="project-img"src="./assets/node.png" alt="node" />
                <img class="project-img"src="./assets/angular.png" alt="angular" />
                <img class="project-img"src="./assets/rails.png" alt="rails" />
                <img class="project-img"src="./assets/vue.png" alt="vue" />
            </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data: () => {
        return {
            scrollPosition: 0
        }
    },
    methods: {
        handleScroll() {
           // let windowHeight = window.innerHeight();
           // console.log(windowHeight);
           // var window_top_position = $window.scrollTop();
           // var window_bottom_position = (window_top_position + window_height);

           // $.each($animation_elements, function() {
               // var $element = $(this);
               // var element_height = $element.outerHeight();
               // var element_top_position = $element.offset().top;
               // var element_bottom_position = (element_top_position + element_height);

                //check to see if this current container is within viewport
               // if ((element_bottom_position >= window_top_position) &&
                //    (element_top_position <= window_bottom_position)) {
              //  $element.addClass('in-view');
              //  } else {
               // $element.removeClass('in-view');
              //  }
           // });
        },
        inView() {
            //console.log('hello');
        }
    },
    // Creat event listener on window object
    // Since we want to listen to the event on the window object we have to handle the event this way
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    }
}
</script>

<style scoped> 
    .main {
        background: linear-gradient(to right bottom, white 50%, #d5e0f6 50%);
        height: 100vh;
    }
    .info {
        text-align: center;
        margin-top: 30px;
    }
    .social:hover {
       -webkit-transform: rotateZ(15deg); /* Safari */
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
        /*height:42em;*/
    
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
    }
    .projects {
        margin-top: 7em;
    }
    .project-img {
        height: 5em;
        width: 5em;
        margin:3em 3em 3em 3em;
        filter: grayscale(80%); 
        transition: .5s;     
    }
    .project-img:hover {
        filter: grayscale(0%);        
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
     }
</style>