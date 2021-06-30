import Navi from './Navi';
import ProductList from './ProductList';
import CategoryList from './CategoryList';
import { Row, Container } from 'reactstrap';

function App() {
    return (
        <div>
            <Container>
                <Row>
                    <Navi />
                </Row>
                <Row>
                    <CategoryList />
                    <ProductList />
                </Row>
            </Container>
            <h2>Hello from React!!!</h2>
        </div>
    );
}

export default App;
