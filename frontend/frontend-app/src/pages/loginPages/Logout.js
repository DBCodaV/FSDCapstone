import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button"
function Logout() {
    let navigate = useNavigate()
    let handleLogout = () => {
        sessionStorage.removeItem("user");
        navigate("/")
    }
    return (
        <div>
            <Button variant="danger" type="submit" onClick={handleLogout}>
                Logout
            </Button>
        </div>
    )
}
export default Logout();