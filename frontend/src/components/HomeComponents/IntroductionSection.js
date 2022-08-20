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
                <div className="list-container">
                    <div className="list">
                        <ul>
                            <li><strong>Resources</strong> will take you to a page of external resources where you can filter using keywords to find what you need.  </li>
                            <br></br>
                            <li><strong>Catalogue</strong> will take you to a table where filters will help you to find relevant discussion topics, assessment ideas and mini case studies (most being from non-profit organizations). </li>
                            <br></br>
                            <li><strong>Contact Us</strong> to learn more about this resource or set up a consultation with us. </li>
                            
                        </ul>
                    </div>
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
