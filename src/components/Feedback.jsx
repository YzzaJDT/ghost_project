import React, { useState } from "react";
import qr from "../assets/icons/qrIcon.png";
import arrow from "../assets/icons/Vector.png";

const Feedback = () => {
const [formData, setFormData] = useState({
name: "",
email: "",
feedback: "",
rating: 0,
});

const handleChange = (e) => {
setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleRating = (value) => {
setFormData({ ...formData, rating: value });
};

const handleSubmit = async (e) => {
e.preventDefault();
const data = new FormData();


// ✅ REQUIRED by Web3Forms
data.append("access_key", "3741a4e3-1eea-47ec-9331-2e743510ff42");
data.append("subject", "New Feedback from Website");
data.append("from_name", "Feedback Form");


// ✅ Email body
const message = `
  My name is ${formData.name} (${formData.email}).

  ⭐ Rating: ${formData.rating}/5

  Here is my feedback: ${formData.feedback}.

  Thank you for taking the time to read my message.
`;
data.append("message", message.trim());

try {
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: data,
  });

  const result = await res.json();
  if (result.success) {
    alert("✅ Feedback sent successfully!");
    setFormData({ name: "", email: "", feedback: "", rating: 0 });
  } else {
    console.error(result);
    alert("❌ Failed to send feedback. Check API key and fields.");
  }
} catch (error) {
  console.error(error);
  alert("⚠️ Network error. Please try again.");
}


};

return ( 
<div className="py-12 w-full" id="feedback"> 
  <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
      We Value Your Feedback 
    </h2>
  <div className="w-full bg-white rounded-none md:rounded-2xl shadow-lg p-8 flex flex-col md:grid md:grid-cols-2 gap-8">
    {/* Left: QR + Review Section */}
    <div className="w-full">
      <div className="grid md:grid-cols-2 mt-8">
        <div className="text-center">
          <img
            src={qr}
            alt="QR Code"
            className="mx-auto w-full max-w-[250px]"
          />
          <h4 className="font-roboto mt-2 mr-2 font-bold">SCAN ME</h4>
        </div>
        <div className="text-center px-3">
          <h4 className="font-bold font-roboto">Review Us on Google</h4>
          <p className="font-roboto mt-3">
            Your opinion and feedback matters. Do leave us a review and tell
            us about your experience!
          </p>
          <div className="text-left -ml-3 mt-2">
            <img
              src={arrow}
              alt="Arrow"
              className="hidden sm:block w-14 "
            />
          </div>
        </div>
      </div>
    </div>

    {/* Right: Feedback Form */}
    <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 w-full">
      <form className="space-y-5 w-full" onSubmit={handleSubmit}>
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

        {/* ⭐ Rating */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Rating
          </label>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                type="button"
                key={star}
                onClick={() => handleRating(star)}
                className={`text-2xl ${
                  formData.rating >= star
                    ? "text-yellow-400"
                    : "text-gray-300"
                } hover:text-yellow-500`}
              >
                ★
              </button>
            ))}
          </div>
        </div>

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
  </div>
</div>


);
};

export default Feedback;
