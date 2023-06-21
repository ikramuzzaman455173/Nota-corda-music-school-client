import { useQuery } from "@tanstack/react-query"
const UseallInstructor = () => {

  const {data:allInstructor=[],isLoading:loading,refetch} = useQuery({
    queryKey: ['allInstructor'],
    queryFn: async () => {
      const res = await fetch('https://summer-camp-school-server-two.vercel.app/instructors')
      return res.json()
    }
  })
  return [allInstructor,loading,refetch]
}
export default UseallInstructor
