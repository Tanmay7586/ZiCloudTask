import React from "react";
import { ChevronDown, X } from "lucide-react";

const Dropdown = React.memo(
  ({ label, placeholder, value, onChange, options = [], isOpen, onToggle }) => {
    const handleClear = (e) => {
      e.stopPropagation();
      onChange("");
    };

    return (
      <div className="mb-4 relative">
        <label className="block text-sm font-medium text-gray-600 mb-1.5">
          {label}
        </label>
        <div className="relative">
          <button
            onClick={onToggle}
            className="w-full text-left rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 flex items-center justify-between cursor-pointer"
          >
            <span className={`${value ? "text-gray-800" : "text-gray-400"}`}>
              {value || placeholder}
            </span>
            <div className="flex items-center">
              {value && (
                <X
                  onClick={handleClear}
                  className="w-4 h-4 text-gray-400 hover:text-gray-700 mr-2 cursor-pointer"
                />
              )}
              <ChevronDown
                className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </div>
          </button>
        </div>
        {isOpen && (
          <div className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-30 max-h-48 overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full">
            {options.length > 0 ? (
              options.map((opt) => (
                <div
                  key={opt}
                  className="px-4 py-2 hover:bg-gray-50 cursor-pointer"
                  onClick={() => {
                    onChange(opt);
                    onToggle();
                  }}
                >
                  {opt}
                </div>
              ))
            ) : (
              <div className="px-4 py-2 text-gray-500">
                No options available
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
);

export default Dropdown;
