import"./button-style.css"

interface ButtonGoldProps {
    link: string;
    text: string;
}


export default function ButtonGold({ link, text }: ButtonGoldProps) {
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
