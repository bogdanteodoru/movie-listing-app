import React from 'react';
import PropTypes from 'prop-types';

/*
 * Some material UI imports to be able to prototype designs
 * a bit faster
 */
import Typography from "@material-ui/core/Typography/Typography";
import Grid from "@material-ui/core/Grid/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";

/*
 * Pure component that doesn't change the store at all,
 * instead it sends back to the container the checkbox Id
 */
const GenreFilter = ({ genres, changeGenres }) => {
    return (
        <div>
            <Typography variant="title" gutterBottom>
                Filter by: Genre
            </Typography>
            <Grid container spacing={0}>
                {genres.map(genre =>
                    <Grid item xs={12} sm={6} key={genre.id}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    onChange={changeGenres}
                                    value={`${genre.id}`}
                                    color="primary"
                                />
                            }
                            label={genre.name}
                        />
                    </Grid>
                )}
            </Grid>
        </div>
    )
};

GenreFilter.propTypes = {
    genres: PropTypes.array.isRequired,
    changeGenres: PropTypes.func.isRequired
};

export default GenreFilter