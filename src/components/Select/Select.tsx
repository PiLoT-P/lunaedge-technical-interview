import { useEffect, useState } from 'react';
import svg from '../../assets/symbol-defs.svg';
import s from './Select.module.css';

const Select = ({ pokemons, pokemonsTeam, setPokemonsTeam }: { pokemons: any, pokemonsTeam: any, setPokemonsTeam: any }) => {
    const [isHidden, setIsHidden] = useState(true);
    const [filter, setFilter] = useState<string>('');
    const [filteredPokemons, setFilteredPokemons] = useState<any>(pokemons);
    const [focus, setFocus] = useState(false);

    useEffect(() => { 
        if (filter) {
            setFilteredPokemons(() => pokemons.filter((pokemon: any) => pokemon.name.includes(filter.toLowerCase())))
            filter.length > 0 ? setIsHidden(false) : setIsHidden(true);
        } else {
            setFilteredPokemons(pokemons);
            setIsHidden(true);
        }
    }, [filter, pokemons]);

    const handleAddPokemon = (name: string) => {
        if (pokemonsTeam.includes(name)) {
            return;
        } else{
            setPokemonsTeam((poTeam: any) => [...poTeam, name])
        }
    }

    const handeleRemovePokemon = (name: string) => {
        setPokemonsTeam((poTeam: any) => poTeam.filter((pokemon: any) => pokemon !== name))
    }

    return (
        <>
            <div className={s.container_select}>
                <div className={`${s.block_select} ${focus ? s.focus_block_select : null}`}>
                    <ul className={s.team_list}>
                        {pokemonsTeam && pokemonsTeam.map((element: any, index: any) => (
                            <li key={`${index}PT`} className={s.item}>
                                <p>{element}</p>
                                <svg className={s.icon_exit} width="16" height="16" onClick={() => handeleRemovePokemon(element)} >
                                    <use href={`${svg}#icon-exit`}></use>
                                </svg>
                            </li>
                        ))}
                    </ul>
                    <input
                        className={`${s.input} ${pokemonsTeam.length > 0 ? s.input_small: null}`}
                        type="text"
                        placeholder={pokemonsTeam.length > 0 ? ' ' : 'Select'}
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        onFocus={() => { setFocus(true), setIsHidden(false) }}
                    />
                    <div  className={s.block_icon}>
                        <svg className={s.icon_exit} width="22" height="22" onClick={() => setPokemonsTeam([])}>
                            <use href={`${svg}#icon-exit`}></use>
                        </svg>
                        <svg className={s.icon_chevron_down} width="22" height="22" onClick={() => { setIsHidden(!isHidden);}}>
                            <use href={`${svg}#icon-chevron-down`}></use>
                        </svg>
                    </div>
                </div>
                {isHidden ? ''
                    : 
                <ul className={s.pokemons_list}>
                        {filteredPokemons && filteredPokemons.length > 0 ? filteredPokemons.map(({ name }:{name: any}, index: any) => (
                        <li key={index} className={`${s.pokemon_list_item} ${pokemonsTeam.includes(name) ? s.active_pokemon : null}`} onClick={() => pokemonsTeam.length === 4 ? null : handleAddPokemon(name)}>
                            <p className={s.pokemon_name} >{name}</p>
                        </li>
                    )): <p className={s.notfound}>Not found</p>}
                </ul>
                }
            </div>
        </>
    );
}

export default Select;