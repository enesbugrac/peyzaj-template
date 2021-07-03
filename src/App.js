import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Iletisim from "./components/pages/Iletisim";

import "./App.css";
import Footer from "./components/Footer";
import Details from "./components/pages/Details";
import DetailsAre from "./components/pages/DetailsAre";
import DetailsFidan from "./components/pages/DetailsFidan";

import Admin from "./components/pages/Admin";
import Hakkimizda from "./components/pages/Hakkimizda";
import Referanslar from "./components/pages/Referanslar";
import Hizmetlerimiz from "./components/pages/Hizmetlerimiz";
import Demre from "./components/pages/Demre";
import Bogacayi from "./components/pages/Bogacayi";
import Expo from "./components/pages/Expo";
import ScrollToTop from "react-scroll-to-top";
import Urunlerimiz from "./components/pages/Urunlerimiz";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop
        smooth
        color="#6b9080"
        style={{
          width: "50px",
          height: "50px",
          zIndex: 99,
          backgroundColor: "#495057",
          borderRadius: 999,
          padding: 3,
        }}
      />
      <Navbar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/muz" exact component={Details} />
        <Route path="/arecastrum" exact component={DetailsAre} />
        <Route path="/fidanlik" exact component={DetailsFidan} />
        <Route path="/iletisim" exact component={Iletisim} />
        <Route path="/referanslar" exact component={Referanslar} />
        <Route path="/referanslar/bogacayi" exact component={Bogacayi} />
        <Route path="/referanslar/demresahili" exact component={Demre} />
        <Route path="/referanslar/expo" exact component={Expo} />
        <Route path="/urunlerimiz" exact component={Urunlerimiz} />
        <Route path="/admin" exact component={Admin} />
        <Route path="/hakkımızda" exact component={Hakkimizda} />
        <Route path="/hizmetlerimiz" exact component={Hizmetlerimiz} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
