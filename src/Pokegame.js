import React from 'react';
import Pokedex from "./Pokedex"

const POKEMON_LIST = [
  {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
  {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
  {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
  {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
  {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
  {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
  {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
  {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
];


const Pokegame = () => {
  const hand1 = [];
  const hand2 = [...POKEMON_LIST];

  while (hand1.length < hand2.length) {
    const randomIndex = Math.floor(Math.random() * hand2.length);
    const removedPokemon = hand2.splice(randomIndex, 1)[0];
    hand1.push(removedPokemon);
  }

  const hand1TotalExp = hand1.reduce((total, pokemon) => total + pokemon.base_experience, 0);
  const hand2TotalExp = hand2.reduce((total, pokemon) => total + pokemon.base_experience, 0);

  return (
    <div>
      <Pokedex pokemon={hand1} isWinner={hand1TotalExp > hand2TotalExp} />
      <Pokedex pokemon={hand2} isWinner={hand2TotalExp > hand1TotalExp} />
    </div>
  );
};



export default Pokegame;



// import React from 'react';

// const POKEMON_LIST = [
//   {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
//   {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
//   {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
//   {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
//   {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
//   {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
//   {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
//   {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
// ];

// const Pokecard = ({ id, name, type, base_experience }) => {
//   const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
//   return (
//     <div className="Pokecard">
//       <h3>{name}</h3>
//       <img src={imageUrl} alt={name} />
//       <p>Type: {type}</p>
//       <p>Base Experience: {base_experience}</p>
//     </div>
//   );
// };

// const Pokedex = ({ pokemon }) => {
//   return (
//     <div className="Pokedex">
//       {pokemon.map(pokemonData => (
//         <Pokecard
//           key={pokemonData.id}
//           id={pokemonData.id}
//           name={pokemonData.name}
//           type={pokemonData.type}
//           base_experience={pokemonData.base_experience}
//         />
//       ))}
//     </div>
//   );
// };

// Pokedex.defaultProps = {
//   pokemon: POKEMON_LIST
// };

// const Pokegame = () => {
//   const hand1 = [];
//   const hand2 = [...POKEMON_LIST];

//   while (hand1.length < hand2.length) {
//     const randomIndex = Math.floor(Math.random() * hand2.length);
//     const removedPokemon = hand2.splice(randomIndex, 1)[0];
//     hand1.push(removedPokemon);
//   }

//   const hand1TotalExp = hand1.reduce((total, pokemon) => total + pokemon.base_experience, 0);
//   const hand2TotalExp = hand2.reduce((total, pokemon) => total + pokemon.base_experience, 0);

//   return (
//     <div>
//       <Pokedex pokemon={hand1} isWinner={hand1TotalExp > hand2TotalExp} />
//       <Pokedex pokemon={hand2} isWinner={hand2TotalExp > hand1TotalExp} />
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div className="App">
//       <Pokegame />
//     </div>
//   );
// };

// export default Pokegame;
