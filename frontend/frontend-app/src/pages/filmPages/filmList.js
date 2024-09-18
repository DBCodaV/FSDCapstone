import { useState , useEffect} from "react";
import axios from 'axios';

function FilmList() {
    const [filmList, setList] = useState([]);

    let url = process.env.REACT_APP_MICRO_URL + "/films/list";
    useEffect(() => {
        try {
            axios.get(url).then(result => {
                setList(result.data);
            })
        } catch (e) {
            console.log(e);
        }
    }, [])
    return (<div><p>Film List</p>
        {filmList.map((film) => {
            return (
                <p>{film.name}</p>
            )
        })}</div>)
}
export default FilmList;