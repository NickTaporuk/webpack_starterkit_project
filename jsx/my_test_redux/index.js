/*
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './src/components/App';
import configureStore from './src/store/configureStore';

const store = configureStore()

render(
    <Provider store={store}>
        <div className='app'>}
            <App />
        </div>
    </Provider>,
    document.getElementById('root'));*/

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';


export default React.createClass({
    render() {
        return (
            <div>
                <h1>React Router Tutorial</h1>
                <ul role="nav">
                    <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/repos">Repos</NavLink></li>
                </ul>

                {/* add this */}
                {this.props.children || <Home/>}
            </div>
        )
    }
})


