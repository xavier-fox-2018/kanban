<template>
<div>
    <custombutton buttonName="new task" value="true" v-on:change="isShowModal = $event" borderStyle="blue"/>

    <div class="modal" v-bind:class="{ 'is-active': isShowModal }">
        <div class="modal-background" v-on:click="isShowModal = false"></div>
         <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Add Task</p>
                <button class="delete" aria-label="close" v-on:click="isShowModal = false"></button>
            </header>
            <section class="modal-card-body">
                <div class="field">
                    <label class="label">Title</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="title" v-model="newTask">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Description</label>
                    <div class="control">
                        <textarea class="textarea" placeholder="description" v-model="description"></textarea>
                    </div>
                </div>
            </section> 
            <footer class="modal-card-foot">
                <custombutton buttonName="New Task"  value=false v-on:change="addTask($event)" buttonColor="white" borderStyle="blue"/>  
            </footer>  
        </div>
    </div>
</div>
</template>

<script>

import custombutton from '@/components/button.vue'
import database from '../assets/config.js'
import swal from 'sweetalert';

export default {
    name: 'task',
    components:{
        custombutton
    },
    data(){
        return{
            isShowModal: false,
            newTask: '',
            description: ''
        }
    },
    methods:{
        addTask(val) {
            database.ref('/').push({
                title: this.newTask,
                description: this.description,
                status: 'Back-Log'
            })
            if(val == 'false'){
                swal("Good job!", "Succes added new task!", "success");
                this.isShowModal = false
                this.newTask = ''
                this.description = ''
            }
        }
    }
}
</script>

<style>
.modal-card-body{
    color: black;
}
.modal-card-head{
    background-color: lightgray;
}
.modal-card-foot{
    background-color: lightgray;
}
</style>
