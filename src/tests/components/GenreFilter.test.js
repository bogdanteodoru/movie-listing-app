import React from 'react';
import ReactDOM from 'react-dom';
import GenreFilter from '../../components/GenreFilter';
import store  from '../../redux/store';

it('should render GenreFilter component without error', () => {
    const div = document.createElement('div');

    ReactDOM.render(
        <GenreFilter genres={store.getState().genres.list} changeGenres={() => {}} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
