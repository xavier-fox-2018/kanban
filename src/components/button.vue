<template>
    <button class="button is-primary is-small" :style="`color:${ buttonColor }; background-color:${borderStyle}`"  v-on:click="$emit('change',value)">
    {{ buttonName }}
    </button>
</template>

<script>
export default {
    name: 'custom-button',
    props: ['buttonName','value','buttonColor','borderStyle']
}
</script>

<style>
    .button.is-primary{
        border-color: transparent;
        background-color: transparent;
    }
    .button.is-primary:hover{
        border-color: transparent;
        background-color: transparent;
        text-shadow: 1px 1px grey;
        box-shadow: 2px 1px 5px grey;
    }
</style>
