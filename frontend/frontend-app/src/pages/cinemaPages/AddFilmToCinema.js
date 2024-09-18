import axios from "axios";

function AddFilmCinema(){
    const [cid, setCid] = useState(0)
    const [fid, setFid] = useState(0)
    const [cinemas, setCinemas] = useState([])
    const [films, setFilms] = useState([]);
    let url = process.env.REACT_APP_MICRO_URL + "/cinema/addFilm/";
    useEffect(() => {
        let cinemaUrl= process.env.REACT_APP_MICRO_URL + "/cinema/list";
        try {
            axios.get(cinemaUrl).then(result => {
                setCinemas(result.data);

            })
        } catch (e) {
            console.log(e);
        }
        let filmUrl= process.env.REACT_APP_MICRO_URL + "/films/list";
        try {
            axios.get(filmUrl).then(result => {
                setFilms(result.data);

            })
        } catch (e) {
            console.log(e);
        }
    },[])
    let handleSubmit = (event) => {
        event.preventDefault();

        let tempUrl = url+cid+"/"+fid;
        try {
            axios.post(tempUrl).then(result => {
                if (result.data === "Film created") {
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
    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Cinema Selection</Form.Label>
                <Form.Select aria-label="Default select example" onChange={(event) => setRating(event.target.value)}>
                    {cinemaList.map((cinema) => {
                        return (<option value={rate.cinema_id}>{cinema.name}</option>)
                    })}
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Film</Form.Label>
                <Form.Select aria-label="Default select example" onChange={(event) => setRating(event.target.value)}>
                    {filmList.map((film) => {
                        return (<option value={film.film_id}>{film.name}</option>)

                    })}

                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Button variant="primary" type="submit">
                    Add to cinema
                </Button>
            </Form.Group>

        </Form>
    )
}

export default AddFilmCinema;