import Header from "../../components/header/Header";
import TopBar from "../../components/topbar/topBar";
import About from "../about/About";
import Contact from "../Contact/Contact";
import MyWork from "../My Work/MyWork";
import "./home.css";
// import Slider from "../../components/Slider/Slider";

export default function Home(){
    return(
        <div className="home">
        <TopBar/>
        <Header/>
        <About/>
        <MyWork/>
        <Contact/>
        </div>
    );
}