import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ManageReview from './components/ManageReview/ManageReview';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Router>
        <Switch>
          <Route  path="/shop">
          <Shop></Shop>
          </Route>
          <Route path ="/review">
            <Review></Review>
          </Route>
          <Route path ="/manage">
            <ManageReview></ManageReview>
          </Route>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path ="/:productKey">
            <ProductDetail></ProductDetail>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;
