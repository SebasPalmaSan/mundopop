import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Login from './components/Login/Login';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Cart from './components/Cart/Cart';


function App() {

  return (
    
    <Router>
    <div className="container p-2 mb-2 bg-secondary mw-100">
      <NavBar />
      
      <Switch>
        <Route exact path="/" component={ItemListContainer} />
        <Route path="/detail/:id" component={ItemDetailContainer} />
        <Route path="/login" component={Login} />
        <Route path="/categories/:categoryId" component={ItemListContainer} />
        <Route path="/cart" component={Cart} />
      </Switch>

    </div>
    </Router>
    
  );
}

export default App;
