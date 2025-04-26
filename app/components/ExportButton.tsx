'use client';

import { handleExport } from '../actions/CRUD';

export default function ExportButton() {
  const downloadDeck = async () => {
    try {
      const base64Data = await handleExport();
      
      // Convert base64 to blob
      const byteCharacters = atob(base64Data);
      const byteNumbers = new Array(byteCharacters.length);
      
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: 'application/xml' });
      
      // Create a temporary URL for the blob
      const url = window.URL.createObjectURL(blob);
      
      // Create a temporary link element and trigger the download
      const a = document.createElement('a');
      a.href = url;
      a.download = 'deck.cod';
      document.body.appendChild(a);
      a.click();
      
      // Clean up
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error: unknown) {
      console.error('Error downloading deck:', error instanceof Error ? error.message : 'Unknown error');
    }
  };

  return (
    <button
      onClick={downloadDeck}
      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
    >
      Exporter le deck
    </button>
  );
}
