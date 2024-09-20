import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form";
function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [type, setType] = useState("");
    const [error, setError] = useState("")

    let navigate = useNavigate()
    let url = process.env.REACT_APP_MICRO_URL + "/login/signin";
    let handleSubmit = (event) => {
        event.preventDefault();

        let details = { emailid: email, password: password, typeofuser: type }
        try {
            axios.post(url, details).then(result => {
                console.log(result);
                if (result.data === "User login success") {
                    sessionStorage.setItem("user", email);
                    navigate("/customer")
                }
                else if (result.data === "Admin login success") {
                    sessionStorage.setItem("user", "admin")
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
            <h1>NMS Cinema Login</h1>
            <span style={{ "color": "red" }}>{error}</span>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    {["admin", "customer"].map((type) => (
                        <div key={type + "-input"} className="mb-3">
                            <Form.Check
                                type="radio"
                                name="grouped"
                                id={type + "-radio"}
                                label={type}
                                value={type}
                                onChange={(event) => setType(event.target.value)} />
                        </div>
                    ))}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form.Group>

                <Link to={"/signup"}>Sign up</Link>
            </Form>
        </div>
    )
}
export default Login;