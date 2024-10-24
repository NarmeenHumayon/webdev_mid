import { useContext, useRef } from "react";
import { queryContext } from "../../Context/Context";
import React from "react";
import "./NavBar.css";

const Navbar = () => {
  const { setQuery, setFavourites, favourite } = useContext(queryContext);
  const queryRef = useRef();
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="https://img.freepik.com/premium-vector/digital-movie-logo-template-design-vector-emblem-design-concept-creative-symbol-icon_316488-2385.jpg"
          alt="Logo"
        />
      </div>
      <div className="flex-hor" style={{ alignItems: "center", gap: "30px" }}>
        <form
          className="navbar-search"
          onSubmit={(e) => {
            e.preventDefault();
            setQuery(queryRef.current.value);
          }}
        >
          <input type="text" ref={queryRef} placeholder="Search..." />
        </form>
        <div className="navbar-button">
          <button
            onClick={() => {
              setFavourites(!favourite);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill={favourite ? "#ff0000" : "currentColor"}
              className="bi bi-bookmark-heart"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"
              />
              <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
