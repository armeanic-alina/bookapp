import React, { useEffect, useState } from "react";
import "./style.css";
const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://gutendex.com/books/")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setData(data.results);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return "Loading...";
  if (error) return "Error!";

  return (
    <div>
      <center>
        <h1>This is a Book App</h1>
        <div className="headerDescription">All the books in the store</div>
      </center>
      <div className="bookList">
        {data.map((book, index) => (
          <div className="bookItem" key={index}>
            <div className="bookImage">
              <img
                src={`${book.formats["image/jpeg"]}`}
                alt=""
                draggable="false"
              />
            </div>
            <div className="bookContent">
              <div className="bookTitle">{book.title}</div>
              <div className="bookAuthor">{book.authors[0].name}</div>
              <div className="bookDescription">
                This is a Book description This is a Book description This is a
                Book description This is a Book description This is a Book
                description This is a Book description{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
