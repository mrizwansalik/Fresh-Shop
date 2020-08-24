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
// import Content from './component/content';
import Free_template from './component/header-component/Free_css_template';
import Premuimem_template from './component/header-component/Premuimem_templates';
import Css_layout from './component/header-component/css_layout';
import Css_menu from './component/header-component/css_menu'


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
      <Route exact path='/free-css-templates' component={Free_template} />
      <Route exact path='/commercial-templates' component={Premuimem_template} />
      <Route exact path='/free-css-layouts' component={Css_layout} />
      <Route exact path='/free-css-menus' component={Css_menu} />
      </Switch>
      <Footer />
      </BrowserRouter>
      
      

      {/* <Header /> */}
      {/* <Footer /> */}
      
    </div>
  );
}

export default App;
