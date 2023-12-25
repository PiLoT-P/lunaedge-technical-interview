import s from './Modal.module.css';
import svg from '../../assets/symbol-defs.svg';

const Modal = ({setIsHiddenModal, pokemonsTeam, setPokemonsTeam} : {setIsHiddenModal:any, pokemonsTeam:any, setPokemonsTeam: any}) => {
    return (
        <>
            <div className={s.back_container}>
                <div className={s.container}>
                    <div className={s.block_header}>
                        <h3 className={s.title}>This is your team</h3>
                        <svg className={s.icon_exit} width="25" height="25" onClick={() => setIsHiddenModal(true)}>
                            <use href={`${svg}#icon-exit`}></use>
                        </svg>
                    </div>
                    <ul className={s.pokemon_list}>
                        {pokemonsTeam && pokemonsTeam.map((element: any, index: any) => (
                            <li key={`${index}ModalTeam`} className={s.pokemon_list_item}>{element}</li>
                        ))}
                    </ul>
                    <div className={s.block_btn}>
                        <button type='button' className={s.btn_cancel} onClick={() => { setIsHiddenModal(true); setPokemonsTeam([]) }}>Cancel</button>
                        <button type='button' className={s.btn_save} onClick={() => setIsHiddenModal(true)}>Save</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;