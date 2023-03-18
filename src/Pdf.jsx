import React, { Component } from 'react';
import html2pdf from 'html2pdf.js';

class HTMLtoPDF extends Component {
  constructor(props) {
    super(props);
    this.state = {
      htmlString: '',
    };
  }

  componentDidMount() {
    // You can get your html string from an API call or from a local file
    this.setState({
      htmlString: "<h1>Hello World!</h1><p>This is a test.</p>",
    });
  }

  generatePDF = () => {
    const { htmlString } = this.state;

    const element = document.createElement('div');
    element.innerHTML = htmlString;

    const opt = {
      margin: 1,
      filename: 'myfile.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };

    // New Promise-based usage
    html2pdf()
      .from(element)
       .set(opt)
      .toPdf()
      .get('pdf')
      .then((pdf) => {
        // pdf.output('dataurlnewwindow');
        const iframe = document.createElement('iframe');
        iframe.setAttribute('style', 'position:absolute;right:0; top:0; bottom:0; height:100%; width:500px');
        document.body.appendChild(iframe);
        iframe.src = pdf.output('datauristring');
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.generatePDF}>Generate PDF</button>
      </div>
    );
  }
}

export default HTMLtoPDF;