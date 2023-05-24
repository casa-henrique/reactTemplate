import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

interface PdfConverterProps {
  activityLink: string;
}

export const PdfToHtml = ({ activityLink }: PdfConverterProps) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pdfContent, setPdfContent] = useState<string | null>(null);

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.6.172/pdf.worker.js`;
  }, []);

  useEffect(() => {
    const loadPDF = async () => {
      try {
        const response = await fetch(`${activityLink}`, { mode: "no-cors" });
        const arrayBuffer = await response.arrayBuffer();
        const base64Data = arrayBufferToBase64(arrayBuffer);
        setPdfContent(base64Data);
      } catch (error) {
        console.error("Erro ao carregar o PDF:", error);
      }
    };

    loadPDF();
  }, []);

  const arrayBufferToBase64 = (buffer: ArrayBuffer) => {
    const binary = Array.from(new Uint8Array(buffer))
      .map((byte) => String.fromCharCode(byte))
      .join("");
    return btoa(binary);
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const convertToHTML = () => {
    const pages: React.ReactNode[] = [];

    for (let pageNumber = 1; pageNumber <= numPages!; pageNumber++) {
      pages.push(
        <Page
          key={pageNumber}
          pageNumber={pageNumber}
          renderAnnotationLayer={false}
        />
      );
    }

    return <div>{pages}</div>;
  };

  useEffect(() => {
    if (pdfContent) {
      loadPDFJS();
    }
  }, [pdfContent]);

  const loadPDFJS = async () => {
    try {
      const PDFJS = await import("pdfjs-dist/legacy/build/pdf");
      const pdf = await PDFJS.getDocument({ data: atob(pdfContent!) }).promise;
      const numPages = pdf.numPages;
      onDocumentLoadSuccess({ numPages });
    } catch (error) {
      console.error("Erro ao carregar o PDF usando pdfjs-dist:", error);
    }
  };

  return (
    <div>
      {pdfContent ? (
        <Document
          file={`data:application/pdf;base64,${pdfContent}`}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {numPages && convertToHTML()}
        </Document>
      ) : (
        <div>Carregando PDF...</div>
      )}
    </div>
  );
};
