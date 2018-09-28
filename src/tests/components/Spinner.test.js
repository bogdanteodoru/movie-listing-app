import React from 'react';
import ReactDOM from 'react-dom';
import Spinner from '../../components/Spinner';

it('should render Spinner component without error', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Spinner />, div);
    ReactDOM.unmountComponentAtNode(div);
});
