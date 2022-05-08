import React from "react";

import Pill from "../../styles/components/pill";

export default function TestUser() {
  return (
    <div className="mb-5">
      <div className="relative mb-5">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="px-2 py-0 bg-white text-gray-500 text-sm">
            Or use test credentials
          </span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row flex-wrap justify-between">
        <Pill>E: testuser@test.com</Pill>
        <Pill>P: testuser</Pill>
      </div>
    </div>
  );
}
