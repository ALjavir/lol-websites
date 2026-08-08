import "./divider-style.css";
interface DividerProps {
    icon: string;
    text: string;
}

export default function Divider({ icon, text }: DividerProps) {
    return (
        <div className="divider-container">
            <div className="divider-icon">
                <img style={{
      width: text == "CATEGORY" ? 'auto' : '36px',
      height: text == "CATEGORY" ? 'auto' : '36px',
      objectFit: 'contain'
    }} src={icon} alt="" />
            </div>


            <div className="divider-text-line">
                <div className="divider-line" />
                <h2 className="divider-text">{text}</h2>
                <div className="divider-line" />
            </div>
        </div>
    );
}