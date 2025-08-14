'use client';

import { useEffect } from 'react';

export default function TermsAndConditionsPage() {
  useEffect(() => {
    // Use window.location.href for more reliable redirect with hash
    if (typeof window !== 'undefined') {
      window.location.href = '/legal-policies#terms';
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#FEF7F1] flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FE7743] mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to Terms & Conditions...</p>
      </div>
    </div>
  );
}
