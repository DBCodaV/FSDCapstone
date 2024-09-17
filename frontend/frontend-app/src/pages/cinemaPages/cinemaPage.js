import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
function CinemaPage() {
    let navigate = useNavigate()
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

    function goBack(){
        navigate(-1);
    }
    return(
        <div>
            <h1>Cinema Details</h1>
            <p>Name: {cinema.name}</p>
            <p>Address: {cinema.address}</p>

        </div>
    )

}
export default CinemaPage;