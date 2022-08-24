import "../styles/Footer.css";
import FooterLogo from './footer-logo.png'

const Footer = () => {
    return (
        <footer>
            <section class="ft-main">
                <div class="ft-main-item">
                    <h2 class="ft-title">Website Copyright</h2>
                    <div className="copyright-item">
                        This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License. It is attributed to the Experiential Learning & Programming team, Faculty of Arts & Science, Queen’s University and the original version can be found here (insert link).
                    </div>
                </div>
                <div class="ft-main-item">
                    <h2 class="ft-title">United Nations Copyright</h2>
                    <div className="copyright-item">
                        UN logo (without emblem)<br></br>Icons and logos are reproduced in accordance with the UN SDG Guidelines, May 2020.
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

            <section class="ft-legal">
                <ul class="ft-legal-list">
                    <li><a href="#">Back to Top</a></li>
                    <li><a target="_blank" href="https://www.queensu.ca/artsci/terms-and-conditions">Terms &amp; Conditions</a></li>
                    <li><a target="_blank" href="https://www.queensu.ca/accessandprivacy/">Privacy Policy</a></li>
                    <li>&copy;2022-present. Queen's University Arts and Science Experiential Learning Team, All Rights Reserved. </li>
                </ul>
            </section>
        </footer>
    )
}

export default Footer