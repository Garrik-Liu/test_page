import React from "react";
import "./Header.scss";

const Header: React.FC = () => {
  const navigationItems = [
    "产品中心",
    "视觉应用",
    "视频中心",
    "下载中心",
    "AI 学社",
    "新闻中心",
    "关于我们",
  ];

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__nav">
          {/* Logo Section */}
          <div className="header__logo">
            <div className="header__logo-container">
              {/* 3D Printing Icon */}
              <div className="header__logo-icon"></div>

              <div className="header__logo-text">
                <h1>自动化智能</h1>
                <p>这是一个自动化智能网站</p>
              </div>
            </div>
          </div>

          <div className="header__right">
            {/* Navigation Menu */}
            <nav className="header__navigation">
              <div className="header__navigation-list curly-container">
                {navigationItems.map((item) => (
                  <a key={item} href="#" className="header__navigation-item">
                    {item}
                  </a>
                ))}
              </div>
            </nav>

            {/* Get a Quote Button */}
            <div>
              <button className="header__quote-button curly-container">联系我们</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
