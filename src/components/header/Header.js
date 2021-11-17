import "./header.css";

export default function Header(){
    
    return(
        <div className="header" id="home">
            <div className="headerTextbox">
                 <h1 className="headingPrimary">
                    <span className="headingPrimary--main">Art</span>
                    <span className="headingPrimary--sub">is looking beyond whats visible</span> 
                    <span className="headingPrimary--main" >to the eye</span>   
                 </h1>
                        <p id="btn" className="btn btn--white btn--animated">Discover your Expression</p>
                   
             </div> 
        </div>
    );
}