<template>
    <div class="notes">
        <div class="layout">
            <ul class="grid">
                <li>
                    <div class="card">
                        <a href="http://cargocollective.com/jaimemartinez/" 
                           data-largesrc="images/1.jpg" 
                           data-title="Azuki bean" 
                           data-description="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.">
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                notes: [
                    {
                        //content:,
                       // tag:
                    }
                ]
            }
        }
    }
</script>

<style>
    .notes {
        margin-top: 3em;
    }
    ul {
        list-style: none;
    }
    .card {
        border-radius: 3px;
        background-color: #a5cbe4;
        width: 12em;
        height: 15em; 
    }
</style>