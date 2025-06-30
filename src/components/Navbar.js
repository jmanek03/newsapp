import React from 'react'
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/business", label: "Business" },
  { to: "/technology", label: "Technology" },
  { to: "/entertainment", label: "Entertainment" },
  { to: "/sports", label: "Sports" },
  { to: "/science", label: "Science" },
  { to: "/health", label: "Health" }
];

const NavBar=()=>{
  const location = useLocation();

    return (
      <nav className="news-navbar">
      <div className="news-navbar-inner">
        <span className="news-navbar-brand">NewsApp</span>
        <ul className="news-navbar-list">
          {navItems.map((item, idx) => (
            <li key={item.to} className="news-navbar-item">
              <Link
                to={item.to}
                className={
                  "news-navbar-link" +
                  (location.pathname === item.to ? " active" : "")
                }
              >
                {item.label}
              </Link>
              {/* Divider after certain items for grouping */}
              {(item.label === "News Showcase" || item.label === "Local") && (
                <span className="news-navbar-divider" />
              )}
            </li>
          ))}
        </ul>
      </div>
      <style>{`
        .news-navbar {
          background:rgb(255, 255, 255);
          border-bottom: 1.5px solid #23272b;
          box-shadow: 0 2px 8px rgba(30,34,40,0.06);
          padding: 0;
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .news-navbar-inner {
          display: flex;
          align-items: center;
          max-width: 100vw;
          padding: 0 32px;
          height: 56px;
        }
        .news-navbar-brand {
          color: #1a73e8;
          font-weight: 700;
          font-size: 1.5rem;
          font-family: 'Roboto', Arial, sans-serif;
          margin-right: 36px;
          letter-spacing: 1px;
        }
        .news-navbar-list {
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 0;
          padding: 0;
          list-style: none;
          overflow-x: auto;
        }
        .news-navbar-item {
          position: relative;
          display: flex;
          align-items: center;
        }
        .news-navbar-link {
          display: block;
          color:rgb(0, 0, 0);
          font-weight: 500;
          font-size: 1.08rem;
          padding: 0 18px;
          height: 56px;
          line-height: 56px;
          text-decoration: none;
          transition: color 0.18s;
          border-bottom: 2.5px solid transparent;
        }
        .news-navbar-link:hover,
        .news-navbar-link.active {
          color: #8ab4f8;
        }
        .news-navbar-link.active {
          border-bottom: 2.5px solid #8ab4f8;
          font-weight: 700;
          background: none;
        }
        .news-navbar-divider {
          width: 1px;
          height: 24px;
          background: #23272b;
          margin: 0 12px;
        }
        @media (max-width: 900px) {
          .news-navbar-inner {
            padding: 0 8px;
          }
          .news-navbar-brand {
            font-size: 1.1rem;
            margin-right: 16px;
          }
          .news-navbar-link {
            font-size: 0.98rem;
            padding: 0 10px;
          }
        }
      `}</style>
    </nav>
    )
  }


export default NavBar
