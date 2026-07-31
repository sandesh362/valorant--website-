const AdminPanel = () => {
    const [pending, setPending] = useState([]);

    useEffect(() => {
        // Fetch listings where isApproved: false
        axios.get('http://localhost:5000/api/admin/pending', { headers: { 'x-auth-token': adminToken }})
            .then(res => setPending(res.data));
    }, []);

    const approve = (id) => {
        axios.patch(`http://localhost:5000/api/admin/approve-listing/${id}`)
            .then(() => setPending(pending.filter(item => item._id !== id)));
    };

    return (
        <div className="admin-container">
            <h1>Pending Approvals</h1>
            {pending.map(item => (
                <div key={item._id} className="admin-card">
                    <p>{item.rank} - ₹{item.price}</p>
                    <button onClick={() => approve(item._id)}>Approve & Go Live</button>
                    <button className="reject">Delete Scam</button>
                </div>
            ))}
        </div>
    );
};
export default AdminPanel;