import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import LoadingSpinner from "../Components/SharedComponents/LoadingSpinner";
import UseAdmin from "../Hooks/UseAdmin";
import UseAllUsers from "../Hooks/UseAllUsers";


const AdminRoute = ({ children }) => {
    const { user, loading } = UseAuth();
    const [allUsers] = UseAllUsers()
    const currentUser = allUsers?.find(users => users?.email === user?.email)
    const [isAdmin] = UseAdmin()
    const location = useLocation();

    if (loading) {
        return <LoadingSpinner />
    }

    if (currentUser?.role==='admin'||isAdmin===true) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;