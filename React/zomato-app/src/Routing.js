import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { Home } from "./components/Home/Home";
import ListingApi from "./components/Listing/ListingApi";
import Details from "./components/Details/Details";
const Routing = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/listing/:mealId" component={ListingApi} />
        <Route path="/details" component={Details} />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Routing;
