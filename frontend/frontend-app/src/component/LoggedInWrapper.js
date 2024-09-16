import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function LoggedInWrapper({ children, ...rest }) {
    const [loading, setIsLoading] = useState(true)
    const [goodToGo, setGood] = useState(false);
    useEffect(() => {
        let user = sessionStorage.getItem("user")
        if (user === null) {
            setIsLoading(false);
            return;
        }
        setGood(true)
        setIsLoading(false)
    }, [])
    return (loading ? (
        <div><p>Loading</p></div>) :
        (!goodToGo) ?
            (<Navigate to="/" state={{ from: location }} replace />) : children)
}
export default LoggedInWrapper;