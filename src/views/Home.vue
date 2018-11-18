<template>
    <div class="container">
        <Header></Header>
        <div class="row d-flex justify-content-between">
            <KanbanCard v-for="(kanban, index) in kanbanList" :key="index" :kanban="kanban"></KanbanCard>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import KanbanCard from '@/components/KanbanCard.vue';
import database from '../assets/config.js';

const taskData = [
    {
        name: 'Back-Log',
        data: []
    },
    {
        name: 'To-Do',
        data: []
    },
    {
        name: 'Doing',
        data: []
    },
    {
        name: 'Done',
        data: []
    }
]

let upperRef = database.ref('kanban');
upperRef.on('value', function(snapshot) {
    taskData[0].data = [];
    taskData[1].data = [];
    taskData[2].data = [];
    taskData[3].data = [];

    let arr_tasks = Object.entries(snapshot.val());

    for (let i = 0; i < arr_tasks.length; i++) {
        if (arr_tasks[i][1].status === 'Back-Log') {
            const obj = arr_tasks[i][1];
            obj.id = arr_tasks[i][0];
            taskData[0].data.push(obj);
        } else if (arr_tasks[i][1].status === 'To-Do') {
            const obj = arr_tasks[i][1];
            obj.id = arr_tasks[i][0];
            taskData[1].data.push(obj);
        } else if (arr_tasks[i][1].status === 'Doing') {
            const obj = arr_tasks[i][1];
            obj.id = arr_tasks[i][0];
            taskData[2].data.push(obj);
        } else {
            const obj = arr_tasks[i][1];
            obj.id = arr_tasks[i][0];
            taskData[3].data.push(obj);
        }
    }
});

export default {
    name: 'home',
    components: {
        Header, KanbanCard
    },
    data() {
        return {
            kanbanList: taskData
        }
    }
}
</script>
