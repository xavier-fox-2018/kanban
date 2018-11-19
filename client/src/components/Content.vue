<template>
    <div class="cardContent">
        <h2>{{ title }}</h2>
        <div class="container-button">
            <div><h4>delete</h4></div>
            <div><h4>{{ back }}</h4></div>
            <div><h4>{{ next }}</h4></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Content',
    props: ['title', 'back', 'next'],
}
</script>

<style scoped>
.cardContent {
    font-size: 10px;
    color: #fff;
    width: 70%;
    min-height: 100px;
    background-color: #4684f6;
    -webkit-box-shadow: 0px 5px 4px #c0c0c09d;
    -moz-box-shadow: 0px 5px 4px #c0c0c09d;
    box-shadow: 0px 5px 4px #c0c0c09d;
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-bottom: 50px;
    vertical-align: middle;
    cursor: pointer;
    padding-bottom: 20px;
}
.card h2 {
    padding-top: 20px;
    font-size: 20px;
}
.container-button h4 {
    color: #4684f6;
    background-color: #fff;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    width: 75%;
    padding: 2%;
    border-radius: 5px;
}
</style>