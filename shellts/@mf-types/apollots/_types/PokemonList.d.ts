import React from "react";
export declare const GET_POKEMONS: import("@apollo/client").DocumentNode;
export interface PokemonListProps {
    limit: number;
    offset: number;
}
declare const PokemonList: React.FC<PokemonListProps>;
export default PokemonList;
