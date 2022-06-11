import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import './index.css';

const WhoIAm = (props) => {
  return  (<div>
    <h2>My name is {props.name} and my surname is {props.surneme}</h2>
    <a href="{props.link}">{props.link}</a>
  </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App>
    <WhoIAm name='Klya' surneme='Tokarskyi' link='facebook.com'/>

    </App>
  </React.StrictMode>,
  document.getElementById('root')
);
