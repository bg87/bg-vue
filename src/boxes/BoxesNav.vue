<template>
    <div>
        <nav class="navbar">
            <div class="nav-container">
                <a href="#" class="nav-content">My Account</a>
                <ul class="navbar-nav navbar-right">
                        <li class="dropdown nav-content">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Note Order <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                                <li role="separator" class="divider"></li>
                                <li><a href="#">Separated link</a></li>
                            </ul>
                        </li>
                        <li><input type="text" placeholder="search"/></li>
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
    input {
        margin-left: 2em;
    }
    .nav-content {
        margin-top: 3px;
    }
</style>