/* src/components/Navigator.tsx */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigator.css';

const Navigator: React.FC = () => {
  const [scrollingDown, setScrollingDown] = useState<boolean>(false);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setScrollingDown(prevScrollPos < currentScrollPos);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div className={`navbar-container ${scrollingDown ? 'scroll-up' : 'scroll-down'}`}>
      <div className="background">
        <div className="content">
            <div className="left-side">
            <Link to="/Home" className="site-name">
                ARTEMIS
            </Link>
            </div>
            <div className="right-side">
            <p>
                <Link to="/Home" className="nav-op">Home</Link>
                <div className="nav-sep">|</div>
                <Link to="/About" className="nav-op">About</Link>
                <div className="nav-sep">|</div>
                <Link to="/Model" className="nav-op">Model</Link>
            </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navigator;
