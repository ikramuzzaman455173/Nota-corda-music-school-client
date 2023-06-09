import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ClassCard = ({ singleClass }) => {
  console.log(singleClass,'singleClass');
  useEffect(() => {
    AOS.init();
  }, []);

  const { class_name, image, class_level, description, price } = singleClass || {};

  return (
    <div
      className="overflow-hidden shadow-md p-2 border-2 rounded-md bg-transparent dark:bg-gradient-to-r dark:from-[#010314] dark:to-[#0f0728]  cursor-pointer group"
      data-aos="fade-up"
    >
      <img className="w-full h-[200px] object-fill p-2 rounded-xl overflow-hidden group-hover:scale-110 duration-300 transition" src={image} alt="music class img" />
      <div className="px-6 py-4">
        <div className="font-bold text-2xl font-Pt tracking-wider dark:font-Merienda text-slate-600 dark:text-white mb-2 text-center">
          {class_name}
        </div>
        <p className="text-slate-600 text-base dark:text-[#ddd] pt-2">
          {description}
        </p>
      </div>
      <div className="flex lg:flex-row md:flex-col items-center justify-center md:gap-4 flex-col lg:gap-20">
        <p className="text-xl font-bold dark:text-white">
          Price: <span className="dark:text-warning text-info">$</span>
          {price}
        </p>
        <p className="text-xl font-bold dark:text-white">
          Class Level: <span className="dark:font-Merienda font-Pt text-info dark:text-warning tracking-wider">{class_level}</span>
        </p>
      </div>
      <div className="awesome-btn text-center p-2 rounded-md my-5 cursor-pointer w-3/4 mx-auto">Select Classes</div>
    </div>
  );
};

export default ClassCard;












// import React, { useEffect, useState } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { toast } from 'react-toastify';

// const ClassCard = ({ singleClass }) => {
//   useEffect(() => {
//     AOS.init();
//   }, []);

//   const { class_id, class_name, image, class_level, description, price } = singleClass || {};

//   const [isSelected, setIsSelected] = useState(false);

//   const handleSelectClasses = () => {
//     setIsSelected(true);
//     const selectedClasses = JSON.parse(localStorage.getItem('selectedClasses')) || [];
//     selectedClasses.push(class_id);
//     localStorage.setItem('selectedClasses', JSON.stringify(selectedClasses));
//     toast('You Are Select This Classes !!!',{autoClose:2000})
//   };

//   useEffect(() => {
//     const selectedClasses = JSON.parse(localStorage.getItem('selectedClasses')) || [];
//     setIsSelected(selectedClasses.includes(class_id));
//   }, [class_id]);

//   return (
//     <div
//       className="overflow-hidden shadow-md p-2 border-2 rounded-md bg-transparent dark:bg-gradient-to-r dark:from-[#010314] dark:to-[#0f0728]  cursor-pointer group"
//       data-aos="fade-up"
//     >
//       <img
//         className="w-full h-[200px] object-fill p-2 rounded-xl overflow-hidden group-hover:scale-110 duration-300 transition"
//         src={image}
//         alt="music class img"
//       />
//       <div className="px-6 py-4">
//         <div className="font-bold text-2xl font-Pt tracking-wider dark:font-Merienda text-slate-600 dark:text-white mb-2 text-center">
//           {class_name}
//         </div>
//         <p className="text-slate-600 text-base dark:text-[#ddd] pt-2">{description}</p>
//       </div>
//       <div className="flex lg:flex-row md:flex-col items-center justify-center md:gap-4 flex-col lg:gap-20">
//         <p className="text-xl font-bold dark:text-white">
//           Price: <span className="dark:text-warning text-info">$</span>
//           {price}
//         </p>
//         <p className="text-xl font-bold dark:text-white">
//           Class Level: <span className="dark:font-Merienda font-Pt text-info dark:text-warning tracking-wider">{class_level}</span>
//         </p>
//       </div>
//       {isSelected ? (
//         <div className="awesome-btn text-center p-2 rounded-md my-5 cursor-pointer w-3/4 mx-auto text-green-500 font-bold">
//           Selected
//         </div>
//       ) : (
//         <div
//           className="awesome-btn text-center p-2 rounded-md my-5 cursor-pointer w-3/4 mx-auto"
//           onClick={handleSelectClasses}
//         >
//           Select Classes
//         </div>
//       )}
//     </div>
//   );
// };

// export default ClassCard;
