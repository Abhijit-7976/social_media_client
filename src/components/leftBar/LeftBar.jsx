import "./left-bar.scss";

const LeftBar = () => {
  return (
    <div className="left-bar">
      <div className="container">
        <div className="menue">
          <div className="item">
            <img
              src="/assets/icons/1.png"
              alt="friends icon"
            />
            <span>Friends</span>
          </div>
          <div className="item">
            <img
              src="/assets/icons/2.png"
              alt="groups icon"
            />
            <span>Groups</span>
          </div>
          <div className="item">
            <img
              src="/assets/icons/3.png"
              alt="Market icon"
            />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img
              src="/assets/icons/4.png"
              alt="watch icon"
            />
            <span>Watch</span>
          </div>
          <div className="item">
            <img
              src="/assets/icons/5.png"
              alt="memories icon"
            />
            <span>Memories</span>
          </div>
        </div>

        <div className="menue">
          <span>Your shortcuts</span>
          <div className="item">
            <img
              src="/assets/icons/6.png"
              alt="Events icon"
            />
            <span>Events</span>
          </div>
          <div className="item">
            <img
              src="/assets/icons/7.png"
              alt="Gaming icon"
            />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img
              src="/assets/icons/8.png"
              alt="Gallery icon"
            />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img
              src="/assets/icons/9.png"
              alt="Videos icon"
            />
            <span>Videos</span>
          </div>
          <div className="item">
            <img
              src="/assets/icons/10.png"
              alt="Messages icon"
            />
            <span>Messages</span>
          </div>
        </div>

        <div className="menue">
          <span>Others</span>
          <div className="item">
            <img
              src="/assets/icons/11.png"
              alt="Fund icon"
            />
            <span>Fund</span>
          </div>
          <div className="item">
            <img
              src="/assets/icons/12.png"
              alt="Tutorials icon"
            />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img
              src="/assets/icons/13.png"
              alt="Courses icon"
            />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
