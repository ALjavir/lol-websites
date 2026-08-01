import "./button-style.css";
interface ButtonBlueProps {
    link: string;
    text: string;
}


export default function ButtonBlue({ link, text }: ButtonBlueProps) {
    return (
        <a
          className="ButtonBlue-btn"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {text}
        </a>
    );
}