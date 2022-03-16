const API_KEY = "17d2d135d1486efe47ebde482d3ae7cf";

const requests = {
    fetchTrending: `/trending/all/week?api
    _key=${API_KEY}&language=en-US`, 

    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,

    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,

    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,

    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,

}

export default requests; 