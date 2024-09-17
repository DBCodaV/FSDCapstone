import { useEffect } from "react"
import axios from "axios";

function BookingList() {
    const [bookList, setList] = useState([])
    const [err, setErr] = useState("")
    let url = process.env.REACT_APP_MICRO_URL + "/booking/list";
    let email = sessionStorage.getItem("email")
    useEffect(() => {

        try {
            axios.get(url, { 'headers': { 'email': email } }).then(result => {
                setList(result.data);
            })
        } catch (e) {
            console.log(e);
        }

    }, [])
    return (
    <div>
        <p>Cinema List Page</p>
        {bookList.map((booking) => {
            return (
                <p>{booking.id} - {booking.cost}</p>
            )
        })}
        </div>)
}
export default BookingList()