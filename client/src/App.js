import './App.css';
import Home from './component/Home/Home';
import DataProvider from './context/DataProvider';

function App() {
  return (
    <DataProvider className="App">
      <Home/>
    </DataProvider>
  );
}

export default App;
