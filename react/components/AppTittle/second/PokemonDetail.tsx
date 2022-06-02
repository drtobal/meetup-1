import React, { Component } from 'react';
import { IPokemon } from '../../../data/types';

type PokemonDetailProps = {
    pokemon: IPokemon;
};

class PokemonDetail extends Component<PokemonDetailProps> {

    getImage(pokemon: IPokemon): string {
        return `${pokemon.id.toString().padStart(3, '0')}.png`;
    }

    render() {
        return <>
            <div className="d-flex justify-content-center align-items-center">
                <img src={`/pokemon/images/${this.getImage(this.props.pokemon)}`} className="avatar" />
            </div>
            <div className="d-flex justify-content-center align-items-center pt-3">
                <h2>{this.props.pokemon.name.english}</h2>
            </div>
            <div className="row names">
                <div className="col d-flex flex-column justify-content-center align-items-center">
                    <p className="m-0">Japonés</p>
                    <p><strong>{this.props.pokemon.name.japanese}</strong></p>
                </div>
                <div className="col d-flex flex-column justify-content-center align-items-center">
                    <p className="m-0">Chino <small>(simplificado)</small></p>
                    <p><strong>{this.props.pokemon.name.chinese}</strong></p>
                </div>
                <div className="col d-flex flex-column justify-content-center align-items-center">
                    <p className="m-0">Francés</p>
                    <p><strong>{this.props.pokemon.name.french}</strong></p>
                </div>
            </div>
            <div className="separator"></div>
            <div className="py-3">
                <h3 className="m-0 caption">Tipo</h3>
                <p className="m-0 text-center">{this.props.pokemon.type.join(', ')}</p>
            </div>
            <div className="separator"></div>
            <div className="py-3">
                <h3 className="caption">Estadísticas</h3>
                <div className="row row-cols-3 stats">
                    <div className="col d-flex flex-column justify-content-center align-items-center">
                        <p className="m-0">HP</p>
                        <p><strong>{this.props.pokemon.base.HP}</strong></p>
                    </div>
                    <div className="col d-flex flex-column justify-content-center align-items-center">
                        <p className="m-0">Ataque</p>
                        <p><strong>{this.props.pokemon.base.Attack}</strong></p>
                    </div>
                    <div className="col d-flex flex-column justify-content-center align-items-center">
                        <p className="m-0">Defensa</p>
                        <p><strong>{this.props.pokemon.base.Defense}</strong></p>
                    </div>
                    <div className="col d-flex flex-column justify-content-center align-items-center">
                        <p className="m-0">Ataque especial</p>
                        <p><strong>{this.props.pokemon.base['Sp. Attack']}</strong></p>
                    </div>
                    <div className="col d-flex flex-column justify-content-center align-items-center">
                        <p className="m-0">Defensa especial</p>
                        <p><strong>{this.props.pokemon.base['Sp. Defense']}</strong></p>
                    </div>
                    <div className="col d-flex flex-column justify-content-center align-items-center">
                        <p className="m-0">Velocidad</p>
                        <p><strong>{this.props.pokemon.base.Speed}</strong></p>
                    </div>
                </div>
            </div>
        </>;
    }
}

export default PokemonDetail;
