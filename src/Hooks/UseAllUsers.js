import { useQuery } from "@tanstack/react-query"
const UseAllUsers = () => {

  const {data:allUsers=[],refetch,isLoading:loading} = useQuery({
    queryKey: ['allUsers'],
    enabled: !loading && !!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const res = await fetch('https://summer-camp-school-server-two.vercel.app/allUsers')
      return res.json()
    }
  })
  return [allUsers,refetch,loading]
}
export default UseAllUsers
