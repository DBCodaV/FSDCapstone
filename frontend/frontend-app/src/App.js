import logo from './logo.svg';

import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/loginPages/Login';
import AdminPage from './pages/loginPages/AdminPage';
import CinemaList from './pages/cinemaPages/cinemaList';
import ErrorPage from './component/ErrorPage';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}

      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/admin' element={<AdminPage />}></Route>
        <Route path='/customer' element={<AdminPage />}></Route>
        
        <Route path={'/cinema/*'} element={
          <div>
            <Routes>
            <Route path={'/list'} element={<CinemaList/>} />
            </Routes>
            </div>

        }></Route>
        <Route path={'/film/*'} element={
          <Route path={'/list'} element={CinemaList} />
        }></Route>
        <Route path={'/booking/*'} element={
          <Route path={'/create'} element={CinemaList} />
        }></Route>
        <Route path="*" exact={true} element={<ErrorPage />} />
      </Routes>

      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
