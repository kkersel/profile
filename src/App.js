import './App.css';
import Name from "./Name /LinksName";
import Cards from "./Cards/Cards";
import {Card2} from "./Cards2/Cards";
import Card3 from "./Cards3/Cards";
import Card4 from "./Cards4/Cards";

function App() {
    return (
        <div>
            <Name/>
            <div className='WrapperForCards'>
                <Cards/>
                <Card2/>
                <Card3/>
                <Card4/>
            </div>
        </div>
    );
}

export default App;
