<template>
    <nav>
        <ul>
            <li class="pointer">My Account <span class="fa fa-angle-down"></span></li>
            <li class="pointer">Order <span class="fa fa-angle-down"></span></li>
            <li><input type="text" placeholder="search"/></li>
        </ul>
    </nav>
</template>

<script>
    export default {

    }
</script>

<style>
    nav {
        height: 3em;
        background-color: #e8e8e8;
    }
    ul {
        margin: 0;
        padding-top: 1em;
        list-style: none;
    }
    li {
        margin: 1em;
        display: inline;
        font-weight: bold;
    }
    .pointer {
        cursor: pointer;
    }
</style>