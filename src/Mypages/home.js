import React from 'react';
import './style.css';
const Home = () => {
    return (
        <div>
            <center>
            <h1>This is a Book App</h1>
            <div className="headerDescription">All the books in the store</div>
            </center>
            <div className="bookList">
            
            <div className="bookItem"> 
                <div className="bookImage">
                    <img src="https://www.gutenberg.org/cache/epub/1/pg1.cover.medium.jpg"/>
                </div>
                <div className="bookContent">
                    <div className="bookTitle">The Declaration of Independence of the United States of America</div>
                    <div className="bookAuthor">Jefferson, Thomas</div>
                    <div className="bookDescription">This is a Book description This is a Book description This is a Book description This is a Book description This is a Book description This is a Book description </div>
                </div>
            </div>
            <div className="bookItem"> 
                <div className="bookImage">
                    <img src="https://www.gutenberg.org/cache/epub/2/pg2.cover.small.jpg"/>
                </div>
                <div className="bookContent">
                    <div className="bookTitle">The United States Bill of Rights: The Ten Original Amendments to the Constitution of the United States</div>
                    <div className="bookAuthor">United States</div>
                    <div className="bookDescription">This is a Book description This is a Book description This is a Book description This is a Book description This is a Book description This is a Book description </div>
                </div>
            </div>
            <div className="bookItem"> 
                <div className="bookImage">
                    <img src="https://www.gutenberg.org/cache/epub/3/pg3.cover.small.jpg"/>
                </div>
                <div className="bookContent">
                    <div className="bookTitle">John F. Kennedy's Inaugural Address</div>
                    <div className="bookAuthor">Kennedy, John F. (John Fitzgerald)</div>
                    <div className="bookDescription">This is a Book description This is a Book description This is a Book description This is a Book description This is a Book description This is a Book description </div>
                </div>
            </div>
            <div className="bookItem"> 
                <div className="bookImage">
                    <img src="https://www.gutenberg.org/cache/epub/4/pg4.cover.medium.jpg"/>
                </div>
                <div className="bookContent">
                    <div className="bookTitle">Lincoln's Gettysburg Address: Given November 19, 1863 on the battlefield near Gettysburg, Pennsylvania, USA</div>
                    <div className="bookAuthor">Lincoln, Abraham</div>
                    <div className="bookDescription">This is a Book description This is a Book description This is a Book description This is a Book description This is a Book description This is a Book description </div>
                </div>
            </div>
            <div className="bookItem"> 
                <div className="bookImage">
                    <img src="https://www.gutenberg.org/cache/epub/5/pg5.cover.medium.jpg"/>
                </div>
                <div className="bookContent">
                    <div className="bookTitle">The United States Constitution</div>
                    <div className="bookAuthor">United States</div>
                    <div className="bookDescription">This is a Book description This is a Book description This is a Book description This is a Book description This is a Book description This is a Book description </div>
                </div>
            </div>
            <div className="bookItem"> 
                <div className="bookImage">
                    <img src="https://www.gutenberg.org/cache/epub/10/pg10.cover.medium.jpg"/>
                </div>
                <div className="bookContent">
                    <div className="bookTitle">The King James Version of the Bible</div>
                    <div className="bookAuthor">No Authors</div>
                    <div className="bookDescription">This is a Book description This is a Book description This is a Book description This is a Book description This is a Book description This is a Book description </div>
                </div>
            </div>
            <div className="bookItem"> 
                <div className="bookImage">
                    <img src="https://www.gutenberg.org/cache/epub/11/pg11.cover.medium.jpg"/>
                </div>
                <div className="bookContent">
                    <div className="bookTitle">Alice's Adventures in Wonderland</div>
                    <div className="bookAuthor">Carroll, Lewis</div>
                    <div className="bookDescription">This is a Book description This is a Book description This is a Book description This is a Book description This is a Book description This is a Book description </div>
                </div>
            </div>
            <div className="bookItem"> 
                <div className="bookImage">
                    <img src="https://www.gutenberg.org/cache/epub/12/pg12.cover.medium.jpg"/>
                </div>
                <div className="bookContent">
                    <div className="bookTitle">Through the Looking-Glass</div>
                    <div className="bookAuthor">Carroll, Lewis</div>
                    <div className="bookDescription">This is a Book description This is a Book description This is a Book description This is a Book description This is a Book description This is a Book description </div>
                </div>
            </div>
            <div className="bookItem"> 
                <div className="bookImage">
                    <img src="https://www.gutenberg.org/cache/epub/13/pg13.cover.small.jpg"/>
                </div>
                <div className="bookContent">
                    <div className="bookTitle">The Hunting of the Snark: An Agony in Eight Fits</div>
                    <div className="bookAuthor">Carroll, Lewis</div>
                    <div className="bookDescription">This is a Book description This is a Book description This is a Book description This is a Book description This is a Book description This is a Book description </div>
                </div>
            </div>
            <div className="bookItem"> 
                <div className="bookImage">
                    <img src="https://www.gutenberg.org/cache/epub/14/pg14.cover.medium.jpg"/>
                </div>
                <div className="bookContent">
                    <div className="bookTitle">The 1990 CIA World Factbook</div>
                    <div className="bookAuthor">United States. Central Intelligence Agency</div>
                    <div className="bookDescription">This is a Book description This is a Book description This is a Book description This is a Book description This is a Book description This is a Book description </div>
                </div>
            </div>
            </div>
        </div>
    );
};
export default Home;