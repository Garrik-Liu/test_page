import React from "react";
import styles from "./Header.module.scss";
import classNames from "classnames";
import { Button } from "@heroui/react";

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
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.nav}>
          {/* Logo Section */}
          <div className={styles.logo}>
            <div className={styles.logo_container}>
              {/* 3D Printing Icon */}
              <div className={styles.logo_icon}></div>

              <div className={styles.logo_text}>
                <h1>自动化智能</h1>
                <p>这是一个自动化智能网站</p>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            {/* Navigation Menu */}
            <nav className={styles.navigation}>
              <div
                className={classNames(
                  styles.navigation_list,
                  "curly_container"
                )}
              >
                {navigationItems.map((item) => (
                  <a key={item} href="#" className={styles.navigation_item}>
                    {item}
                  </a>
                ))}
              </div>
            </nav>

            <Button
              className="main_btn"
              color="primary"
              radius="full"
              size="lg"
            >
              联系我们
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
