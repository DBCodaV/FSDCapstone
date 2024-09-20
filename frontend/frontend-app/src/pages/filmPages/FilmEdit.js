import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
import BackButton from "../../component/BackButton";

function FilmEdit(){
    
    const [name, setName] = useState("")
    const [rating, setRating] = useState("")
    const ratings = ["U", "PG", "12A", "12", "15", "18"]
    const [description, setDescription] = useState("")
    const [error, setError] = useState("");
    const [searchParams, setParams] = useSearchParams();
    const [isLoading, setIsLoading] = useState(true)
    let id = searchParams.get("id");
    let navigate = useNavigate()
    let url = process.env.REACT_APP_MICRO_URL + "/films/edit";
    let handleSubmit = (event) => {
        event.preventDefault();

        let details = { film_id:id, name: name, rating: rating, description: description }
        try {
            axios.post(url, details).then(result => {
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
    useEffect(() => {
        let getUrl = process.env.REACT_APP_MICRO_URL + "/films/byid/" + id;
        try {
            axios.get(getUrl).then(result => {
                setName(result.data.name)
                setDescription(result.data.description)
                setRating(result.data.rating);
                setIsLoading(false);
            })
        } catch (e) {
            console.log(e);
            setIsLoading(false);
            setError("Something went wrong while loading");
        }
    }, [])
    return (
        <div>
            <h1>Edit Film</h1>
            <span style={{ "color": "red" }}>{error}</span>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Film Name</Form.Label>
                <Form.Control type="text" defaultValue={name} onChange={(event) => setName(event.target.value)} />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Film Rating</Form.Label>
                <Form.Select aria-label="Default select example" defaultValue={rating} onChange={(event) => setRating(event.target.value)}>
                    {ratings.map((rate) => {
                        return(<option key={rate} value={rate}>{rate}</option>)
                        
                    })}

                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Film Description</Form.Label>
                <Form.Control type="text" placeholder="Enter description" defaultValue={description} onChange={(event) => setDescription(event.target.value)} />

            </Form.Group>
            <Form.Group className="mb-3">
                <Button variant="primary" type="submit">
                    Update Film
                </Button>
            </Form.Group>
            <BackButton/>
        </Form>
        </div>
    )
}

export default FilmEdit;