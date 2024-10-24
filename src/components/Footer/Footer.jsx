import "./Footer.css";
import React, { useState } from "react";

const Footer = ({ currentPage, totalPages, onNext, onPrevious }) => {
  return (
    <footer className="footer">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <button
          onClick={onPrevious}
          disabled={currentPage === 1}
          className="fButton"
        >
          Previous
        </button>
        <span className="page-info">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={onNext}
          disabled={currentPage === totalPages}
          className="fButton"
        >
          Next
        </button>
      </div>
      <div className="copyright">Made By Narmeen Humayon</div>
    </footer>
  );
};
export default Footer;
