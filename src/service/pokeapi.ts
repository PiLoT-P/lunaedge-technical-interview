import axios from 'axios';

axios.defaults.baseURL = 'https://pokeapi.co/api/v2/';

export const getPokemons = () => {
    return axios
        .get('pokemon', {
            params: {
                limit: 12,
                offset: 0,
            }
        })
        .then((data) => data.data.results);
}
