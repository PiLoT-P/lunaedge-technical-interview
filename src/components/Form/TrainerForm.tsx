import { useState } from 'react';
import s from './TrainerForm.module.css';
import Select from '../Select/Select';
import svg from '../../assets/symbol-defs.svg';
import { useForm } from 'react-hook-form';



const TrainerForm = ({ pokemons, pokemonsTeam, setPokemonsTeam, setIsHiddenModal }: { pokemons: any, pokemonsTeam: any, setPokemonsTeam: any,  setIsHiddenModal:any}) => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        values: {
            name: '',
            surname: '',
        },
    })

    const onSubmit = (e: any) => {
        pokemonsTeam.length === 4 ? console.log({ ...e, pokemonsTeam }) : null;
    }

    return (
        <>
            <section className={s.container}>
                <div className={s.block_form}>
                    <h2 className={s.title}>Create your team</h2>
                    <form className={s.trainer_form}  onSubmit={handleSubmit(onSubmit)}>
                        <label className={s.block_input}>
                            <div className={s.block_label_text}>
                                <p className={s.label_text}>Name</p>
                                <svg className={s.icon_team} width="16" height="16">
                                    <use href={`${svg}#icon-notification`}></use>
                                </svg>
                            </div>
                            <input
                                className={`${s.input} ${errors.name?.type ? s.error_input : null}`}
                                type="text"
                                placeholder='Name'
                                {...register("name", { required: true, minLength: 2, maxLength: 12, pattern: /^[a-zA-Z]+$/ })}
                            />
                            {errors.name?.type ?
                                <p className={`${s.message} ${s.error_message}`}>
                                    {errors.name?.type === 'pattern' ? 'Only alphabetic characters are allowed' : ''}
                                    {errors.name?.type === 'required' ? 'This information is required' : ''}
                                    {errors.name?.type === 'minLength' ? 'This information is too short' : ''}
                                    {errors.name?.type === 'maxLength' ? 'This information is too long' : ''}
                                </p>
                                :
                                <p className={s.message}>This information is required</p>
                            }
                        </label>
                        <label className={s.block_input}>
                            <div className={s.block_label_text}>
                                <p className={s.label_text}>Surname</p>
                                <svg className={s.icon_team} width="16" height="16">
                                    <use href={`${svg}#icon-notification`}></use>
                                </svg>
                            </div>
                            <input
                                className={`${s.input} ${errors.surname?.type ? s.error_input : null}`}
                                type="text"
                                placeholder='Surname'
                                {...register("surname", {required: true, minLength: 2, maxLength: 12, pattern: /^[a-zA-Z]+$/})}
                            />
                            {errors.surname?.type ?
                                <p className={`${s.message} ${s.error_message}`}>
                                    {errors.surname?.type === 'pattern' ? 'Only alphabetic characters are allowed' : ''}
                                    {errors.surname?.type === 'required' ? 'This information is required' : ''}
                                    {errors.surname?.type === 'minLength' ? 'This information is too short' : ''}
                                    {errors.surname?.type === 'maxLength' ? 'This information is too long' : ''}
                                </p>
                                :
                                <p className={s.message}>This information is required</p>
                            }
                        </label>
                        <button type="submit" className={s.btn_Submit}>
                            <span>Submit</span>
                        </button>
                    </form>
                    <div>
                        <p className={s.label_text}>Pokemon Team</p>
                        <Select pokemons={pokemons} pokemonsTeam={pokemonsTeam} setPokemonsTeam={setPokemonsTeam} />
                        <p className={s.message}>Please choose four pokemon</p>
                        <button type="button" className={s.btn_Submit} onClick={() => pokemonsTeam.length === 4 ? setIsHiddenModal(false) : null}>
                            <svg className={s.icon_team} width="16" height="16">
                                <use href={`${svg}#icon-team`}></use>
                            </svg>
                            <span> Check Team</span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default TrainerForm;
