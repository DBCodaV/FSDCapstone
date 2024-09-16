import { Link } from "react-router-dom"

function AdminPage(){
    return(
        <div>Admin
            <Link to="/logout">Logout</Link>
        </div>
    )
}
export default AdminPage