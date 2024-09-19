import { Link } from "react-router-dom"

function AdminPage(){
    return(
        <div> NMS Admin
            
            <br/><Link to="/cinema/add">Add New Cinema</Link><br/>
                <Link to="/film/add">Create new Film Entry</Link><br/>
                <Link to="/cinema/ListEdit">Edit Existing Cinema</Link><br/>
                <Link to="/cinema/addFilm">Add Film to Cinema</Link><br/>
                <Link to="/film/ListEdit">Edit Existing Film</Link><br/>
                <Link to="/logout">Logout</Link><br/>
            

            
            
            
            
        </div>
    )
}
export default AdminPage