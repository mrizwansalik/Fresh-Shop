import React from 'react';
import Aside from './aside';
const Advertisement = () => {
    return ( <div className="container">
        <div className="wrapper row4">
        <div id="container">
          {/* ################################################################################################ */}
          <div id="content">
            <h1><span>Advertise With Free CSS</span></h1>
            <p>If you would like to advertise your products or services with us you can, via Banner Ads. Banner space can be bought through BuySellAds. We chose BuySellAds as they are uncomplicated and provide an excellent solution for Free CSS and those who wish to advertise here and on other sites.</p>
            <p>Free CSS is permanently being updated in one way or another, whether it be new templates, layouts or menus. We like to keep the site up to date and fresh at all times.</p>
            <p style={{marginBottom: '50px'}}>If you would like to advertise with Free CSS please feel free to visit <a target="_blank" rel="nofollow noopener" href="https://free-css.bsa-whitelabel.com/">BuySellAds</a>.</p>
            <h2><span>Purchase Direct</span></h2>
            <p>If you would like to review our ad-space and purchase directly, please click the following link to our <a target="_blank" rel="nofollow noopener" href="https://free-css.bsa-whitelabel.com/">ad-inventory overview</a> page.</p>
          </div>
          {/* right column */}
          <aside>
            <Aside />
          </aside>
        </div></div>

  </div> );
}
 
export default Advertisement;