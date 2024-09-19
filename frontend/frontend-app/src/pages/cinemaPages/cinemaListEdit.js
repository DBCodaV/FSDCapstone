import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import BackButton from "../../component/BackButton";

function CinemaListEdit() {
    const [list, setList] = useState([])
    let url = process.env.REACT_APP_MICRO_URL + "/cinema/list";
    useEffect(() => {
        try {
            axios.get(url).then(result => {
                setList(result.data);

            })
        } catch (e) {
            console.log(e);
        }
    }, [])
    return (<div><p>Cinema List Page</p>
        {list.map((cinema) => {
            return (
                <p><Link to={"/cinema/edit?id=" + cinema.cinema_id}>{cinema.name}</Link></p>
            )
        })}
        <BackButton /></div>)
}

export default CinemaListEdit