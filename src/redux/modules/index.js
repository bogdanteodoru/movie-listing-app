import { combineReducers } from 'redux'
import movies from './movies/movies.reducer'
import genres from './movies/genres.reducer'
import filters from './filters/filters.reducer'

/*
 * Combine all reducers into one single reducer
 */
export default combineReducers({
    movies,
    genres,
    filters
})