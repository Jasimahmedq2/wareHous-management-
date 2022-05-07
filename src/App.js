import { Route, Routes } from 'react-router';
import './App.css';
import Home from './Home/Home';

function App() {
  return (
    <div className="App">
      <h1>hello werehouse inventory</h1>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
