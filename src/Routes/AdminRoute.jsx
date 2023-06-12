import { Navigate, useLocation } from "react-router";
import UseAuth from "../Hooks/UseAuth";
import LoadingSpinner from "../Components/SharedComponents/LoadingSpinner";
import UseAdmin from "../Hooks/UseAdmin";
import UseAllUsers from "../Hooks/UseAllUsers";


const AdminRoute = ({ children }) => {
    const { user, loading } = UseAuth();
    const [allUsers] = UseAllUsers()
    const currentUser = allUsers?.find(users => users?.email === user?.email)
    const [, isAdminLoading] = UseAdmin()
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <LoadingSpinner />
    }

    if (currentUser?.role==='admin') {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;