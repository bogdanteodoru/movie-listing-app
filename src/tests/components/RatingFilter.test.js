import React from 'react';
import ReactDOM from 'react-dom';
import RatingFilter from '../../components/RatingFilter';
import store  from '../../redux/store';

it('should render RatingFilter component without error', () => {
    const div = document.createElement('div');

    ReactDOM.render(
        <RatingFilter filters={store.getState().filters} changeRating={() => {}} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
