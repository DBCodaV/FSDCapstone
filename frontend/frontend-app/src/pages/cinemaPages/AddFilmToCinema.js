import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form";
import BackButton from "../../component/BackButton";
import axios from "axios";
function AddFilmCinema() {
    const [cid, setCid] = useState(0)
    const [fid, setFid] = useState(0)
    const [cinemas, setCinemas] = useState([])
    const [films, setFilms] = useState([]);
    const [error, setError] = useState("")
    let url = process.env.REACT_APP_MICRO_URL + "/cinema/addFilm/";
    let navigate = useNavigate();
    useEffect(() => {
        let cinemaUrl = process.env.REACT_APP_MICRO_URL + "/cinema/list";
        try {
            axios.get(cinemaUrl).then(result => {
                setCinemas(result.data);
                setCid(result.data[0].cinema_id)
            })
        } catch (e) {
            console.log(e);
        }
        let filmUrl = process.env.REACT_APP_MICRO_URL + "/films/list";
        try {
            axios.get(filmUrl).then(result => {
                setFilms(result.data);
                setFid(result.data[0].film_id)
            })
        } catch (e) {
            console.log(e);
        }
    }, [])
    let handleSubmit = (event) => {
        event.preventDefault();

        let tempUrl = url + cid + "/" + fid;
        console.log(tempUrl);
        try {
            axios.post(tempUrl).then(result => {

                if (result.data === "Film Added") {
                    navigate("/admin")
                }
                else {
                    setError(result.data);
                }
            })

        } catch (e) {
            console.log(e)
            setError("Something went wrong")
        }
    }
    return (
        <div>
            <h1>Add Film To Cinema</h1>
            <span style={{ "color": "red" }}>{error}</span>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Cinema Selection</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={(event) => setCid(event.target.value)}>
                        {cinemas.map((cinema) => {
                            return (<option key={cinema.cinema_id} value={cinema.cinema_id}>{cinema.name}</option>)
                        })}
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Film</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={(event) => setFid(event.target.value)}>
                        {films.map((film) => {
                            return (<option key={film.film_id} value={film.film_id}>{film.name}</option>)

                        })}

                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Button variant="primary" type="submit">
                        Add to cinema
                    </Button>
                </Form.Group>
                <BackButton />
            </Form>
        </div>
    )
}

export default AddFilmCinema;