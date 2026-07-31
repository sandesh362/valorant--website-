async function loadMarketplace() {
    const response = await fetch('http://localhost:5000/api/accounts/verified');
    const accounts = await response.json();
    
    const container = document.getElementById('market-grid');
    accounts.forEach(acc => {
        container.innerHTML += `
            <div class="card">
                <img src="${acc.screenshotUrl}">
                <h3>Rank: ${acc.rank}</h3>
                <p>Price: ₹${acc.price}</p>
                <a href="${acc.whatsappGroupLink}" class="btn">Join WhatsApp to Buy</a>
            </div>
        `;
    });
}
const markAsSold = async (listingId) => {
    const token = localStorage.getItem('token');
    if(window.confirm("Are you sure this is sold? It will be deleted forever.")){
        await axios.delete(`http://localhost:5000/api/listings/sold/${listingId}`, {
            headers: { 'x-auth-token': token }
        });
        // Refresh the list after deleting
        window.location.reload();
    }
}