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
    return (
        <div className="flex-container">
            {/* SDG 1 */}

            {/* Change to flip card thing */}
            <a href="https://www.un.org/sustainabledevelopment/poverty/"><img className="sdgBox" alt="No Poverty" src={SDG1} /></a>
            <a href="https://www.un.org/sustainabledevelopment/poverty/"><img className="sdgBox" alt="Zero Hunger" src={SDG2} /></a>
            <a href="https://www.un.org/sustainabledevelopment/poverty/"><img className="sdgBox" alt="Good Health & Well Being" src={SDG3} /></a>
            
        </div>
    )
}

export default SdgBackground 