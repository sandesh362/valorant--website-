import React, { useState } from 'react';
import { storage, db } from '../firebase/config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';

const Admin = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    image: null
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: file
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.name || !formData.price || !formData.image) {
      alert('Please fill in all fields.');
      setLoading(false);
      return;
    }

    const parsedPrice = parseFloat(formData.price);
    if (isNaN(parsedPrice)) {
      alert('Please enter a valid price.');
      setLoading(false);
      return;
    }

    try {
      const imageRef = ref(storage, `products/${Date.now()}_${formData.image.name}`);
      const snapshot = await uploadBytes(imageRef, formData.image);
      const imageUrl = await getDownloadURL(snapshot.ref);

      const productData = {
        name: formData.name,
        price: parsedPrice,
        imageUrl: imageUrl,
        createdAt: new Date()
      };

      await addDoc(collection(db, 'products'), productData);

      alert('✅ Product added successfully!');
      setFormData({ name: '', price: '', image: null });
      document.getElementById('image-upload').value = '';
    } catch (error) {
      console.error('Upload or Firestore Error:', error);
      alert('❌ Error adding product. Check console for details.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin-auth');
    window.location.href = '/admin-login';
  };

  return (
    <div className="max-w-lg mx-auto mt-12 bg-[#1c1f2a] text-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6 border-b border-gray-600 pb-2">Admin - Add Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF4655]"
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF4655]"
        />
        <input
          type="file"
          id="image-upload"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none file:bg-[#FF4655] file:border-none file:px-3 file:py-1 file:rounded-md"
        />
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 font-semibold rounded-md transition-colors duration-300 ${
            loading
              ? 'bg-gray-500 cursor-not-allowed'
              : 'bg-[#FF4655] hover:bg-[#e03c49] text-white'
          }`}
        >
          {loading ? 'Uploading...' : 'Add Product'}
        </button>
        <button
          type="button"
          onClick={handleLogout}
          className="w-full py-2 font-semibold rounded-md bg-red-600 hover:bg-red-700 text-white mt-2"
        >
          Logout
        </button>
      </form>
    </div>
  );
};

export default Admin;
