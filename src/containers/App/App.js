import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/*
 * Import reducer actions.
 */
import { getMovies } from '../../redux/modules/movies/movies.reducer';
import { getGenres } from "../../redux/modules/movies/genres.reducer";

/*
 * Import sub containers.
 */
import Filters from '../Filters/Filters';
import Movies from '../Movies/Movies';

/*
 * Some material UI imports to be able to prototype designs
 * a bit faster
 */
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

/*
 * Material UI class mapping.
 */
const styles = theme => ({
    root: {
        flexGrow: 1,
        display: 'flex',
    },
    appBar: { zIndex: theme.zIndex.drawer + 1 },
    drawerContainer: {
        position: 'relative',
        width: 250,
    },
    drawer: {
        padding: '20px'
    },
    contentContainer: {
        flexGrow: 1,
        minHeight: '100vh'
    },
    content: {
        padding: '84px 20px 20px 20px'
    },
    toolbar: theme.mixins.toolbar
});

/*
 * Main component of the application. It retrieves the data from
 * TMDb APIs and passes it to the Movies & Filters containers
 */
class App extends Component {
    static propTypes = {
        getMovies: PropTypes.func.isRequired,
        getGenres: PropTypes.func.isRequired,
        genres: PropTypes.object.isRequired,
        movies: PropTypes.object.isRequired,
        filters: PropTypes.object.isRequired
    };

    componentDidMount() {
        /*
         * Send actions to the reducer to trigger the data
         * fetching.
         */
        this.props.getMovies();
        this.props.getGenres();
    }

    render() {
        const { classes, genres, movies, filters } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="absolute" className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="title" color="inherit" noWrap>
                            Movie Listing Challenge
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" classes={{ paper: classes.drawerContainer }}>
                    <div className={classes.toolbar} />
                    <Filters genres={genres} movieGenres={movies.genresIds} />
                </Drawer>
                <main className={classes.contentContainer}>
                    <div className={classes.content}>
                        <Movies genres={genres} movies={movies} filters={filters} />
                    </div>
                </main>
            </div>
        );
    }
}

/*
 * Map state to component props.
 */
const mapStateToProps = state => ({
    genres: state.genres,
    movies: state.movies,
    filters: state.filters
});

/*
 * Map reducer actions to component props.
 */
const mapDispatchToProps = dispatch => ({
    getMovies: () => dispatch(getMovies()),
    getGenres: () => dispatch(getGenres())
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));
