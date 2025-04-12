import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Courses from "./components/Courses";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans p-6 grid grid-cols-4 gap-6">
      <Sidebar />
      <main className="col-span-3 space-y-8">
        <Header />
        <Experience />
        <Education />
        <Courses />
      </main>
    </div>
  );
}
