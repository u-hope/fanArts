import './slider.css';
import slides from '../../data/slides';

export default function Slider(){
    return(
        <div className="wrapper"> 
            <div className="slide">
               {
               slides.map((slide) =>{
                   return (
                       
                        <div className="sliderImage">
                            <img className="image" src={(slide.url)} alt="Server Down" />
                        </div>
                   )
               })
                }
            </div>
        </div>
    );
}