import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import "./App.css";
import Footer from "./components/Footer";
import Details from "./components/pages/Details";
import Admin from "./components/pages/Admin";
import Hakkimizda from "./components/pages/Hakkimizda";
import Urunlerimiz from "./components/pages/Hizmetlerimiz";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/detaylar" exact component={Details} />
        <Route path="/admin" exact component={Admin} />
        <Route path="/hakkımızda" exact component={Hakkimizda} />
        <Route path="/hizmetlerimiz" exact component={Urunlerimiz} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
