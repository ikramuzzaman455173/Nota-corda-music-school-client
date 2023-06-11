import React from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure()
  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await axiosSecure.get('/users')
    return res.data;
  })
  console.log('users',users);

  const handleDeletePaymentHistory = (id) => {
    // console.log(`handleDeleteSelectClass`, id)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/users/${id}`, {
          method: "DELETE",
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify()
        })
          .then(response => response.json())
          .then(data => {
            if (data.deletedCount > 0)
              // console.log(data)
              Swal.fire(
                'Deleted!',
                'Your 1 userment history Has Been Deleted.',
                'success'
              )
            refetch()
          }).catch(error => console.log(`404 page not found ${error.message}`))

      }
    })

  }
  return (
    <div>
      <h3 className='text-center my-10 font-bold tracking-wider text-slate-500 dark:text-white underline decoration-double md:text-3xl text-xl font-Pt dark:font-Merienda'>site total users is: <span className='text-info dark:text-warning'></span>{users.length||0}</h3>
      <div className="flex flex-col justify-center h-full">
        {/* Table */}
        <div className="w-full max-w-7xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200 dark:bg-gradient-to-r dark:from-[#010314] dark:to-[#0f0728]">
          <div className="p-3">
            <div className="overflow-x-auto overflow-scrollbar">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">sl</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">name</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">email</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">role</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">action</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y dark:text-white divide-gray-100 text-slate-500 font-medium">
                  {users?.map((user, i) => {
                    return (
                      <tr key={user._id}>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">{i+1}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">{user.name}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left font-medium lowercase">{user.email}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left font-medium lowercase">{user.role}</div>
                        </td>

                        <td className="p-2 whitespace-nowrap">
                          <div className="text-lg text-center flex gap-10">
                            <button onClick={() => handleDeletePaymentHistory(user._id)} className='px-10 py-[2px] rounded-full'>make admin</button>
                            <button onClick={() => handleDeletePaymentHistory(user._id)} className=' px-10 py-[2px] rounded-full'>make instructor</button>
                            <button onClick={() => handleDeletePaymentHistory(user._id)} className='awesome-btn px-10 py-[2px] rounded-full'>Delete</button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;