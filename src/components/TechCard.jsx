import React from 'react';

const TechCard = ({ tech, onAdd, isAdded }) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative">
      <div>
        <div className="flex justify-between items-start mb-4">
          <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" />
          <span className="text-xs font-medium px-3 py-1 bg-blue-50 text-blue-600 rounded-full">
            {tech.badge}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.name}</h3>
        <p className="text-xs text-gray-500 leading-relaxed mb-6 line-clamp-3">
          {tech.description}
        </p>
      </div>

      <div>
        <div className="flex items-center justify-between text-xs text-gray-400 mb-4 pt-2">
          <span className="px-3 py-1 bg-gray-50 rounded-md text-gray-600 font-medium">
            {tech.category}
          </span>
          <span>{tech.experience}</span>
          <span className="text-amber-400 font-semibold">★ {tech.rating}</span>
        </div>
        <button
          onClick={() => onAdd(tech)}
          disabled={isAdded}
          className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-all ${
            isAdded
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-slate-900 text-white hover:bg-slate-800'
          }`}
        >
          {isAdded ? 'Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </div>
  );
};

export default TechCard;