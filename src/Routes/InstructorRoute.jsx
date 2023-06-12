import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../Components/SharedComponents/LoadingSpinner";
import UseAllUsers from "../Hooks/UseAllUsers";
import UseAuth from "../Hooks/UseAuth"; import UseInstructor from "../Hooks/UserInstructor";
;


const InstructorRoute = ({ children }) => {
    const { user, loading } = UseAuth()
    const [isInstructor] = UseInstructor()
    const [allUsers] = UseAllUsers()
    const currentUser = allUsers?.find(users => users?.email === user?.email)
    const location = useLocation();

    if (loading) {
        return <LoadingSpinner />
    }

    if (currentUser?.role === 'instructor' || isInstructor === true) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default InstructorRoute;