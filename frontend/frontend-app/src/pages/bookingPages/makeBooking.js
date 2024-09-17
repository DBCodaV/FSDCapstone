import { useEffect } from "react"
import axios from "axios";

function MakeBooking() {

    const [err, setErr] = useState("")
    let url = process.env.REACT_APP_MICRO_URL + "/booking/store";
    let email = sessionStorage.getItem("email")

    function sendAPI() {
        try {
            axios.post(url, { 'headers': { 'email': email } }).then(result => {
                setList(result.data);
            })
        } catch (e) {
            console.log(e);
        }
    }

}
export default BookingList()