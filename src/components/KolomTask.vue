<template>
     <div id="blok" class="col-md-3 mx-auto">
        <div :class=kolom.class1 style="max-width: 24rem;">
            <div :class=kolom.class2 style="font-size:18px;">{{kolom.name}}</div>
            <div class="card-body text-primary">

                <CardTask v-for="(task, index) in kolom.data" :key="index" :task="task" :clasbtn="kolom.class3"></CardTask>

            </div>
        </div>
    </div>
</template>

<script>
    import CardTask from '@/components/CardTask.vue'

export default {
    name: 'KolomTask',
    components: {
        CardTask
    },
    props: ['kolom']
}
</script>

<style>

</style>
