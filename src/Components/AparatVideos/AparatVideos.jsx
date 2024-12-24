import "./AparatVideosMobile.css";
import "./AparatVideosDesktop.css";
import AparatVideosItems from "../AparatVideosItems/AparatVideosItems";

const AparatVideos = () => {
  return (
    <>
      <div className="AparatVideosWrapper">
        <div className="AparatVideosWrapper__Items">
          <AparatVideosItems />
        </div>
      </div>
    </>
  );
};

export default AparatVideos;
