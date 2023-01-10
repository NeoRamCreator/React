
import './App.css';

import Header from './components/Header';
import Welcom from './components/Welcom';
import ComOne from './components/ComOne';
import Doubled from './components/Double';

function App() {
  return (
    <>
    
    <h6>App.js</h6>
    <Header />
    <Welcom />
    <ComOne />
    <Doubled arr={[1, 2, 3, 4, 5]}/>
    {/* <button onClick={()=><Doubled arr={[1, 2, 3, 4, 5]}/>}>Double</button> */}
    </>
  );
}

export default App;
