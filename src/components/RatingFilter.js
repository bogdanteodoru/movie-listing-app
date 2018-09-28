import React from 'react';
import PropTypes from 'prop-types';

/*
 * Some material UI imports to be able to prototype designs
 * a bit faster
 */
import Typography from "@material-ui/core/Typography/Typography";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";

/*
 * Pure component that doesn't change the store at all,
 * instead it sends back to the container the select value
 */
const RatingFilter = ({ filters, changeRating }) => {
    return (
        <div>
            <Typography variant="title" gutterBottom>
                Filter by: Rating
            </Typography>
            <Select
                value={filters.rating}
                onChange={changeRating}
                displayEmpty
                name="rating"
                style={{width: '100%'}}
            >
                {/*
                  * We create an empty array with a length of 21 items, and we loop over it
                  * and returning the value of index multiplied by the step (0.5 in our case),
                  * and then we loop over it again to return the items as select options (in our case
                  * MenuItem because we are using MaterialUI)
                  */}
                {[...Array(21)]
                    .map((v, i) => i * 0.5)
                    .map(value =>
                        <MenuItem value={value} key={value}>
                            Rating of {value} or more
                        </MenuItem>
                    )
                }
            </Select>
        </div>
    )
};

RatingFilter.propTypes = {
    filters: PropTypes.object.isRequired,
    changeRating: PropTypes.func.isRequired
};

export default RatingFilter