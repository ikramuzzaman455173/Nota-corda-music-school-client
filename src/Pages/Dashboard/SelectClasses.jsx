import React from 'react'
import UseSelectClass from '../../Hooks/UseSelectClass'
import Swal from 'sweetalert2';

const SelectClasses = () => {
  const [selectClass, refetch] = UseSelectClass()
  console.log(`selectClass`, selectClass);
  const total = selectClass.reduce((sum, item) => item.price + sum, 0)

    const handleDeleteSelectClass = (id) => {
      console.log(`handleDeleteSelectClass`, id)
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
          fetch(`http://localhost:4000/selectClasses/${id}`, {
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
                  'Your Select Class Has Been Deleted.',
                  'success'
                )
              refetch()
            }).catch(error => console.log(`404 page not found ${error.message}`))

        }
      })


    }
  return (
    <>
      <h3 className='text-center my-10 font-bold tracking-wider text-slate-500 dark:text-white underline decoration-double md:text-3xl text-xl font-Pt dark:font-Merienda'>Total Selected Classes Are: <span className='text-info dark:text-warning'>{selectClass.length || 0}</span></h3>
      <div className='flex lg:justify-center  lg:flex-row flex-col lg:gap-[400px] gap-2 items-center text-2xl font-medium font-Pt dark:font-Merienda dark:text-white mb-5 text-slate-500'>
        <h3>All Slect Class Total Amount: $<span className='text-info dark:text-warning'>{total|| 0}</span></h3>
        <button className='awesome-btn px-10 py-2 rounded-md'>Pay</button>
      </div>
      <div className="flex flex-col justify-center h-full">
        {/* Table */}
        <div className="w-full max-w-5xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200 dark:bg-gradient-to-r dark:from-[#010314] dark:to-[#0f0728]">
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">sl</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Class Bg</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Class Name</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">price</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">class lavel</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">class duration</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">action</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y dark:text-white divide-gray-100">
                  {selectClass?.map((sClass, i) => {
                    return (<tr key={i}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{i+1}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 mr-2 sm:mr-3">
                            <img
                              className="rounded-md"
                              src={sClass.image}
                              width="40"
                              height="40"
                              alt="class img"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{sClass.instructor_name}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-info dark:text-warning">${sClass.price}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-lg text-center">{sClass.class_level}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-lg text-center">{sClass.class_duration}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-lg text-center"><button onClick={()=>handleDeleteSelectClass(sClass._id)} className='awesome-btn px-10 py-[2px] rounded-full'>Delete</button></div>
                      </td>
                    </tr>)
                  })}

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SelectClasses