<template>
    <div v-for="country in countries" v-bind:key="country.name" class="body">
        <div v-if="vaccination.find((vaccine)=> vaccine.iso_code==country.alpha3Code)">
        <Country :country="country" :vaccination="vaccination.find((vaccine)=> vaccine.iso_code==country.alpha3Code)" />
        </div>
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
            countries : [],
            vaccination:[],
        }
    },
    async mounted() {
        const [countries,vaccinations] = await Promise.all([axios('https://restcountries.eu/rest/v2/all'),axios('https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json')])
        this.countries = countries.data
        this.vaccination = vaccinations.data
        console.log(countries.data)
        console.log(vaccinations.data)
        // const max = { }
        // for (let vaccine of vaccinations.data) {
        //     if (vaccine.iso_data in max) {
        //         if (max[])
        //     }
        // }
    }
    
}
</script>
<style scoped>

</style>