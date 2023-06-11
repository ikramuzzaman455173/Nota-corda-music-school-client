import useAxiosSecure from "../Hooks/useAxiosSecure";
// save a user to the database
const [axiosSecure] = useAxiosSecure()
export const saveUser = (user) => {
  const currentUser = {
    email: user.email,
    name: user.name || user.displayName,
    role: 'user'
  };
  console.log(currentUser, 'current user');
  axiosSecure.post('/users', currentUser)
    .then((response) => {
      console.log(response.data,'response data'); // assuming the response contains the saved user data
    })
    .catch((error) => {
      console.log(`404 page not found ${error}`);
    });
};
