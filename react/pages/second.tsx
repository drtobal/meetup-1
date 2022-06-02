import React, { useState } from 'react';
import type { NextPage } from 'next';
import PokemonList from '../components/AppTittle/second/PokemonList';
import { IPokemon } from '../data/types';
import PokemonDetail from '../components/AppTittle/second/PokemonDetail';

const Second: NextPage = () => {

    const [selected, setSelected] = useState<IPokemon | null>(null);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-4 pokemon-list py-4">
                    <h3>Pokedex</h3>
                    <PokemonList selectItem={p => setSelected(p)} selected={selected}></PokemonList>
                </div>
                <div className="col-8 py-4">
                    {selected && <PokemonDetail pokemon={selected}></PokemonDetail>}
                </div>
            </div>
        </div>
    )
};

export default Second;
