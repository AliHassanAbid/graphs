
//import the necessary packages
import React from 'react';
import html2pdf from 'html2pdf.js';

//create a React component
class HTMLtoPDF extends React.Component {
  //create a function to convert HTML to PDF
    convertHTMLtoPDF = () => {
        //assign the HTML content to a variable
        const htmlContent = `<h1>Hello World</h1>`;

        //use the html2pdf library to convert the HTML content to a PDF
        const options = {
        margin:       1,
        filename:     'test.pdf',
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' },
        };

        const pdfDoc = new html2pdf(htmlContent, options);

        //save the PDF to a file
        pdfDoc.save();
    };

  //render the component
  render() {
    return (
      <div>
        <button onClick={this.convertHTMLtoPDF}>
          Convert HTML to PDF
        </button>
      </div>
    );
  }
}

export default HTMLtoPDF;