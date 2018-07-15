import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import MethodDraw from './MethodDraw';

ReactDOM.render(
  <MethodDraw />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
