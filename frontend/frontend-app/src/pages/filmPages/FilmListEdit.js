import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BackButton from "../../component/BackButton";

function FilmListEdit(){
    const [filmList, setList] = useState([]);

    let url = process.env.REACT_APP_MICRO_URL + "/films/list";
    useEffect(() => {
        try {
            axios.get(url).then(result => {
                console.log(result.data)
                setList(result.data);
            })
        } catch (e) {
            console.log(e);
        }
    }, [])
    return (<div><p>Film List</p>
        {filmList.map((film) => {
            return (
                <div key={film.film_id} >
                <Link  to={"/film/edit?id="+film.film_id}>{film.name}</Link><br/>
                </div>
            )
        })}
        <BackButton/>
        </div>)
}
export default FilmListEdit;