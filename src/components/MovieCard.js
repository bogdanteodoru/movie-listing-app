import React from 'react';
import PropTypes from 'prop-types';

/*
 * Some material UI imports to be able to prototype designs
 * a bit faster
 */
import Typography from "@material-ui/core/Typography/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Chip from '@material-ui/core/Chip';

/*
 * Pure component that doesn't change the store at all.
 * Only shows a movie in a card based manner.
 */
const MovieCard = ({ movie, genreNames }) => {
    const styles = {
        card: { maxWidth: 500 },
        media: { objectFit: 'cover' },
        chip: {
            marginRight: '10px',
            marginTop: '10px'
        }
    };

    const moviePosterSrc = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

    return (
        <div>
            <Card style={styles.card}>
                <CardMedia
                    component="img"
                    image={moviePosterSrc}
                    style={styles.media}
                    title={movie.title}
                    height="200"
                />
                <CardContent>
                    <Typography gutterBottom variant="subheading" component="h4">
                        <b>{movie.title}</b>
                    </Typography>
                    <Typography component="div">
                        {genreNames.map((name, i) => <Chip label={name} key={i} style={styles.chip} />)}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

MovieCard.propTypes = {
    movie: PropTypes.object.isRequired,
    genreNames: PropTypes.array.isRequired
};

export default MovieCard