import React, { useEffect } from "react";
import "./style.css";

const MyBooks = () => {
  useEffect(() => {
    document.title = "My Books";
  });
  return (
    <div>
      <center>
        <h1>These are my Books!</h1>
      </center>
      <div className="bookList">
        <div className="bookItem">
          <div className="bookImage">
            <img src="https://www.gutenberg.org/cache/epub/805/pg805.cover.small.jpg" />
          </div>
          <div className="bookContent">
            <div className="bookTitle">This Side of Paradise</div>
            <div className="bookAuthor">
              by Fitzgerald, F. Scott (Francis Scott)
            </div>
            <div className="bookDescription">
              These are my Books!These are my Books!These are my Books!These are
              my Books!These are my Books!These are my Books!These are my
              Books!These are my Books!These are my Books!{" "}
            </div>
          </div>
        </div>
        <div className="bookItem">
          <div className="bookImage">
            <img src="https://www.gutenberg.org/cache/epub/34/pg34.cover.medium.jpg" />
          </div>
          <div className="bookContent">
            <div className="bookTitle">Zen and the Art of the Internet</div>
            <div className="bookAuthor">by Kehoe, Brendan P.</div>
            <div className="bookDescription">
              These are my Books!These are my Books!These are my Books!These are
              my Books!These are my Books!These are my Books!These are my
              Books!These are my Books!These are my Books!{" "}
            </div>
          </div>
        </div>
        <div className="bookItem">
          <div className="bookImage">
            <img src="https://www.gutenberg.org/cache/epub/70/pg70.cover.medium.jpg" />
          </div>
          <div className="bookContent">
            <div className="bookTitle">What Is Man? and Other Essays</div>
            <div className="bookAuthor">by Twain, Mark</div>
            <div className="bookDescription">
              These are my Books!These are my Books!These are my Books!These are
              my Books!These are my Books!These are my Books!These are my
              Books!These are my Books!These are my Books!{" "}
            </div>
          </div>
        </div>
        <div className="bookItem">
          <div className="bookImage">
            <img src="https://www.gutenberg.org/cache/epub/606/pg606.cover.medium.jpg" />
          </div>
          <div className="bookContent">
            <div className="bookTitle">
              Indian Why Stories: Sparks from War Eagle's Lodge-Fire
            </div>
            <div className="bookAuthor">by Linderman, Frank Bird</div>
            <div className="bookDescription">
              These are my Books!These are my Books!These are my Books!These are
              my Books!These are my Books!These are my Books!These are my
              Books!These are my Books!These are my Books!{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyBooks;
