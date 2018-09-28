import React from 'react';

/*
 * Some material UI imports to be able to prototype designs
 * a bit faster
 */
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";

const Spinner = () => {
    const styles = {
        spinner: {
            margin: '50px auto',
            display: 'block'
        }
    };

    return (
        <CircularProgress size={50} style={styles.spinner} />
    );
};

export default Spinner