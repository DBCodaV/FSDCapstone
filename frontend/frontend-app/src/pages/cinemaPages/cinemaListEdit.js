import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import BackButton from "../../component/BackButton";

function CinemaListEdit() {
    const [list, setList] = useState([])

    let url = process.env.REACT_APP_MICRO_URL + "/cinema/list";
    const [error, setError] = useState("")
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
    return (<div><h1>Cinema Edit List</h1>
        <p>Click to Edit Cinema</p>
        <span style={{ "color": "red" }}>{error}</span>
        {list.map((cinema) => {
            return (
                <p key={cinema.cinema_id}><Link to={"/cinema/edit?id=" + cinema.cinema_id}>{cinema.name}</Link></p>
            )
        })}
        <BackButton /></div>)
}

export default CinemaListEdit