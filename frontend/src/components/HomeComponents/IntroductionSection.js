import SvnthInWorld from './HomeAssets/queens-7-world.png'

const IntroductionSection = () => {
    return (
        <section class="intro-container1">
            <div class="left-half">
                
                <div className="intro-title">About This Website</div>
                <div className="para-text-container">
                    <div className="para-text">Welcome to a program our team created to help instructional designers and instructors find inspiration or content to use in their curriculum. Our focus is on the 17 Sustainable Development Goals proposed by United Nations. <br></br><br></br>By incorporating these ideologies into your courses, you are becoming a part of Queen's University's mission as we strive to foster global change. Our Team has made the assessments accessible to you under the "Catalogue" tab to browse at your leisure.</div>
                </div>
                
            </div>
            <div class="right-half">
                <article>
                    <a target="_blank" href="https://www.queensu.ca/gazette/stories/queen-s-maintains-top-10-global-position-times-higher-education-impact-rankings">
                        <img className="intro-img" src={SvnthInWorld} alt="Queens-7th-In-World-For-SDG-Times-Higher-Edu" height="350"></img>
                    </a>
                </article>
            </div>
        </section>
        
    )
}

export default IntroductionSection
