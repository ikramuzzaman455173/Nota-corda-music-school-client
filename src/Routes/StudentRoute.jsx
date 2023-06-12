import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import LoadingSpinner from "../Components/SharedComponents/LoadingSpinner";
import UseAllUsers from "../Hooks/UseAllUsers";
import UseIsStudent from "../Hooks/UseIsStudent";


const StudentRoute = ({ children }) => {
  const { user, loading } = UseAuth()
  const [isStudent] = UseIsStudent()
  const [allUsers] = UseAllUsers()
  const currentUser = allUsers?.find(users => users?.email === user?.email)
  const location = useLocation();

  if (loading) {
    return <LoadingSpinner />
  }

  if (currentUser?.role === 'user' || isStudent === 'true') {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default StudentRoute;
