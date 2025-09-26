// import React, { useState } from "react";

// const Feedback = () => {
//   const [image, setImage] = useState(null);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(URL.createObjectURL(file));
//     }
//   };

//   return (
//     <div className="py-12 w-full" id="feedback">
//       <div className="w-full bg-white rounded-none md:rounded-2xl shadow-lg p-8 flex flex-col md:grid md:grid-cols-2 gap-8">
//         {/* Left: Feedback Form */}
//         <div className="w-full">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">
//             We Value Your Feedback
//           </h2>

//           <form className="space-y-5 w-full">
//             {/* Name */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Your Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter your name"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Your Email
//               </label>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               />
//             </div>

//             {/* Feedback */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Your Feedback
//               </label>
//               <textarea
//                 rows="4"
//                 placeholder="Write your feedback here..."
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               ></textarea>
//             </div>
//           </form>
//         </div>

//         {/* Right: Image Uploader */}
//         <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 w-full">
//           <label className="w-full text-center cursor-pointer">
//             {image ? (
//               <img
//                 src={image}
//                 alt="Uploaded"
//                 className="mx-auto max-h-64 w-full object-contain rounded-lg mb-4"
//               />
//             ) : (
//               <div className="text-gray-500">
//                 <p className="mb-2">Click to upload an image</p>
//                 <p className="text-sm text-gray-400">(JPG, PNG up to 5MB)</p>
//               </div>
//             )}
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageChange}
//               className="hidden"
//             />
//           </label>
//         </div>

//         {/* Submit Button - Responsive Position */}
//         <div className="mt-6 md:col-span-2 w-full text-center md:text-left">
//           <button
//             type="submit"
//             className="w-full md:w-auto bg-[#F9DC5C] text-gray-800 font-medium px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition"
//           >
//             Submit Feedback
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Feedback;
import React, { useState } from "react";

const Feedback = () => {
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:delatorrejazzy36@gmail.com?subject=Feedback from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AFeedback: ${formData.feedback}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="py-12 w-full" id="feedback">
      <div className="w-full bg-white rounded-none md:rounded-2xl shadow-lg p-8 flex flex-col md:grid md:grid-cols-2 gap-8">
        {/* Left: Feedback Form */}
        <div className="w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">
            We Value Your Feedback
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5 w-full">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Feedback */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Feedback
              </label>
              <textarea
                rows="4"
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                placeholder="Write your feedback here..."
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ></textarea>
            </div>

            {/* Submit Button (INSIDE form now) */}
            <div className="mt-6 w-full text-center md:text-left">
              <button
                type="submit"
                className="w-full md:w-auto bg-[#F9DC5C] text-gray-800 font-medium px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition"
              >
                Submit Feedback
              </button>
            </div>
          </form>
        </div>

        {/* Right: Image Uploader */}
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 w-full">
          <label className="w-full text-center cursor-pointer">
            {image ? (
              <img
                src={image}
                alt="Uploaded"
                className="mx-auto max-h-64 w-full object-contain rounded-lg mb-4"
              />
            ) : (
              <div className="text-gray-500">
                <p className="mb-2">Click to upload an image</p>
                <p className="text-sm text-gray-400">(JPG, PNG up to 5MB)</p>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
