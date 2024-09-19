import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form";
import { ListGroup } from "react-bootstrap";
import Loading from "../../component/Loading";
import BackButton from "../../component/BackButton";

function CinemaEdit() {
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [films, setFilms] = useState([])
    const [error, setError] = useState("");
    const [searchParams, setParams] = useSearchParams();
    const [isLoading, setIsLoading] = useState(true)
    let id = searchParams.get("id");
    let navigate = useNavigate()
    let url = process.env.REACT_APP_MICRO_URL + "/cinema/edit";
    useEffect(() => {
        let getUrl = process.env.REACT_APP_MICRO_URL + "/cinema/byid/" + id;
        try {
            axios.get(getUrl).then(result => {
                setName(result.data.name)
                setAddress(result.data.address)
                setFilms(result.data.films)
                console.log(result.data.films)
                setIsLoading(false);
            })
        } catch (e) {
            console.log(e);
            setIsLoading(false);
        }
    }, [])
    const deleteEntry = (idx) => {
        let tempFilms = films;
        let tempRet = []
        tempFilms.forEach((film, id) => {
            if (id == idx) {
                return
            }
            tempRet.push(film)
        })
        setFilms(tempRet)
    }
    let handleSubmit = (event) => {
        event.preventDefault();

        let details = { cinema_id: id, name: name, address: address, films: films }
        try {
            axios.patch(url, details).then(result => {
                if (result.data === "Cinema Added") {
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

    return isLoading ? (<Loading />) : (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Cinema Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" onChange={(event) => setName(event.target.value)} defaultValue={name} />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Cinema Address</Form.Label>
                <Form.Control type="text" placeholder="Enter address" onChange={(event) => setAddress(event.target.value)} defaultValue={address} />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Click to delete film</Form.Label>
                <ListGroup defaultActiveKey="#film1">
                    {films.map((film, idx) => {
                        return (
                            <ListGroup.Item className="mb-3 mt-3" action href={"#film" + idx} onClick={() => deleteEntry(idx)} > {film.name} </ListGroup.Item>
                        )
                    })}
                </ListGroup>
            </Form.Group>
            <Form.Group className="mb-3">
                <Button variant="primary" type="submit">
                    Add Cinema
                </Button>
            </Form.Group>
            <BackButton/>
        </Form>
    )

}
export default CinemaEdit;