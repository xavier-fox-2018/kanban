<template>
        <div class="column">
            <div class="card pinggir">
                <header :class="`card-header ${data.color}`">
                    <p class="card-header-title">
                    {{ data.name }} 
                    </p>
                </header>
                <div class="card-content">
                    <div class="content">
                        <content-card v-for="(list) in data.data" :key="list.id" :list="list" :name="data.name"></content-card>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import contentCard from '@/components/contentCard.vue'
export default {
    name: 'kanbanCard',
    components:{
        contentCard
    },
    props: ['data', 'color']

}
</script>

<style>
.card-header {
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
}
.card-header-title {
    border-bottom-right-radius: 5px;
}
.card{
    border-radius: 5px;
    
}
.column{
    margin-top: 50px;
}
.column .pinggir{
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 2px 2px 0px 2px rgba(255, 255, 255, 0.3);
}
</style>
