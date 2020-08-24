import React from 'react';
import Aside from './aside';
const SubmitATemplate = () => {
    return ( <div className="container">
         <div className="wrapper row4">
        <div id="container">
          {/* ################################################################################################ */}
          <div id="content">
            <h1 id="TemplateSubmissionForm"><span>Submit A Free CSS Template</span></h1>
            <p>If you would like to submit your free CSS templates simply send us an email to "<strong>info AT free-css.com</strong>", with a link to the templates demo page, and a link to where we can download the zip file.</p>
            <p>Please note - please do not send us the downloadable file directly via email, all templates are evaluated by Free CSS and if it/they fulfill all guidelines it/they will then be placed into the waiting list to be published.</p>
            <p>Free CSS does not guarantee submission and therefore reserve the right to publish or reject any templates that are submitted.</p>
            <p>Free CSS showcases <strong>straight <a href="/free-css-templates/page1">HTML templates</a></strong> that can be converted/ported into various systems such as Blogging software, E-commerce software, CMS systems etc..</p>
            <h2><span>Template Submission Terms</span></h2>
            <p>If you are not the original developer of a template that you wish to submit, make sure that all template credits are intact.</p>
            <p>The template credits are important for copyright - Free CSS can not be held responsible for templates that are submitted by 3<sup>rd</sup> parties who have removed or changed credit information.</p>
            <p>If template credits are not present in a template then Free CSS will search for the template name in the web, where possible and realistic Free CSS will add the original designer or developer credits to the template.</p>
            <p>When submitting a template to Free CSS you agree that Free CSS can change content, links and visual elements that are found within the template. You agree to Free CSS removing or changing all excessive external links found in templates other than credit links that are involved with the creation of the specific submitted template, including links to the template developer and associated template sponsors.</p>
            <p>When submitting a template to Free CSS you submit it on the premise that the template is your original design or that of your employee and that the design, source code and respective files have not been copied from anyones website. If you are a 3rd party submitting a template then you guarantee with your submission that all files submitted have been thoroughly checked and the original source has been notified that the template has been submitted to this website.</p>
            <p>Free CSS can not and will not be held responsible for templates that are or have been submitted which have been blatently copied from other sites. If a template is found to be copied from other sites then Free CSS will remove it/them. Free CSS supports Copyright and Intellectual Property Rights and frowns on those who do not abide by these laws and regulations. </p>
            <p>Free CSS reserves the right to add a rel="nofollow" tag to the credit links on template demonstration pages found within the live Free CSS website. The downloaded zip file with the original template does not contain a rel="nofollow" tag in the credit link(s).</p>
            <p>Free CSS does not publish or accept the following:</p>
            <ul>
              <li>Table based templates</li>
              <li>Pre-built Blog templates</li>
              <li>Pre-built Content management system templates</li>
              <li>Pre-built E-Commerce templates</li>
              <li>Template that are clearly from other developers that have had minor changes made to them</li>
              <li>Templates that are based upon one design and images have only changed, creating a line or templates that have no changes to the CSS or XHTML.</li>
            </ul>
            <p>Free CSS reserves the right not to publish templates that have been submitted either from 3<sup>rd</sup> parties or original designers or developers.</p>
            <p>All template that are submitted to Free CSS underly terms and conditions of "use" set down by the original developers.</p>
            <p>Free CSS will notify original developers of template misuse or copyright infringement where possible.</p>
            <p>Free CSS reserves the right to alter or modify these template submission terms without prior notice.</p>
          </div>
          {/* right column */}
          <aside >
            <Aside />
          </aside></div></div>
</div> );
}
 
export default SubmitATemplate;