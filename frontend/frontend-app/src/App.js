import logo from './logo.svg';

import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/loginPages/Login';
import AdminPage from './pages/loginPages/AdminPage';
import CinemaList from './pages/cinemaPages/cinemaList';
import ErrorPage from './component/ErrorPage';
import SignUp from './pages/loginPages/Signup';
import CinemaPage from './pages/cinemaPages/cinemaPage';
import AddCinema from './pages/cinemaPages/AddCinema';
import FilmList from './pages/filmPages/filmList';
import AddFilm from './pages/filmPages/addFilm';
import CustomerPage from './pages/loginPages/CustomerPage';
import Logout from './pages/loginPages/Logout';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}

      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/logout' element={<Logout />}></Route>
        <Route path='/admin' element={<AdminPage />}></Route>
        <Route path='/customer' element={<CustomerPage />}></Route>

        <Route path={'/cinema/*'} element={
          <div>
            <Routes>
              <Route path={'/list'} element={<CinemaList />} />
              <Route path={'/info'} element={<CinemaPage />} />
              <Route path={'/add'} element={<AddCinema />} />
              <Route path={'/addFilm'} element={<AddFilmCinema/>}/>
            </Routes>
          </div>

        }></Route>
        <Route path={'/film/*'} element={
          <div>
            <Routes>
              <Route path={'/list'} element={<FilmList />} />
              <Route path={'/info'} element={<CinemaPage />} />
              <Route path={'/add'} element={<AddFilm />} />
            </Routes>
          </div>
        }></Route>
        <Route path={'/booking/*'} element={
          <div>
            <Routes>
              <Route path={'/list'} element={<FilmList />} />
              <Route path={'/info'} element={<CinemaPage />} />
              <Route path={'/add'} element={<AddCinema />} />
            </Routes>
          </div>
        }></Route>
        <Route path="*" exact={true} element={<ErrorPage />} />
      </Routes>

      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
