<template>
    <div class="body">
        <Countries />
    </div>
    
</template>

<script>
import Countries from '../components/Countries.vue'

export default {
    name:'Data',
    components: {
        Countries,

    },
    
}

</script>

<style scoped>
    .body{
        margin-top: 20px;
    }
</style>