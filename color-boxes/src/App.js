import './App.css';
import './components/BoxContainer'
import BoxContainer from './components/BoxContainer';

function App() {
  return (
    <div className="App">
      <BoxContainer numBoxes={25}/>
    </div>
  );
}

export default App;
