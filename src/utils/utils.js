import getPokemon from "@/service/pokemon.service"

const getRandomInt = (min = 0, max = 1) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
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
        .sort(() => getRandomInt(-1, 1))

    const pokemonsWithName = await getPokemonsWithNames(pokemonsList.splice(0, 4))

    console.table(pokemonsWithName)
}

export default getPokemonOptions