import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
let start, end;
start = new Date().getTime();
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
end = new Date().getTime();
console.log('Time to render: ' + (end - start));
