import { useEffect, useState } from "react"
import axios from "axios";
import Loading from "../../component/Loading";
import { Link } from "react-router-dom";
import BackButton from "../../component/BackButton";

function BookingList() {
    const [bookList, setList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [err, setErr] = useState("")
    let url = process.env.REACT_APP_MICRO_URL + "/booking/list";
    let email = sessionStorage.getItem("user")
    useEffect(() => {
        try {
            axios.get(url, { 'headers': { 'email': email } }).then(result => {
                setList(result.data);
                setIsLoading(false)
            })
        } catch (e) {
            console.log(e);
            setIsLoading(false);
            setErr(e.message);
        }

    }, [])
    return isLoading ? (<Loading />) :(
    <div>
        <p>List of Bookings</p>
        <span style={{ "color": "red" }}>{err}</span>
        {bookList.map((booking) => {
            return (
                <Link key={booking.booking_id} to={"/booking/info?id="+booking.booking_id}>{booking.film.name} - {booking.cost}</Link>
            )
        })}
        <br/>
        <BackButton/>
        </div>)
}
export default BookingList