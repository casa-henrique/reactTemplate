import { useEffect, useState } from "react"
import { Page, Document, pdfjs } from "react-pdf";
import { PDFDocumentProxy } from 'pdfjs-dist';

interface PdfConverterProps {
    activityLink: string;
}


export const PdfToHtml = ({activityLink}:PdfConverterProps) => {
const [numPages, setNumPages] = useState<number | null>(null);

useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.6.172/pdf.worker.js`;
  }, []);

const onDocumentLoadSuccess = ({numPages}: PDFDocumentProxy) => {
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

return (
    <div>
        <Document  file={activityLink} onLoadSuccess={onDocumentLoadSuccess}>
            {numPages && convertToHTML()}
        </Document>    
    </div>
    );
};