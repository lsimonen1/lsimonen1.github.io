import React, { useEffect, useRef, useState } from 'react';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist/build/pdf'; // Import the functions directly

// Configure PDF.js worker
GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.js`; // Use the specific version you want

const ResumeViewer = ({ pdfUrl }) => {
  const canvasRef = useRef(null); // Reference to the canvas
  const [pageCount, setPageCount] = useState(0); // To track total pages
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const loadPDF = async () => {
      const loadingTask = getDocument(pdfUrl);
      const pdf = await loadingTask.promise;

      setPageCount(pdf.numPages);

      // Render the first page
      const page = await pdf.getPage(1);
      const viewport = page.getViewport({ scale: 1.5 });

      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      // Set canvas dimensions based on the viewport size
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      // Render the page
      const renderContext = {
        canvasContext: context,
        viewport,
      };
      await page.render(renderContext).promise;

      setLoading(false); // Finished loading
    };

    loadPDF();
  }, [pdfUrl]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ color: 'white', fontFamily: 'Dosis' }}>My Resume</h2>
      {loading && <p style={{ color: 'white' }}>Loading PDF...</p>}
      <canvas ref={canvasRef} style={{ margin: '0 auto' }}></canvas>
      <p style={{ color: 'white', fontFamily: 'Dosis' }}>
        Page 1 of {pageCount}
      </p>
    </div>
  );
};

export default ResumeViewer;
