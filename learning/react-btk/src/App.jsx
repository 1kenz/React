import Navi from './Navi';
import ProductList from './ProductList';
import CategoryList from './CategoryList';
import { Row, Container, Col } from 'reactstrap';

function App() {
    return (
        <div>
            <Container>
                <Row>
                    <Navi />
                </Row>
                <Row>
                    <Col xs="3">
                        <CategoryList title="Category List" />
                    </Col>
                    <Col xs="9">
                        <ProductList title="Product List" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
