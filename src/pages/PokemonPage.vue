<template>
    <span v-if="!pokemon" class="loader"></span>

    <div v-else-if="pokemon">
        <h2>¿Qui&eacute;n es este pok&eacute;mon?</h2>
        <PokemonPicture :pokemon-id="pokemon.id" :show-pokemon="showPokemon" />
        <PokemonOptions :pokemon-options="pokemons" @select-pokemon="checkAnswer" />

        <div class="fade-in" v-show="showPokemon">
            <h2>!Es {{ capitalizedName(pokemon.name) }}!</h2>
            <button @click="resetGame">Jugar de nuevo</button>
        </div>

    </div>

    <h3 v-else>
        Algo salio mal!!!
    </h3>
</template>

<script>
import getPokemonOptions, { getRandomInt, capitalize } from '@/utils/utils.js'

import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'

export default {
    components: {
        PokemonPicture,
        PokemonOptions,
    },
    data() {
        return {
            pokemons: [],
            pokemon: null,
            showPokemon: false,
        }
    },
    mounted() {
        this.getPokemos()
    },
    methods: {
        async getPokemos() {
            this.pokemons = await getPokemonOptions()
            this.pokemon = this.pokemons.at(getRandomInt(0, 3))
        },
        checkAnswer(pokemonId) {
            console.log(pokemonId)
            this.showPokemon = true
        },
        resetGame() {
            this.pokemons = []
            this.pokemon = null
            this.showPokemon = false
            this.getPokemos()
        },
        capitalizedName(str) {
            return capitalize(str)
        }
    }
}
</script>

<style>
/* https://cssloaders.github.io/ */
.loader {
    width: 48px;
    height: 48px;
    border: 3px dotted crimson;
    border-style: solid solid dotted dotted;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    animation: rotation 2s linear infinite;
}

.loader::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border: 3px dotted cadetblue;
    border-style: solid solid dotted;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    animation: rotationBack 1s linear infinite;
    transform-origin: center center;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@keyframes rotationBack {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(-360deg);
    }
}
</style>