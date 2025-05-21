import {Header} from "./components/Header";
import {HomeSection} from "./components/HomeSection";
import {Content} from "./components/Content";
import {Skills} from "./components/Skills";
import {Footer} from "./Footer";

const Portfolio = () => {
    return (
        <div
            className="min-h-screen flex flex-col"
            style={{
                borderRadius: "50px",
                background: "linear-gradient(180deg, #F9FAFB 8.34%, rgba(255, 255, 255, 0.00) 84.15%)",
            }}
        >
            <Header/>
            <HomeSection/>
            <Content/>
            <Skills/>
            <Footer/>
        </div>
    );
};

export default Portfolio;
