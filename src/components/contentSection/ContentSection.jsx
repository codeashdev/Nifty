import React from "react";

function ContentSection({ children }) {
  return (
    <div className="bg-white py-8 mt-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-6 gap-4">
          {children}
        </div>
      </div>
    </div>
  );
}

export default ContentSection;
