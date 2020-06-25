import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import {addPost} from "./redux/state";



export let rerenderEntiredTree = (State)=> {
ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={State} addPost={addPost}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
  }