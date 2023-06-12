// import { useQuery } from "@tanstack/react-query"
// import UseAuth from "./UseAuth"
// import useAxiosSecure from "./useAxiosSecure"

// const UseAdmin = () => {
//   const [axiosSecure] = useAxiosSecure()
//   const { user, loading } = UseAuth()
//   const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
//     queryKey: ['isAdmin', user?.email],
//     enabled: !loading && !! !!user?.email && !!localStorage.getItem("access-token"),
//     queryFn: async () => {
//       if (!loading && user?.email) {
//         const res = await axiosSecure.get(`/users/admin/${user?.email}`)
//       // console.log('isAdmin', res.data);
//       return res.data.admin
//       }
//     }
//   })
//   return [isAdmin, isAdminLoading]
// }
// export default UseAdmin
