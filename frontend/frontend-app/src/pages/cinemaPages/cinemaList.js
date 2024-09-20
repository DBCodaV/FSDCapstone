import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import BackButton from "../../component/BackButton";
import Loading from "../../component/Loading";

function CinemaList() {
    const [list, setList] = useState([])
    let url = process.env.REACT_APP_MICRO_URL + "/cinema/list";
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    useEffect(() => {
        try {
            axios.get(url).then(result => {
                setList(result.data);
            })
        } catch (e) {
            console.log(e);
            setError(e.message)
        }
    }, [])
    return isLoading ? (<Loading />) : (
        <div>
            <p>Cinema List Page</p>
            <span style={{ "color": "red" }}>{error}</span>

            {
                list.map((cinema) => {
                    return (
                        <p><Link key={cinema.cinema_id} to={"/cinema/info?id=" + cinema.cinema_id}>{cinema.name}</Link></p>
                    )
                })
            }


            <BackButton /></div>)
}

export default CinemaList