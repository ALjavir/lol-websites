import "./button-style.css";

interface ButtonBlueProps {
  link: string;
  text: string;
 
}

export function ButtonBlue({
  link,
  text,

}: ButtonBlueProps) {
  return (
    <a
      className={`ButtonBlue-btn`}
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
          className="ButtonGold-btn"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {text}
        </a>
    );
}
