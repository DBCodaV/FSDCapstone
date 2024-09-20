import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button"
import BackButton from "../../component/BackButton";
function Logout() {
    let navigate = useNavigate()
    let handleLogout = () => {
        sessionStorage.removeItem("user");
        navigate("/")
    }
    return (
        <div>
            <h1>Please click below to log out of the app</h1>
            <Button variant="danger" className="mb-3 mt-3" type="submit" onClick={handleLogout}>
                Logout
            </Button>
            <br/>
            <BackButton/>
        </div>
    )
}
export default Logout;