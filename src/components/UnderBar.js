import React, { useState } from 'react';
import './UnderBar.css';
import { Link } from "react-router-dom";

function UnderBar() {
  // 활성 링크 상태를 저장하는 state
  const [activeNav, setActiveNav] = useState(0);

  return (
    <nav className="under-bar">
      <div>
        <Link to="/" className={activeNav === 1 ? "nav-link active" : "nav-link"} onClick={() => setActiveNav(1)}>
          <i className="fa-solid fa-house"></i>
        </Link>
      </div>
      <div>
        <Link to="/workout" className={activeNav === 2 ? "nav-link active" : "nav-link"} onClick={() => setActiveNav(2)}>
          <i className="fa-solid fa-dumbbell"></i>
        </Link>
      </div>
      <div>
        <Link to="/record" className={activeNav === 3 ? "nav-link active" : "nav-link"} onClick={() => setActiveNav(3)}>
          <i className="fa-regular fa-file"></i>
        </Link>
      </div>
      <div>
        <Link to="/routine" className={activeNav === 4 ? "nav-link active" : "nav-link"} onClick={() => setActiveNav(4)}>
          <i className="fa-solid fa-repeat"></i>
        </Link>
      </div>
    </nav>
  );
}

export default UnderBar;
