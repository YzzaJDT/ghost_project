import React from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
     name: "to be upload",
    avatar: "./src/assets/icons/Dummy.png",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
     name: "to be upload",
    avatar: "./src/assets/icons/Dummy.png",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
     name: "to be upload",
    avatar: "./src/assets/icons/Dummy.png",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
     name: "to be upload",
    avatar: "h./src/assets/icons/Dummy.png",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
     name: "to be upload",
    avatar: "./src/assets/icons/Dummy.png",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    name: "to be upload",
    avatar: "./src/assets/icons/Dummy.png",
  },
];

const Reviews = () => {
  return (
    <div className="max-h-screen bg-gray-100 py-10 overflow-hidden relative" id="blog">
      {/* Top row - scroll left */}
        <div className="ml-16 mb-5 mt-5">
          <h1 className="font-roboto font-bold text-xl">Blog</h1>
        </div>
      <div className="flex gap-6 animate-marquee w-max mb-8">
        {[...reviews, ...reviews].map((review, i) => (
          <div
            key={`top-${i}`}
            className="bg-white rounded-xl shadow p-5 flex flex-col justify-between min-w-[300px] max-w-sm"
          >
            {/* stars */}
            <div className="flex text-yellow-500 mb-3">
              {Array(5)
                .fill()
                .map((_, idx) => (
                  <FaStar key={idx} />
                ))}
            </div>

            {/* review text */}
            <p className="text-gray-700 text-sm mb-4">{review.text}</p>

            {/* user + google */}
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="text-gray-800 text-sm font-medium">
                  {review.name}
                </span>
              </div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/09/Google_logo_2024.svg"
                alt="Google"
                className="h-5"
              />
            </div>
          </div>
        ))}
      </div>
        <div className="ml-16 mb-5 mt-10">
          <h1 className="font-roboto font-bold text-xl">Feedback</h1>
        </div>
      {/* Bottom row - scroll right (reverse) */}
      <div className="flex gap-6 animate-marqueeReverse w-max">
        {[...reviews, ...reviews].map((review, i) => (
          <div
            key={`bottom-${i}`}
            className="bg-white rounded-xl shadow p-5 flex flex-col justify-between min-w-[300px] max-w-sm"
          >
            {/* stars */}
            <div className="flex text-yellow-500 mb-3">
              {Array(5)
                .fill()
                .map((_, idx) => (
                  <FaStar key={idx} />
                ))}
            </div>

            {/* review text */}
            <p className="text-gray-700 text-sm mb-4">{review.text}</p>

            {/* user + google */}
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="text-gray-800 text-sm font-medium">
                  {review.name}
                </span>
              </div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/09/Google_logo_2024.svg"
                alt="Google"
                className="h-5"
              />
            </div>
          </div>
        ))}
      </div>

      {/* fade edges */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-100 to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-100 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Reviews;
