import { useQuery } from "@tanstack/react-query"
const UseAllClass = () => {

  const {data:allClass=[],refetch,isLoading:loading} = useQuery({
    queryKey: ['allClass'],
    queryFn: async () => {
      const res = await fetch('https://summer-camp-school-server-two.vercel.app/allClass')
      return res.json()
    }
  })
  return [allClass,refetch,loading]
}
export default UseAllClass
