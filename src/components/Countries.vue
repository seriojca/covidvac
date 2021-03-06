<template>
    <div v-for="country in data" v-bind:key="country.id">
        <Country :country="country" />

    </div>
</template>


<script>
import Country from './Country.vue'
import axios from 'axios'

export default {
    name:'Countries',
    components: {
        Country,
    },
    data () {
        return {
            data : null
        }
    },
    mounted() { 
        axios
        .get('https://restcountries.eu/rest/v2/all')
        .then(response => (this.data = response.data)).then(console.log)
    }
    
}
</script>
<style scoped>

</style>