import SvnthInWorld from './HomeAssets/queens-7-world.png'

const IntroductionSection = () => {
    return (
        <section class="intro-container1">
            <div class="left-half">
                
                <div className="intro-title">About This Website</div>
                <div className="para-text-container">
                    <div className="para-text">
                    This website has been developed for Instructors at Queen’s University to use as a tool when looking to find activities, assessments or just inspiration related to the 17 UN Sustainable Development Goals (SDGs). <br></br><br></br>By embedding a range of activities that address the SDGs, you play an active role in helping Queen's to meet their mission of fostering global change, as well as providing students with opportunities to work on issues that matter to them. </div>
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
