<template>
    <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

                <div class="modal-header">
                    <p>Are you sure?</p>
                </div>

                <div class="modal-body">
                    Oh Nooooooooes! You're about to delete this note, are you sure you want to do that?
                </div>

                <div class="modal-footer">
                    <div name="footer">
                        <button class="no"
                                @click.prevent 
                                >
                            I've made a huge mistake.
                        </button>
                        <button class="yes"
                                @click.prevent 
                                 
                                type="submit">
                            Go for it.
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 50%;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-header {
        padding: 0;
        text-align: center;
        font-size: 1.5em;
        color: #42b983;
    }
    .modal-body {
        margin: 1.2em;
        text-align: center;
        font-size: 1.2em;
        color: #42b983;
    }
    .yes {
        border: 2px solid #42b983;
        border-radius: 3px;
        background-color: white;
        color: #42b983; 
        font-weight: bold;
    }
    .no {
        border: 2px solid #42b983;
        border-radius: 3px;
        background-color: white;
        color: #42b983; 
        font-weight: bold;
        float: left;
    }
</style>