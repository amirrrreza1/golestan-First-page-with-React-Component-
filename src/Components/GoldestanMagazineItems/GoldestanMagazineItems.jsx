import "./GoldestanMagazineItems.css";

const GoldestanMagazineItems = () => {
  let data = [
    {
      id: 1,
      src: "./Images/GoldestanMagazineItems/GoldestanMagazineItems-1.png",
      alt: "GolestanMagazine-1",
      title: "ماکارونی با سبزیجات",
      text: "ابتدا ماکارانی‌ها را در ظرفی‌ به‌ همراه‌ آب‌، روغن‌ مایع‌ و نمک‌ می‌ریزیم‌ تا کمی‌ بپزد. در این‌ حین‌ پیازها را خرد کرده‌ و روی‌ روغن‌ تفت‌ می‌دهیم‌ تا طلایی‌ شود…",
    },
    {
      id: 1,
      src: "./Images/GoldestanMagazineItems/GoldestanMagazineItems-2.png",
      alt: "GolestanMagazine-2",
      title: "سوپ مکزیکی",
      text: "گوشت بوقلمون را در یک ماهیتابه بزرگ ریخته، آب روی آن بریزید تا روی آن را بپوشاند و به مدت نیم ساعت آن را بپزید. گوشت را از مایع آن بیرون آورده…",
    },
    {
      id: 1,
      src: "./Images/GoldestanMagazineItems/GoldestanMagazineItems-3.png",
      alt: "GolestanMagazine-3",
      title: "چیلاکیله",
      text: "احتمالا نام چیلا کیله را نشنیده باشید ولی اگر یکبار این غذای فوق‌العاده خوشمزه را تهیه کنید و نوش جان کنید جزئی جدانشدنی از فهرست",
    },
  ];
  return data.map((item, index) => {
    return (
      <div className="GoldestanMagazineItems" key={index}>
        <img src={item.src} alt={item.alt} width="320" height="320" />
        <div className="GoldestanMagazineItems__title">{item.title}</div>
        <div className="GoldestanMagazineItems__text">{item.text}</div>
        <button className="GoldestanMagazineItems__button">ادامه مطلب</button>
      </div>
    );
  });
};

export default GoldestanMagazineItems;
