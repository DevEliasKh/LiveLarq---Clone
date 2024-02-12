import "./App.css";
import "boxicons";
import Header from "./component/Header";
import HeaderMd from "./component/HeaderMd";
import HeaderSm from "./component/HeaderSm";
import Hero from "./component/Hero";
import Review from "./component/Review";
import ProductSection from "./component/Product";
import ProductFeature from "./component/ProductFeature";
import Trending from "./component/Trending";
import OurMission from "./component/OurMission";
function App() {
  return (
    <>
      {/*NavBar goes here  */}
      <Header />
      {/* NavBar for less than 1200px */}
      <HeaderMd />
      {/* Header for less than 800px */}
      <HeaderSm />
      {/* Hero image goes here */}
      <Hero />
      {/* review section */}
      <Review />
      {/* product section */}
      <ProductSection />
      {/* product feature section */}
      <ProductFeature />
      {/* trending section with bar to scroll horizontally */}
      <Trending />
      {/* our mission section */}
      <OurMission />
      {/* basq magazine */}

      {/* Footer */}
    </>
  );
}

export default App;
