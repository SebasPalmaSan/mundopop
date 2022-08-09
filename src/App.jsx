import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Item from './components//ItemList/Item';
import Home from './components//Home/Home';
import NavBar from './components//NavBar/NavBar';
import Register from './components//Login/Register';
import Rock from './components/Categories/Rock';
import Got from './components/Categories/Got';
import Disney from './components/Categories/Disney';
import Marvel from './components/Categories/Marvel';
import DC from './components/Categories/Dc';
import StrangerThings from './components/Categories/StrangerThings';
import Login from './components/Login/Login';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';



function App() {

  return (
    <Router>
    <div className="container p-2 mb-2 bg-secondary mw-100">
      <NavBar />
      {/* <ItemListContainer /> */}
      <ItemDetailContainer />


      {/* <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Item} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/categories/rock" component={Rock} />
        <Route path="/categories/got" component={Got} />
        <Route path="/categories/disney" component={Disney} />
        <Route path="/categories/marvel" component={Marvel} />
        <Route path="/categories/dc" component={DC} />
        <Route path="/categories/strangerThings" component={StrangerThings} />
      </Switch> */}

    </div>
    </Router>
  );
}

export default App;
