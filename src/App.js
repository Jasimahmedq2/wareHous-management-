import { Route, Routes } from 'react-router';
import './App.css';
import Blog from './Blog/Blog';
import Home from './Home/Home';
import Inventory from './Inventory/Inventory';
import Login from './Login/Login'
import NotFound from './NotFound/NotFound';
import Registerd from './Registerd/Registerd';
import RequireAuth from './RequerAuth/RequerAuth';
import Header from './Header/Header'

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registerd' element={<Registerd></Registerd>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
    </div>
  );
}

export default App;
