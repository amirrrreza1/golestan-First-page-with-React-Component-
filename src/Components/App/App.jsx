import AparatVideos from "../AparatVideos/AparatVideos";
import Footer from "../Footer/Footer";
import GoldestanMagazine from "../GoldestanMagazine/GoldestanMagazine";
import Header from "../Header/Header";
import Introduction from "../Introduction/Introduction";
import Lottery from "../Lottery/Lottery";
import ProductIntroduction from "../ProductIntroduction/ProductIntroduction";
import SocialMedia from "../SocialMedia/SocialMedia";
import SocialResponsibilities from "../SocialResponsibilities/SocialResponsibilities";

const App = () => {
  return (
    <>
      <Header />
      <Lottery />
      <Introduction />
      <ProductIntroduction />
      <GoldestanMagazine />
      <AparatVideos />
      <SocialResponsibilities />
      <SocialMedia />
      <Footer />
    </>
  );
};

export default App;
