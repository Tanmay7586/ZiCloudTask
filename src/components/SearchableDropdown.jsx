import React, { useState, useMemo } from "react";
import { Search, ChevronDown, X } from "lucide-react";

const SearchableDropdown = React.memo(({ label, placeholder, value, onChange, options = [], isOpen, onToggle }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOptions = useMemo(
    () => options.filter((opt) => opt.toLowerCase().includes(searchTerm.toLowerCase())),
    [options, searchTerm]
  );

  const handleClear = (e) => {
    e.stopPropagation();
    onChange("");
  };

  return (
    <div className="mb-4 relative">
      <label className="block text-sm font-medium text-gray-600 mb-1.5">{label}</label>
      <div className="relative">
        <button
          onClick={onToggle}
          className="w-full text-left rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 flex items-center justify-between cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          <span className={`${value ? "text-gray-800" : "text-gray-400"}`}>{value || placeholder}</span>
          <div className="flex items-center">
            {value && <X onClick={handleClear} className="w-4 h-4 text-gray-400 hover:text-gray-700 mr-2 cursor-pointer" />}
            <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
          </div>
        </button>
      </div>
      {isOpen && (
        <div className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-30">
          <div className="p-2 border-b border-gray-200">
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute top-1/2 left-3 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-gray-50 rounded-md border-gray-200 pl-9 pr-3 py-1.5 focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="max-h-48 overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((opt) => (
                <div
                  key={opt}
                  className="px-4 py-2 hover:bg-yellow-50 cursor-pointer"
                  onClick={() => {
                    onChange(opt);
                    onToggle();
                    setSearchTerm("");
                  }}
                >
                  {opt}
                </div>
              ))
            ) : (
              <div className="px-4 py-2 text-gray-500">No results found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
});

export default SearchableDropdown;
