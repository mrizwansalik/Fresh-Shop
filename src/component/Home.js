import React from 'react';
import Aside from './navigation/aside';
import Five_hotel from './images/five-hotel.jpg'
import Go_tour from './images/go-tours.jpg'
import Mirasa from './images/miresa.jpg'

const Home = () => {
    return ( <div>
     <div>
        
        {/* ################################################################################################ */}
        
        {/* content */}
        <div className="wrapper row4">
          <div id="container">
            {/* ################################################################################################ */}
            <div id="latest">
              <section id="showcase">
                <h2><span>Latest Free CSS Templates</span></h2>
                <ul className="clear">
                  <li><figure><a href="/free-css-templates/page258/five-hotel" title="Five Hotel Website Template"><span className="name">Five Hotel</span> <img src={Five_hotel} alt="Five Hotel Free Website Template" title="View the Five Hotel Template Details" /> <span className="posted">View This Free CSS Template »</span></a></figure></li>
                  <li><figure><a href="/free-css-templates/page257/go-tours" title="Go Tours Website Template"><span className="name">Go Tours</span> <img src={Go_tour} alt="Go Tours Free Website Template" title="View the Go Tours Template Details" /> <span className="posted">View This Free CSS Template »</span></a></figure></li>
                  <li><figure><a href="/free-css-templates/page257/miresa" title="Miresa Website Template"><span className="name">Miresa</span> <img src={Mirasa} alt="Miresa Free Website Template" title="View the Miresa Template Details" /> <span className="posted">View This Free CSS Template »</span></a></figure></li>
                </ul>
              </section>
            </div>
            <div id="content">
              <section id="services" className="clear">
                <h2><span>What's On Offer</span></h2>
                <ul>
                  <li className="odd one_half">
                    <div><a href="/free-css-templates" title="Free CSS Website Templates">Free CSS Templates</a><br />
                      Why not download 3085 free website templates. All of the templates have been built using <abbr title="Cascading Style Sheets">CSS</abbr> &amp; <abbr title="HyperText Markup Language">HTML</abbr> or <abbr title="Extensible HyperText Markup Language">XHTML</abbr></div>
                  </li>
                  <li className="even one_half">
                    <div><a href="/commercial-templates" title="Premium Website Templates">Premium CSS Templates</a><br />
                      If you can't find a free CSS website template that suits your needs, then why not take a look at the premium templates here.</div>
                  </li>
                  <li className="odd one_half" title="Free CSS Website Layouts">
                    <div><a href="/free-css-layouts">Free CSS Layouts</a><br />
                      We have tons of website layouts ready for download, sometimes mistaken for CSS templates due to the name.</div>
                  </li>
                  <li className="even one_half">
                    <div><a href="/free-css-menus" title="Free Website Menus">Free CSS Menus</a><br />
                      A wide range of CSS based menus ready for you to download and use in your next project.</div>
                  </li>
                  <li className="odd one_half">
                    <div><a href="/css-reference/css1-properties" title="CSS Code Reference">Free CSS Reference</a><br />
                      A reference for all the standard CSS mark-up that you will need to modify the templates, layouts &amp; menus' here.</div>
                  </li>
                  <li className="even one_half">
                    <div><a href="/free-css-resources" title="Resources For CSS Based Websites">Free CSS Resources</a><br />
                      Tons of links to help you find what you are looking for when it comes to CSS and website templates.</div>
                  </li>
                </ul>
              </section>
            </div>
            {/* right column */}
            <aside >
              <Aside />
            </aside>
            {/* ################################################################################################ */}
            <section id="thanks" className="clear">
              <h2><span>Free CSS.com</span></h2>
              <p>Free CSS has 3085 free website templates coded using HTML &amp; CSS in its gallery. The HTML website templates that are showcased on Free CSS.com are the best that can be found in and around the net.</p>
              <p>We would personally like to thank all of the website template designers and developers for all of their hard work in creating these free website templates. Without them Free CSS would probably not exist.</p>
              <p>Free CSS Admin</p>
            </section>
            <div className="clear" />
          </div>
        </div>
        {/* ############################ */}
        </div>
    </div> );
}
 
export default Home;