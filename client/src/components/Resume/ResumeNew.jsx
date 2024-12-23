import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';  // Import the styles
import { pdfjs } from 'react-pdf'; // You may still need pdfjs for worker support

// Paths updated for assets located in the public directory
import pdfFile from "../../../public/ASHIK-KS-new.pdf"; // Corrected path to the PDF file
import pdfpic from "../../../public/Screenshot 2024-12-23 142844.png"; // Corrected path to the image

// Configure the worker using the CDN
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPdf = async () => {
      try {
        // Attempt to load the PDF (This could be used to check for PDF file)
      } catch (error) {
        setError("Failed to load PDF. Please try again later.");
      }
    };
    loadPdf();
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        {/* Download Button */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdfFile} // This is for downloading the actual PDF
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          {/* Use pdfpic for displaying the CV as an image */}
          <img src={pdfpic} alt="CV Preview" style={{ maxWidth: '60%', height: 'auto' }} />
        </Row>

        {/* Download Button Again */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdfFile} // Same button for downloading the PDF
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
