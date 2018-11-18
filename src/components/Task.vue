<template>
    <div>
        <div class="card">
            <div class="card-header font-weight-bold" id="content-header">
            {{ item.title }}
            </div>
            <div class="card-body text-left">
                <div class="font-weight-bold">
                    Description:
                    <p class="lead">{{ item.description }}</p>
                </div>
                <div class="font-weight-bold">
                    Point:
                    <p class="lead">{{ item.point }}</p>
                </div>
                <div class="font-weight-bold">
                    Assigned To:
                    <p class="lead">{{ item.assigned_to }}</p>
                </div>
            </div>
            <div class="card-footer">
                <button class="btn btn-danger btn-block font-weight-bold mb-2" id="btn-delete" data-toggle="modal" data-target="#confirmModalDelete" @click="removeTask">Delete</button>
                <button class="btn btn-block font-weight-bold" id="btn-one" v-if="buttonOne" @click="moveUp">{{ buttonOne }}</button>
                <button class="btn btn-block font-weight-bold" id="btn-two" @click="moveDown" v-if="buttonTwo">{{ buttonTwo }}</button>
            </div>
        </div>
    </div>
</template>

<script>
import database from '../assets/config.js';

export default {
    name: 'task',
    data() {
        return {
            buttonOne: '',
            buttonTwo: ''
        }
    }, 
    props: ['item', 'name'],
    methods: {
        moveUp: function() {
            database.ref(`kanban/${this.item.id}`).remove();
            database.ref('kanban').push({
                title: this.item.title,
                description: this.item.description,
                point: this.item.point,
                assigned_to: this.item.assigned_to,
                status: this.buttonOne
            });
        }, 
        moveDown: function() {
            database.ref(`kanban/${this.item.id}`).remove();
            database.ref('kanban').push({
                title: this.item.title,
                description: this.item.description,
                point: this.item.point,
                assigned_to: this.item.assigned_to,
                status: this.buttonTwo
            });
        }, 
        removeTask: function() {        
            database.ref('kanban/' + this.item.id).remove();
        }
    }, 
    created() {
        if (this.name === 'Back-Log') {
            this.buttonOne = 'To-Do';
            this.buttonTwo = null;
        } else if (this.name === 'To-Do') {
            this.buttonOne = 'Doing';
            this.buttonTwo = 'Back-Log';
        } else if (this.name === 'Doing') {
            this.buttonOne = 'Done';
            this.buttonTwo = 'To-Do';
        } else {
            this.buttonOne = null;
            this.buttonTwo = 'Doing';
        }
    }
}
</script>

<style scoped>
#btn-one {
  background-color: #008080;
  color: white;
  border: none !important;
  border-color: #cccccc;
  -webkit-box-shadow: none;
  box-shadow: none;
}

#btn-two {
  background-color: #ffa500;
  color: white;
  border: none !important;
  border-color: #cccccc;
  -webkit-box-shadow: none;
  box-shadow: none;
}

#btn-delete {
  border: none !important;
  border-color: #cccccc;
  -webkit-box-shadow: none;
  box-shadow: none;
}

#content-header {
  background-color: #3b5998;
  color: white;
}
</style>
