import FooterItems from "../FooterItems/FooterItems";
import "./FooterMobile.css";
import "./FooterDesktop.css";

const Footer = () => {
  return (
    <>
      <hr className="footerHR" />
      <div className="footerWrapper">
        <div className="footer">
          <div className="footerItems">
            <FooterItems />
          </div>
          <div className="footerCopyWrite">
            <div className="footerCopyWrite__bold">
              All Right Reserved Golestan Company 2022-2025
            </div>
            <div className="footerCopyWrite__regular">
              Design By: Amirreza Azarioun
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
