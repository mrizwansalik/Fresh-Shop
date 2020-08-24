import React from 'react';
import Aside from './aside';
const Contact = () => {
    return ( <div className="container">
        <div className="wrapper row4">
        <div id="container">
          {/* ################################################################################################ */}
          <div id="content">
            <h1><span>Contact Free CSS</span></h1>
            <p><strong>Asking For Technical Help</strong></p>
            <p>We only offer technical help for templates that we have created and or have been part of.</p>
            <p>If you require technical help for any reason, please contact the developer / author of the template in question directly.</p>
            <p>Each template in our website has its own page, on the templates page you can see the name of the "<strong>Author</strong>" next to a small icon depicting a person - the author is the developer of that specific template. If it states "<strong>Free CSS</strong>", then we are the developer / author, in this situation we offer technical help (only in this situation).</p>
            <p>In general, you can find the contact details for the templates developer in the file you downloaded from our server(s), either via the "<strong>README</strong>" or "<strong>Licence</strong>" file. If there isn't a file, you can click the footer link in the template which will take you to the developers website, where you can then contact them.</p>
            <p>Some template developers do not provide free technical help or offer help at all for their free templates, in this case, you will have to seek technical help from your developer of choice or someone who has good working knowledge of HTML + CSS.</p>
            <p><strong>Important Note:</strong> By request of TemplateMonster, Free CSS have been asked to provide the following information:</p>
            <p>TemplateMonster <strong>DO NOT</strong> provide support for any of their free templates found within this website, they only provide support for premium products purchased from their website.</p>
            <p><strong>Templates Licences Information</strong></p>
            <p>Our website features thousands of templates from developers throughout the world. Each developer has chosen a licence type that best serves their needs.</p>
            <p>Displayed on each of the template pages is a basic overview of the licence used for said template - if you require more specific information about which licence is in use, please contact the developer of the template directly.</p>
            <p>To contact the developer, please follow the instructions as described above.</p>
            <p><strong>About The Templates In Our Site</strong></p>
            <p>Templates found within the Free CSS website are "<strong>HTML</strong>" templates, they are not WordPress themes or any other pre-built / pre-ported CMS theme, template or skin.</p>
            <p>You can not simply upload the HTML template to your WordPress theme folder and activate the template, it won't work.</p>
            <p>To use the templates found here in any form of CMS system, they have to be ported first. For more information we suggest you check out the numerous tutorials that can be found on the web on "how to port a HTML template" to your specific CMS of choice.</p>
            <p><strong>Our Details</strong></p>
            <p>For any other information please feel free to contact Free CSS via "info AT free-css.com".</p>
            <p><strong>IMPORTANT</strong>: By sending Free CSS an email, you agree to Free CSS using your data to process and answer your enquiry, for more information, please view our <a href="/help-and-support/privacy-policy">Privacy Policy</a>.</p>
            <p>Due to the amount of emails that Free CSS receives it may take a while for you to receive a response. Free CSS apologises for this but be rest assured all emails are read and where applicable are answered.</p>
          </div>
          {/* right column */}
          <aside >
            <Aside />
          </aside>
        </div></div>
 </div> );
}
 
export default Contact;