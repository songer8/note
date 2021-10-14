import Navbar from './Navbar';
import Home from './Home';
import useLocalStorage from './hooks/useLocalStorage';

function App() {

  const [timeStamp, setTimeStamp] = useLocalStorage('timeStamp', 'init');

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <span>{timeStamp}</span>
        <button onClick={() => setTimeStamp(new Date().getTime())}>设置localstorage</button>
      </div>
    </div>
  );
}

export default App;
