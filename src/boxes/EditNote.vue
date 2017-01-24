<template>
    <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

                <div class="modal-header">
                    <p>Edit Note</p>
                </div>

                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <textarea class="form-control"
                                      v-model="content"
                                      rows="5"
                                      autofocus="true">
                            </textarea>
                        </div>
                        
                        <div class="form-group">
                            <input type="text" 
                                    class="form-control"
                                    v-model="tag"/>
                        </div>
                    </form>
                </div>

                <div class="modal-footer">
                    <div name="footer">
                        <a class="cancel" @click="cancel()">&times;</a>
                        <button class="update"
                                @click.prevent 
                                @click="update" 
                                type="submit">
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                content: this.$store.state.selectedNote.content,
                tag: this.$store.state.selectedNote.tag
            }
        },
        methods: {
            update() {
                // Close modal
                this.$store.state.editNoteModal = false;

                let updatedNote = {
                    id: this.$store.state.selectedNote._id,
                    content: this.content,
                    tag: this.tag
                }
                
                // Send updated note 
                const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
                this.$http.post(this.$store.state.serverURL + '/notes/update' + token, updatedNote)
                    .then((response) => {
                        this.$http.get(this.$store.state.serverURL + '/notes' + token)
                            .then((response) => {
                                console.log('response', response.body);
                                this.$store.state.userNotes = response.body.notes;
                            }, (error) => {
                                console.log(error);
                            });
                    }, (error) => {
                        console.log(error);
                    });
            },
            cancel() {
                // Close modal
                this.$store.state.editNoteModal = false;
            }
        }
    }
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
        color:#007EA7;
    }
    .update {
        border: 2px solid #007EA7;
        border-radius: 3px;
        background-color: white;
        color: #007EA7;
        margin-top:1em; 
        font-weight: bold;
    }
    .cancel {
        color: #007EA7; 
        float: left;
        text-decoration: none;
        font-size: 36px;
        cursor: pointer;
    }
</style>