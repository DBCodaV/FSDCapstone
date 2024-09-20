import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import BackButton from "../../component/BackButton";
import Loading from "../../component/Loading";

function FilmList() {
    const [filmList, setList] = useState([]);
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    let url = process.env.REACT_APP_MICRO_URL + "/films/list";
    useEffect(() => {
        try {
            axios.get(url).then(result => {
                setList(result.data);
                setIsLoading(false)
            })
        } catch (e) {
            console.log(e);
            setError(e.message)
            setIsLoading(false);
        }
    }, [])
    return isLoading ? (<Loading />) : (<div><p>Film List</p>
        <span style={{ "color": "red" }}>{error}</span>
        {filmList.map((film) => {
            return (
                <Link key={film.film_id} to={"/film/info?id=" + film.film_id}>{film.name}</Link>
            )
        })}
        <BackButton />
    </div>)
}
export default FilmList;