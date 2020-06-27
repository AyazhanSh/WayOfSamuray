import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';

import state, { subcriber } from './redux/state';

import './index.css';

import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import {addPost, updateNewText} from "./redux/state";



export let rerenderEntiredTree = (State)=> {
ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={State} addPost={addPost} updateNewText = {updateNewText}/>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
  }


rerenderEntiredTree(state)
subcriber(rerenderEntiredTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
