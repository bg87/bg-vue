<template>
    <div class="notes">
        <div class="layout">
            <ul class="grid">
                <li>
                    <div class="card">
                        <a href="http://cargocollective.com/jaimemartinez/" 
                           data-largesrc="images/1.jpg" 
                           data-title="Azuki bean" 
                           data-description="Swiss chard pumpkin bunya nuts maize plantain aubergine napa 
                                             cabbage soko coriander sweet pepper water spinach winter purslane 
                                             shallot tigernut lentil beetroot.">
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
        width: 12em;
        height: 15em; 
        -webkit-box-shadow: 1px 1px 10px 0px rgba(50, 50, 50, 0.75);
        -moz-box-shadow: 1px 1px 10px 0px rgba(50, 50, 50, 0.75);
        box-shadow: 1px 1px 10px 0px rgba(50, 50, 50, 0.75);
    }
</style>