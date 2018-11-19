<template>
    <div>
        <div class="card" style="height: 15rem;">
            <div class="card-body">
                <h5 class="card-title">{{ task.title }}</h5>
                <p class="card-text">{{ task.description }}</p>
                <p class="card-text">point: {{ task.point }}</p>
                <p class="card-text">assigned to: {{ task.assignedTo }}</p>
                <button class="btn btn-danger btn-sm"> Delete </button>
                <button class="btn btn-warning btn-sm ml-1" v-if="backlog" @click="changetoBacklog"> Back-Log </button>
                <button class="btn btn-warning btn-sm ml-1" v-if="todo" @click="changetoTodo"> To-Do </button>
                <button class="btn btn-warning btn-sm ml-1" v-if="doing" @click="changetoDoing"> Doing </button>
                <button class="btn btn-warning btn-sm ml-1" v-if="done" @click="changetoDone"> Done </button>
            </div>

        </div>
    </div>
</template>

<script>
import database from '@/assets/config.js'

export default {
    props: ['task'],
    data() {
        return {
            backlog: false,
            todo: false,
            doing: false,
            done: false
        }
    },
    methods: {
        checkStatus: function() {
            if (this.task.status == "back-log") {
                this.todo = true
            }
            else if (this.task.status == "to-do") {
                this.backlog = true
                this.doing = true
            }
            else if (this.task.status == "doing") {
                this.todo = true
                this.done = true
            }
            else if (this.task.status == "done") {
                this.doing = true
            }
        }, 

        changetoTodo: function() {
            this.$emit('changeInfoToBoard', {task: this.task, endStatus: "to-do"})
        },

        changetoBacklog: function() {
            this.$emit('changeInfoToBoard', {task: this.task, endStatus: "back-log"})
        },

        changetoDoing: function() {
            this.$emit('changeInfoToBoard', {task: this.task, endStatus: "doing"})
        },

        changetoDone: function() {
            this.$emit('changeInfoToBoard', {task: this.task, endStatus: "done"})
        }
    },
    created() {
        this.checkStatus()
    }

}
</script>
