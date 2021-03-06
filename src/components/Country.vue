<template>
    <div>
        <img :src="`https://www.countryflags.io/${country.alpha2Code}/flat/64.png`" alt="">
        <h1>{{country.name}}</h1>
        <p>{{vaccinated}} / {{country.population}} </p>
        <input type="range" min="0" :max="population" :value="vaccinated">
        <p> Vaccinated : {{calculateVaccinated}}</p>
        <p>Covid Cases: {{cases}}</p>     
    </div>
</template>

<script>
export default {
    props: {
        country:Object
    },
    data () { 
        console.log(this.props)
        return {
            vaccinated:12312,
            cases:123,

        }
    },
    computed: {
        calculateVaccinated () {
            return Math.floor((this.vaccinated/this.country.population)*1000)/1000
        }
    }
}
</script>

<style scoped>
img {
    width:64px;
}
</style>