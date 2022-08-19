import SvnthInWorld from './HomeAssets/queens-7-world.png'

const IntroductionSection = () => {
    return (
        <section class="intro-container1">
            <div class="left-half">
                
                <div className="intro-title">About This Resource</div>
                <div className="para-text-container">
                    <div className="para-text">
                        This website has been developed for Instructors at Queen’s University to use as a tool when looking to find activities, assessments or just inspiration related to the 17 UN Sustainable Development Goals (SDGs). <br></br><br></br>By embedding a range of activities that address the SDGs, you play an active role in helping Queen's to meet their mission of fostering global change, as well as providing students with opportunities to work on issues that matter to them. 
                    </div>
                </div>
                <div className="dash">
                    <hr/>
                </div>
                
                <div className="">
                    <div className="learn-more">
                        <strong>LEARN MORE</strong> by clicking on one of the following tabs in the navigation bar:
                    </div>
                </div>
                <div className="list">
                    <ul>
                        <li><u>Resources</u> will take you to a page of external resources where you can filter using keywords to find what you need. Please check back often as this list will be updated on a regular basis. </li>
                        <br></br>
                        <li><u>Catalogue</u> will take you to a table where filters will help you to find relevant discussion topics, assessment ideas and mini case studies.  For the most part, the goals and priorities are from non-profit organizations, with a few for-profit organizations added into the mix.  </li>
                        <br></br>
                        <li><u>Contact</u> want to know more, set up a consultation with one of our team or just need a bit of help navigating this resource?  Fill out the contact form and we’ll get back in touch, usually the same day! </li>
                        
                    </ul>
                </div>
                
            </div>
            <div class="right-half">
                <article>
                    <a target="_blank" href="https://www.queensu.ca/gazette/stories/queen-s-maintains-top-10-global-position-times-higher-education-impact-rankings">
                        <img className="intro-img" src={SvnthInWorld} alt="Queens-7th-In-World-For-SDG-Times-Higher-Edu" height="450"></img>
                    </a>
                </article>
            </div>
        </section>
        
    )
}

export default IntroductionSection
