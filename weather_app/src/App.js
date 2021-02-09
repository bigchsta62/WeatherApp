import logo from './logo.svg';
import './App.css';
import WeatherCard from "./Components/WeatherCard"
import Nav from "./Components/Nav"

function App() {
  return (
    <div className="App">
      <Nav/>
      <WeatherCard/>
    </div>
  );
}

export default App;
