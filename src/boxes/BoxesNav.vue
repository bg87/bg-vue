<template>
    <div>
        <nav class="navbar">
            <div class="nav-container">
                <a href="#">My Account</a>
                <ul class="navbar-nav navbar-right">
                        <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Note Order <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                                <li role="separator" class="divider"></li>
                                <li><a href="#">Separated link</a></li>
                            </ul>
                        </li>
                </ul>
                <input type="text" placeholder="search"/>
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
           
        }
    }
</script>

<style>
    nav {
        height: 2em;
        background-color: #e8e8e8;
        padding-top: 1em;
        font-weight: bold;
    }
    .nav-container {
        width:90%;
        margin: auto;
    }
    a {
        text-decoration: none !important;
    }
</style>