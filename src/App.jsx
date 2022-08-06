import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Item from './components//ItemList/Item';
import Home from './components//Home/Home';
import NavBar from './components//NavBar/NavBar';
import Register from './components//Login/Register';
import Rock from './components/categoriasFunkos/Rock';
import Got from './components/categoriasFunkos/Got';
import Disney from './components/categoriasFunkos/Disney';
import Marvel from './components/categoriasFunkos/Marvel';
import DC from './components/categoriasFunkos/Dc';
import StrangerThings from './components/categoriasFunkos/StrangerThings';
import Login from './components/Login/Login';
import ItemListContainer from './components/ItemList/ItemListContainer';



function App() {

  return (
    <Router>
    <div className="container p-2 mb-2 bg-secondary mw-100">
      <NavBar />
      <ItemListContainer />


      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Item} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/categoriasFunkos/rock" component={Rock} />
        <Route path="/categoriasFunkos/got" component={Got} />
        <Route path="/categoriasFunkos/disney" component={Disney} />
        <Route path="/categoriasFunkos/marvel" component={Marvel} />
        <Route path="/categoriasFunkos/dc" component={DC} />
        <Route path="/categoriasFunkos/strangerThings" component={StrangerThings} />
      </Switch>

    </div>
    </Router>
  );
}

export default App;
