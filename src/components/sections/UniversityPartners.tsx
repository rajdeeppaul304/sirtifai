import React, { useState, useMemo } from 'react';

const universityImages = [
  { url: '/assets/about/university_logos/AU_University_Horizontal_COLOR_RGB.png', discipline: 'Business', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/Arcadia-logo-color.jpg', discipline: 'Communications And Design', offering: 'Boot Camps' },
  { url: '/assets/about/university_logos/CWRU_University_Formal_No_Tag_RGB_Blue.jpg', discipline: 'Counseling', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/columbia_logo_1.png', discipline: 'Business', offering: 'Boot Camps' },
  { url: '/assets/about/university_logos/ECON_logo.jpg', discipline: 'Business', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/Emerson-College-Logo.png', discipline: 'Communications And Design', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/FOR-MSW_UniversityLogo_Short_RedBlack_RGB.png', discipline: 'Counseling', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/GWU-MPH_Horizontal-School_2cs_pos.png', discipline: 'Business', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/GU-MSN_University_Stacked_blue_rgb.png', discipline: 'Counseling', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/Harvard-University-Main-Logo.png', discipline: 'Business', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/HOWARD_CLOCKTOWER_LOGO_HORIZONTAL_1.jpg', discipline: 'Counseling', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/IMD-Horizontal_Lockup-Blue_on_White-0-RGB.jpg', discipline: 'Business', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/LSE-Economics-Political-Science-Logo_SNWKidB.png', discipline: 'Business', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/MVU-UMT_logo-university_core_horiz_rgb_color.png', discipline: 'Business', offering: 'Boot Camps' },
  { url: '/assets/about/university_logos/MIT-Logo-Color.svg', discipline: 'Business', offering: 'Boot Camps' },
  { url: '/assets/about/university_logos/MHC_CUPOLA_HORZ_1C_1.png', discipline: 'Counseling', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/NUS_Computing__logo_APPROVED.jpg', discipline: 'Business', offering: 'Boot Camps' },
  { url: '/assets/about/university_logos/NYU-Steinhardt-Logo.png', discipline: 'Communications And Design', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/NU-MAC_SchoolFormalLockup_Horizontal_Purple_PMS.png', discipline: 'Communications And Design', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/pepperdine_master_logo_2024_gDqt8LF.png', discipline: 'Counseling', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/Rice_logo_hi_res.png', discipline: 'Business', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/RIT_1505C_hor_k.jpg', discipline: 'Communications And Design', offering: 'Boot Camps' },
  { url: '/assets/about/university_logos/SDA_logo_Pant.png', discipline: 'Communications And Design', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/Simmons-university-logo.png', discipline: 'Counseling', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/SMU_University_NoTagline_RGB_COLOR_01.png', discipline: 'Business', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/SJF-UMT_logo-university_stacked-left_rgb_color.png', discipline: 'Business', offering: 'Boot Camps' },
  { url: '/assets/about/university_logos/SCHE-stacked-logo.png', discipline: 'Business', offering: 'Boot Camps' },
  { url: '/assets/about/university_logos/SYRACUSE_Horizontal_1Line_ORANGE_RGB.png', discipline: 'Communications And Design', offering: 'Boot Camps' },
  { url: '/assets/about/university_logos/Tecnologico_de_Monterrey_LockUp_horizontal_RGB.png', discipline: 'Business', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/birm_logo.png', discipline: 'Business', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/UCB_University_RGB_COLOR.png', discipline: 'Business', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/ucdavis_logo_cmyk_blue.png', discipline: 'Business', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/Cambridge.png', discipline: 'Business', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/UCT_Horizontal_logo.png', discipline: 'Business', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/University_of_Dayton_Logo_UPDATED.jpg', discipline: 'Business', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/UniversityOfDenver-Signature_01.png', discipline: 'Counseling', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/1_Colour_Logo_Black_Text_RGB.png', discipline: 'Business', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/miami_bootcamps_logo_1.png', discipline: 'Business', offering: 'Boot Camps' },
  { url: '/assets/about/university_logos/UNC_logo_webblue-e1517942350314.png', discipline: 'Business', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/OXF_i592xu5.png', discipline: 'Business', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/USC_Formal_RGB.png', discipline: 'Business', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/USB-Business-Logo.png', discipline: 'Business', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/sydney_logo.png', discipline: 'Business', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/logo-UTexas-Austin_-_Jackie_Silva_1.png', discipline: 'Business', offering: 'Boot Camps' },
  { url: '/assets/about/university_logos/VU_University_Horizontal_RGB_COLOR.png', discipline: 'Business', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/Official_WUSTL-2line-PMS-pos.png', discipline: 'Business', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/Yaleblue.png', discipline: 'Business', offering: 'Certificate Program' },
];



const UniversityPartners = () => {
  const [selectedDiscipline, setSelectedDiscipline] = useState('');
  const [selectedOffering, setSelectedOffering] = useState('');

  // Extract unique disciplines and offerings for filter options
  const disciplines = useMemo(() => {
    return [...new Set(universityImages.map(item => item.discipline))];
  }, []);

  const offerings = useMemo(() => {
    return [...new Set(universityImages.map(item => item.offering))];
  }, []);

  // Filter the universities based on selected filters
  const filteredUniversities = useMemo(() => {
    return universityImages.filter(item => {
      const matchesDiscipline = !selectedDiscipline || item.discipline === selectedDiscipline;
      const matchesOffering = !selectedOffering || item.offering === selectedOffering;
      return matchesDiscipline && matchesOffering;
    });
  }, [selectedDiscipline, selectedOffering]);

  const clearFilters = () => {
    setSelectedDiscipline('');
    setSelectedOffering('');
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Filter Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">University Partners</h2>
        
        <div className="flex justify-center gap-4 mb-6">
          {/* Discipline Filter */}
          <select
            value={selectedDiscipline}
            onChange={(e) => setSelectedDiscipline(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-white min-w-48"
          >
            <option value="">All Disciplines</option>
            {disciplines.map(discipline => (
              <option key={discipline} value={discipline}>
                {discipline}
              </option>
            ))}
          </select>

          {/* Offering Filter */}
          <select
            value={selectedOffering}
            onChange={(e) => setSelectedOffering(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-white min-w-48"
          >
            <option value="">All Offerings</option>
            {offerings.map(offering => (
              <option key={offering} value={offering}>
                {offering}
              </option>
            ))}
          </select>

          {/* Clear Filters Button */}
          {(selectedDiscipline || selectedOffering) && (
            <button
              onClick={clearFilters}
              className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200 font-medium"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* University Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredUniversities.map((item, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100"
          >
            <div className="h-24 bg-gray-50 flex items-center justify-center p-3">
              <img 
                src={item.url} 
                alt={`University Logo ${index}`} 
                className="max-h-full max-w-full object-contain"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2Y0ZjRmNCIvPjx0ZXh0IHg9IjEwMCIgeT0iNTUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OTk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SW1hZ2UgTm90IEZvdW5kPC90ZXh0Pjwvc3ZnPg==';
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredUniversities.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6M7 8h10a2 2 0 012 2v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6a2 2 0 012-2z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-600 mb-2">No partners found</h3>
          <p className="text-gray-500 mb-4">
            Try adjusting your filters to see more results.
          </p>
          <button
            onClick={clearFilters}
            className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default UniversityPartners;