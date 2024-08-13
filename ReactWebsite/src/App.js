import React from 'react';
import PricingPage from './PricingPage'; // Import the PricingPage component
import AppNavbar from './components/AppNavbar';
import CarouselPage from './components/Carousel';
import Features from './components/Features';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import About from './components/About';
import FarmersAskFarmers from './components/FarmersAskFarmers';
import Infos from './components/Infos';
import QuestionModal from './components/QuestionModal';
import Navbar from './components/Navbar';
// import Weatheralert from './components/Weatheralert';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ShoppingList from './components/ShoppingList';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';
// import ItemModal from './components/ItemModal';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Community from './components/Community';
import Soil from './components/Soil';
import Crop from './components/Crop';
import Schemes from './components/Schemes';
import News from './components/News';
import CropSuggest from './components/CropSuggest';
import ModernFarming from './components/ModernFarming';
import SideIncome from './components/SideIncome';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        {/* <div className="App">
       <AppNavbar />
       
       <Container>
       <ItemModal />
       <ShoppingList />
       </Container>
       
      </div> */}
        <Router>
          <Switch>
            <Route path="/" exact>
              <AppNavbar />
              <CarouselPage />
              <Features />
              <Testimonial />
              <Footer />
            </Route>
            <Route path="/about">
              <AppNavbar />
              <About />
              <Footer />
            </Route>
            <Route path="/community" exact>
              <AppNavbar />
              <QuestionModal />
              <FarmersAskFarmers />
              <Footer />
            </Route>
            <Route path="/community/answer" exact>
              <AppNavbar />
              <Infos />
              <Footer />
            </Route>
            <Route path="/soil">
              <AppNavbar />
              <Soil />
              <Footer />
            </Route>
            <Route path="/schemes">
              <AppNavbar />
              <Schemes />
              <Footer />
            </Route>
            <Route path="/buy_item">
              <AppNavbar />
              <Navbar />
              <Footer />
            </Route>
            <Route path="/modern">
              <AppNavbar />
              <ModernFarming />
              <Footer />
            </Route>
            <Route path="/sideIncome">
              <AppNavbar />
              <SideIncome />
              <Footer />
            </Route>
            {/* <Route path="/weatheralert">
              <AppNavbar />
              <Weatheralert />
              <Footer />
            </Route> */}
            <Route path="/crop">
              <AppNavbar />
              <Crop />
              <Footer />
            </Route>
            <Route path="/news">
              <News />
            </Route>
            <Route path="/pricing" exact>
              <AppNavbar />
              <PricingPage />
              <Footer />
            </Route>
            <Route path="/suggest" exact>
              <AppNavbar />
              <CropSuggest />
              <Footer />
            </Route>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
