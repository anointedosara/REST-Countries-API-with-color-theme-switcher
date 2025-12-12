"use client"
import React, { useState } from 'react'

function ThemeButton() {
  const [isDark, setIsDark] = useState('')
  function toggleTheme() {
    const html = document.documentElement;
    setIsDark(html.classList.toggle("dark"))
  }

  return (
    <button onClick={toggleTheme} className="text-gray-950 text-[14px] md:text-[18px] font-medium dark:text-white" >
      {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}

export default ThemeButton