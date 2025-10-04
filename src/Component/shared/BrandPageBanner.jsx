import React from "react";
import brandPageBanner from "../../assets/brandpage-banner/freepik__talk__33250.png";

const BrandPageBanner = () => {
  return (
    <div className="max-w-md mx-auto my-6 mt-18">
      <div className="relative  overflow-hidden">
        {/* Right Side Border Accent */}
        <div className="absolute top-0 right-0 h-full w-2 bg-red-500"></div>

        {/* Image */}
        <img
          src={brandPageBanner}
          alt="Sample"
          className="w-full object-cover"
        />

        {/* Content */}
        <div className="p-4"></div>
      </div>
    </div>
  );
};

export default BrandPageBanner;
