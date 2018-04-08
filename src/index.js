import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// web API that helps you cache your assets and other files so that when the user is offline/network, can still see results on the screen
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
