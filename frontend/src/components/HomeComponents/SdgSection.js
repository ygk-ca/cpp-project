import SDG1 from './SDGIcons/sdg1.png'
import SDG2 from './SDGIcons/sdg2.png'
import SDG3 from './SDGIcons/sdg3.png'
import SDG4 from './SDGIcons/sdg4.png'
import SDG5 from './SDGIcons/sdg5.png'
import SDG6 from './SDGIcons/sdg6.png'
import SDG7 from './SDGIcons/sdg7.png'
import SDG8 from './SDGIcons/sdg8.png'
import SDG9 from './SDGIcons/sdg9.png'
import SDG10 from './SDGIcons/sdg10.png'
import SDG11 from './SDGIcons/sdg11.png'
import SDG12 from './SDGIcons/sdg12.png'
import SDG13 from './SDGIcons/sdg13.png'
import SDG14 from './SDGIcons/sdg14.png'
import SDG15 from './SDGIcons/sdg15.png'
import SDG16 from './SDGIcons/sdg16.png'
import SDG17 from './SDGIcons/sdg17.png'


const SdgBackground = () => {
    // Creating constant styles for each sdg
    
    return (
        <div className="flex-container">
            {/* No Poverty */}
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img className="sdgBox" alt="No Poverty" src={SDG1}/>
                    </div>
                    <div class="flip-card-back sdg1Color">
                        <a style={{color: "white"}} href="https://www.un.org/sustainabledevelopment/poverty/" target="_blank"><h3>Read More</h3></a>
                    </div>
                </div>
            </div>
            
            {/* Zero Hunger */}
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img className="sdgBox" alt="Zero Hunger" src={SDG2}/>
                    </div>
                    <div class="flip-card-back sdg2Color">
                        <a style={{color: "white"}} href="https://www.un.org/sustainabledevelopment/hunger/" target="_blank"><h3>Read More</h3></a>
                    </div>
                </div>
            </div>

            {/* Good Health & Well Being */}
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img className="sdgBox" alt="Good Health & Well Being" src={SDG3}/>
                    </div>
                    <div class="flip-card-back sdg3Color">
                        <a style={{color: "white"}} href="https://www.un.org/sustainabledevelopment/health/" target="_blank"><h3>Read More</h3></a>
                    </div>
                </div>
            </div>

            {/* Quality Education */}
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img className="sdgBox" alt="Quality Education" src={SDG4}/>
                    </div>
                    <div class="flip-card-back sdg4Color">
                        <a style={{color: "white"}} href="https://www.un.org/sustainabledevelopment/education/" target="_blank"><h3>Read More</h3></a>
                    </div>
                </div>
            </div>

            {/* Gender Equality */}
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img className="sdgBox" alt="Gender Equality" src={SDG5}/>
                    </div>
                    <div class="flip-card-back sdg5Color">
                        <a style={{color: "white"}} href="https://www.un.org/sustainabledevelopment/gender-equality/" target="_blank"><h3>Read More</h3></a>
                    </div>
                </div>
            </div>

            {/* Clean Water and Sanitation */}
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img className="sdgBox" alt="Clean Water and Sanitation" src={SDG6}/>
                    </div>
                    <div class="flip-card-back sdg6Color">
                        <a style={{color: "white"}} href="https://www.un.org/sustainabledevelopment/water-and-sanitation/" target="_blank"><h3>Read More</h3></a>
                    </div>
                </div>
            </div>

            {/* Affordable and Clean Energy */}
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img className="sdgBox" alt="Affordable and Clean Energy" src={SDG7}/>
                    </div>
                    <div class="flip-card-back sdg7Color">
                        <a style={{color: "white"}} href="https://www.un.org/sustainabledevelopment/energy/" target="_blank"><h3>Read More</h3></a>
                    </div>
                </div>
            </div>
            
            {/* Decent Work and Economic Growth */}
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img className="sdgBox" alt="Decent Work and Economic Growth" src={SDG8}/>
                    </div>
                    <div class="flip-card-back sdg8Color">
                        <a style={{color: "white"}} href="https://www.un.org/sustainabledevelopment/economic-growth/" target="_blank"><h3>Read More</h3></a>
                    </div>
                </div>
            </div>

            {/* Industry, Innovation and Infrastructure */}
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img className="sdgBox" alt="Industry, Innovation and Infrastructure" src={SDG9}/>
                    </div>
                    <div class="flip-card-back sdg9Color">
                        <a style={{color: "white"}} href="https://www.un.org/sustainabledevelopment/infrastructure-industrialization/" target="_blank"><h3>Read More</h3></a>
                    </div>
                </div>
            </div>

            {/* Reduced Inequalities */}
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img className="sdgBox" alt="Reduced Inequalities" src={SDG10}/>
                    </div>
                    <div class="flip-card-back sdg10Color">
                        <a style={{color: "white"}} href="https://www.un.org/sustainabledevelopment/inequality/" target="_blank"><h3>Read More</h3></a>
                    </div>
                </div>
            </div>

            {/* Sustainable Cities and Communities */}
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img className="sdgBox" alt="Sustainable Cities and Communities" src={SDG11}/>
                    </div>
                    <div class="flip-card-back sdg11Color">
                        <a style={{color: "white"}} href="https://www.un.org/sustainabledevelopment/cities/" target="_blank"><h3>Read More</h3></a>
                    </div>
                </div>
            </div>

            {/* Responsible Consumption and Production */}
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img className="sdgBox" alt="Responsible Consumption and Production" src={SDG12}/>
                    </div>
                    <div class="flip-card-back sdg12Color">
                        <a style={{color: "white"}} href="https://www.un.org/sustainabledevelopment/sustainable-consumption-production/" target="_blank"><h3>Read More</h3></a>
                    </div>
                </div>
            </div>
            
            {/* Climate Action */}
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img className="sdgBox" alt="Climate Action" src={SDG13}/>
                    </div>
                    <div class="flip-card-back sdg13Color">
                        <a style={{color: "white"}} href="https://www.un.org/sustainabledevelopment/climate-change/" target="_blank"><h3>Read More</h3></a>
                    </div>
                </div>
            </div>

            {/* Life Below Water */}
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img className="sdgBox" alt="Life Below Water" src={SDG14}/>
                    </div>
                    <div class="flip-card-back sdg14Color">
                        <a style={{color: "white"}} href="https://www.un.org/sustainabledevelopment/oceans/" target="_blank"><h3>Read More</h3></a>
                    </div>
                </div>
            </div>

            {/* Life on Land */}
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img className="sdgBox" alt="Life on Land" src={SDG15}/>
                    </div>
                    <div class="flip-card-back sdg15Color">
                        <a style={{color: "white"}} href="https://www.un.org/sustainabledevelopment/biodiversity/" target="_blank"><h3>Read More</h3></a>
                    </div>
                </div>
            </div>

            {/* Peace and Justice Strong Institutions */}
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img className="sdgBox" alt="Peace and Justice Strong Institutions" src={SDG16}/>
                    </div>
                    <div class="flip-card-back sdg16Color">
                        <a style={{color: "white"}} href="https://www.un.org/sustainabledevelopment/peace-justice/" target="_blank"><h3>Read More</h3></a>
                    </div>
                </div>
            </div>

            {/* Partnerships for the Goals */}
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img className="sdgBox" alt="Partnerships for the Goals" src={SDG17}/>
                    </div>
                    <div class="flip-card-back sdg17Color">
                        <a style={{color: "white"}} href="https://www.un.org/sustainabledevelopment/globalpartnerships/" target="_blank"><h3>Read More</h3></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SdgBackground 