const CHANGE_GENRES = 'CHANGE_GENRES';
const CHANGE_RATING = 'CHANGE_RATING';

const INITIAL_STATE = {
    genres: [],
    rating: 3
};

export default function reducer(state = INITIAL_STATE, action = {}) {
    switch (action.type) {
        case CHANGE_GENRES:
            const genres = state.genres;
            const actionGenreId = parseInt(action.genreId, 10);

            /*
             * We only keep here genres that are selected. So if it doesn't exist in the list
             * push it, if it does, filter it out.
             */
            return {
                ...state,
                genres: genres.includes(actionGenreId) ?
                    [...genres.filter(genreId => genreId !== actionGenreId)] :
                    [...genres, actionGenreId]
            };
        case CHANGE_RATING:
            return {
                ...state,
                rating: action.rating
            };
        default:
            return state;
    }
}

export function changeRating(rating) {
    return { type: CHANGE_RATING, rating };
}

export function changeGenres(genreId) {
    return { type: CHANGE_GENRES, genreId };
}
