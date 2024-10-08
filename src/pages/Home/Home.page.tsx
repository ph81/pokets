import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from './Home.styles';

interface Pokemon {
  name: string;
  height: number;
  weight: number;
  id: number;
  sprite: string;
}

const Home = (): JSX.Element => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [sortedList, setSortedList] = useState<Pokemon[]>([]);
  const [sortType, setSortType] = useState<string>('name');

  // Fetch Pokémon data
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await axios.get(
          'https://pokeapi.co/api/v2/pokemon?limit=40'
        );
        const results = res.data.results;

        // Fetch details for each Pokémon
        const detailedPokemonList = await Promise.all(
          results.map((pokemon: { url: string }) =>
            axios.get(pokemon.url).then((response) => ({
              name: response.data.name,
              height: response.data.height,
              weight: response.data.weight,
              id: response.data.id,
              sprite: response.data.sprites.front_default,
            }))
          )
        );

        setPokemonList(detailedPokemonList);
        setSortedList(detailedPokemonList);
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      }
    };

    fetchPokemon();
  }, []);

  // Sort Pokémon list based on the selected type
  useEffect(() => {
    const sortArray = (type: string) => {
      const sorted = [...pokemonList].sort((a, b) => {
        if (type === 'name') return a.name.localeCompare(b.name);
        if (type === 'height') return a.height - b.height;
        if (type === 'weight') return a.weight - b.weight;
        return 0;
      });
      setSortedList(sorted);
    };

    sortArray(sortType);
  }, [sortType, pokemonList]);

  return (
    <div>
      <h1>Pokémon List</h1>

      {/* Sort dropdown */}
      <label>Sort by: </label>
      <select onChange={(e) => setSortType(e.target.value)} value={sortType}>
        <option value="name">Name</option>
        <option value="height">Height</option>
        <option value="weight">Weight</option>
      </select>

      {/* Pokémon List */}
      <Container>
        {sortedList.map((pokemon) => (
          <li
            key={pokemon.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px',
            }}
          >
            <img
              src={pokemon.sprite}
              alt={pokemon.name}
              style={{ marginRight: '10px' }}
            />
            <div>
              <strong>
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
              </strong>
              <br />
              Height: {pokemon.height} | Weight: {pokemon.weight}
            </div>
          </li>
        ))}
      </Container>
    </div>
  );
};

export default Home;
