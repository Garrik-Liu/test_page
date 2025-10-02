import React from "react";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@heroui/react";
import classNames from "classnames";
import styles from "./index.module.scss";

interface IProps {
  className?: string;
}

const Header: React.FC<IProps> = ({ className = "" }) => {
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
    <Navbar
      className={classNames(styles.navigation, className)}
      maxWidth="full"
      shouldHideOnScroll
      isBlurred={false}
    >
      <NavbarBrand>
        <div className={styles.logo_text}>
          <h1>自动化智能</h1>
          <p>这是一个自动化智能网站</p>
        </div>
      </NavbarBrand>

      <NavbarContent
        className={classNames(styles.navigation_list, "curly_container")}
        justify="center"
      >
        {navigationItems.map((item) => (
          <NavbarItem key={item} className={styles.navigation_item}>
            <Link href="#" className={styles.navigation_item}>
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <Button className="main_btn" color="primary" radius="full" size="lg">
        联系我们
      </Button>
    </Navbar>
  );
};

export default Header;
