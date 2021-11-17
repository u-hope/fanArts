import "./mywork.css";
import "../../components/Slider/Slider";
import Slider from "../../components/Slider/Slider";

export default function MyWork(){

    window.addEventListener('scroll',()=>{
        var title = document.querySelector('.sliderTitle');
        var contentPosition = title.getBoundingClientRect().top;
        var screenPosition = window.innerHeight;
        if (contentPosition < screenPosition){
            title.classList.add('active');
        }else{
            title.classList.remove('active');
        }
    })

    return(
        <div className="myWork" id="myWork">
            <div className="myContainer">
            <div className="sliderTitle">
                <h1>My Works</h1>
            </div>
               {<Slider/>}
            </div>
        </div>
    );
}
