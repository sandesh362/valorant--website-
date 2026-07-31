import React, { useState, useEffect } from "react";
import axios from "axios";

const SellerDashboard = () => {
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({ rank: "", price: "", skins: "", whatsapp: "" });
  const user = JSON.parse(localStorage.getItem("user"));

  const handleUpload = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("image", file);
    data.append("rank", formData.rank);
    data.append("price", formData.price);
    data.append("skins", formData.skins);
    data.append("whatsappLink", formData.whatsapp);

    try {
      await axios.post("http://localhost:5000/api/listings/add", data, {
        headers: { 
            "Content-Type": "multipart/form-data",
            "x-auth-token": localStorage.getItem("token") 
        }
      });
      alert("Uploaded successfully! Waiting for Admin Approval.");
    } catch (err) {
      alert("Upload failed. Make sure you are a verified seller.");
    }
  };

  return (
    <div className="min-h-screen bg-[#0f1923] text-white p-10 pt-32">
      <h1 className="text-4xl font-bold text-[#ff4655] mb-8">SELLER DASHBOARD</h1>
      
      <div className="grid md:grid-cols-2 gap-10">
        {/* Upload Form */}
        <form onSubmit={handleUpload} className="bg-[#1f2326] p-8 rounded-lg border border-gray-700">
          <h2 className="text-xl mb-4 uppercase">Upload New Account</h2>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} className="mb-4 block w-full" required />
          <input type="text" placeholder="Rank (e.g. Immortal 3)" className="w-full p-3 mb-4 bg-black border border-gray-600" 
                 onChange={(e) => setFormData({...formData, rank: e.target.value})} required />
          <input type="number" placeholder="Price (INR)" className="w-full p-3 mb-4 bg-black border border-gray-600"
                 onChange={(e) => setFormData({...formData, price: e.target.value})} required />
          <textarea placeholder="Key Skins (comma separated)" className="w-full p-3 mb-4 bg-black border border-gray-600"
                 onChange={(e) => setFormData({...formData, skins: e.target.value})} required />
          <input type="text" placeholder="WhatsApp Link" className="w-full p-3 mb-6 bg-black border border-gray-600"
                 onChange={(e) => setFormData({...formData, whatsapp: e.target.value})} required />
          
          <button type="submit" className="w-full bg-[#ff4655] py-3 font-bold hover:bg-white hover:text-black transition">
            SUBMIT FOR REVIEW
          </button>
        </form>

        {/* Status Box */}
        <div className="bg-[#1f2326] p-8 rounded-lg border border-gray-700">
          <h2 className="text-xl mb-4">ACCOUNT STATUS</h2>
          <p className="text-gray-400">Welcome, {user?.name}</p>
          <div className="mt-4 p-4 bg-black rounded">
             <p>Verification Status: <span className={user?.isVerified ? "text-green-500" : "text-yellow-500"}>
               {user?.isVerified ? "VERIFIED SELLER" : "PENDING VERIFICATION"}
             </span></p>
          </div>
          <p className="mt-6 text-sm text-gray-500 italic">*Only verified sellers can see their listings go live on the Marketplace.</p>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;