import React from 'react';
import { Link , NavLink } from 'react-router-dom';


const Navbar = () => {
    return (


        <div className="wrapper row1">
          <div id="topbar" className="clear">
            <nav>
              <ul className='d-flex justify-content-end '>
                  
                  <div className='nav-item'><Link className='nav-link' to="/home" title="Home">Home</Link></div>
                  <div className='nav-item'><NavLink className='nav-link' to="/submit-a-template" title="Submit a Free CSS Template">Submit a Template</NavLink></div>
                  <div className='nav-item'><NavLink className='nav-link' to="/contact-us" title="Contact Us">Contact Us</NavLink></div>
                  <div className='nav-item'><NavLink className='nav-link' to="/search" title="Search">Search</NavLink></div>
                  <div className='nav-item'><NavLink className='nav-link' to="/advertise" title="Advertise">Advertise</NavLink></div>
                  </ul>
            </nav>
          </div>
        </div>


    //      <nav className="container">
    //     <div className="d-flex justify-content-end">
    //         <div className=''>
    //             <div className='d-flex text-secondary'>
    //                <div className='nav-item'><Link className='nav-link' to='/home'>Home</Link></div>
    //                <div className='nav-item'><NavLink className='nav-link' to='/submitatemplate'>Submit a Template  </NavLink></div>
    //                <div className='nav-item'><NavLink className='nav-link' to='/contact'>Contact us  </NavLink></div>
    //                <div className='nav-item'><NavLink className='nav-link' to='/search'>Search  </NavLink></div>
    //                <div className='nav-item'><NavLink className='nav-link' to='/advertisement'>Advertise</NavLink></div>
    //             </div>
    //         </div>
    //     </div>

    // </nav> 
    );
}
 
export default Navbar;