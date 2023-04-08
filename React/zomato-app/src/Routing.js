import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { Home } from "./components/Home/Home";
import ListingApi from "./components/Listing/ListingApi";
const Routing = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/listing/:mealId" component={ListingApi} />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Routing;
