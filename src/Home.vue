<template>
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

        <img  src="./assets/icarus.png" alt="icarus" class="icarus"/>

    </div>
</template>

<script>

</script>

<style scoped> 
    .main {
        background: linear-gradient(to right bottom, white 50%, #d5e0f6 50%);
        height: 100vh;
        position: relative;
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
        transition: .3s;
        opacity: 0.85;
    }
    .icarus {
        opacity: 0.04;
        height: 11em;
        width:12em;
        float: right;
        margin-right: 2em;
        margin-top: 8em;
    }
</style>