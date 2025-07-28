import React, { useEffect, useState } from 'react';
import { XMarkIcon, StarIcon } from '@heroicons/react/24/solid';
import { uploadReview, subscribeToReviews } from '../../service/firebaseService';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({ name: '', review: '', rating: 0 });
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const unsub = subscribeToReviews(setReviews);
    return () => unsub();
  }, []);

  const handleRatingClick = (index) => {
    setFormData((prev) => ({ ...prev, rating: index + 1 }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, review, rating } = formData;
    if (!name || !review || rating === 0) return alert('Please fill all fields');

    setUploading(true);
    try {
      await uploadReview({ name, review, rating });  // imageFile removed
      setFormData({ name: '', review: '', rating: 0 });
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setUploading(false);
    }
  };
const colors = [
  "bg-red-500", "bg-blue-500", "bg-green-500", "bg-purple-500",
  "bg-pink-500", "bg-yellow-500", "bg-indigo-500", "bg-teal-500",
  "bg-orange-500", "bg-rose-500"
];

function getRandomColor(index) {
  // To keep colors fixed per render, you can use index-based hashing
  return colors[index % colors.length];
}

  return (
    <div className="bg-black min-h-screen p-6 text-white">
      <h1 className="text-4xl font-bold text-center text-[#FF4655] mb-12">Buyers Reviews</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-[#1F1F1F] p-6 rounded-lg mb-12 max-w-xl mx-auto shadow-lg">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full p-2 mb-4 bg-gray-800 text-white rounded"
          value={formData.name}
          onChange={handleChange}
        />
        <textarea
          name="review"
          placeholder="Your Review"
          className="w-full p-2 mb-4 bg-gray-800 text-white rounded"
          rows="3"
          value={formData.review}
          onChange={handleChange}
        />
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              onClick={() => handleRatingClick(i)}
              className={`h-6 w-6 cursor-pointer ${formData.rating > i ? 'text-yellow-400' : 'text-gray-600'}`}
            />
          ))}
        </div>
        <button
          type="submit"
          disabled={uploading}
          className="w-full bg-[#FF4655] py-2 rounded hover:bg-red-600 transition"
        >
          {uploading ? 'Submitting...' : 'Submit Review'}
        </button>
      </form>

      {/* Reviews */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {reviews.map((r, index) => (
    <div key={r.id} className="bg-[#1F1F1F] p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
      <div className="flex items-center mb-4">
        <div className={`h-12 w-12 ${getRandomColor(index)} flex justify-center items-center rounded-full text-white font-bold`}>
          {r.name?.charAt(0)}
        </div>
        <h1 className="ml-4 text-xl font-semibold">{r.name}</h1>
      </div>
      <p className="text-gray-400 mb-2 italic">"{r.review}"</p>
      <div className="flex mb-2">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} className={`h-5 w-5 ${i < r.rating ? 'text-yellow-400' : 'text-gray-600'}`} />
        ))}
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default Reviews;
