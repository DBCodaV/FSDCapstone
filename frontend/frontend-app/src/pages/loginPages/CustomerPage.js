import { Link } from "react-router-dom";

function CustomerPage(){
    return(
        <div>
            <h1>Welcome to NMS Cinemas</h1>
            <ul>
                <li><Link>View Local Cinemas</Link></li>
                <li><Link>View Your Bookings</Link></li>
                <li><Link>Create New Booking</Link></li>
                <li><Link to="/logout">Logout</Link></li>
            </ul>
        </div>
    )
}
export default CustomerPage;