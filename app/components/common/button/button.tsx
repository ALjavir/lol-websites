import "./button-style.css";

interface ButtonBlueProps {
  link: string;
  text: string;
  fontSize?: number;
}

export function ButtonBlue({
  link,
  text,
  fontSize, 
}: ButtonBlueProps) {
  return (
    <a
      style={{ fontSize: `${fontSize}rem` }}
      className="blue-btn"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
}

interface ButtonGoldProps {
    link: string;
    text: string;
}


export  function ButtonGold({ link, text }: ButtonGoldProps) {
    return (
        <a
          className="gold-btn"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {text}
        </a>
    );
}
