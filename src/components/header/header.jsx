import React, { useEffect, useState } from 'react';
import "./header.css";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") || "dark"
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("currentMode", newTheme);
    setTheme(newTheme);  // Set the new theme directly
  };

  return (
    <header className='flex'>
      <div>
        <button onClick={() => setShowModal(true)} className='menu icon-menu'></button>
      </div>
      <nav>
        <ul className='flex'>
          <li><a href="#about">About</a></li>
          <li><a href="https://www.linkedin.com/in/yamina-ghobni/">LinkedIn</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#speaking">Speaking</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <button onClick={toggleTheme} className='mode flex'>
       
        {theme === 'dark' ? (
          <span className='icon-moon-o'></span>
        ): (
           <span className='icon-brightness-up'></span>
        )}
      </button>

      {showModal && (
        <div className='fixed'>
          <ul className='modal'>
            <li>
              <button className="icon-close" onClick={() => setShowModal(false)} />
            </li>
            <li><a href="#about">About</a></li>
          <li><a href="https://www.linkedin.com/in/yamina-ghobni/">LinkedIn</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#speaking">Speaking</a></li>
          <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
