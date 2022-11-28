<template>
    <div class="options-container">
        <ul>
            <li v-for="pokemon of pokemonOptions" :key="pokemon.id" @click="$emit('selectPokemon', pokemon.id)">
                {{ capitalizedName(pokemon.name) }}
            </li>
        </ul>
    </div>
</template>

<script>
import { capitalize } from '@/utils/utils'

export default {
    props: {
        pokemonOptions: {
            type: Array,
            required: true
        }
    },
    methods: {
        capitalizedName(str) {
            return capitalize(str)
        }
    }
}
</script>

<style>
.options-container {
    display: flex;
    justify-content: center;
}

ul {
    list-style-type: none;
}

li {
    background-color: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    width: 250px;
}

li:hover {
    background-color: rgba(0, 0, 0, 0.05);
}
</style>