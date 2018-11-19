<template>
    <div class="home">
        <Header></Header>
        <div class="container">
            <div class="container-card">
                <Card title="Back-Log" :dataCard="data1" name="Back-Log" back="" next="To-Do" />
                <Card title="To-Do" :dataCard="data2" name="To-Do" back="Back-Log" next="Doing" />
                <Card title="Doing" :dataCard="data3" name="Doing" back="To-Do" next="Done" />
                <Card title="Done" :dataCard="data4" name="Done" back="Doing" next="" />
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Card from '@/components/Card.vue';
import database from '../assets/config.js'

export default {
    name: 'Home',
    components: {
        Header, Card,
    },
    data() {
        return {
            data1: [],
            data2: [],
            data3: [],
            data4: [],
        };
    },
    mounted() {
        database.ref('/').on('value', snapshot => {
            Object.values(snapshot.val()).forEach(data => {
                if(data.status === 1) {
                    this.data1.push(data);
                }else if(data.status === 2) {
                    this.data2.push(data);
                }else if(data.status === 3) {
                    this.data3.push(data);
                }else if(data.status === 4) {
                    this.data4.push(data);
                }
            });
        });
    },
}
</script>

<style>
.container-card {
    margin-top: 30px;
    padding-top: 5%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    width: 90%;
    grid-gap: 20px;
}
.container {
    background-color: #f6f7f9;
    width: 100%;
    min-height: 675px;
}
</style>