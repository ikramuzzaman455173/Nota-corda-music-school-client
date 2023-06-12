import { Navigate, useLocation } from "react-router";
import UseAuth from "../Hooks/UseAuth";
import LoadingSpinner from "../Components/SharedComponents/LoadingSpinner";
import UseAllUsers from "../Hooks/UseAllUsers";
import UseIsStudent from "../Hooks/UseIsStudent";


const StudentRoute = ({ children }) => {
    const { user,loading } = UseAuth()
    const [,isStudentLoading] =UseIsStudent()
    const [allUsers] = UseAllUsers()
    const currentUser = allUsers?.find(users => users?.email === user?.email)
    const location = useLocation();

    if(loading || isStudentLoading){
        return <LoadingSpinner/>
    }

    if (currentUser?.role==='user') {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default StudentRoute;