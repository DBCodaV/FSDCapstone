import { useEffect } from "react"
import axios from "axios";

function MakeBooking() {
    const [film, setFilm] = useState("");
    const [cinemas, setCinemas] = useState([])
    const [cinema, setCinema] = useState("");
    const [film, setFilm] = useState("");
    const [adult, setAdult] = useState(0);
    const [child,setChild] = useState(0);
    const [err, setErr] = useState("");
    let url = process.env.REACT_APP_MICRO_URL + "/booking/store";
    let email = sessionStorage.getItem("email")
    useEffect(() => {
        try {
            let cinemaUrl = process.env.REACT_APP_MICRO_URL + "/cinema/list";
            axios.get(cinemaUrl).then(result => {
                setCinemas(result.data);

            })
        } catch (e) {
            console.log(e);
        }
    }, [])

    function handleSubmit() {

        try {
            axios.post(url, { 'headers': { 'email': email } },).then(result => {
                setList(result.data);
            })
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Cinema Selection</Form.Label>
                <Form.Select aria-label="Default select example" onChange={(event) => setRating(event.target.value)}>
                    {cinemas.map((rate) => {
                        return (<option value={rate.cinema_id}>{cinema.name}</option>)
                    })}
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Film</Form.Label>
                <Form.Select aria-label="Default select example" onChange={(event) => setRating(event.target.value)}>
                    {ratings.map((rate) => {
                        return (<option value={rate}>{rate}</option>)

                    })}

                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Select number of adults</Form.Label>
                <Form.Control type="number" onChange={(event) => setDescription(event.target.value)} />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Select number of children</Form.Label>
                <Form.Control type="number" onChange={(event) => setDescription(event.target.value)} />

            </Form.Group>
            <Form.Group className="mb-3">
                <Button variant="primary" type="submit">
                    Make booking
                </Button>
            </Form.Group>

        </Form>
    )

}
export default MakeBooking()