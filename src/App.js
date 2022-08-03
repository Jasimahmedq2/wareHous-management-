import { Route, Routes } from 'react-router';
import './App.css';
import Blog from './Blog/Blog';
import Home from './Home/Home';
import Inventory from './Inventory/Inventory';
import Login from './Login/Login'
import NotFound from './NotFound/NotFound';
import Registerd from './Registerd/Registerd';
import { ToastContainer } from 'react-toastify';
import RequireAuth from './RequerAuth/RequerAuth';
import Header from './Header/Header'
import Manage from './Manage/Manage';
import AddItem from './Manage/AddItem';
import MyItem from './Manage/MyItem';

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
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>

        <Route path='/manage' element={
          <RequireAuth>
            <Manage></Manage>
          </RequireAuth>
        }></Route>

        <Route path='/addItem' element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }></Route>

        <Route path='/myitem' element={
          <RequireAuth>
            <MyItem></MyItem>
          </RequireAuth>
        }></Route>


        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
