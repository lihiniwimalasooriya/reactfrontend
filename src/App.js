import './App.css';
import Appbar from './components/Appbar'
import VehicleAdd from './components/VehicleAdd'
import VehicleDelete from './components/VehicleDelete'

function App() {
  return (
    <div className="App">
     
      <Appbar />
      <VehicleAdd />
      <VehicleDelete/>
    </div>
  );
}

export default App;
