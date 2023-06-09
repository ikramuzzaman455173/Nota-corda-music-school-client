import React from 'react'

const EnrolledClasses = () => {
  return (
    <>
      <h3 className='text-center my-10 font-bold tracking-wider text-slate-500 dark:text-white underline decoration-double md:text-3xl text-xl font-Pt dark:font-Merienda'>you are enrolled Total Classes: <span className='text-info dark:text-warning'>0</span></h3>
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
                  <tr>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">1</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 mr-2 sm:mr-3">
                          <img
                            className="rounded-md"
                            src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                            width="40"
                            height="40"
                            alt="class img"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">alexshatov@gmail.com</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-medium text-info dark:text-warning">$2,890.66</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-lg text-center">begginer</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-lg text-center">1 hours</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-lg text-center"><button className='awesome-btn px-10 py-[2px] rounded-full capitalize'>enrolled</button></div>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EnrolledClasses
