import React, { useEffect } from 'react';
import './style.css';

const MyBooks = () => {
    useEffect(() => {
        document.title = 'My Books';
    });
    return (
        <div className="bookItem"> 
            <div className="bookImage">
                <img src="https://www.gutenberg.org/cache/epub/84/pg84.cover.medium.jpg"/>
            </div>
            <div className="bookContent">
                <div className="bookTitle">This is a book title</div>
                <div className="bookDescription">This is a Book description This is a Book description This is a Book description This is a Book description This is a Book description This is a Book description </div>
            </div>
        </div>
    );
};
export default MyBooks;