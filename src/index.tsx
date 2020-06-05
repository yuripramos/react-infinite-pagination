import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';

import Store from './store/index';
import Header from './components/Header/index';
import Main from './components/Main/index';
import Footer from './components/Footer/index';

const App = () => (
  <div id="app" >
    <Store>
      <Header />
      <Main />
      <Footer />
    </Store>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
