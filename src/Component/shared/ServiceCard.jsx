import React from "react";
import { Link } from "react-router";

const ServiceCard = ({ icon, title, delay, color, path }) => {
  console.log(icon, path);

  return (
    <Link to={`/service/${path}`}>
      <div
        className={`p-4 mt-10 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${color}`}
        style={{ animationDelay: `${delay}ms` }}
      >
        <div className="text-4xl animate-bounce">{icon}</div>
        <h3 className="text-xl font-semibold mt-2">{title}</h3>
      </div>
    </Link>
  );
};

export default ServiceCard;
