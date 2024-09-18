import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import BackButton from "../../component/BackButton";
import axios from "axios";
function CinemaPage() {

    const [searchParams, setParams] = useSearchParams();
    let id = searchParams.get("id");
    let url = process.env.REACT_APP_MICRO_URL + "/cinema/byid/" + id;
    const [cinema, setCinema] = useState({});

    useEffect(() => {
        try {
            axios.get(url).then(result => {
                setCinema(result.data);
            })
        } catch (e) {
            console.log(e);
        }
    }, [])


    return (
        <div>
            <h1>Cinema Details</h1>
            <p>Name: {cinema.name}</p>
            <p>Address: {cinema.address}</p>
            <p>Films:</p>
            {(cinema.films).map((film) => {
                <p>{film.name}</p>
            })}
            <BackButton />
        </div>
    )

}
export default CinemaPage;