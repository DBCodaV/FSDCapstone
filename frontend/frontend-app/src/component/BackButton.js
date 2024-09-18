import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button"
function BackButton() {
    let navigate = useNavigate();
    function goBack() {
        navigate(-1);
    }
    return (
        <Button variant="primary" onClick={goBack}>
            Go Back
        </Button>
    )

}

export default BackButton;