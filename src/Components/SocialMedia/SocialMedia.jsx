import "./SocialMediaMobile.css";
import "./SocialMediaDesktop.css"
import youTube from "../../../public/Images/SocialMedia/youtube.svg";
import instagram from "../../../public/Images/SocialMedia/instagram.svg";
import x from "../../../public/Images/SocialMedia/twitterx.svg";
import facebook from "../../../public/Images/SocialMedia/facebook.svg";

const SocialMedia = () => {
  return (
    <>
      <div className="SocialMediaWrapper">
        <div className="SocialMedia">
          <div className="SocialMediaItems youtube">
            <img src={youTube} alt="" width="40" height="40" />
          </div>
          <div className="SocialMediaItems instagram">
            <img src={instagram} alt="" width="40" height="40" />
          </div>
          <div className="SocialMediaItems facebook">
            <img src={facebook} alt="" width="40" height="40" />
          </div>
          <div className="SocialMediaItems x">
            <img src={x} alt="" width="40" height="40" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
