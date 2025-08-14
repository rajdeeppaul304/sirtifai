'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function TermsAndConditionsPage() {
  const router = useRouter();

  useEffect(() => {
    // Use Next.js router for client-side navigation with hash
    router.replace('/legal-policies#terms');
  }, [router]);

  return (
    <div className="min-h-screen bg-[#FEF7F1] flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FE7743] mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to Terms & Conditions...</p>
      </div>
    </div>
  );
}
