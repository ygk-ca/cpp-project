import "../styles/Footer.css";

const Footer = () => {
    return (
        <footer>
            <div class="wrapper">
            <small>&copy;2022 <strong>Queen's University Essential Learning Program</strong>, All Rights Reserved</small>
            <nav class="footer-nav">
                <a href="#">Back to Top</a>
                <a target="_blank" href="https://www.queensu.ca/artsci/terms-and-conditions">Terms of Use</a>
                <a target="_blank" href="https://www.queensu.ca/accessandprivacy/">Privacy</a>
                <a href="admin-page">Admin Page</a>
            </nav>
            </div>
        </footer>
    )
}

export default Footer