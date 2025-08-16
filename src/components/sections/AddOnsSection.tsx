import type React from "react";

interface AddOnRow {
  service: string;
  price: string;
  included: string;
  highlight?: boolean;
  badge?: string;
}

const addOns: AddOnRow[] = [
  {
    service: "Payroll + EPF",
    price: "₹33,500 / $400",
    included: "Deel™, Payslip, EPF, Bank Docs",
  },
  {
    service: "CA Services",
    price: "₹1,999 – ₹7,999",
    included: "ITR, GST Filing, Tax Reports",
  },
  {
    service: "Legal Support",
    price: "₹999 – ₹9,999",
    included: "NDA, Service Contract, IP Safety",
  },
  {
    service: "Freelancer Shield Combo",
    price: "₹39,999",
    included: "All of the above in one bundle",
    highlight: true,
    badge: "Best Value",
  },
];

const AddOnsSection: React.FC = () => {
  return (
    <section className="py-24 bg-white hidden lg:flex">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-4xl md:text-5xl font-bold tracking-tight mb-14 leading-tight">
          Supercharge Your Career With
          <br className="hidden md:block" /> Optional Add-Ons
        </h2>

        <div className="overflow-x-auto rounded-md border border-gray-200 bg-white">
          <table className="w-full text-sm md:text-[15px]">
            <thead>
              <tr className="bg-[#0F2533] text-white text-left">
                <th className="font-medium py-4 px-4 md:px-6 text-[11px] md:text-xs tracking-wide">Service</th>
                <th className="font-medium py-4 px-4 md:px-6 text-[11px] md:text-xs tracking-wide whitespace-nowrap">Monthly Price</th>
                <th className="font-medium py-4 px-4 md:px-6 text-[11px] md:text-xs tracking-wide">What's Included</th>
                <th className="font-medium py-4 px-4 md:px-6 text-[11px] md:text-xs tracking-wide text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {addOns.map((row) => (
                <tr
                  key={row.service}
                  className={
                    `border-t border-gray-200 ${row.highlight ? 'bg-[#FBF2EE]' : 'bg-white'} `
                  }
                >
                  <td className="py-4 px-4 md:px-6 text-gray-800 text-[13px] md:text-sm whitespace-nowrap font-medium">
                    {row.highlight && (
                      <span className="inline-flex items-center justify-center mr-2 text-orange-500" aria-hidden="true">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="5" y="3" width="14" height="18" rx="2" ry="2" />
                          <path d="M9 7v-1a3 3 0 0 1 6 0v1" />
                        </svg>
                      </span>
                    )}
                    {row.service}
                  </td>
                  <td className="py-4 px-4 md:px-6 text-gray-900 text-[13px] md:text-sm whitespace-nowrap">
                    <span className="font-medium">{row.price}</span>
                  </td>
                  <td className="py-4 px-4 md:px-6 text-[12px] md:text-sm text-gray-600">
                    {row.included}
                  </td>
                  <td className="py-4 px-4 md:px-6 text-center">
                    {row.highlight ? (
                      <span className="inline-flex items-center rounded-sm bg-[#0F2533] text-white px-3 py-1.5 text-[10px] md:text-[11px] font-medium shadow-sm">{row.badge}</span>
                    ) : (
                      <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-sm bg-orange-500 hover:bg-orange-600 text-white px-4 py-1.5 text-[10px] md:text-[11px] font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/40"
                      >
                        Add
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AddOnsSection;