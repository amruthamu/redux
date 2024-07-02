import { useLocation, useNavigate } from 'react-router-dom';
import './Details.css';

const Details = () => {
    const location = useLocation();
    const { selectedBooks } = location.state || { selectedBooks: [] };
    const navigate = useNavigate();

    const handlePlaceOrder = () => {
        alert('Order successfully placed!');
        navigate('/');
    };

    return (
        <div className="details-container">
            <h2>Order Details</h2>
            <div className="order-summary">
                <p>Number of books selected: {selectedBooks.length}</p>
            </div>
            <ul className="book-list">
                {selectedBooks.map((book: string, index: number) => (
                    <li key={index} className="book-item">
                        {book}
                    </li>
                ))}
            </ul>
            <button className="order-button" onClick={handlePlaceOrder}>
                Place Order
            </button>
        </div>
    );
};

export default Details;
