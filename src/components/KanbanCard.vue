<template>
    <div class="col-md-3 mb-5">
        <div class="font-weight-bold d-flex align-items-center justify-content-center" id="kanban-header">
            {{ kanban.name }}
        </div>
        <div class="border px-3 pt-3">
            <Task v-for="(item) in kanban.data" :key="item.id" :item="item" :name="kanban.name" class="mb-3"></Task>
        </div>
    </div>
</template>

<script>
import Task from '@/components/Task.vue';

export default {
    name: 'kanbanCard',
    components: {
        Task
    },
    props: ['kanban']
}
</script>

<style scoped>
#kanban-header {
  background-color: #f5f5dc;
  height: 40px;;
}
</style>
