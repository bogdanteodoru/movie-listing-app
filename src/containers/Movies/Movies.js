import React, { Component } from 'react';
import PropTypes from 'prop-types';

/*
 * Import pure components
 */
import MovieCard from '../../components/MovieCard';
import Spinner from '../../components/Spinner';

/*
 * Some material UI imports to be able to prototype designs
 * a bit faster
 */
import Grid from "@material-ui/core/Grid/Grid";

class Movies extends Component {
    static propTypes = {
        movies: PropTypes.object.isRequired,
        genres: PropTypes.object.isRequired,
        filters: PropTypes.object.isRequired
    };

    /*
     * So the idea here is to return the names (not ids) of the genres in a list but,
     * if for whatever reason, the moment we render the movies, the list of genres
     * is not available, we fallback to a empty array so that the MovieCard will render either way
     * without triggering an error.
     */
    getGenreNames(ids) {
        const genresList = this.props.genres.list;

        if (!!genresList.length) {
            return ids.map(id =>
                this.props.genres.list
                    .find(genre => genre.id === id).name);
        }

        return [];
    }

    render() {
        const { movies, filters } = this.props;

        /*
         * Filter movies based on rating first (avg rating should be above or equal
         * to our filter rating) and afterwards filter by user selected genres. If no genres are
         * selected then we return "true" so we can return all movies. Otherwise, return movies where all user selected
         * genres are in the movie genre list.
         */
        const filteredMovies = movies.list
            .filter(movie => movie.vote_average >= filters.rating)
            .filter(movie => !filters.genres.length ? true :
                filters.genres.every(id => movie.genre_ids.includes(id)));

        return (
            <Grid container spacing={24}>
                {/*
                 * When movies are in a loading state, the request has been
                 * made to the API endpoint.
                 */}
                {movies.isLoading && <Spinner />}

                {/*
                 * If the list of filtered movies is empty, show a message about it.
                 */}
                {!filteredMovies.length && !movies.isLoading && (
                    <div className={'padding-20'}>There are no movies matching your filter.</div>
                )}

                {/*
                 * IF we do have filtered movies then show the movies in a card based manner
                 * using material-ui.
                 */}
                {!!filteredMovies.length && filteredMovies.map(movie => {
                    return (
                        <Grid key={movie.id} item xs={12} sm={4} lg={3} xl={3}>
                            <MovieCard movie={movie} genreNames={this.getGenreNames(movie.genre_ids)} />
                        </Grid>
                    )
                })}
            </Grid>
        )
    }
}

export default Movies