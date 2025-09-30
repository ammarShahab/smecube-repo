import React from "react";

const ServiceCard = ({ icon, title, delay, color }) => {
  return (
    <div
      className={`p-4 mt-10 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${color}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-4xl animate-bounce">{icon}</div>
      <h3 className="text-xl font-semibold mt-2">{title}</h3>
    </div>
  );
};

export default ServiceCard;
