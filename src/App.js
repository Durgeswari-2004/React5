import logo from './logo.svg';
import './App.css';
import Class1 from './components/Class1';
import Class2 from './components/Class2';
import Class3 from './components/Class3';
import Errorboundaries from './components/Errorboundaries';

function App() {
  return (
    <div className="App">
      <Errorboundaries>
      <Class1/>
      </Errorboundaries>
      <Errorboundaries>
        <Class2/>
      </Errorboundaries>
      <Errorboundaries>
        <Class3/>
      </Errorboundaries>
      
    </div>
  );
}
export default App