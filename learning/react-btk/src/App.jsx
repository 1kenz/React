import Navi from './Navi';
import ProductList from './ProductList';
import CategoryList from './CategoryList';
import { Row, Container, Col } from 'reactstrap';

function App() {
    // encapsulation
    let categoryInfo = { title: 'Category List' };
    let productInfo = { title: 'Product List' };

    return (
        <div>
            <Container>
                <Row>
                    <Navi />
                </Row>
                <Row>
                    <Col xs="3">
                        <CategoryList info={categoryInfo} />
                    </Col>
                    <Col xs="9">
                        <ProductList info={productInfo} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
