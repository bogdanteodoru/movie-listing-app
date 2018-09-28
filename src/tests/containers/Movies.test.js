import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store  from '../../redux/store';
import Movies from '../../containers/Movies/Movies';

it('should render Movies container without error', () => {
    const div = document.createElement('div');
    const { genres, filters, movies } = store.getState();

    ReactDOM.render(
        <Provider store={store}>
            <Movies filters={filters} genres={genres} movies={movies} />
        </Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
});
