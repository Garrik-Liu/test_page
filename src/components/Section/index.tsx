import React, { memo } from "react";
import classNames from "classnames";
import styles from "./index.module.scss";

interface IProps {
  backgroundVideo?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  title?: string;
  height?: string;
  className?: string;
  children?: React.ReactNode;
}

const Section: React.FC<IProps> = (props) => {
  const {
    backgroundVideo,
    backgroundImage,
    backgroundColor,
    title,
    className,
    children,
    height,
  } = props;

  return (
    <div className={classNames(styles.section, className)} style={{ height }}>
      {/* 背景视频 */}
      {backgroundVideo && (
        <video
          className={styles.video_bg}
          crossOrigin="anonymous"
          preload="auto"
          src={backgroundVideo}
          playsInline
          loop
          autoPlay
          muted
        />
      )}

      {/* 背景图片 */}
      {backgroundImage && (
        <div
          className={styles.background_image}
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundColor,
          }}
        />
      )}

      <div className={styles.section_container}>
        {/* 标题 */}
        {title && <h2 className={styles.section_title}>{title}</h2>}

        {/* 内容 */}
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default memo(Section);
