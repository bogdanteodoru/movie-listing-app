const GET_GENRES_LOAD = 'GET_GENRES_LOAD';
const GET_GENRES_ERROR = 'GET_GENRES_ERROR';
const GET_GENRES_SUCCESS = 'GET_GENRES_SUCCESS';

const INITIAL_STATE = {
    isLoading: false,
    error: false,
    list: []
};

export default function reducer(state = INITIAL_STATE, action = {}) {
    switch (action.type) {
        case GET_GENRES_LOAD:
            return {
                ...state,
                isLoading: true
            };
        case GET_GENRES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                list: action.response.genres
            };
        case GET_GENRES_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        default:
            return state;
    }
}

export function getGenres() {
    return {
        types: [ GET_GENRES_LOAD, GET_GENRES_SUCCESS, GET_GENRES_ERROR ],
        promise: (apiClient) => apiClient('/genre/movie/list')
    };
}