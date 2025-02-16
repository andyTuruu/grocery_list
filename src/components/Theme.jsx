import { useState, useEffect } from "react";

export default function Theme({ theme, setTheme }) {
  const [themeMode, setThemeMode] = useState("automatic");
  useEffect(() => {
    if (themeMode === "automatic") {
      const updateThemeBasedOnTime = () => {
        const hour = new Date().getHours();
        setTheme(hour >= 18 || hour < 6 ? "night" : "day");
      };
      updateThemeBasedOnTime();
      const intervalId = setInterval(updateThemeBasedOnTime, 60000);
      return () => clearInterval(intervalId);
    } else {
      setTheme(themeMode);
    }
  }, [themeMode, setTheme]);
  const handleThemeChange = (e) => {
    setThemeMode(e.target.value);
  };
  return (
    <>
      <div className="theme-selector">
        <label htmlFor="theme-select">Theme: </label>
        <select
          id="theme-select"
          value={themeMode}
          onChange={handleThemeChange}
        >
          <option value="day">Day</option>
          <option value="night">Night</option>
          <option value="automatic">Automatic</option>
        </select>
      </div>
    </>
  );
}
