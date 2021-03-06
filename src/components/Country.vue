<template>
    <div>
        <img :src="`https://www.countryflags.io/${country.alpha2Code}/flat/64.png`" alt="">
        <h1>{{country.name}}</h1>
        <p>{{vaccinated}} / {{country.population}} </p>
        <input type="range" min="0" :max="country.population" :value="vaccinated">
        <p> Vaccinated : {{vaccinated}}</p>
        <p> % : {{calculateVaccinated}}</p>
        <p>Covid Cases: {{cases}}</p>     
    </div>
</template>

<script>

export default {
    props: {
        country:Object,
        vaccination:Object,
    },
    data () { 
        console.log(this.country)
        console.log(this.vaccination)
        return {
            cases:123,

        }
    },
    computed: {
        vaccinated () {
            let max = 0
            this.vaccination.data.forEach(vaccine => {
                vaccine.people_vaccinated > max ? max = vaccine.people_vaccinated : null
            });
            return max
        },
        calculateVaccinated () {
            return Math.floor((this.vaccinated/this.country.population)*1000)/1000
        }
    },
}
</script>

<style scoped>
img {
    width:64px;
}
</style>