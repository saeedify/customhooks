import './App.css';
import { useToggle } from './components/useToggle';

function App() {

  const [ isVisible, toggle ] = useToggle();

  return (
    <div className="App">

      <button onClick={toggle}> Show/Hide </button>

      { isVisible && <p>Hidden Text</p> }

    </div>
  );
}

export default App;
