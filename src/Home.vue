<template>
    <div class="main">
        <app-nav></app-nav>

        <div class="info">
            <h1>Brandon Gladen</h1>
            <h3><em>Full Stack Web Developer</em></h3>
            <p>(218) 556-4588</p>
            <p>me@brandongladen.com</p>
            <div>
                <a href="http://github.com/bg87"><img src="./assets/github.png" alt="github" /></a>
                <a href="https://www.linkedin.com/in/brandon-gladen-19a452109"><img src="./assets/linkedin.png" alt="linkdedin" /></a>
            </div>
        </div>


    </div>
</template>

<script>

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
    img:hover {
       -webkit-transform: rotateZ(15deg); /* Safari */
        transform: rotateZ(15deg);
    }

    img {
        height: 2.5em;
        width: 2.5em;
        transition: .3s;
    }
</style>