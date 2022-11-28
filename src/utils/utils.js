import getPokemon from "@/service/pokemon.service"

export const getRandomInt = (min = 0, max = 1) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const getPokemonsWithNames = async (pokemonIds = []) => {
    const promises = pokemonIds.map(pokemonId => getPokemon(pokemonId))

    const response = await Promise.all(promises)

    const pokemons = response.map(pokemon => ({
        id: pokemon.data.id,
        name: pokemon.data.name
    }))

    return pokemons
}

const getPokemonOptions = async () => {
    const pokemonsList = Array.from(Array(650))
        .map((value, index) => index + 1)
        .sort(() => Math.random() - 0.5)

    const pokemonsWithName = await getPokemonsWithNames(pokemonsList.splice(0, 4))

    console.table(pokemonsWithName)

    return pokemonsWithName
}

export const capitalize = (str = '') => {
    return str.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
}

export default getPokemonOptions