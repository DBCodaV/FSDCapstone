import { Link } from "react-router-dom"

function AdminPage(){
    return(
        <div> NMS Admin
            <ul>
                <li><Link to="/addCinema">Add New Cinema</Link></li>
                <li><Link to="/addFilm">Create new Film Entry</Link></li>
                <li><Link to="/cinemaListEdit">Edit Existing Cinema</Link></li>
                <li><Link to="/filmListEdit">Edit Existing Film</Link></li>
                <li><Link to="/logout">Logout</Link></li>
            </ul>

            
            
            
            
        </div>
    )
}
export default AdminPage