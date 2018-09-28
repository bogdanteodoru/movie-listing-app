const GET_MOVIES_LOAD = 'GET_MOVIES_LOAD';
const GET_MOVIES_ERROR = 'GET_MOVIES_ERROR';
const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';

const INITIAL_STATE = {
    isLoading: false,
    error: false,
    list: [],
    genresIds: [],
};

export default function reducer(state = INITIAL_STATE, action = {}) {
    switch (action.type) {
        case GET_MOVIES_LOAD:
            return {
                ...state,
                isLoading: true
            };
        case GET_MOVIES_SUCCESS:
            const movies = action.response.results;

            /*
             * So we update the list of movies with API movie values and we sort them by popularity.
             * We also get all movie genre ids into an array. We use set here to keep unique values because
             * movies might have the same genres.
             */
            return {
                ...state,
                isLoading: false,
                list: movies.sort((a, b) => b.popularity - a.popularity),
                genresIds: [...new Set(
                    movies.reduce((initial, current) => {
                        initial = initial.concat(current.genre_ids);
                        return initial;
                    }, [])
                )]
            };
        case GET_MOVIES_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        default:
            return state;
    }
}

export function getMovies() {
    return {
        types: [ GET_MOVIES_LOAD, GET_MOVIES_SUCCESS, GET_MOVIES_ERROR ],
        promise: (apiClient) => apiClient('/movie/now_playing')
    };
}