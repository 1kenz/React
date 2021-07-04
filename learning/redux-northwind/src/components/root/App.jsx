import Navi from '../navi/Navi';
import Dashboard from './Dashboard';
import { Container } from 'reactstrap';
import { Route, Switch } from 'react-router-dom';
import cartDetail from '../cart/CartDetail';
import NotFound from '../common/NotFound';
import AddOrUpdateProduct from '../products/AddOrUpdateProduct';

function App(props) {
    return (
        <div>
            <Container>
                <Navi />
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/product" exact component={Dashboard} />
                    <Route path="/cart" exact component={cartDetail} />
                    <Route
                        path="/saveproduct/:productId"
                        component={AddOrUpdateProduct}
                    />
                    <Route path="/saveproduct" component={AddOrUpdateProduct} />
                    <Route component={NotFound} />
                </Switch>
            </Container>
        </div>
    );
}

export default App;
