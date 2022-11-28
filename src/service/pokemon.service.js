import axios from 'axios'

const apiUrl = 'https://pokeapi.co/api/v2/pokemon/'

const pokemonApi = axios.create({
    baseURL: apiUrl,
})

const getPokemon = (id = 1) => pokemonApi.get(id.toString());

export default getPokemon