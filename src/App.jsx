import React from "react";
import SideNav from "./components/SideNav";
import Header from "./components/Header";
import ChatSection from "./components/ChatSection";
import RightPanel from "./components/RightPanel";
import ProgressSteps from "./components/ProgressSteps";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans text-sm">
      <div className="flex">
        <SideNav />
        <main className="flex-1 flex items-stretch justify-center p-5 max-h-screen">
          <div className="w-full max-w-7xl bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <Header />
            <div className="md:hidden px-6 py-4 border-b">
              <ProgressSteps current={0} />
            </div>
            <div className="flex min-h-[70vh]">
              <ChatSection />
              <RightPanel />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
