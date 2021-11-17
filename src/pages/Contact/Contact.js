import "./contact.css";

export default function Contact(){
    return(
        <div className="contact" id="contact">
            <div className="content">
                <h2 className="contactTitle">Contact Me</h2>
                <p className="contactDetail">Commodo cillum consequat aute non ullamco excepteur nisi et. <br/>Lorem nulla ut irure ullamco deserunt aute officia. Culpa ad anim est Lorem labore velit labore Lorem qui anim do ad occaecat.</p>
            </div>
            <div className="container">
                <div className="contactInfo">
                    <div className="box">
                        <div className="icon">
                        <i class="fab fa-telegram"></i>
                        </div>
                        <div className="text">
                            <h3>Telegram</h3>
                            <a href="https://t.me/Fanuel" target="_blank">@Fanuel_Yilma or https//t.me/FAn_Arts</a>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon"><i class="fas fa-phone"></i></div>
                        <div className="text">
                            <h3>Phone</h3>
                            <p>0923-522-428</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon"><i class="fas fa-envelope-open-text"></i></div>
                        <div className="text">
                            <h3>Email</h3>
                            <p>fanaYilma34@gmail.com</p>
                        </div>
                    </div>
            </div>
          
          <div className="contactForm">
              <form>
                  <h2>
                      Send Message
                  </h2>
                  <div className="inputBox">
                      <input type="text" name="" required="required"/>
                          <span>Full Name</span>
                  </div>
                  <div className="inputBox">
                      <input type="text" name="" required="required"/>
                          <span>Email</span>
                      
                  </div>
                  <div className="inputBox">
                      <textarea required="required"></textarea>
                          <span>Type Your Message ...</span>
                  </div>
                  <div className="submit inputBox">
                      <input className="submitInput" type="submit" name="" value="Send"/>
                  </div>
              </form>
           </div>
          </div>
        </div>
    );
}