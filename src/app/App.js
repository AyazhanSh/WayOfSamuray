import React from 'react';
import './App.css';
import Header from '../components/header/Header';
import Navbar from '../components/navbar/Navbar';
import Profile from '../components/profile/Profile';
import Dialogs from '../components/dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
import Music from '../components/music/Music';
import News from '../components/news/News';
import Settings from '../components/settings/Settings';
import { updateNewText } from '../redux/state';

const App = (props) => {



  return (
    
    <div className="app-wrapper">
      <Header/>
     <Navbar/>
     <div className = "app-wrapper-content">
     <Route exact path = "/messages" render = {()=><Dialogs state = {props.state.dialogPage}/>}/>
      <Route path = "/profile" render = {()=><Profile state = {props.state.profilePage} addPost={props.addPost} updateNewText = {updateNewText}/>}/>
      <Route path = "/music" component = {Music}/>
      <Route path = "/news" component = {News}/>
      <Route path = "/settings" component = {Settings}/> 

    
     </div>
     
      
  
    </div>
   
  );
}

export default App;
