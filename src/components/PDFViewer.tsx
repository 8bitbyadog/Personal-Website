import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PDFViewerProps {
  url: string;
  title: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ url, title }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div className="flex flex-col items-center p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      
      <div className="bg-white shadow-lg rounded-lg p-4 w-full">
        <Document
          file={url}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="flex justify-center items-center h-96">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-yellow-400"></div>
            </div>
          }
        >
          <Page 
            pageNumber={pageNumber} 
            renderTextLayer={false}
            className="max-w-full"
          />
        </Document>
        
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => setPageNumber(page => Math.max(page - 1, 1))}
            disabled={pageNumber <= 1}
            className="px-4 py-2 bg-yellow-400 text-black rounded disabled:opacity-50"
          >
            Previous
          </button>
          
          <p className="text-center">
            Page {pageNumber} of {numPages}
          </p>
          
          <button
            onClick={() => setPageNumber(page => Math.min(page + 1, numPages || 1))}
            disabled={pageNumber >= (numPages || 1)}
            className="px-4 py-2 bg-yellow-400 text-black rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
      
      <a 
        href={url} 
        download
        className="mt-4 px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
      >
        Download PDF
      </a>
    </div>
  );
};

export default PDFViewer; 