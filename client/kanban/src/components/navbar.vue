<template>
    <div class="navbar">
        <div class="container-fluid">
            <div class="navbar-header">
                <h1> <strong class="ka">Ka</strong> <strong class="n">N</strong> <strong class="ba">ba</strong> <strong class="nn">N</strong></h1>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "navbar"
}
</script>
<style scoped>

.navbar h1{
    margin-top: 10px;
    position: relative;
    margin: 0px;
    text-shadow: 3px 3px 4px #ffffffa1
}
.ka{
    font-size: 180%;
    color: darkorange
}
.ka:hover{
    color: red;
    text-shadow: 2px 3px 4px darkorange;
    font-size: 190%
}
.n{
    font-size: 180%;
    color: lawngreen
}
.n:hover{
    color: red;
    text-shadow: 2px 3px 4px lawngreen;
    font-size: 190%
}
.ba{
    font-size: 180%;
    color: blue
}
.ba:hover{
    color: red;
    text-shadow: 2px 3px 4px blue;
    font-size: 190%
}
.nn{
    font-size: 180%;
    color: yellow
}
.nn:hover{
    color: red ;
    text-shadow: 2px 3px 4px yellow;
    font-size: 190%
}
</style>
