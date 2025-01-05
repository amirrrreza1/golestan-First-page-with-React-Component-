import "./AparatVideosItemsMobile.css";
import "./AparatVideosItemsDesktop.css";
import AparatIcon from "../../../public/Images/AparatVideos/AparatVideoIcon.png";
import PlayButton from "../../../public/Images/AparatVideos/PlayButton.png";

const AparatVideosItems = () => {
  let data = [
    {
      id: 1,
      src: "./Images/AparatVideos/AparatVideo1.png",
      time: "00:57",
      title: "سالاد نودل",
      text: "نودل هاتی کارا یك میان‌وعده‌ی مغذی، در هر موقعیتی كه باشید با كمی آب جوش و یك نودل هاتی‌كارا می‌توانید از یك غذای سالم و خوشمزه لذت ببرید.",
      buttonText: "ویدیو های بیشتر",
    },
    {
      id: 2,
      src: "./Images/AparatVideos/AparatVideo2.png",
      time: "00:17",
      title: "اینستاگرام هاتی نودل",
      text: "نودل‌های هاتی كارا را می‌توان جایگزین سالمی برای غذاهای فست‌فودی دانست. طعم عالی،‌ ارزش غذایی بالا و قیمت مناسب از این محصول غذای سالم و كاملی ساخته است.",
      buttonText: "ادامه مطلب",
    },
    {
      id: 3,
      src: "./Images/AparatVideos/AparatVideo3.png",
      time: "02:00",
      title: "برنج گلستان",
      text: "عطر و طعم بی‌نظیر برنج گلستان با هیچ برنج دیگری قابل مقایسه نیست. با گلستان،‌ كیفیت زندگی بالاتر از همیشه است. چرا كه مشتریان گلستان؛‌ لایق بهترین ها هستند.",
      buttonText: "مشاهده محصولات",
    },
  ];
  return data.map((item , index) => {
    return (
      
        <div className="AparatVideosItem" key={index}>
          <div className="AparatVideosItem__videoFrame">
            <img src={item.src} alt="AparatVideo" width="320" />
            <div className="AparatVideosItem__playButton">
              <img src={PlayButton} alt="PlayButton" width="20" height="20" />
            </div>
            <div className="AparatVideosItem__time">{item.time}</div>
            <div className="AparatVideosItem__icon">
              <img src={AparatIcon} alt="AparatIcon" width="32" height="32" />
            </div>
          </div>
          <div className="AparatVideosItem__description">
            <div className="AparatVideosItem__description__title">
              {item.title}
            </div>
            <div className="AparatVideosItem__description__text">
              {item.text}
            </div>
            <button className="AparatVideosItem__description__button">
              {item.buttonText}
            </button>
          </div>
        </div>
      
    );
  });
};

export default AparatVideosItems;
