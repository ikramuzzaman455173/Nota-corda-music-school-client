import { Navigate, useLocation } from "react-router";
import LoadingSpinner from "../Components/SharedComponents/LoadingSpinner";
import UseAllUsers from "../Hooks/UseAllUsers";
import UseAuth from "../Hooks/UseAuth";;


const InstructorRoute = ({ children }) => {
    const { user, loading } = UseAuth()
    const [allUsers] = UseAllUsers()
    const currentUser = allUsers?.find(users => users?.email === user?.email)
    const location = useLocation();

    if(loading){
        return <LoadingSpinner/>
    }

    if (currentUser?.role === 'instructor') {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default InstructorRoute;