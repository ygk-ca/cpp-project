import "../styles/Footer.css";
import FooterLogo from './footer-logo.png'

const Footer = () => {
    return (
        <footer>
            <section class="ft-main">
                <div class="ft-main-item">
                    <h2 class="ft-title">Website Copyright</h2>
                    <div className="copyright-item">
                    Unless otherwise specified, this work is licensed under a <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>. This means that you are free to Share (copy and redistribute the material in any medium or format) and Adapt (remix, transform, and build upon the material), under the following terms. 
                    </div>
                </div>
                <div class="ft-main-item">
                    <h2 class="ft-title">United Nations Copyright</h2>
                    <div className="copyright-item">
                        TODO -- UN logo (without emblem)<br></br>Icons and logos are reproduced in accordance with the UN SDG Guidelines, May 2020.
                    </div>
                </div>
                {/* <div class="ft-main-item">
                    
                </div>
                <div class="ft-main-item">
                    
                </div> */}
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
                        &copy;2022-present. Queen's University Arts and Science Experiential Learning Team, All Rights Reserved.
                    </div>
                </div>

                {/* <ul className="ft-legal-list">
                    <li><a href="#">Back to Top</a></li>
                    <li><a target="_blank" href="https://www.queensu.ca/artsci/terms-and-conditions">Terms &amp; Conditions</a></li>
                    <li><a target="_blank" href="https://www.queensu.ca/accessandprivacy/">Privacy Policy</a></li>
                    <li>&copy;2022-present. Queen's University Arts and Science Experiential Learning Team, All Rights Reserved.</li>
                </ul> */}
            </section>
        </footer>
    )
}

export default Footer