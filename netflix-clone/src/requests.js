import App from "./App";

const API_KEY = "19f84e11932abbc79e6d83f82d6d1045"

const requests = {
    fatchTranding:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fatchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fatchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fatchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fatchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fatchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fatchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fatchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,

}

export default requests;