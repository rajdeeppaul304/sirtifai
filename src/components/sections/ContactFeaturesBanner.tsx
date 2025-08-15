export const ContactFeaturesBanner = () => {
  return (
  <section className="hidden md:block w-full bg-[#FFF8F3] py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center divide-y md:divide-y-0 md:divide-x divide-orange-500">
          
          {/* Fast Response */}
          <div className="flex-1 text-center px-6 py-4">
            <h3 className="text-xl font-bold text-[#FF6B35]">Fast Response</h3>
            <p className="text-black mt-1">during working hours</p>
          </div>

          {/* Dedicated Support */}
          <div className="flex-1 text-center px-6 py-4">
            <h3 className="text-xl font-bold text-[#FF6B35]">Dedicated support</h3>
            <p className="text-black mt-1">
              for learners, employers, and partners.
            </p>
          </div>

          {/* Multi-language Assistance */}
          <div className="flex-1 text-center px-6 py-4">
            <h3 className="text-xl font-bold text-[#FF6B35]">Multi-language assistance</h3>
            <p className="text-black mt-1">for wider reach</p>
          </div>
        </div>
      </div>
    </section>
  );
};
