import React, { useState } from "react";
import Dropdown from "./Dropdown";

const HEADCOUNT_OPTIONS = [
  "1-10",
  "11-50",
  "51-200",
  "201-500",
  "501-1000",
  "1000+",
];
const LOCATION_OPTIONS = [
  "India",
  "United States",
  "United Kingdom",
  "Germany",
  "Australia",
  "Canada",
  "Singapore",
];
const REVENUE_OPTIONS = ["50L - 1Cr", "1Cr - 5Cr", "5Cr - 20Cr", "20Cr+"];
const DEPARTMENT_OPTIONS = [
  "Engineering",
  "Sales",
  "Marketing",
  "Operations",
  "HR",
  "Finance",
  "Product",
];

const RightPanel = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [headcount, setHeadcount] = useState("");
  const [hq, setHq] = useState("");
  const [revenue, setRevenue] = useState("");
  const [department, setDepartment] = useState("");

  const handleToggle = (dropdownName) => {
    setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  return (
    <aside className="w-full lg:w-80 xl:w-96 flex-shrink-0 bg-white border-t lg:border-t-0 lg:border-l border-gray-200 p-4 sm:p-6 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full">
      <h3 className="text-xl font-semibold mb-2">
        Let's define your <span className="text-yellow-600">targets</span>
      </h3>
      <p className="text-sm text-gray-600 mb-6">
        Focus on the most relevant fields to shape your ICP — all fields are
        optional
      </p>

      <div className="mb-6">
        <h4 className="text-base font-medium text-gray-800 mb-4">
          Company Profile
        </h4>
        <Dropdown
          label="Company Headcount"
          value={headcount}
          onChange={setHeadcount}
          placeholder="Select headcount..."
          options={HEADCOUNT_OPTIONS}
          isOpen={openDropdown === "headcount"}
          onToggle={() => handleToggle("headcount")}
        />
        <Dropdown
          label="Company HQ Locations"
          value={hq}
          onChange={setHq}
          placeholder="Select location..."
          options={LOCATION_OPTIONS}
          isOpen={openDropdown === "hq"}
          onToggle={() => handleToggle("hq")}
        />
        <Dropdown
          label="Revenue Range"
          value={revenue}
          onChange={setRevenue}
          placeholder="Select revenue..."
          options={REVENUE_OPTIONS}
          isOpen={openDropdown === "revenue"}
          onToggle={() => handleToggle("revenue")}
        />
      </div>

      <div>
        <h4 className="text-base font-medium text-gray-800 mb-4">
          Prospect Profile
        </h4>
        <Dropdown
          label="Department"
          value={department}
          onChange={setDepartment}
          placeholder="Search department..."
          options={DEPARTMENT_OPTIONS}
          isOpen={openDropdown === "department"}
          onToggle={() => handleToggle("department")}
        />
      </div>
    </aside>
  );
};

export default RightPanel;
