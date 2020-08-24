import React from 'react';
import Aside from './aside';
const Search = () => {
    return ( <div className="container">
     <div className="wrapper row4">
        <div id="container">
          {/* ################################################################################################ */}
          <div id="content">
            <h1><span>Advanced Template Search</span></h1>
            <p>If you are looking for a specific niche, take a look at the <a href="/template-categories">template categories here »</a></p>
            <p>Please have a little patience whilst waiting for the results.</p>
            <section id="searchform">
              <form action="/search#searchresults" method="post">
                <label htmlFor="templatename"><strong>Name:</strong>
                  <input type="text" name="templatename" id="templatename" />
                </label>
                {/* ##################################################################################### */}
                <label htmlFor="doctypeused" className="last"><strong>Doctype:</strong>
                  <select name="doctypeused" id="doctypeused">
                    <option value>Please Select</option>
                    <option value="HTML 4.01">HTML 4.01</option>
                    <option value="HTML 4.01 Transitional">HTML 4.01 Transitional</option>
                    <option value="HTML 5">HTML 5</option>
                    <option value="XHTML 1.0 Strict">XHTML 1.0 Strict</option>
                    <option value="XHTML 1.0 Transitional">XHTML 1.0 Transitional</option>
                    <option value="XHTML 1.1">XHTML 1.1</option>
                    <option value="XHTML Basic 1.0">XHTML Basic 1.0</option>
                    <option value="XHTML Basic 1.1">XHTML Basic 1.1</option>
                  </select>
                </label>
                {/* ##################################################################################### */}
                <label htmlFor="layouttype"><strong>Layout:</strong>
                  <select name="layouttype" id="layouttype">
                    <option value>Please Select</option>
                    <option value="Fixed Width">Fixed Width</option>
                    <option value="Fluid">Fluid</option>
                    <option value="Elastic">Elastic</option>
                    <option value="Responsive">Responsive</option>
                  </select>
                </label>
                {/* ##################################################################################### */}
                <label htmlFor="columnsused" className="last"><strong>Columns:</strong>
                  <select name="columnsused" id="columnsused">
                    <option value>Please Select</option>
                    <option value="1 Column">1 Column</option>
                    <option value="2 Columns">2 Columns</option>
                    <option value="3 Columns">3 Columns</option>
                    <option value="Mixed Columns">Mixed Columns</option>
                  </select>
                </label>
                {/* ##################################################################################### */}
                <label htmlFor="contrast"><strong>Contrast:</strong>
                  <select name="contrast" id="contrast">
                    <option value>Please Select</option>
                    <option value="Light on Dark">Light on Dark</option>
                    <option value="Dark on Light">Dark on Light</option>
                    <option value="Mixed">Mixed</option>
                  </select>
                </label>
                {/* ##################################################################################### */}
                <label htmlFor="colour" className="last"><strong>Colour:</strong>
                  <select name="colour" id="colour">
                    <option value>Please Select</option>
                    <option value="Black">Black</option>
                    <option value="Blue">Blue</option>
                    <option value="Brown">Brown</option>
                    <option value="Dark_Grey">Dark Grey</option>
                    <option value="Green">Green</option>
                    <option value="Light_Grey">Light Grey</option>
                    <option value="Light_Blue">Light Blue</option>
                    <option value="Orange">Orange</option>
                    <option value="Pink">Pink</option>
                    <option value="Purple">Purple</option>
                    <option value="Red">Red</option>
                    <option value="White">White</option>
                    <option value="Yellow">Yellow</option>    </select>
                </label>
                {/* ##################################################################################### */}
                <div id="inputfield" className="clear">
                  <input className="submitbutton" name="submit" type="submit" defaultValue="Submit" />
                  <input className="checkbox" type="radio" name="searchtype" defaultValue="all" defaultChecked="checked" />
                  Match all Terms
                  <input className="checkbox" type="radio" name="searchtype" defaultValue="any" />
                  Match Any Term </div>
              </form>
            </section>
            <p>Please select your search criterion and click the submit button.</p>
          </div>
          {/* right column */}
          <aside>
            <Aside />
          </aside>
        </div></div>

</div>
        )
}
 
export default Search;