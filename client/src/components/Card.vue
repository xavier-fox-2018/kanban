<template>
    <div class="card">
        <h3>{{ name }}</h3>
        <Content
            v-for="(data, index) in dataCard"
            :key="index"
            :title="data.title"
            :back="back"
            :next="next"
        />
    </div>
</template>

<script>
import Content from '@/components/Content.vue'

export default {
    name: 'Card',
    props: ['name', 'dataCard', 'back', 'next'],
    components: {
        Content,
    },
}
</script>

<style scoped>
.card {
    font-size: 10px;
    color: #4684f6;
    width: 100%;
    min-height: 400px;
    height: 100%;
    background-color: white;
    -webkit-box-shadow: 0px 5px 4px #c0c0c09d;
    -moz-box-shadow: 0px 5px 4px #c0c0c09d;
    box-shadow: 0px 5px 4px #c0c0c09d;
    border-radius: 5px;
}
.card h2 {
    padding: 20px;
}
</style>