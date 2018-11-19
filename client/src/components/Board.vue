<template>
    <div>
        <ul class="list-group">
            <li class="list-group-item active">{{ title }} </li>
            <Card  v-on:changeInfoToBoard="info" v-for="(task, index) in tasks" :task="task" :key="index"> </Card>
        </ul>
    </div>
</template>


<script>
import Card from '@/components/Card.vue'

export default {
    components: { Card },
    props: ['title', 'tasks'],
    methods: {
        info: function(data) {
            this.$emit('changeInfoToHome', data)
        }
    }
}
</script>
