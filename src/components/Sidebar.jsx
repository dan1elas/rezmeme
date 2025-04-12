import React from "react";
import Foto from "../../src/assets/foto.jpg";

export default function Sidebar() {
  return (
    <aside className="col-span-1 bg-blue-900 text-white p-4 rounded-2xl shadow-md">
      <div className="flex flex-col items-center mb-8">
        <img className="w-50 h-50 rounded-3xl" src={Foto} alt="Pfofil"></img>
      </div>
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">📌 КОНТАКТЫ</h2>
        <ul className="space-y-2 text-sm">
          <li>📱 +996 706 016-864</li>
          <li>✉️ dosantodoni@gmail.com</li>
        </ul>
      </div>
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">📌 ЯЗЫКИ</h2>
        <p>Английский</p>
        <p>⚪⚫⚫⚫⚫ (C1 - Продвинутый)</p>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">📌 НАВЫКИ</h2>
        <ul className="text-sm space-y-1">
          <li>Javascript - Начальный</li>
          <li>GitHub - Начальный</li>
          <li>Bootstrap - Базовый</li>
          <li>Css - Базовый</li>
          <li>Html - Базовый</li>
          <li>React - Начальный</li>
          <li>Tailwindcss - Базовый</li>
        </ul>
      </div>
    </aside>
  );
}
