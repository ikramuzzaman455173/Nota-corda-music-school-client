import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import LoadingSpinner from "../Components/SharedComponents/LoadingSpinner";
import UseAllUsers from "../Hooks/UseAllUsers";


const AdminRoute = ({ children }) => {
    const navigation = useNavigation()
    const { user, loading } = UseAuth();
    const [allUsers] = UseAllUsers()
    const currentUser = allUsers?.find(users => users?.email === user?.email)
    const location = useLocation();
    if (loading||navigation.state==='loading') {
        return <LoadingSpinner />
    }

    if (currentUser?.role==='admin') {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;