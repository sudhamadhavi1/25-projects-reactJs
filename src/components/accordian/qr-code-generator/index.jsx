import QRCode from 'react-qr-code';
import { useState } from 'react';

export default function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState('');
  const [input, setInput] = useState('');

  function handleGenerateQRCode() {
    setQrCode(input);
    setInput('');
  }

  return (
    <div>
      <h1>QR Code Generator</h1>
      <input
        onChange={(e) => setInput(e.target.value)}
        type='text'
        name='qr-code'
        value={input}
        placeholder='Enter your Value Here'
      />
      <button
        disabled={input && input.trim() !== '' ? false : true}
        onClick={handleGenerateQRCode}
      >
        Generator
      </button>
      <QRCode id='qr-code-value' value={qrCode} size={400} bgColor='#fff' />
    </div>
  );
}
