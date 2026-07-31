import { useEffect, useState } from 'react';
import axios from 'axios'; // npm install axios

const Marketplace = () => {
    const [accounts, setAccounts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch only approved and unsold accounts
        axios.get('http://localhost:5000/api/listings/active')
            .then(res => {
                setAccounts(res.data);
                setLoading(false);
            })
            .catch(err => console.error(err));
    }, []);

    if (loading) return <div className="loader">Loading Valorant IDs...</div>;

    return (
        <div className="market-grid" id="market-grid">
            {accounts.map(acc => (
                <div className="card" key={acc._id}>
                    <div className="rank-badge">{acc.rank}</div>
                    <img src={acc.imageUrl} alt="Skins Preview" />
                    <div className="info">
                        <h3>{acc.rank} Account</h3>
                        <p className="price">₹{acc.price}</p>
                        <div className="skins-list">
                            {acc.skins.slice(0, 3).map(skin => <span key={skin}>{skin}</span>)}
                        </div>
                        <a 
                            href={`https://wa.me/${acc.sellerPhone}?text=Hi, I want to buy your ${acc.rank} account`} 
                            className="buy-btn"
                            target="_blank"
                        >
                            Contact Seller
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Marketplace;