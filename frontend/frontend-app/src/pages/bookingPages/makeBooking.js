import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form";
import BackButton from "../../component/BackButton";
import axios from "axios";
import Loading from "../../component/Loading";
function MakeBooking() {

    const [cinemas, setCinemas] = useState([])
    const [cinema, setCinema] = useState(0);
    const [films, setFilms] = useState([])
    const [film, setFilm] = useState(0);
    const [adult, setAdult] = useState(0);
    const [child, setChild] = useState(0);
    const [cost, setCost] = useState(0.0)
    const [err, setErr] = useState("");
    const [isLoading, setIsLoading] = useState(true)
    let navigate = useNavigate()
    let url = process.env.REACT_APP_MICRO_URL + "/booking/store";
    let email = sessionStorage.getItem("user")
    useEffect(() => {
        try {
            let cinemaUrl = process.env.REACT_APP_MICRO_URL + "/cinema/list";
            axios.get(cinemaUrl).then(result => {
                setCinemas(result.data);
                setCinema(result.data[0].cinema_id)
                setFilms(result.data[0].films)
                setFilm(result.data[0].films[0].film_id)
            })
        } catch (e) {
            console.log(e);
            setIsLoading(false);
            setErr(e.message)
        }
    }, [])
    useEffect(() => {
        setIsLoading(true)
        if (cinemas.length === 0) {
            return;
        }
        let selected = (cinemas.filter((cin) => (cin.cinema_id == cinema)))[0]
        console.log(selected.films.length)
        if (selected.films.length === 0) {
            setFilms([]);
            setFilm(0);
            setIsLoading(false);
            return;
        }
        setFilms(selected.films);
        setFilm(selected.films[0].film_id);
        setIsLoading(false);
    }, [cinema])
    useEffect(() => {
        let amount = adult * 9.95 + child * 4.99
        setCost(amount)
    }, [adult, child])
    function handleSubmit(event) {
        event.preventDefault();
        let selectedCinema = (cinemas.filter((cin) => (cin.cinema_id == cinema)))[0]
        let selectedFilm = (films.filter((fin) => (fin.film_id == film)))[0]
        let booking = { cost: cost, adults: adult, children: child, film: selectedFilm, cinema: selectedCinema }
        let headers = { 'email': email, 'Content-Type': 'application/json', 'test': 'test' }
        try {
            axios.post(url, booking, { headers: headers }).then(result => {
                if(result.data==="Booking created"){
                    navigate("/customer")
                } else{
                    setErr(result.data)
                }
            })
        } catch (e) {
            console.log(e);
            setErr(e.message)
        }
    }
    return isLoading ? (<Loading />) : (
        <div>
            <h1>Make Booking</h1>
            <span style={{ "color": "red" }}>{err}</span>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Cinema Selection</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={(event) => setCinema(event.target.value)}>
                        {cinemas.map((cinema) => {
                            return (<option key={cinema.cinema_id} value={cinema.cinema_id}>{cinema.name}</option>)
                        })}
                    </Form.Select>
                </Form.Group>
                {(films.length > 0) ? (<Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Film</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={(event) => setFilm(event.target.value)}>
                        {films.map((film) => {
                            return (<option key={film.film_id} value={film.film_id}>{film.name}</option>)

                        })}
                    </Form.Select>
                </Form.Group>) : (
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>No Films Found, Please Select Another Cinema</Form.Label>

                    </Form.Group>
                )}

                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Select number of adults (9.95)</Form.Label>
                    <Form.Control type="number" onChange={(event) => setAdult(event.target.value)} />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Select number of children (4.99)</Form.Label>
                    <Form.Control type="number" onChange={(event) => setChild(event.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Cost is {cost} </Form.Label>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Button variant="primary" type="submit">
                        Make booking
                    </Button>
                </Form.Group>
                <BackButton />
            </Form>
        </div>
    )

}
export default MakeBooking;