import { Card, CardBody, CardHeader } from "@heroui/react";
import styles from "./index.module.scss";

interface CardData {
  title: string;
  content: string[];
}

interface CardGroupProps {
  cards: CardData[];
  className?: string;
}

const CardGroup: React.FC<CardGroupProps> = ({ cards, className = "" }) => {
  return (
    <Card isBlurred className={`${styles.card_container} ${className}`}>
      {cards.map((card, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.card_bar}></div>
          <div className={styles.card_content}>
            <div className={styles.card_title}>{card.title}</div>
            <div>
              {card.content.map((line, lineIndex) => (
                <span key={lineIndex}>
                  {line}
                  {lineIndex < card.content.length - 1 && <br />}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </Card>
  );
};

export default CardGroup;
