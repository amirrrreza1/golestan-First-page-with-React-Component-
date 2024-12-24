import "./ProductIntroductionMobile.css";
import "./ProductIntroductionDesktop.css";

import riceIMG from "../../../public/Images/ProductIntroduction/riceIMG.png";
import teaBagIMG from "../../../public/Images/ProductIntroduction/teaBagIMG.png";
import pistachioIMG from "../../../public/Images/ProductIntroduction/Pistachio.png";

const ProductIntroduction = () => {
  return (
    <>
      <div className="productIntroductionWrapper">
        <div className="productIntroductionItem">
          <div className="productIntroductionItemPosition">
            <img
              className="productIntroductionItem__image"
              src={riceIMG}
              alt="riceIMG"
            />
            <div className="productIntroductionItem__image__text">
              <div className="productIntroductionItem__image__text__bold">
                برنج گلستان
              </div>
              <div className="productIntroductionItem__image__text__regular">
                معرفی محصول
              </div>
            </div>
          </div>
          <div className="productIntroductionItem__Description">
            <div className="productIntroductionItem__Description__title">
              رکن اول غذای ایرانی
            </div>
            <div className="productIntroductionItem__Description__text">
              مرغوب‌ترین برنج دنیا، برنج ایران است و بهترین نوع برنج ایرانی،‌
              طارم و هاشمی. این برنج‌ها از بهترین شالیزارهای مازندران برداشت
              شده، پس از كنترل كیفیت در آزمایشگاه‌های تخصصی گلستان وارد چرخه
              بسته‌بندی و در وزن‌های مختلف به بازار عرضه می‌شوند. عطر و طعم
              بی‌نظیر برنج گلستان با هیچ برنج دیگری قابل مقایسه نیست. با
              گلستان،‌ كیفیت زندگی بالاتر از همیشه است چرا كه مشتریان گلستان؛‌
              لایق بهترین‌ها هستند.
            </div>
            <div className="productIntroductionItem__Description__buttons">
              <button className="productIntroductionItem__Description__button">
                محصولات برنج
              </button>
              <button className="productIntroductionItem__Description__button">
                آشپرخانه گلستان
              </button>
            </div>
          </div>
        </div>
        <div className="productIntroductionItem">
          <div className="productIntroductionItemPosition">
            <img
              className="productIntroductionItem__image"
              src={teaBagIMG}
              alt="teaBagIMG"
            />
            <div className="productIntroductionItem__image__text">
              <div className="productIntroductionItem__image__text__bold">
                چای گلستان
              </div>
              <div className="productIntroductionItem__image__text__regular">
                معرفی محصول
              </div>
            </div>
          </div>
          <div className="productIntroductionItem__Description">
            <div className="productIntroductionItem__Description__title">
              سابقه‌ای به قدمت یک عمر
            </div>
            <div className="productIntroductionItem__Description__text">
              چای تنها یك نوشیدنی گرم نیست.‌ یک گفتمان است؛‌ گرمابخش وجود و
              بهانه‌ای برای آغاز یك معاشرت دل‌چسب. بی‌دلیل نیست كه نام
              «محبوب‌ترین نوشیدنی دنیا» را با خود یدک می‌كشد. نوشیدنش خستگی‌ها
              را فراری داده،‌ حس خوب آرامش را به همراه دارد
            </div>
            <div className="productIntroductionItem__Description__text">
              برای مردمان ایران زمین نام گلستان با چای پیوند خورده است؛‌
              قدیمی‌ترین محصول مجموعه گلستان،‌ با مدرن‌ترین و بهداشتی‌ترین
              دستگاه‌های روز دنیا تهیه و بسته‌بندی می‌شود. چیزی كه باعث شده
              مشتریانش یك عمر به نام گلستان اعتماد كنند، كیفیت، ‌عطر و طعم به
              یادماندنی آن است.
            </div>
            <div className="productIntroductionItem__Description__buttons">
              <button className="productIntroductionItem__Description__button">
                محصولات چای
              </button>
            </div>
          </div>
        </div>
        <div className="productIntroductionItem">
          <div className="productIntroductionItemPosition">
            <img
              className="productIntroductionItem__image"
              src={pistachioIMG}
              alt="pistachioIMG"
            />
            <div className="productIntroductionItem__image__text">
              <div className="productIntroductionItem__image__text__bold">
                برنج گلستان
              </div>
              <div className="productIntroductionItem__image__text__regular">
                معرفی محصول
              </div>
            </div>
          </div>
          <div className="productIntroductionItem__Description">
            <div className="productIntroductionItem__Description__title">
              آجيل‌های خوش خنده
            </div>
            <div className="productIntroductionItem__Description__text">
              خواص فوق‌العاده پسته بر كسی پوشیده نیست. پسته را منبع ویتامین و
              مواد معدنی می‌نامند، یك پمپ خون‌ساز قوی و تسكین دهنده قلب و اعصاب.
              پسته گلستان اما حسابش از دیگر پسته‌های بازار جداست. مرغوب‌ترین
              پسته خام از بهترین باغ‌های پسته ایران دستچین می‌شود.‌ پس از كنترل
              كیفیت در آزمایشگاه و اطمینان از سلامت محصول،‌ با زعفران درجه یک و
              نمک، بوداده و برشته شده و‌ پسته گلستان را با طعم و رنگ و عطری
              بی‌نظیر به ارمغان می‌آورد.
            </div>
            <div className="productIntroductionItem__Description__buttons">
              <button className="productIntroductionItem__Description__button">
                ناتس گلستان
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductIntroduction;
