import { Link } from "react-router-dom"

function AdminPage(){
    return(
        <div> NMS Admin
            <ul>
                <li><Link to="/cinema/add">Add New Cinema</Link></li>
                <li><Link to="/film/add">Create new Film Entry</Link></li>
                <li><Link to="/cinema/ListEdit">Edit Existing Cinema</Link></li>
                <li><Link to="/film/ListEdit">Edit Existing Film</Link></li>
                <li><Link to="/logout">Logout</Link></li>
            </ul>

            
            
            
            
        </div>
    )
}
export default AdminPage