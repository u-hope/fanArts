import "./about.css";
import aboutImg from "../../Image/fana.jpg";


export default function About(){

    window.addEventListener('scroll',()=>{
        let content = document.querySelector('.about');
        let left = document.querySelector('.aboutLeft');
        let right = document.querySelector('.aboutRight');
        let contentPosition = content.getBoundingClientRect().top;
        let screenPosition = window.innerHeight;
        if(contentPosition < screenPosition){
            left.classList.add('activeLeft');
            right.classList.add('activeRight');
        }else{
            left.classList.remove('activeLeft');
            right.classList.remove('activeRight');
        }
    })
  

    return(
        <div className="about" id="about">
            <div id="aboutLeft" className="aboutLeft">
                <img src={aboutImg} className="aboutImg" alt=""/>
            </div>
            <div id="aboutRight" className="aboutRight">
                <p className="aboutTitle">About Me</p>
                <p className="aboutDetails">My Name is Fanuel Yilma am an Electromechanical Engineer and an Artist located in Addis Ababa, Ethiopia.
                i came to the art world when i was a child while watching an animation movie and noticed that i like to pay attention to details
                that is when i started drawing since then i have taught mself to draw,create designs and illustrations.
                </p>
            </div>
        </div>
    );
}