import React, { useState } from 'react';
import type { NextPage } from 'next';
import { IPokemon } from '../data/types';
import PokemonList from '../components/AppTittle/third/PokemonList';
import PokemonDetail from '../components/AppTittle/third/PokemonDetail';
import pokedex from '../data/pokedex.json';

const Second: NextPage = () => {

    const pokemons: IPokemon[] = pokedex;

    const [selected, setSelected] = useState<IPokemon | null>(null);

    const [isFirstSelected, setIsFirstSelected] = useState<boolean>(false);

    const [isLastSelected, setIsLastSelected] = useState<boolean>(false);

    const selectItem = (pokemon: IPokemon): void => {
        setSelected(pokemon);
        const selectedIndex = getPokemonIndex(pokemon);
        setIsFirstSelected(selectedIndex === 0);
        setIsLastSelected(selectedIndex + 1 === pokemons.length);
    }

    const goPrevious = (): void => {
        if (selected && !isFirstSelected) {
            const selectedIndex = getPokemonIndex(selected);
            selectItem(pokemons[selectedIndex - 1]);
        }
    }

    const goNext = (): void => {
        if (selected && !isLastSelected) {
            const selectedIndex = getPokemonIndex(selected);
            selectItem(pokemons[selectedIndex + 1]);
        }
    }

    const getPokemonIndex = (pokemon: IPokemon): number => {
        return pokemons.findIndex(p => p.id === pokemon.id);
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-4 pokemon-list py-4">
                    <h3>Pokedex</h3>
                    <PokemonList selectItem={p => selectItem(p)} selected={selected}
                        pokemons={pokemons}></PokemonList>
                </div>
                <div className="col-8 py-4">
                    {selected && <PokemonDetail pokemon={selected} isFirstSelected={isFirstSelected}
                        isLastSelected={isLastSelected} previous={goPrevious} next={goNext}></PokemonDetail>}
                </div>
            </div>
        </div>
    )
};

export default Second;
