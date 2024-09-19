import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import BackButton from "../../component/BackButton";
import axios from "axios";
import Loading from "../../component/Loading";
function CinemaPage() {

    const [searchParams, setParams] = useSearchParams();
    let id = searchParams.get("id");
    let url = process.env.REACT_APP_MICRO_URL + "/cinema/byid/" + id;
    const [cinema, setCinema] = useState({});
    const [isLoading,setIsLoading] = useState(true)
    useEffect(() => {
        try {
            axios.get(url).then(result => {
                setCinema(result.data);
                console.log(result.data);
                setIsLoading(false);
            })
        } catch (e) {
            console.log(e);
            setIsLoading(false);
        }
    }, [])


    return isLoading ? (<Loading/>) : (
        <div>
            <h1>Cinema Details</h1>
            <p>Name: {cinema.name}</p>
            <p>Address: {cinema.address}</p>
            <p>Films:</p>
            {(cinema.films).map((film) => {
                return(<div><p>{film.name}</p><br/></div>)
                
            })}
            <BackButton />
        </div>
    )

}
export default CinemaPage;