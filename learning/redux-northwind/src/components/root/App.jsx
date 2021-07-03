import Navi from '../navi/Navi';
import Dashboard from './Dashboard';
import { Container } from 'reactstrap';
import { Route, Switch } from 'react-router-dom';
import cartDetail from '../cart/cartDetail';

function App(props) {
    return (
        <div>
            <Container>
                <Navi />
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/product" exact component={Dashboard} />
                    <Route path="/cart" exact component={cartDetail} />
                    <Route component={Error} />
                </Switch>
            </Container>
        </div>
    );
}

export default App;
