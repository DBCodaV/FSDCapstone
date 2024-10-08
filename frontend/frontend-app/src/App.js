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
import AddFilmCinema from './pages/cinemaPages/AddFilmToCinema';
import MakeBooking from './pages/bookingPages/makeBooking';
import BookingList from './pages/bookingPages/BookingList';
import CinemaListEdit from './pages/cinemaPages/cinemaListEdit';
import CinemaEdit from './pages/cinemaPages/CinemaEdit';
import FilmListEdit from './pages/filmPages/FilmListEdit';
import FilmEdit from './pages/filmPages/FilmEdit';
import ViewBooking from './pages/bookingPages/viewBooking';
import FilmPage from './pages/filmPages/filmPage';

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
              <Route path={'/listEdit'} element={<CinemaListEdit/>}/>
              <Route path={'/edit'} element={<CinemaEdit />} />
            </Routes>
          </div>

        }></Route>
        <Route path={'/film/*'} element={
          <div>
            <Routes>
              <Route path={'/list'} element={<FilmList />} />
              <Route path={'/info'} element={<FilmPage />} />
              <Route path={'/add'} element={<AddFilm />} />
              <Route path={'/listEdit'} element={<FilmListEdit/>}/>
              <Route path={'/edit'} element={<FilmEdit />} />
            </Routes>
          </div>
        }></Route>
        <Route path={'/booking/*'} element={
          <div>
            <Routes>
              <Route path={'/list'} element={<BookingList />} />
              <Route path={'/info'} element={<ViewBooking />} />
              <Route path={'/add'} element={<MakeBooking />} />
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
