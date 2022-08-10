import "../styles/Filter.css";

import FilterTitle from "../components/FilterComponents/FilterTitle";
import FilterBody from "../components/FilterComponents/FilterBody";
import ContactBanner from "../components/FilterComponents/ContactBanner";

const Filter = () => {
    return (
        <div className="">
            <FilterTitle />
            <ContactBanner />
            <div>
                <FilterBody/>
            </div>
            
        </div>
    )
}

export default Filter