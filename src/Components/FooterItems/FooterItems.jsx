import "./FooterItemsMobile.css";
import "./FooterItemsDesktop.css"

const FooterItems = () => {
  let data = [
    {
      id: 1,
      src: "./Images/FooterItems/footerItemsIMG-1.png",
      title: "چای گلستان",
      text1: "چای ممتاز هندوستان​",
      text2: "چای ممتاز ارل گری​​",
      text3: "چای سيلان عطری​​",
      text4: "چای ممتاز سيلان​​",
      text5: "چای صبحانه گلستان​",
    },
    {
      id: 2,
      src: "./Images/FooterItems/footerItemsIMG-2.png",
      title: "تی بگ گلستان",
      text1: "تی بگ بلک لاين",
      text2: "تی بگ ارل گری​",
      text3: "دمنوش نعناع​",
      text4: "دمنوش بابونه​",
      text5: "منوش چای سبز​",
    },
    {
      id: 3,
      src: "./Images/FooterItems/footerItemsIMG-3.png",
      title: "ادويه گلستان",
      text1: "زعفران ممتاز خراسان",
      text2: "ادویه کاری​",
      text3: "ادویه ماست و خیار​",
      text4: "فلفل سياه خالص​",
      text5: "زردچوبه ممتاز​",
    },
    {
      id: 4,
      src: "./Images/FooterItems/footerItemsIMG-4.png",
      title: "حبوبات گلستان",
      text1: "لوبيا قرمز ممتاز",
      text2: "لوبيا چيتی گلستان​",
      text3: "عدس كانادايی​",
      text4: "نخود زودپز كرمانشاه​",
      text5: "لوبيا سفيد گلستان​",
    },
  ];
  return data.map((item , index) => {
    return (
    
            <div className="FooterItem" key={index}>
                <img src={item.src} alt="footerItem1" />
                <hr className="footerItemHR" />
                <div className="footerItem__title">{ item.title}</div>
                <hr className="footerItemHR" />
                <div className="footerItem__texts">
                    <div className="footerItem__text">{ item.text1}</div>
                    <div className="footerItem__text">{ item.text2}</div>
                    <div className="footerItem__text">{ item.text3}</div>
                    <div className="footerItem__text">{ item.text4}</div>
                    <div className="footerItem__text">{ item.text5}</div>
                </div>
        </div>
      
    );
  });
};

export default FooterItems;
