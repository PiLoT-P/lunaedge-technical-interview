import { useCallback, useEffect, useState } from 'react'
import TrainerForm from './components/Form/TrainerForm'
import { getPokemons } from './service/pokeapi';
import Modal from './components/Modal/Modal';

function App() {
  const [pokemons, setPokemons] = useState(null);
  const [isHiddenModal, setIsHiddenModal] = useState(true);
  const [pokemonsTeam, setPokemonsTeam] = useState<string[]>([]);
  
  const setData = useCallback(async () => {
    try {
      const data = await getPokemons();
      setPokemons(data);
    } catch (error: any) {
      console.error(error.message);
    }
  }, []);

  useEffect(() => {
    setData()
  }, []);

  return (
    <>
      <TrainerForm pokemons={pokemons} pokemonsTeam={pokemonsTeam} setPokemonsTeam={setPokemonsTeam} setIsHiddenModal={setIsHiddenModal} />
      {isHiddenModal ? null :
        <Modal setIsHiddenModal={setIsHiddenModal} pokemonsTeam={pokemonsTeam} setPokemonsTeam={setPokemonsTeam} />
      }
    </>
  )
}

export default App
