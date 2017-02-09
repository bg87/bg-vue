<template>
    <div class="mainContainer">
        <app-nav></app-nav>
        <div class="container-fluid">
            <div class="row no-gutter">
                <div class="col-lg-6 col-sm-6 col-xs-12 one">
                    <div class="cell">
                        <div class="wrapper">
                            <img src="./assets/logo1.png" alt="logo" class="logo" />
                            <h3>Brandon Gladen</h3>
                            <h4><em>Web Developer</em></h4>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12 two">
                    <div class="cell">
                        <div class="wrapper">
                            <p class="content">
                                I make websites and applications using a variety of languages and frameworks.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12 three">
                    <div class="cell">
                        <div class="wrapper">
                            <p class="content">
                                Here are some tools i use.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12 four">
                    <div class="cell">
                        <div class="wrapper">
                            <div class="tech-row-1">
                                <img src="./assets/rails.png" alt="rails" />
                                <img src="./assets/node.png" alt="node" />
                                <img src="./assets/mongodb.png" alt="mongodb" />
                            </div>
                            <div class="tech-row-2">
                                <img src="./assets/js.png" alt="javascript" />
                                <img src="./assets/angular.png" alt="angular" />
                                <img src="./assets/vue.png" alt="vuejs" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12 five">
                    <div class="cell">
                        <div class="wrapper text-center">
                            <p class="content">
                                You can contact me here.
                            </p>
                            <p class="email">brandon.gladen@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-xs-12 six">
                    <div class="cell">
                        <div class="wrapper text-center">
                            <p class="content">
                                Or find me here
                            </p>
                            <div class="social">
                                <a href="http://github.com/bg87" target="_blank"><img src="./assets/github.png" alt="github" /></a>
                                <a href="https://www.linkedin.com/in/brandon-gladen-19a452109
                                    " target="_blank"><img src="./assets/linkedin.png" alt="linkedIn" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12 col-sm-12 col-xs-12 seven">
                    <div class="cell text-center">
                        <img src="./assets/icarus.png" alt="icarus" class="icarus" />
                        <p class="content">
                            Personal apps I'm working on.
                        </p>
                        <router-link to="/boxes" class="app-links">Boxes app</router-link>
                        <router-link to="/notebook" class="app-links">Notebook app</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .mainContainer {
        width: 100%;
        padding:1em;
    }
    .container-fluid {
        margin: 2em;
    }
    .cell {
        height: 18em;
    }
    .wrapper {
        padding: 2em;
    }
    .content {
        padding-top: 2em;
        font-size: 1.5em;
    }
    .logo {
        width: 75px;
        height: 75px;
        margin-bottom: 2.5em;
    }
    .one {
        background-color: #788585;
        color: #D3D5D7;
        text-align: center;
    }
    .two {
        background-color: #CCDAD1;
        color: #CC0828;
    }
    .three {
        background-color: #CC0828;
        color: #D3D5D7;
    }
    .four {
        background-color: #2C3D55;
        color: #D3D5D7;
    }
    .tech-row-1 img {
        height: 75px;
        width: 75px;
        filter: grayscale(90%);
        margin-bottom: 3em;
        margin-right: 2em;
    }
    .tech-row-2 img {
        height: 75px;
        width: 75px;
        filter: grayscale(90%);
        margin-right: 2em;
    }
    .five {
        background-color: #7293A0;
        color: #DCDAE8;
    }
    .email {
        font-size: 17px;
    }
    .six {
        background-color: #CED0CE;
        color: #788585;
    }
    .social img {
        width: 55px;
        height: 55px;
        margin: 1.5em;
    }   
    .seven {
        background: url('assets/wireframe.png') no-repeat center center fixed; 
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover; 
    }
    .seven .content {
        color: white;
        font-size: 25px;
        margin-bottom: 2em;
    }
    .app-links {
        color: white;
        margin: 2em;
        font-size: 15px;
        font-weight: bold;
    }
    .app-links:hover {
        text-decoration: none;
    }
    .icarus {
        opacity: .04;
        height: 150px;
        width: 150px;
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
    }

    @media (max-width: 550px) {
        .two {
            background-color: #CCDAD1;
            color: #CC0828;
            text-align: center;
        }
        .three {
            background-color: #CC0828;
            color: #D3D5D7;
            text-align: center;
        }
        .tech-row-1 img {
            height: 50px;
            width: 50px;
            filter: grayscale(90%);
            margin: 1em;
        }
        .tech-row-2 img {
            height: 50px;
            width: 50px;
            filter: grayscale(90%);
            margin: 1em;
        }
        .social img {
            width: 40px;
            height: 40px;
            margin: 1.5em;
        }
        .app-links {
            color: white;
            margin: 2em;
            font-size: 13px;
            font-weight: bold;
        } 
        .icarus {
        opacity: .04;
        height: 150px;
        width: 150px;
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
    }  
    } 
</style>