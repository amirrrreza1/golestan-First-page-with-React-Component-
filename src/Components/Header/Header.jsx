import React, { useState } from "react";
import "./HeaderMobile.css";
import "./HeaderTablet.css";
import "./HeaderDesktop.css";
import golestanIcon from "../../../public/Images/golestanIcon.png";
import menuIcon from "../../../public/Images/SVG/menuIcon.svg";

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive((prevState) => !prevState);
  };
  return (
    <React.Fragment>
      <div className="headerWrapper">
        <div className="header">
          <div className="headerImage">
            <img src={golestanIcon} alt="Golestan Icon" />
          </div>
          <div className="menu">
            <div className="menuItemWrapper">
              <div className="menuItem menuItemActive">صفحه اصلی</div>
            </div>
            <span className="menuSpan"></span>
            <div className="menuItemWrapper">
              <div className="menuItem">شرکت گلستان</div>
              <div className="dropdownMenu">
                <div className="dropdownMenu__Item">معرفی شرکت</div>
                <div className="dropdownMenu__Item">تاریخچه گلستان</div>
                <div className="dropdownMenu__Item">اخبار و اطلاعیه‌ها</div>
                <div className="dropdownMenu__Item">مسئولیت‌های اجتماعی</div>
                <div className="dropdownMenu__Item">سازمان فروش</div>
                <div className="dropdownMenu__Item">سازمان توزیع</div>
                <div className="dropdownMenu__Item">برندها</div>
              </div>
            </div>
            <span className="menuSpan"></span>
            <div className="menuItemWrapper">
              <div className="menuItem">محصولات</div>
              <div className="dropdownMenu">
                <div className="dropdownMenu__Item">چایی</div>
                <div className="dropdownMenu__Item">ناتس</div>
                <div className="dropdownMenu__Item">ادویه و چاشنی</div>
                <div className="dropdownMenu__Item">برنج</div>
                <div className="dropdownMenu__Item">زعفران و زرشک</div>
                <div className="dropdownMenu__Item">دمنوش</div>
                <div className="dropdownMenu__Item">حبوبات و غلات</div>
                <div className="dropdownMenu__Item">عصاره های گیاهی</div>
                <div className="dropdownMenu__Item">قند و شکر</div>
                <div className="dropdownMenu__Item">هاتی نودل</div>
                <div className="dropdownMenu__Item">سایر محصولات</div>
                <div className="dropdownMenu__Item">گل گیس</div>
              </div>
            </div>
            <span className="menuSpan"></span>
            <div className="menuItemWrapper">
              <div className="menuItem">وبلاگ</div>
              <div className="dropdownMenu">
                <div className="dropdownMenu__Item">مجله گلستان</div>
              </div>
            </div>
            <span className="menuSpan"></span>
            <div className="menuItemWrapper">
              <div className="menuItem">قرعه‌کشی</div>
            </div>
            <span className="menuSpan"></span>
            <div className="menuItemWrapper">
              <div className="menuItem">تماس با ما</div>
              <div className="dropdownMenu">
                <div className="dropdownMenu__Item">دفتر مرکزی</div>
                <div className="dropdownMenu__Item">صدای مصرف کنندگان</div>
                <div className="dropdownMenu__Item">ارتباط با مشترکین</div>
              </div>
            </div>
            <span className="menuSpan"></span>
            <div className="menuItemWrapper">
              <div className="menuItem">استخدام</div>
            </div>
            <span className="menuSpan"></span>
            <div className="menuItemWrapper">
              <div className="menuItem">EN</div>
            </div>
          </div>
          <button className="menuMobile" onClick={toggleMenu}>
            <img src={menuIcon} alt="Menu Icon" width="40" />
          </button>
          <div
            className={`menuMobileItems ${
              isMenuActive ? "menuMobileItemsActive" : ""
            }`}
          >
            <div className="menuMobileItems__item">صفحه اصلی</div>
            <div className="menuMobileItems__item">شرکت گلستان</div>
            <div className="menuMobileItems__item">محصولات</div>
            <div className="menuMobileItems__item">وبلاگ</div>
            <div className="menuMobileItems__item">قرعه کشی</div>
            <div className="menuMobileItems__item">استخدام</div>
            <div className="menuMobileItems__item">تماس با ما</div>
            <div className="menuMobileItems__item">EN</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
