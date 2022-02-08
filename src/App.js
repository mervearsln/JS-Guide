import './App.css';
// import { ObjectOperations } from './components/object-op';
// import { getVariables } from './components/variables'
import {
  checkOptionalChaining,
  checkNullishValue
} from './components/es2020-new-features'

function App() {
  checkOptionalChaining()
  checkNullishValue()


  return (
    <div className="App">
      {"hello"}
      {/* <ObjectOperations />
      {getVariables()} */}
    </div>
  );
}

export default App;
