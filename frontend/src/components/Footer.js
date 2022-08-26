import "../styles/Footer.css";
import FooterLogo from '../assets/footer-logo.png'

const Footer = () => {
    return (
        <footer>
            <section class="ft-main">
                <div class="ft-main-item">
                    <div className="copyright-item">
                        Unless otherwise specified, this work is licensed under a <a style={{color: "#a7a9ac"}} href="https://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>. This means that you are free to Share (copy and redistribute the material in any medium or format) and Adapt (remix, transform, and upon the material) this resource provided the guidelines in the Creative Commons link above are followed.   
                    </div>
                </div>
                <div class="ft-main-item">
                    <div className="copyright-item">
                    Queen’s University support(s) the Sustainable Development Goals. Icons and logos are reproduced in accordance with the United Nations Sustainable Development Goals Guidelines, May 2020. <br/><br/>The Faculty of Arts and Science sits on the traditional lands of the Haudenosaunee and Anishinaabe peoples (<a style={{color: "#a7a9ac"}} href="https://www.queensu.ca/artsci/about/equity-diversity-and-inclusion">learn more</a>).
                    </div>
                </div>
                <div className="ft-image">

                    <div class="ft-main-item">
                        <img src={FooterLogo} height="200"/>
                    </div>
                </div>
                
            </section>

            <section class="ft-social">
                <ul class="ft-social-list"/>
            </section>

            <section className="ft-legal">
                <div className="ft-legal-list">
                    <div className="ft-btm-left">
                        <a href="#"> Back to Top </a>
                        <a target="_blank" href="https://www.queensu.ca/artsci/terms-and-conditions"> Terms &amp; Conditions </a>
                        <a target="_blank" href="https://www.queensu.ca/accessandprivacy/"> Privacy Policy </a>
                        <a target="_blank" href="/admin-page"> Admin Login </a>
                    </div>
                    <div className="ft-btm-right">
                        &copy;2022-Present. Queen's University Arts and Science Experiential Learning Team, All Rights Reserved.
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer