import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store  from '../../redux/store';
import App from '../../containers/App/App';

it('should render App container without error', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><App /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
});
