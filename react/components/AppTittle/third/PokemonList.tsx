import React, { Component } from 'react';
import { IPokemon } from '../../../data/types';

type PokemonListProps = {
    selected?: IPokemon | null;
    pokemons?: IPokemon[];
    selectItem?: (pokemon: IPokemon) => void;
};

class PokemonList extends Component<PokemonListProps> {

    getSprite(pokemon: IPokemon): string {
        return `${pokemon.id.toString().padStart(3, '0')}MS.png`;
    }

    render() {
        const {
            selected = null,
            pokemons = [],
            selectItem = () => { },
        } = this.props;

        return <div className="pokemon-list-component">
            {pokemons.map((p, i) => <div key={i} onClick={() => selectItem(p)}
                className={`d-flex justify-content-start align-items-center item ${p.id === selected?.id ? 'selected' : ''}`}>
                <img src={`/pokemon/sprites/${this.getSprite(p)}`} />
                <div>
                    <p className="m-0">#{p.id}. {p.name.english}</p>
                </div>
            </div>)}
        </div>;
    }
}

export default PokemonList;
