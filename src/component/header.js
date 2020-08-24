import React, { Component } from 'react';
import Content from './content';
import { NavLink,  BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Free_template from './header-component/Free_css_template';
import Premuimem_template from './header-component/Premuimem_templates';
import Css_layout from './header-component/css_layout';
import Css_menu from './header-component/css_menu';
// import SITE123 from '../SITE123.jpeg'

class Header extends Component {
    state = {  }
    render() { 
        return ( 
              
          <Router>
            
            
            <div>
            <div className="wrapper row2">
            <header id="header">
              <div id="hgroup">
                <h1><a to="https://www.free-css.com/" title="Free CSS">Free CSS</a></h1>
                <h2>Free CSS Templates, CSS Layouts &amp; More!</h2>
              </div>
              <div className="ostbanner"><a to="//www.os-templates.com/"><img src="/assets/images/ost-468x60.jpg" alt="Free and Premium Website Templates" title="Download Free Website Templates" /></a></div>
              <div id="topbanner"><div id="bsap_1306116" className="bsap bsap_1306116" data-serve="CVAIT5QN">
                  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n        \n          div.bsap_1306116{width:100%;display:block;}div.bsap_1306116 a{width:468px;}div.bsap_1306116 a img{padding:0;}div.bsap_1306116 a em{font-style:normal;}div.bsap_1306116 a{display:block;font-size:11px;color:#888;font-family:verdana,sans-serif;margin:0;text-align:center;text-decoration:none;overflow:hidden;}\ndiv.bsap_1306116 img{border:0;clear:right;}\ndiv.bsap_1306116 a.adhere{color:#666;font-weight:bold;font-size:12px;border:1px solid #ccc;background:#e7e7e7;text-align:center;}\ndiv.bsap_1306116 a.adhere:hover{border:1px solid #999;background:#ddd;color:#333;}\ndiv.bsap_1306116 iframe{display:block;font-size:11px;color:#888;font-family:verdana,sans-serif;margin:0;text-align:center;text-decoration:none;overflow:hidden;float:left;}div.bsap_1306116 a{line-height:100%;}div.bsap_1306116 a.adhere{width:468px;height:60px;line-height:480%;}html>body div.bsap_1306116 a.adhere{width:466px;height:58px;}div.bsap_1306116 img.s{height:0;width:0;}\n        \n        .bsap_1306116 .ads-via { display: block; }\n        .bsap_1306116 .adhere:nth-of-type(1n+1) { display: none; }\n        .bsap_1306116 .adhere:nth-of-type(1) { display: block; }\n      " }} />
                  <a to="//srv.buysellads.com/ads/click/x/GTND42Q7FTYDT23UCAS4YKQMF6SIKKQ7CYBDEZ3JCWAI52Q7CEBIE2QKCVAD6KQMCTSIEKQLCVBD523UCASDKKQKC6BIL53ECVBIKK3EHJNCLSIZ" className="ad0 odd " title="SITE123 - Website Builder" id="bsa_414272" target="_blank" rel="nofollow">
                    <img src="https://s3.buysellads.com/creatives/ae9ecf6e605a5fa20cc834e15c549c48-1519045481.jpeg" width={468} height={60} alt="SITE123 - Website Builder" />
                  </a>
                </div></div>
              <nav id="topnav">
                <ul className='d-flex justify-content-between m-2'>
                  <div className='nav-item'><NavLink className='nav-link' to="/free-css-templates" title="Free CSS Templates">Free CSS Templates</NavLink></div>
                  <div className='nav-item'><NavLink className='nav-link' to="/commercial-templates" title="Premium CSS Templates">Premium CSS Templates</NavLink></div>
                  <div className='nav-item'><NavLink className='nav-link' to="/free-css-layouts" title="Free CSS Layouts">Free CSS Layouts</NavLink></div>
                  <div className='nav-item'><NavLink className='nav-link' to="/free-css-menus" title="Free CSS Menus">Free CSS Menus</NavLink></div>
                </ul>
              </nav>
            </header>
          </div>
          <div className="wrapper row3">
          <div id="shout">
            <div id="bsap_2365" className="bsap bsap_2365" data-serve="CV7DP2T">
              <style type="text/css" dangerouslySetInnerHTML={{__html: "\n        \n          div.bsap_2365{width:100%;display:block;}div.bsap_2365 a{width:900px;}div.bsap_2365 a img{padding:0;}div.bsap_2365 a em{font-style:normal;}div.bsap_2365 a{display:block;font-size:11px;color:#888;font-family:verdana,sans-serif;margin:0 4px 10px 0;text-align:center;text-decoration:none;overflow:hidden;}\ndiv.bsap_2365 img{border:0;clear:right;}\ndiv.bsap_2365 a.adhere{color:#666;font-weight:bold;font-size:12px;border:1px solid #ccc;background:#e7e7e7;text-align:center;}\ndiv.bsap_2365 a.adhere:hover{border:1px solid #999;background:#ddd;color:#333;}div.bsap_2365 a{line-height:100%;}div.bsap_2365 a.adhere{width:900px;height:120px;line-height:960%;}html>body div.bsap_2365 a.adhere{width:898px;height:118px;}div.bsap_2365 img.s{height:0;width:0;}\n        \n        .bsap_2365 .ads-via { display: block; }\n        .bsap_2365 .adhere:nth-of-type(1n+1) { display: none; }\n        .bsap_2365 .adhere:nth-of-type(1) { display: block; }\n      " }} />
              {/*INLINE*/}<a target="_blank" rel="nofollow noopener" to="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=donate%40free-css.com&item_name=Website+Support&currency_code=USD&source=url"><img src="https://www.free-css.com/assets/images/support-banner.jpg" alt="Support free-css.com" /></a>
            </div>
          </div>
        </div>
         
          </div>
          
          <Switch>
              <Route exact path='/free-css-templates' component={Free_template} />
              <Route exact path='/commercial-templates' component={Premuimem_template} />
              <Route exact path='/free-css-layouts' component={Css_layout} />
              <Route exact path='/free-css-menus' component={Css_menu} />
            </Switch>
      
        </Router>
        );
    }
}
 
export default Header;