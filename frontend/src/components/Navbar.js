import { useEffect, useRef, useState } from "react";
import "../styles/Navbar.css";
import QueensLogoH from "../assets/queens-logo-horizontal.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const mainListDivRef = useRef(null);

    function onClickNavTrigger() {
        setIsActive((a) => !a);
        const mainListDivEl = mainListDivRef.current;
        mainListDivEl.classList.toggle("show_list");
    }

    useEffect(() => {
        const listenToScroll = () => {
        if (window.pageYOffset > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
        };
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    }, []);


    return (
        <div className="navBody">
                  <nav className={"nav " + (scrolled ? "affix" : "")}>
                    <div className="container">
                        <div className="logo">
                            <a href="https://www.queensu.ca/artsci/">
                            <img src={QueensLogoH} height="80"></img>
                            </a>
                        </div>
                        <div id="mainListDiv" className="main_list" ref={mainListDivRef}>
                            <ul className="navlinks">
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Services</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                            </ul>
                        </div>
                        <span className={`navTrigger ${isActive ? "active" : ""}`} onClick={onClickNavTrigger}>
                            <i></i>
                            <i></i>
                            <i></i>
                        </span>
                    </div>
                </nav>
        </div>
    )
}

export default Navbar

// import { Link } from 'react-router-dom'

// const Navbar = () => {
//     return (
//         <header>
//             <div className="container">
//                 <Link to="/">
//                     <h1>Temp Navbar</h1>
//                 </Link>
//             </div>
//         </header>
//     )
// }
// export default Navbar