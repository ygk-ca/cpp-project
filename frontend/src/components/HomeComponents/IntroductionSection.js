import SvnthInWorld from './queens-7-world.png'

const IntroductionSection = () => {
    return (
        <section class="intro-container1">
            <div class="left-half">
                
                <h1>About the Social Impact Learning Lab</h1>
                <div className="para-text">Welcome to a program our team created to help instructional designers and instructors find inspiration or content to use in their curriculum. Our focus is on the 17 Sustainable Development Goals proposed by United Nations. By incorporating these ideologies into your courses, you are becoming part of the un /......... as we strive to foster global change. Our Team has made the assessments accessible to you under the "Catalogue" tab to browse at your leisure.</div>
                
            </div>
            <div class="right-half">
                <article>
                    <a>
                    <img src={SvnthInWorld} alt="Queens-7th-In-World-For-SDG-Times-Higher-Edu" height="350"></img>
                    </a>
                </article>
            </div>
        </section>
        
    )
}

export default IntroductionSection
