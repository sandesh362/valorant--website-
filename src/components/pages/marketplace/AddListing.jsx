import { useState } from 'react';
import axios from 'axios';

const AddListing = () => {
    const [formData, setFormData] = useState({ rank: '', price: '', skins: '', whatsapp: '', image: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        try {
            await axios.post('http://localhost:5000/api/listings/add', formData, {
                headers: { 'x-auth-token': token }
            });
            alert("Uploaded! Wait for Admin to approve.");
        } catch (err) {
            alert("Error uploading listing.");
        }
    };

    return (
        <form className="upload-form" onSubmit={handleSubmit}>
            <h2>Upload Valorant ID</h2>
            <input type="text" placeholder="Rank (e.g. Radiant)" onChange={e => setFormData({...formData, rank: e.target.value})} />
            <input type="number" placeholder="Price" onChange={e => setFormData({...formData, price: e.target.value})} />
            <input type="text" placeholder="Skins (comma separated)" onChange={e => setFormData({...formData, skins: e.target.value.split(',')})} />
            <input type="text" placeholder="WhatsApp Group/Number Link" onChange={e => setFormData({...formData, whatsapp: e.target.value})} />
            <input type="text" placeholder="Image URL (or use a file uploader)" onChange={e => setFormData({...formData, image: e.target.value})} />
            <button type="submit">Submit for Approval</button>
        </form>
    );
};