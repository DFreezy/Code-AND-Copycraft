import React from "react";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600">Welcome to My React App</h1>
      <p className="mt-2 text-gray-700">Built with React & Tailwind CSS</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
        Click Me
      </button>
    </div>
  );
}
