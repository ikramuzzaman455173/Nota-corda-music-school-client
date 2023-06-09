// import { useQuery } from '@tanstack/react-query';
// import UseAxiosSecure from './UseAxiosSecures';
// import UseAuth from './UseAuth';
// const useCart = () => {
//   const { user,loading } =UseAuth()
//   // const token = localStorage.getItem('jwt-token')
//   const [axiosSecure]=UseAxiosSecure()
//   const {data:selectClass=[],refetch} = useQuery({
//     queryKey: ['selectClass', user?.email],
//     enabled: !loading && !!user?.email && !!localStorage.getItem("access-token"),
//     queryFn: async () => {
//       const response = await axiosSecure(`http://localhost:4000/selectClass?email=${user?.email}`)
//       // console.log("response from axios",response.data);
//       return response.data
//     },
//   })

//   return [selectClass,refetch]
// }
// export default useCart