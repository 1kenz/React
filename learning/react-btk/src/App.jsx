import Navi from './Navi';
import ProductList from './ProductList';
import CategoryList from './CategoryList';

function App() {
    return (
        <div className="App">
            <Navi />
            <CategoryList />
            <ProductList />
            <h2>Hello from React!!!</h2>
        </div>
    );
}

export default App;
