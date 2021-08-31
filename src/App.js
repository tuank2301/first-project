import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import Home from './pages/Home';
import './assets/css/style.css';
import Products from './pages/Products';
import AuthUsers from './pages/AuthUsers';
import BirthdayReminder from './pages/products/birthday-reminder/BirthdayReminder';
import ToursApp from './pages/products/tours/ToursApp';
import ReviewsApp from './pages/products/reviews/ReviewsApp';
import AccordionApp from './pages/products/accordion/AccordionApp';
import MenuApp from './pages/products/menu/MenuApp';
import TabsApp from './pages/products/tabs/TabsApp';
import Loading from './components/loading/Loading';
import Slider from './pages/products/slider/Slider';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={AuthUsers} />
          <Route exact path='/products' component={Products} />
          <Route path='/products/pj1' component={BirthdayReminder} />
          <Route path='/products/pj2' component={ToursApp} />
          <Route path='/products/pj3' component={ReviewsApp} />
          <Route path='/products/pj4' component={AccordionApp} />
          <Route path='/products/pj5' component={MenuApp} />
          <Route path='/products/pj6' component={TabsApp} />
          <Route path='/products/pj7' component={Slider} />
          <Route path='/about' component={Slider} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
