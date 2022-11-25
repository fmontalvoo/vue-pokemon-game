<template>
    <h2>¿Qui&eacute;n es este pok&eacute;mon?</h2>
    <PokemonPicture />
    <PokemonOptions />
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'

export default {
    components: {
        PokemonPicture,
        PokemonOptions,
    }
}
</script>

<style>

</style>