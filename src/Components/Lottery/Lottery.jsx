import "./LotteryMoblie.css";
import "./LotteryDesktop.css";
import tea1 from "../../../public/Images/Tea/tea-pic1.png"

const Lottery = () => {
  return (
    <>
      <div className="lotteryWrapper">
        <div className="lottery">
          <div className="lotteryText">
            <div className="lotteryTextBlodRed">
              قرعه‌کشی مصرف‌کنندگان گلستان
            </div>
            <div className="lotteryTextBlod">
              قرعه‌کشی دوره ای مصرف‌کنندگان چای گلستان
            </div>
            <div className="lotteryTextRegular">
              هر یک از مصرف‌کنندگان محصولات چای گلستان می‌توانند با ارسال کد
              قرعه کشی روی بسته به شماره 30007405 در قرعه کشی‌های دوره‌ای سال
              1403شرکت کنند. نگهداری از بسته‌بندی محصول برای اهدای جایزه الزامی
              است.
            </div>
            <button className="lotteryTextButton">اطلاعات بیشتر</button>
          </div>
          <div className="lotteryImage">
            <img src={tea1} alt="tea1" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Lottery;
