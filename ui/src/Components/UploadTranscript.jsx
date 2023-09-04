import React, { useState } from 'react';
import pdfjsLib from 'pdfjs-dist';

const UploadTranscript = () => {
  const [text, setText] = useState('');

  const handleFiles = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = async (e) => {
      const pdfData = new Uint8Array(e.target.result);
      const pdfDoc = await pdfjsLib.getDocument({ data: pdfData }).promise;

      let fullText = '';
      for (let i = 1; i <= pdfDoc.numPages; i++) {
        const page = await pdfDoc.getPage(i);
        const textContent = await page.getTextContent();
        const strings = textContent.items.map(item => item.str);
        fullText += strings.join(' ') + '\n';
      }
      setText(fullText);
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <div>
      <h1>Upload Your Transcript</h1>
      <input
        type="file"
        accept=".pdf"
        onChange={handleFiles}
      />
      <div>
        <h2>Extracted Text from PDF</h2>
        <pre>
          {text}
        </pre>
      </div>
    </div>
  );
};

export default UploadTranscript;
