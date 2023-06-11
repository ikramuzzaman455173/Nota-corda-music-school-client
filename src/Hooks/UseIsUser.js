import { useQuery } from "@tanstack/react-query"
import UseAuth from "./UseAuth"
import useAxiosSecure from "./useAxiosSecure"

const UseIsStudent = () => {
  const [axiosSecure]=useAxiosSecure()
  const { user,loading } = UseAuth()
  const {data:isStudent,isLoading:isStudentLoading } = useQuery({
    queryKey: ['isStudent', user?.email],
    enabled:!loading&&!!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/student/${user?.email}`)
      console.log('isStudent', res.data);
      return res.data.student
    }
  })
  return [isStudent,isStudentLoading]
}
export default UseIsStudent
