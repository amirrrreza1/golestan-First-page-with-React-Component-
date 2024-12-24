import Products from "../Products/Products";
import "./IntroductionMobile.css";
import "./IntroductionDesktop.css";

const Introduction = () => {
  return (
    <>
      <div className="IntroductionWrapper">
        <div className="Introduction">
          <div className="IntroductionTitleText">معرفی گلستان</div>
          <div className="IntroductionText">
            آنچه که امروز با نام مجموعه گلستان می‌شناسیم در سال 1329 بنیان نهاده
            شد. زمانی که شرکت گلستان فعالیت خود را با بسته‌بندی و توزیع چای
            پاکتی آغاز کرد. با گذر زمان و رشد اقتصاد کشور، نهال «گلستان» به
            تدریج تقویت شد و شاخ و برگ گرفت. فعالیت‌های «گلستان» با تهیه، تولید
            و بسته‌بندی بهترین محصولات غذایی گسترش پیدا کرد. گلستان پس از سال‌ها
            تلاش همچنان می‌کوشد تا به کمک تجربه‌های اندوخته شده در این سال‌ها
            کالاهایی قابل اعتماد و با کیفیت تولید نماید.
          </div>
          <div className="IntroductionText">
            هدفمندی و برنامه‌ریزی موثر، ایمان و عزم راسخ برای دستیابی به اهداف
            تعیین شده، به کار گیری همکاران مجرب و دلسوز، استفاده از روش های نوین
            بازاریابی و مشتری محوری از جمله عوامل مهم در استراتژی شرکت گلستان
            است.
          </div>
        </div>
        <div className="productsWrapper">
          <div className="productTitleText"> محصولات گلستان </div>
          <div className="productText">
            هدفمندی و برنامه‌ریزی موثر، ایمان و عزم راسخ برای دستیابی به اهداف
            تعیین شده، به کار گیری همکاران مجرب و دلسوز، استفاده از روش های نوین
            بازاریابی و مشتری محوری از جمله عوامل مهم در استراتژی شرکت گلستان
            است.
          </div>
          <div className="products">
            <Products />
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
