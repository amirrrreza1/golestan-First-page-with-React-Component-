import "./GoldestanMagazineMobile.css"
import "./GoldestanMagazineDesktop.css"
import GoldestanMagazineItems from "../GoldestanMagazineItems/GoldestanMagazineItems";

const GoldestanMagazine = () => {
    return (
      <>
        <div className="GoldestanMagazineWrapper">
          <div className="GoldestanMagazineWrapperText">مجله گلستان</div>
          <div className="GoldestanMagazineWrapper__ItemsWrapper">
                    <div className="GoldestanMagazineWrapper__Items">
                        <GoldestanMagazineItems/>
            </div>
          </div>
        </div>
      </>
    );
};

export default GoldestanMagazine;
