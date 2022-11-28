<template>
    <h2>¿Qui&eacute;n es este pok&eacute;mon?</h2>
    <PokemonPicture :pokemonId="1" :showPokemon="false" />
    <PokemonOptions />
</template>

<script>
import getPokemonOptions from '@/utils/utils.js'

import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'

getPokemonOptions()

export default {
    components: {
        PokemonPicture,
        PokemonOptions,
    }
}
</script>

<style>

</style>