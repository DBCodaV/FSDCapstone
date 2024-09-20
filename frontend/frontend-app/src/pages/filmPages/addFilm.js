import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form";
import BackButton from "../../component/BackButton";
function AddFilm() {
    const [name, setName] = useState("")
    const [rating, setRating] = useState("U")
    const ratings = ["U", "PG", "12A", "12", "15", "18"]
    const [description, setDescription] = useState("")
    const [error, setError] = useState("");
    let navigate = useNavigate()
    let url = process.env.REACT_APP_MICRO_URL + "/films/add";
    let handleSubmit = (event) => {
        event.preventDefault();

        let details = { name: name, rating: rating, description: description }
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
    return (
        <div>
            <h1>Add New Film</h1>
            <span style={{ "color": "red" }}>{error}</span>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Film Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" onChange={(event) => setName(event.target.value)} />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Film Rating</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={(event) => setRating(event.target.value)}>
                        {ratings.map((rate) => {
                            return (<option key={rate} value={rate}>{rate}</option>)

                        })}

                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Film Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter description" onChange={(event) => setDescription(event.target.value)} />

                </Form.Group>
                <Form.Group className="mb-3">
                    <Button variant="primary" type="submit">
                        Add Film
                    </Button>
                </Form.Group>
                <BackButton />
            </Form>
        </div>
    )
}
export default AddFilm;