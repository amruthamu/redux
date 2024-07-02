import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppDispatch } from '../hooks';
import { setBooks } from '../booksSlice';
import './Home.css';

const books = [
    { title: 'The Alchemist', description: 'This is advisable for beginners due to its simple plot.' },
    { title: 'The Little Prince', description: 'This is known to be a children book, but it is also good for adults.' },
    { title: 'The Book Thief', description: 'This book tackles the events in Germany during the Second World War.' },
    { title: 'The Brothers Karamazov', description: 'A philosophical book about the lives of the four brothers with different personalities.' },
    { title: 'The god of small things', description: 'It is a booker price winning book' },
    { title: 'Things Fall Apart', description: 'Things Fall Apart is the debut novel of Nigerian author Chinua Achebe, first published in 1958' },
    { title: 'The Fault in Our Stars', description: ' Romantic, witty and humorous, yet very sad, this is a book for hopeless romantics.' },
    { title: 'The Color Purple', description: 'The Color Purple is a 1982 epistolary novel by American author Alice Walker' },
    { title: 'Harry Potter', description: 'Harry Potter books are great for English learners as Rowling doesn’t use complicated grammar or vocabulary' },
    { title: 'The Thursday Murder Club', description: 'The Thursday Murder Club is a thriller book' }
];

const Home = () => {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const { username } = location.state || { username: '' };
    const navigate = useNavigate();
    const [selectedBooks, setSelectedBooks] = useState<string[]>([]);

    const handleCheckboxChange = (bookTitle: string) => {
        setSelectedBooks((prevSelectedBooks) => {
            if (prevSelectedBooks.includes(bookTitle)) {
                return prevSelectedBooks.filter((title) => title !== bookTitle);
            } else {
                return [...prevSelectedBooks, bookTitle];
            }
        });
    };

    const handleSubmit = () => {
        dispatch(setBooks(selectedBooks));
        navigate('/details', { state: { selectedBooks } });
    };


    return (
        <div className="home-container">
            <h2>Welcome, {username}</h2>
            <h3>Book List</h3>
            <ul className="book-list">
                {books.map((book) => (
                    <li key={book.title} className="book-item">
                        <label>
                            <input
                                type="checkbox"
                                checked={selectedBooks.includes(book.title)}
                                onChange={() => handleCheckboxChange(book.title)}
                            />
                            <div>
                                <div className="book-title">{book.title}</div>
                                <div className="book-description">{book.description}</div>
                            </div>
                        </label>
                    </li>
                ))}
            </ul>
            <button className="blue_button" onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default Home;
