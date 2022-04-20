import { APIResponse, Movie } from '../types';

export const transformSearchResult = (response: APIResponse): Movie[] => {
  if (response.Error || !response.Search) {
    if (response.Error === 'Movie not found!') return [];
    throw Error(`Unexpected error: ${response.Error}`);
  }

  return response.Search.map((raw) => ({
    title: raw.Title,
    poster: raw.Poster,
    year: parseInt(raw.Year),
    id: raw.imdbID,
  }));
};

const search = async (s: string) => {
  const apiKey = process.env.REACT_APP_OMDB_API_KEY;
  const url = `https://omdbapi.com/?s=${s}&apikey=${apiKey}`;

  const response = await fetch(url);
  return response.json().then(transformSearchResult);
};

export default search;
