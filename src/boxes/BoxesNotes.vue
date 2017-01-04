<template>
    <div class="notes">
        <div class="layout">
            <ul class="grid">
                <li v-for="note in notes">
                   <div class="card">
                        <div class="og-expander">
                            <div class="og-expander-inner">
                                <span class="og-close"></span>
                                <div class="og-fullimg">
                                    <div class="og-loading"></div>
                                </div>
                                <div class="og-details">    
                                    <p>{{ note.content }}</p>
                                    <a href="#">{{ note.tag }}</a>
                                </div>
                            </div>
                        </div>
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
                        id: 1,
                        content: "Kogi tbh venmo, tilde flannel wayfarers etsy. Hammock marfa swag humblebrag tote bag.",
                        tag: "Tech"
                    },
                    {
                        id: 2,
                        content: "Deep v whatever cliche, keytar 8-bit vexillologist lo-fi everyday carry cornhole.",
                        tag: "Writing"
                    },
                    {
                        id: 3,
                        content: "Air plant locavore occupy tousled. Post-ironic fashion axe leggings meggings franzen",
                        tag: "Quotes"
                    },
                    {
                        id: 4,
                        content: "Try-hard brooklyn blue bottle, stumptown tilde coloring book direct trade biodiesel cronut bushwick.",
                        tag: "Tech"
                    },
                    {
                        id: 5,
                        content: "Deep v whatever cliche, keytar 8-bit vexillologist lo-fi everyday carry cornhole.",
                        tag: "Writing"
                    },
                    {
                        id: 6,
                        content: "Try-hard brooklyn blue bottle, stumptown tilde coloring book direct trade biodiesel cronut bushwick.",
                        tag: "Tech"
                    },
                    {
                        id: 7,
                        content: "Kogi tbh venmo, tilde flannel wayfarers etsy. Hammock marfa swag humblebrag tote bag.",
                        tag: "Tech"
                    }
                ]
            }
        },
        methods: {
           
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
    .grid {
        list-style: none;
        padding: 20px 0;
        margin: 0 auto;
        text-align: center;
        width: 100%;
    }
    .grid li {
        display: inline-block;
        margin: 10px 5px 0 5px;
        vertical-align: top;
        height: 250px;
    }
    .card {
        border-radius: 3px;
        width: 12em;
        height: 15em; 
        padding: 5px;
        font-weight: bold;
        -webkit-box-shadow: 1px 1px 10px 0px rgba(50, 50, 50, 0.75);
        -moz-box-shadow: 1px 1px 10px 0px rgba(50, 50, 50, 0.75);
        box-shadow: 1px 1px 10px 0px rgba(50, 50, 50, 0.75);
    }
</style>