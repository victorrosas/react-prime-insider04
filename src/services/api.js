import axios from 'axios';

//URL FILMES EM CARTAZ:
// https://api.themoviedb.org/3/
// movie/now_playing &language=pt-BR &page=1

export const key = 'b57f00720ede3540dcb33990d54f051b';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
});

export default api;