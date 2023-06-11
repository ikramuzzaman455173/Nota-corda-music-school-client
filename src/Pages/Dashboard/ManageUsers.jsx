import React, { useState } from 'react';

const classesData = [
  {
    id: 1,
    image: 'class1.jpg',
    className: 'Class A',
    instructorName: 'John Doe',
    instructorEmail: 'john@example.com',
    availableSeats: 10,
    price: 50,
    status: 'pending',
  },
  // Add more class objects here...
];

const ManageUsers = () => {
  const [classes, setClasses] = useState(classesData);

  const handleApprove = (id) => {
    setClasses((prevClasses) =>
      prevClasses.map((cls) => {
        if (cls.id === id) {
          return { ...cls, status: 'approved' };
        }
        return cls;
      })
    );
  };

  const handleDeny = (id) => {
    setClasses((prevClasses) =>
      prevClasses.map((cls) => {
        if (cls.id === id) {
          return { ...cls, status: 'denied' };
        }
        return cls;
      })
    );
  };

  const handleFeedback = (id, feedback) => {
    // Send feedback to the instructor with the provided ID
    // You can implement the logic here to handle sending feedback
    console.log(`Sending feedback for class ID ${id}: ${feedback}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Classes</h1>
      <table className="min-w-full divide-y divide-gray-200 overflow-x-auto overflow-scrollbar">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2">Class Image</th>
            <th className="py-2">Class Name</th>
            <th className="py-2">Instructor Name</th>
            <th className="py-2">Instructor Email</th>
            <th className="py-2">Available Seats</th>
            <th className="py-2">Price</th>
            <th className="py-2">Status</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((cls) => (
            <tr key={cls.id}>
              <td className="py-2">
                <img src={cls.image} alt={cls.className} className="h-16 w-16" />
              </td>
              <td className="py-2">{cls.className}</td>
              <td className="py-2">{cls.instructorName}</td>
              <td className="py-2">{cls.instructorEmail}</td>
              <td className="py-2">{cls.availableSeats}</td>
              <td className="py-2">{cls.price}</td>
              <td className="py-2">{cls.status}</td>
              <td className="py-2">
                {cls.status === 'pending' && (
                  <>
                    <button
                      onClick={() => handleApprove(cls.id)}
                      disabled={cls.status !== 'pending'}
                      className="mr-2 px-4 py-2 bg-green-500 text-white rounded disabled:opacity-50"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleDeny(cls.id)}
                      disabled={cls.status !== 'pending'}
                      className="mr-2 px-4 py-2 bg-red-500 text-white rounded disabled:opacity-50"
                    >
                      Deny
                    </button>
                  </>
                )}
                <button
                  onClick={() => {
                    // Open the feedback modal or navigate to another route
                    // to provide feedback for the specific class
                    console.log(`Opening feedback modal for class ID ${cls.id}`);
                  }}
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Send Feedback
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
