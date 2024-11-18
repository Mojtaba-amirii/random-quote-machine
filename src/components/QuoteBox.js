import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuote } from "../redux/quoteSlice";
import { Button, Spinner } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const QuoteBox = () => {
  const dispatch = useDispatch();
  const { text, author, status, error } = useSelector((state) => state.quote);

  useEffect(() => {
    dispatch(fetchQuote());
  }, [dispatch]);

  const handleNewQuote = () => {
    dispatch(fetchQuote());
  };

  return (
    <section id="quote-box" className="d-flex flex-column text-center p-4">
      {status === "loading" ? (
        <Spinner
          animation="border"
          variant="primary"
          className=" text-center"
        />
      ) : status === "failed" ? (
        <p>Error fetching quote: {error}</p>
      ) : (
        <>
          <blockquote id="text">
            <i className="bi bi-quote"></i>
            {text || "Loading quote..."}
          </blockquote>
          <p id="author">- {author || "Unknown"}</p>
        </>
      )}
      <div className="d-flex justify-content-center column-gap-5">
        <Button
          id="new-quote"
          onClick={handleNewQuote}
          variant="primary"
          className="m-0"
        >
          New Quote
        </Button>
        <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            text
          )} - ${encodeURIComponent(author)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-info py-1 text-center"
        >
          <span className="bi bi-twitter-x "> Tweet Quote</span>
        </a>
      </div>
    </section>
  );
};

export default QuoteBox;
