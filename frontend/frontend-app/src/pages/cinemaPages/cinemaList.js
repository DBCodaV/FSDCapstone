import axios from "axios";
import { useEffect, useState } from "react"

function CinemaList(){
    const [list,setList] = useState([])
    let url = process.env.REACT_APP_MICRO_URL + "/cinema/list";
    useEffect(() => {
        try{
            axios.get(url).then(result => {
                setList(result.data);
            })
        } catch(e){
            console.log(e);
        }
    },[])
    return(<div><p>Cinema List Page</p>
    {list.map((cinema) => {
        return(
            <p>{cinema.name}</p>
        )
    })}</div>)
}

export default CinemaList