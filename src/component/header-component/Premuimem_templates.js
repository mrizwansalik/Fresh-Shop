import React from 'react';
import Aside from '../navigation/aside';
import Transform from '../images/transform.jpg'
import Ellusive from '../images/ellusive.jpg'
import Insight from '../images/insight.jpg'
import Charity from '../images/charity-group.jpg'
import Global from '../images/global-magazine.jpg'
import Book from '../images/book-of-wisdom.jpg'
import CleanCut_lite from '../images/cleancut-lite.jpg'
import CleanCut_pro from '../images/cleancut-pro.jpg'

const Premuimem_template = () => {
    return ( <div>
         <div className="wrapper row4">
        <div id="container">
          {/* ################################################################################################ */}
          <div id="content">
            <h1><span>Premium CSS Templates</span></h1>
            <p>We will be updating / re-developing this part of the site shortly, but in the meantime here is a small selection of templates that we will be featuring here:</p>
            <div id="showcase">
              <ul className="clear">
                <li>
                  <figure><a target="_blank" rel="nofollow noopener" href="https://www.os-templates.com/premium-website-templates/transform"><span className="name">Transform</span> <img src={Transform} alt="" /> <span className="posted">View This Template »</span></a></figure>
                </li>
                <li>
                  <figure><a target="_blank" rel="nofollow noopener" href="https://www.os-templates.com/premium-website-templates/ellusive"><span className="name">Ellusive</span> <img src={Ellusive} alt="" /> <span className="posted">View This Template »</span></a></figure>
                </li>
                <li>
                  <figure><a target="_blank" rel="nofollow noopener" href="https://www.os-templates.com/premium-website-templates/insight"><span className="name">Insight</span> <img src={Insight} alt="" /> <span className="posted">View This Template »</span></a></figure>
                </li>
                <li>
                  <figure><a target="_blank" rel="nofollow noopener" href="https://www.os-templates.com/premium-website-templates/charity-group"><span className="name">Charity Group</span> <img src={Charity} alt="" /> <span className="posted">View This Template »</span></a></figure>
                </li>
                <li>
                  <figure><a target="_blank" rel="nofollow noopener" href="https://www.os-templates.com/premium-website-templates/global-magazine"><span className="name">Global Magazine</span> <img src={Global} alt="" /> <span className="posted">View This Template »</span></a></figure>
                </li>
                <li>
                  <figure><a target="_blank" rel="nofollow noopener" href="https://www.os-templates.com/premium-website-templates/book-of-wisdom"><span className="name">Book Of Wisdom</span> <img src={Book} alt="" /> <span className="posted">View This Template »</span></a></figure>
                </li>
                <li>
                  <figure><a target="_blank" rel="nofollow noopener" href="https://www.os-templates.com/premium-website-templates/cleancut-lite"><span className="name">CleanCut Lite</span> <img src={CleanCut_lite} alt="" /> <span className="posted">View This Template »</span></a></figure>
                </li>
                <li>
                  <figure><a target="_blank" rel="nofollow noopener" href="https://www.os-templates.com/premium-website-templates/cleancut-pro"><span className="name">CleanCut Pro</span> <img src={CleanCut_pro} alt="" /> <span className="posted">View This Template »</span></a></figure>
                </li>
              </ul>
            </div>
            <div className="center"><div id="bsap_1304197" className="bsarocks bsap_b893e54e42ad5b76e7b252f59be18e67" /></div>
          </div>
          {/* right column */}
          <aside>
              <Aside />
          </aside>
        </div></div>
    </div> );
}
 
export default Premuimem_template;