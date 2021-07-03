import Navi from '../navi/Navi';
import Dashboard from './Dashboard';
import { Container } from 'reactstrap';

function App(props) {
    return (
        <div>
            <Container>
                <Navi />
                <Dashboard />
            </Container>
        </div>
    );
}

export default App;
