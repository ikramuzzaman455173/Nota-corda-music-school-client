import React from 'react'
import UseAuth from '../../Hooks/UseAuth'
import InfoText from '../../Components/SharedComponents/InfoText'
import DashboardInfoText from './DashboardInfoText'

const InstructorAddClass = () => {
  const { user } = UseAuth()
  return (
    <>
      <div>
        <form className="max-w-md bg-slate-100 dark:bg-gradient-to-r dark:from-[#010314] dark:to-[#0f0728] text-info dark:text-warning mx-auto my-20 border-2 p-4 rounded-md shadow-md">
          <DashboardInfoText title={'Add New Class'} />
          <div className='grid md:grid-cols-2 grid-cols-1 w-full gap-4'>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-1 font-medium">
                Instructor Name*
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter name"
                required
                className="form-input dark:text-white"
                disabled
                defaultValue={user.displayName}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1 font-medium">
                Instructor Email*
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                required
                className="form-input lowercase dark:text-white"
                disabled
                defaultValue={user.email}
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">
                Class Name*
              </label>
              <input
                type="text"
                name="toysname"
                placeholder="Enter class Name"
                required
                className="form-input"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">
                Class Photo Url*
              </label>
              <input
                type="text"
                name="toyimg"
                placeholder="class Photo Url"
                required
                className="form-input"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">
                Class Price*
              </label>
              <input
                type="number"
                name="price"
                placeholder="Class Price"
                required
                className="form-input"
                step='any'
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block mb-1 font-medium">
                Available Seats*
              </label>
              <input
                type="number"
                name="rating"
                placeholder="Available Seats"
                required
                className="form-input"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block mb-1 font-medium">
                Class durations*
              </label>
              <input
                type="text"

                placeholder="Class durations"
                required
                className="form-input"
              />
            </div>

            <div className='mb-10'>
              <label htmlFor="category" className="block mb-1 font-medium">
                Select a category:*
              </label>
              <select name="subcategory" required className="form-input">
                <option value=""> Select a Class Label category:* </option>
                <option value="Begginer">Begginer</option>
                <option value="Intermidiate">Intermidiate</option>
                <option value="Advanced">Advanced</option>
                {/* Add more category options here */}
              </select>
            </div>

          </div>
          <div className='mb-4'>
            <label htmlFor="textarea" className="block fon-medium mb-2">
              Class Details Description*
            </label>
            <textarea required name='description'
              className="form-input"  placeholder='class description...'
            />
          </div>

          <button
            type="submit"
            className="block w-full px-4 py-2 font-bold awesome-btn rounded-md"
          >
            Add new class
          </button>
        </form>
      </div>
    </>
  )
}

export default InstructorAddClass