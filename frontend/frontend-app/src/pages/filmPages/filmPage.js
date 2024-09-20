import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import BackButton from "../../component/BackButton";
import Loading from "../../component/Loading";

function FilmPage(){
    const [searchParams, setParams] = useSearchParams();
    let id = searchParams.get("id");
    let url = process.env.REACT_APP_MICRO_URL + "/films/byid/" + id;
    const [film, setFilm] = useState({});
    const [isLoading,setIsLoading] = useState(true)
    const [error, setError] = useState("")
    useEffect(() => {
        try {
            axios.get(url).then(result => {
                setFilm(result.data);
                setIsLoading(false);
            })
        } catch (e) {
            console.log(e);
            setIsLoading(false);
            setError(e.message)
        }
    }, [])


    return isLoading ? (<Loading/>) : (
        <div>
            <h1>Film Details</h1>
            <span style={{ "color": "red" }}>{error}</span>
            <p>Name: {film.name}</p>
            <p>Rating: {film.rating}</p>
            <p>Description: {film.description}</p>
            <BackButton />
        </div>
    )

}

export default FilmPage;