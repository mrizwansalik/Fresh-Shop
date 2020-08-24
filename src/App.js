import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Main from './component/navigation/main';
import Search from './component/navigation/Search';
import Advertisement from './component/navigation/Advertisement';
import Contact from './component/navigation/Contact';
import Submit from './component/navigation/submitATemplate';
import Home from './component/Home'
import Footer from './component/footer';
import Navbar from './component/navbar';
import Header from './component/header';
import Content from './component/content';


function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
         <Navbar />
         <Header/>
      <Switch>
      <Route exact path='/' component={Main}/>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/submit-a-template' component={Submit}/>
      <Route exact path='/contact-us' component={Contact}/>
      <Route exact path='/search' component={Search}/>
      <Route exact path='/advertise' component={Advertisement}/>
      </Switch>
      <Footer />
      </BrowserRouter>
      
      

      {/* <Header /> */}
      {/* <Footer /> */}
      
    </div>
  );
}

export default App;
