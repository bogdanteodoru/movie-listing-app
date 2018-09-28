import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeGenres, changeRating } from "../../redux/modules/filters/filters.reducer";

/*
 * Import pure components
 */
import RatingFilter from '../../components/RatingFilter';
import GenreFilter from '../../components/GenreFilter';
import Spinner from '../../components/Spinner';

/*
 * Some material UI imports to be able to prototype designs
 * a bit faster
 */
import Divider from '@material-ui/core/Divider';

class Filters extends Component {
    static propTypes = {
        genres: PropTypes.object.isRequired,
        filters: PropTypes.object.isRequired,
        movieGenres: PropTypes.array.isRequired,
        changeRating: PropTypes.func.isRequired,
        changeGenres: PropTypes.func.isRequired
    };

    render() {
        const {
            genres,
            filters,
            movieGenres,
            changeGenres,
            changeRating
        } = this.props;

        /*
         * Get all the available genres that can be shown
         * (genres that are present in the movies list)
         */
        const availableGenres = genres.list
            .filter(genre => movieGenres.includes(genre.id));

        return (
            <div>
                <div className={'padding-20'}>
                    <RatingFilter filters={filters} changeRating={changeRating} />
                </div>

                {/*
                 * When genres are in a loading state, the request has been
                 * made to the API endpoint.
                 */}
                {genres.isLoading && <Spinner />}

                {/*
                 * When the list of genres is bigger than 0, we show the genres
                 * that are found in the movies list.
                 */}
                {!!genres.list.length && !genres.isLoading && (
                    <div>
                        <Divider />
                        <div className={'padding-20'}>
                            <GenreFilter genres={availableGenres} changeGenres={changeGenres} />
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

/*
 * Map state to component props.
 */
const mapStateToProps = state => ({
    filters: state.filters
});

/*
 * Map reducer actions to component props.
 */
const mapDispatchToProps = dispatch => ({
    changeRating: (event) => dispatch(changeRating(event.target.value)),
    changeGenres: (event) => dispatch(changeGenres(event.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);