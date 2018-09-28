import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store  from '../../redux/store';
import Filters from '../../containers/Filters/Filters';

it('should render Filters container without error', () => {
    const div = document.createElement('div');
    const { genres, filters, movies } = store.getState();

    ReactDOM.render(
        <Provider store={store}>
            <Filters
                genres={genres}
                filters={filters}
                movieGenres={movies.genresIds}
                changeRating={() => {}}
                changeGenres={() => {}}
            />
        </Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
});
