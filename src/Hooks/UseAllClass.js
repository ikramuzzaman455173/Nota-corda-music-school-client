import { useQuery } from "@tanstack/react-query"
const UseAllClass = () => {

  const {data:allClass=[],isLoading:loading,refetch} = useQuery({
    queryKey: ['allClass'],
    queryFn: async () => {
      const res = await fetch('http://localhost:4000/allClass')
      return res.json()
    }
  })
  return [allClass,loading,refetch]
}
export default UseAllClass