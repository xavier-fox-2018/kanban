<template>
<nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="container is-fluid">
        <div class="navbar-brand">
            <a class="navbar-item" >
                <img src="http://amazingtecnologia.com.br/site/wp-content/uploads/2015/10/Kanban.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
            </a>
        </div>
        <div class="navbar-end">
            <div class="navbar-item">
                <div class="buttons">
                    <task/>
                </div>
            </div>
        </div>
    </div>
</nav>
</template>

<script>
import custombutton from '@/components/button.vue'
import task from '@/components/createTask.vue'
export default {
    name: 'NavHeader',
    components: {
        custombutton, task
    }
}
</script>

<style>

</style>
