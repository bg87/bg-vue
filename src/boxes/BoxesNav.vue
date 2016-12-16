<template>
    <div>
        <nav>
            <div class="dropdown" @click="active1">My Account <span class="fa fa-angle-down"></span>
                <div class="drop1Content" v-if="drop1">
                    <ul class="dropdownLinks">
                      <li>link</li>  
                      <li>link</li>  
                      <li>logout</li>  
                    </ul>
                </div>
            </div>
            <div class="dropdown" @click="active2">Order <span class="fa fa-angle-down"></span>
                <div class="drop2Content" v-if="drop2">
                    <ul class="dropdownLinks">
                      <li>Shuffle</li>  
                      <li>Newest First</li>  
                      <li>Oldest First</li>  
                    </ul>
                </div>
            </div>

            <input type="text" placeholder="search"/>
        </nav>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                drop1: false,
                drop2: false
            }
        },
        methods: {
            closeDropdowns() {
                this.drop1 = false;
                this.drop2 = false;
            },
            active1() {
                this.closeDropdowns();
                this.drop1 = true;
            },
            active2() {
                this.closeDropdowns();
                this.drop2 = true;
            }
        }
    }
</script>

<style>
    nav {
        height: 2em;
        background-color: #e8e8e8;
        padding-top: 1em;
    }
    .dropdown {
        position: relative;
        cursor: pointer;
        margin: 1em;
        display: inline;
        font-weight: bold;
    }
    .drop1Content {
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        padding: 12px 16px;
    }
    .drop2Content {
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        padding: 12px 16px;
    }
    .dropdownLinks {
        margin: 0;
    }
    .dropdownLinks, li {
        margin: 5px 0px;
        transition: .3s;
    }
    .dropdonwLinks, li:hover {
        color: #a3a3a3;
    }
</style>