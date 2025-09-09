import React from "react";
import { ChevronLeft, Edit3 } from "lucide-react";
import ProgressSteps from "./ProgressSteps";

const Header = ({ title = "Untitled List" }) => {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white">
      <div className="flex items-center gap-3">
        <button className="p-2 rounded-md border border-gray-200 hover:bg-gray-50">
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        <div className="flex items-center px-3 py-1.5 rounded-lg border border-gray-200 hover:border-gray-300">
          <input
            className="text-gray-800 font-medium bg-transparent outline-none"
            defaultValue={title}
          />
          <Edit3 className="w-4 h-4 text-gray-500 ml-1" />
        </div>
      </div>
      <div className="hidden md:flex items-center gap-6">
        <ProgressSteps current={0} />
      </div>
      <div className="flex items-center gap-3">
        <button className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 cursor-pointer">
          Save
        </button>
        <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-medium cursor-pointer">
          Make Campaign
        </button>
      </div>
    </header>
  );
};

export default Header;
