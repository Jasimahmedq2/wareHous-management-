import { Route, Routes } from 'react-router';
import './App.css';
import Home from './Home/Home';
import Login from './Login/Login'
import Registerd from './Registerd/Registerd';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registerd' element={<Registerd></Registerd>}></Route>
      </Routes>
    </div>
  );
}

export default App;
