import logo from './logo.svg';
import './App.css';
import { Tweets } from './components/Tweets'
import { Register } from './components/Register'
import { Login } from './components/Login'

function App() {
  return (
    <div className="App">

      {/* <Register /> */}
      <Login />

      <Tweets />
    </div>
  );
}

export default App;
