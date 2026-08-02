import "./button-style.css";

interface ButtonBlueProps {
  link: string;
  text: string;
  showBig: boolean;
}

export default function ButtonBlue({
  link,
  text,
  showBig,
}: ButtonBlueProps) {
  return (
    <a
      className={`ButtonBlue-btn ${showBig ? "ButtonBlue-btn-big" : ""}`}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
}
