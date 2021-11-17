import "./topbar.css";
export default function topBar() {
  return (
    <div className="top">
      <div className="topLeft"> FanArts</div>
      <div className="topCenter">
        <ul className="topList">
          <a href="#home" className="topListItem">
            Home
          </a>
          <a href="#myWork" className="topListItem">
            My Works
          </a>
          <a href="#about" className="topListItem">
            About
          </a>
          <a href="#contact" className="topListItem">
            Contact
          </a>
        </ul>
      </div>
      <div className="topRight">
        <a href="https://www.facebook.com/fanuel.yilma" target="_blank"><i className="topIcon fab fa-facebook-f"></i></a>
        <i className="topIcon fab fa-twitter"></i>
        <a href="https://instagram.com/fanuely44?utm_medium=copy_link" target="_blank"><i className="topIcon fab fa-instagram"></i></a>
        <a href="https://t.me/Fanuely26" target="_blank"><i className="topIcon fab fa-telegram-plane"></i></a>
        <i className="topIcon fab fa-tiktok"></i>
      </div>
    </div>
  );
}
