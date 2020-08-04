const API_KEY = '4dd583e1b39587c937921b221facce6b';

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&lang=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRated: `'/movie/top_rated?api_key=${API_KEY}&lang=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
}

export default requests;
// https://api.themoviedb.org/3/movie/550?api_key=4dd583e1b39587c937921b221facce6b