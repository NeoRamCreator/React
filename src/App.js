
import './App.css';
import './Grid.css';
import './output.css';
import './button.css';


// import Header from './components/Header';
import Welcom from './components/Welcom';
import ComOne from './components/ComOne';
import Doubled from './components/Double';
import Form from './components/Form';
import Grid from './components/Grid';
import Parent from './components/LiftingStateUp';

function App() {
  return (
    <>

      <Grid />

      {/* <h6>App.js</h6> */}
      {/* <Header /> */}

      <Welcom />
      <ComOne />
      <Doubled arr={[1, 2, 3, 4, 5]} />
      <Form />
      <Parent />

    </>
  );
}

export default App;
