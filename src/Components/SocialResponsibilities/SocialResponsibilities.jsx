import "./SocialResponsibilitiesMobile.css";
import "./SocialResponsibilitiesDesktop.css";
import MahdiHospital from "../../../public/Images/MahdiHospital.png";

const SocialResponsibilities = () => {
  return (
    <>
      <div className="SocialResponsibilitiesWrapper">
        <div className="SocialResponsibilities">
          <div className="SocialResponsibilities__PersianText">
            مسئوليت‌های اجتماعی شركت گلستان
          </div>
          <hr />
          <div className="SocialResponsibilities__EnglishText">
            <div className="SocialResponsibilities__EnglishText__regular">
              Social Responsibility
            </div>
            <div className="SocialResponsibilities__EnglishText__bold">
              Golestan
            </div>
          </div>
          <div className="SocialResponsibilities__EnglishText__bottom">
            Mahdi Hospital
          </div>
          <img
            className="SocialResponsibilities__image"
            src={MahdiHospital}
            alt="MahdiHospital"
            width="400"
            height="350"
          />
          <div className="SocialResponsibilities__ExplainWrapper">
            <div className="SocialResponsibilities__Explain">
              <div className="SocialResponsibilities__Explain__bold">
                مسئوليت‌های اجتماعی گلستان
              </div>
              <div className="SocialResponsibilities__Explain__regular">
                كسب‌وكارها اجزای قدرتمند جامعه به شمار می‌آیند و موفق‌ترین،
                قابل‌احترام‌ترین و مطلوب‌ترین كسب‌وكارها آنهایی هستند كه كاری
                فراتر از درآمدزایی ایجاد كنند؛‌ آنهایی كه آمده‌اند تا از تجربه و
                امکاناتشان برای حل مشكلات جامعه و محیط زندگی خود استفاده كنند.
                گلستان در فعالیت‌های‌ اجتماعی خود،‌ گسترده وسیعی از فعالیت‌های
                عام‌المنفعه را در دستوركار خود قرار داده است.
              </div>
              <button className="SocialResponsibilities__Explain__button">
                اطلاعات بیشتر
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialResponsibilities;
