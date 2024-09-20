import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import BackButton from "../../component/BackButton";
import Loading from "../../component/Loading";

function ViewBooking() {
    const [searchParams, setParams] = useSearchParams();
    let id = searchParams.get("id");
    let url = process.env.REACT_APP_MICRO_URL + "/booking/byid/" + id;
    const [booking, setBooking] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState("")
    useEffect(() => {
        try {

            axios.get(url).then(result => {
                setBooking(result.data);
                setIsLoading(false);
            })
        } catch (e) {
            console.log(e);
            setIsLoading(false);
            setError(e.message)
        }
    }, [])


    return isLoading ? (<Loading />) : (
        <div>
            <h1>Booking Details</h1>
            <span style={{ "color": "red" }}>{error}</span>
            <p>Name: {booking.film.name}</p>
            <p>Rating: {booking.film.rating}</p>
            <p>Description: {booking.film.description}</p>
            <p>Adults: {booking.adults}</p>
            <p>Children: {booking.children}</p>
            <p>Cost: {booking.cost}</p>
            <BackButton />
        </div>
    )
}
export default ViewBooking;