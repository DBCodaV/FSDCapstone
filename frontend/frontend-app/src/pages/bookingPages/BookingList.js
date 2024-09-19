import { useEffect, useState } from "react"
import axios from "axios";
import Loading from "../../component/Loading";

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
        }

    }, [])
    return isLoading ? (<Loading />) :(
    <div>
        <p>Cinema List Page</p>
        {bookList.map((booking) => {
            return (
                <p>{booking.id} - {booking.cost}</p>
            )
        })}
        </div>)
}
export default BookingList