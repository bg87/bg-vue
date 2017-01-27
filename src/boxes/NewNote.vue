<template>
    <div>
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

                <div class="modal-header">
                    <p>New Note</p>
                </div>

                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <textarea class="form-control" 
                                      rows="5"
                                      placeholder="Start writing!"
                                      v-model="newNote.content"
                                      autofocus="true">
                            </textarea>
                            

                        </div>
                        
                        <div class="form-group">

                            <p>Tag it</p>

                            <input type="text"
                                    class="form-control"
                                    v-model="newNote.tag"/>
                    
                        </div>
                    </form>
                </div>

                <div class="modal-footer">
                    <div name="footer">
                        <a class="closebtn" 
                            @click="closeNewNote()">
                            &times
                        </a>
                        
                        <a class="saveNote fa fa-floppy-o"
                                @click.prevent 
                                @click="saveNote" 
                                type="submit">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                newNote: {
                    content: '',
                    tag: ''
                }
            }
        },
        methods: {
            closeNewNote() {
                // Close modal
                this.$store.state.newNoteModal = false;
            },
            saveNote() {
                // Close modal
                this.$store.state.newNoteModal = false;
                // New note object
                let note = {
                    userId: localStorage.userId,
                    content: this.newNote.content,
                    tag: this.newNote.tag
                }

                // Send new note 
                const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
                this.$http.post(this.$store.state.serverURL + '/notes/save' + token, note)
                    .then((response) => {
                        this.$http.get(this.$store.state.serverURL + '/notes' + token)
                            .then((response) => {
                                console.log('response', response.body);
                                this.$store.state.userNotes = response.body.notes;
                                this.flashMessage();
                            }, (error) => {
                                console.log(error);
                            });
                    }, (error) => {
                        console.log(error);
                    });
            },
            // Show flash message for 2 seconds
            flashMessage() {
                let that = this;
                that.$store.state.message = true;
                that.$store.state.messageText = 'Note saved!';
                window.setTimeout(() => {
                    that.$store.state.message = false;
                }, 2000);
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
        color: #007EA7;
        font-size: 1.5em;
        color: #007EA7;
    }
    .form-group p {
        padding: 0;
        text-align: center;
        color: #007EA7;
        font-size: 1.2em;
        color: #007EA7;

    }
    .closebtn {
        font-size: 40px;
        cursor: pointer;
        text-decoration: none;
        margin-right: 1em;     
    }
    .saveNote {
        font-size: 30px;
        cursor: pointer;
        text-decoration: none;
    }
    @media (max-width: 720px) {
        .modal-container {
            width: 80%;
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
            font-size: 1.2em;
            color: #007EA7;
        }
    }
</style>