import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form";
import BackButton from "../../component/BackButton";

function AddCinema() {
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [error, setError] = useState("");
    let navigate = useNavigate()
    let url = process.env.REACT_APP_MICRO_URL + "/cinema/add";
    let handleSubmit = (event) => {
        event.preventDefault();

        let details = { name: name, address: address }
        try {
            axios.post(url, details).then(result => {
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
    return (
        <div>
            <h1>Add New Cinema</h1>
            <span style={{ "color": "red" }}>{error}</span>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Cinema Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" onChange={(event) => setName(event.target.value)} />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Cinema Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter address" onChange={(event) => setAddress(event.target.value)} />

                </Form.Group>
                <Form.Group className="mb-3">
                    <Button variant="primary" type="submit">
                        Add Cinema
                    </Button>
                </Form.Group>
                <BackButton />
            </Form>
        </div>
    )

}
export default AddCinema;