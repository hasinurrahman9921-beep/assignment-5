import React from 'react';

const StackSidebar = ({ selectedTechs, onRemove, onRemoveAll }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm sticky top-24">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-900">Your Stack</h3>
        <p className="text-xs text-gray-400 mt-0.5">
          {selectedTechs.length} Technology Selected
        </p>
      </div>

      {selectedTechs.length === 0 ? (
        <div className="text-center py-8 text-gray-400 text-sm">
          No technologies added yet.
        </div>
      ) : (
        <div>
          <div className="space-y-3 mb-6 max-h-[350px] overflow-y-auto pr-1">
            {selectedTechs.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-gray-50 p-3 rounded-xl border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <img src={item.icon} alt={item.name} className="w-6 h-6 object-contain" />
                  <div>
                    <h4 className="text-xs font-bold text-gray-800">{item.name}</h4>
                    <p className="text-[10px] text-gray-400">{item.category}</p>
                  </div>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="text-gray-400 hover:text-red-500 text-sm font-semibold px-2"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={onRemoveAll}
            className="w-full py-2.5 border border-red-200 text-red-500 rounded-xl text-xs font-semibold hover:bg-red-50 transition-colors"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default StackSidebar;