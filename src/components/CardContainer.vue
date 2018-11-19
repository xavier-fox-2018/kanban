<template>
    <div class="card text-white mb-3 mr-3" style="width: 18rem;">
        <div class="card-header" :class="'bg-'+data.style">{{ data.name }}</div>
             <div class="card-body">
             <TaskCard  v-for="task in data.data" :key="task.id" :task="task" :name="data.name"></TaskCard>
         </div>
    </div>
</template>

<script>
export default {
    props: ['data'],
    data(){
        return{

        }
    },
    components: {
        TaskCard: () => import('@/components/TaskCard')
    }
}
</script>

