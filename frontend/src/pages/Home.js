import "../styles/Home.css";
import "../styles/Introduction.css";

// import home specific components
import TitleBackground from "../components/HomeComponents/TitleBackground";
import HomeBody from "../components/HomeComponents/HomeBody";


const Home = () => {
    return (
        <div className="">
            <TitleBackground/>
            <HomeBody/>
        </div>
    )
}

export default Home