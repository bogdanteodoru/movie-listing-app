import React from 'react';
import ReactDOM from 'react-dom';
import MovieCard from '../../components/MovieCard';

it('should render MovieCard component without error', () => {
    const div = document.createElement('div');

    ReactDOM.render(
        <MovieCard genreNames={[]} movie={{}} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
