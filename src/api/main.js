import axios from "axios";

export const retriveCharacters = () => axios.get('https://breakingbadapi.com/api/characters').then(({data}) => data);

export const retriveCharacterByName = (characterByName) => axios.get(`https://breakingbadapi.com/api/characters/${characterByName}`).then(({data}) => data);

export const retriveEpisodes = () => axios.get('https://breakingbadapi.com/api/episodes').then(({data}) => data);

export const retriveQuotes = () => axios.get('https://breakingbadapi.com/api/quotes').then(({data}) => data);

export const retriveDeaths = () => axios.get('https://breakingbadapi.com/api/deaths').then(({data}) => data)