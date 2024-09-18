import { Link } from "react-router-dom";

function CustomerPage(){
    return(
        <div>
            <h1>Welcome to NMS Cinemas</h1>
            <div>
                <Link to={"/cinema/list"}>View Local Cinemas</Link>
                <br/>
                <Link to={"/booking/list"}>View Your Bookings</Link>
                <br/>
                <Link to={"/booking/add"}>Create New Booking</Link>
                <br/>
                <Link to="/logout">Logout</Link>
                </div>
        </div>
    )
}
export default CustomerPage;