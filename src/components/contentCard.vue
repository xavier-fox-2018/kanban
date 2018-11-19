<template>
<div class="card">
    <div class="card-content">
        <h6> {{ list.title }} </h6>
        {{ list.description }} 
        <div class="content">
        </div>
    </div>
    <footer class="card-footer">
        <div>
            <cbutton v-on:change="removeItem" buttonName="delete" buttonColor="red"></cbutton>
        </div>
        <div>
            <cbutton  v-on:change="next" :buttonName="button" :buttonColor="colorButton2"></cbutton>
        </div>
        <div>
            <cbutton v-on:change="prev" v-if="buttons" :buttonName="buttons" :buttonColor="colorButton"></cbutton>
        </div>
    </footer>
</div>
</template>

<script>
import database from '../assets/config.js'
import cbutton from '@/components/button.vue'
export default {
    name: 'contentCard',
    props: ['list', 'name'],
    components: {
        cbutton
    },
    data() {
        return {
            button: '',
            buttons: '',
            colorButton: '',
            colorButton2: ''
        }
    },
    methods: {
        removeItem () {
            swal({
                title: "Are you sure?",
                text: "remove this task?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((willDelete) => {
                if (willDelete) {
                    database.ref(`/${this.list.id}`).remove()
                    swal("Your task has been removed!", {
                        icon: "success",
                    });
                } else {
                    swal("Your task is safe!");
                }
            });
        },

        next () {
            // console.log(`masuk`);
            database.ref(`/${this.list.id}`).remove()
            database.ref('/').push({
                title: this.list.title,
                description: this.list.description,
                status: this.button
            })
        },

        prev () {
            database.ref(`/${this.list.id}`).remove()
            database.ref('/').push({
                title: this.list.title,
                description: this.list.description,
                status: this.buttons
            })
        },
        
    },
    created () {
        if (this.name === 'Back-Log') {
            this.button = 'To-Do'
            this.colorButton = 'red'
            this.colorButton2 = 'yellow'
            this.buttons = null
        } else if (this.name === 'To-Do') {
            this.button = 'Back-Log'
            this.colorButton = 'lightskyblue'
            this.colorButton2 = 'blue'
            this.buttons = 'Doing'
        } else if (this.name === 'Doing') {
            this.button = 'Done'
            this.colorButton = 'yellow'
            this.colorButton2 = 'green'
            this.buttons = 'To-Do'
        } else if (this.name === 'Done') {
            this.button = 'Doing'
            this.colorButton = 'blue'
            this.colorButton2 = 'lightskyblue'
            this.buttons = null
        }
    }
}
</script>

<style>

.card{
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 1px 1px 0px 1px rgba(255, 255, 255, 0.3);
    margin: 10px 0px 10px 0px
}
.card-footer{
    text-align: center
}
</style>
